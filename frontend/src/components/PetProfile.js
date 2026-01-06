import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosWithAuth from "../AxiosAuth";
import EditPetModal from "./EditPetModal";
import AddAnamnesisModal from "./AddAnamnesisModal";
import AddHealthUpdateModal from "./AddHealthUpdateModal";
import PetInfo from "./PetInfo";
import HealthUpdateDetailsModal from "./HealthUpdateDetailsModal";
import Header from "./Header";
import AnamnesisTable from "./AnamnesisTable";
import HealthUpdatesTable from "./HealthUpdatesTable";
import ProcedureTimeline from "./ProcedureTimeline";
import TreatmentRecommendations from "./TreatmentRecommendations";

const PetProfilePage = () => {
    const { petId } = useParams();
    const axiosInstance = useAxiosWithAuth();
    const [petInfo, setPetInfo] = useState(null);
    const [anamneses, setAnamneses] = useState([]);
    const [healthUpdates, setHealthUpdates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isAddAnamnesisModalOpen, setIsAddAnamnesisModalOpen] = useState(false);
    const [isAddHealthUpdateModalOpen, setIsAddHealthUpdateModalOpen] = useState(false);
    const [isHealthUpdateDetailsModalOpen, setIsHealthUpdateDetailsModalOpen] = useState(false);
    const [selectedHealthUpdateId, setSelectedHealthUpdateId] = useState(null);
    const [upcomingAppointments, setUpcomingAppointments] = useState([]);
    const [treatments, setTreatments] = useState([]);
    const [userRole, setUserRole] = useState("");
    const [isChangeSlotModalOpen, setIsChangeSlotModalOpen] = useState(false);
    const [selectedAppointment, setSelectedAppointment] = useState(null);
    const [availableSlots, setAvailableSlots] = useState([]);
    const [newSlotId, setNewSlotId] = useState(null);
    const [procedures, setProcedures] = useState([]);

    const fetchData = async () => {
        setLoading(true);
        setError(null);

        try {
            const petResponse = await axiosInstance.get(`/pets/pet/${petId}`);
            setPetInfo(petResponse.data);

            const anamnesesResponse = await axiosInstance.get(`/anamnesis/all-by-patient/${petId}`);
            setAnamneses(anamnesesResponse.data);

            const healthUpdatesResponse = await axiosInstance.get(`/health/all/${petId}`);
            setHealthUpdates(healthUpdatesResponse.data);

            const appointmentsResponse = await axiosInstance.get(`/appointments/upcoming-pet/${petId}`);
            const appointmentsWithDetails = await Promise.all(
                appointmentsResponse.data.map(async (appointment) => {
                    const slotResponse = await axiosInstance.get(`/slots/${appointment.slotId}`);
                    const slotData = slotResponse.data;

                    const vetResponse = await axiosInstance.get(`/users/user-info/${slotData.vetId}`);
                    const vetName = `${vetResponse.data.name} ${vetResponse.data.surname}`;

                    return {
                        ...appointment,
                        slot: {
                            ...slotData,
                            vetName,
                        },
                    };
                })
            );
            setUpcomingAppointments(appointmentsWithDetails);

            const treatmentsResponse = await axiosInstance.get(`/treatments/actual-by-pet/${petId}`);
            setTreatments(treatmentsResponse.data);

            const proceduresResponse = await axiosInstance.get(`/procedures/all-by-pet/${petId}`);
            setProcedures(proceduresResponse.data);

            const userResponse = await axiosInstance.get("/users/current-user-info");
            setUserRole(userResponse.data.role);
        } catch (error) {
            console.error("Error fetching data:", error);
            setError("Failed to fetch data. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [petId, axiosInstance]);

    const handleSavePet = async (updatedData) => {
        try {
            await axiosInstance.put(`/pets/update-pet/${petId}`, updatedData);
            setIsEditModalOpen(false);
            fetchData();
        } catch (error) {
            console.error("Error updating pet info:", error);
        }
    };

    const handleSaveAnamnesis = async (anamnesisData) => {
        try {
            await axiosInstance.post("/anamnesis/save", {
                ...anamnesisData,
                pet: petId,
                appointment: anamnesisData.appointment,
            });
            setIsAddAnamnesisModalOpen(false);
            fetchData();
        } catch (error) {
            console.error("Error saving anamnesis:", error);
        }
    };

    const handleSaveHealthUpdate = async (healthUpdateData) => {
        try {
            await axiosInstance.post("/health/save", healthUpdateData);
            setIsAddHealthUpdateModalOpen(false);
            fetchData();
        } catch (error) {
            console.error("Error saving health update:", error);
        }
    };

    const handleViewHealthUpdateDetails = (id) => {
        setSelectedHealthUpdateId(id);
        setIsHealthUpdateDetailsModalOpen(true);
    };

    const openChangeSlotModal = (appointment) => {
        setSelectedAppointment(appointment);
        fetchAvailableSlots();
        setIsChangeSlotModalOpen(true);
    };

    const closeChangeSlotModal = () => {
        setIsChangeSlotModalOpen(false);
        setSelectedAppointment(null);
        setAvailableSlots([]);
        setNewSlotId(null);
    };

    const fetchAvailableSlots = async () => {
        try {
            const response = await axiosInstance.get("/slots/available-priority-slots");
            setAvailableSlots(response.data);
        } catch (error) {
            console.error("Error fetching available slots:", error);
        }
    };

    const handleChangeSlot = async () => {
        if (!newSlotId) {
            return;
        }

        try {
            await axiosInstance.put(`/slots/book-slot/${newSlotId}`);
            await axiosInstance.put(`/slots/release-slot/${selectedAppointment.slotId}`);
            await axiosInstance.put(`/appointments/update-appointment/${selectedAppointment.id}`, null, {
                params: { slotId: newSlotId },
            });
            closeChangeSlotModal();
            fetchData();
        } catch (error) {
            console.error("Error changing slot:", error);
        }
    };

    const handleDownloadReport = async (procedureId) => {
        try {
            const response = await axiosInstance.get(`/procedures/report/${procedureId}`);
            window.open(response.data, "_blank");
        } catch (error) {
            console.error("Error downloading report:", error);
        }
    };

    if (loading) {
        return <div className="loading-overlay">Loading...</div>;
    }

    if (error) {
        return <div className="error-overlay">{error}</div>;
    }

    if (!petInfo) {
        return <div>No pet information found.</div>;
    }

    return (
        <div>
            <Header />
            <div className="container mt-2" style={{ display: "flex", gap: "100px", paddingTop: "100px" }}>
                <div className="ps-3">
                    <PetInfo petInfo={petInfo} onEdit={() => setIsEditModalOpen(true)} />

                    <div className="bg-treatment container mt-3 rounded-1 upcoming-appointments" style={{ padding: "20px" }}>
                        <h4>Upcoming Appointments</h4>
                        {upcomingAppointments.length > 0 ? (
                            <table cellPadding="3" cellSpacing="0">
                                <tbody>
                                {upcomingAppointments.map((appointment) => (
                                    <tr key={appointment.id}>
                                        <td>{new Date(appointment.slot.date).toLocaleDateString()}</td>
                                        <td>{appointment.slot.startTime.slice(0, 5)}</td>
                                        <td>-</td>
                                        <td>Dr. {appointment.slot.vetName}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        ) : (
                            <p>No upcoming appointments found.</p>
                        )}
                    </div>
                </div>

                <div style={{ flex: 1 }}>
                    <AnamnesisTable
                        anamneses={anamneses}
                        userRole={userRole}
                        onAddAnamnesis={() => setIsAddAnamnesisModalOpen(true)}
                    />

                    <HealthUpdatesTable
                        healthUpdates={healthUpdates}
                        onViewDetails={handleViewHealthUpdateDetails}
                        onAddHealthUpdate={() => setIsAddHealthUpdateModalOpen(true)}
                    />

                    <ProcedureTimeline
                        procedures={procedures}
                        onDownloadReport={handleDownloadReport}
                    />
                </div>

                <TreatmentRecommendations treatments={treatments} />

                {isEditModalOpen && (
                    <EditPetModal
                        petInfo={petInfo}
                        onClose={() => setIsEditModalOpen(false)}
                        onSave={handleSavePet}
                    />
                )}

                {isAddAnamnesisModalOpen && (
                    <AddAnamnesisModal
                        petId={petId}
                        onClose={() => setIsAddAnamnesisModalOpen(false)}
                        onSave={handleSaveAnamnesis}
                    />
                )}

                {isAddHealthUpdateModalOpen && (
                    <AddHealthUpdateModal
                        petId={petId}
                        onClose={() => setIsAddHealthUpdateModalOpen(false)}
                        onSave={handleSaveHealthUpdate}
                    />
                )}

                {isHealthUpdateDetailsModalOpen && (
                    <HealthUpdateDetailsModal
                        id={selectedHealthUpdateId}
                        onClose={() => setIsHealthUpdateDetailsModalOpen(false)}
                    />
                )}

                {isChangeSlotModalOpen && (
                    <div style={modalOverlayStyles}>
                        <div style={modalStyles} onClick={(e) => e.stopPropagation()}>
                            <h3>Change Appointment Slot</h3>
                            {availableSlots.length > 0 ? (
                                <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                                    {availableSlots.map((slot) => (
                                        <div key={slot.id} style={{ marginBottom: "10px" }}>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="newSlot"
                                                    value={slot.id}
                                                    checked={newSlotId === slot.id}
                                                    onChange={() => setNewSlotId(slot.id)}
                                                />
                                                {new Date(slot.date).toLocaleDateString()} {slot.startTime} - {slot.endTime}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p>No available priority slots found.</p>
                            )}
                            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                                <button onClick={handleChangeSlot} disabled={!newSlotId}>
                                    Confirm Change
                                </button>
                                <button onClick={closeChangeSlotModal}>Cancel</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const modalOverlayStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
};

const modalStyles = {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    maxWidth: "500px",
    width: "90%",
    maxHeight: "80vh",
    overflowY: "auto",
};

export default PetProfilePage;