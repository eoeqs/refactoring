import React from "react";

const TreatmentRecommendations = ({ treatments }) => {
    return (
        <div className="bg-treatment mt-1 rounded-1" style={{ padding: "20px" }}>
            <h4>Treatment Recommendations</h4>
            {treatments.length > 0 ? (
                <table cellPadding="3" cellSpacing="0" className="uniq-table">
                    <tbody>
                    {treatments.map((treatment) => (
                        <tr key={treatment.id}>
                            <td>
                                <b>Treatment</b>: {treatment.name || "not specified"} <br />
                                <b>Description</b>: {treatment.description || "not specified"} <br />
                                <b>Prescribed Medication</b>: {treatment.prescribedMedication || "not specified"} <br />
                                <b>Duration</b>: {treatment.duration || "not specified" } <br />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <p>No treatment recommendations found.</p>
            )}
        </div>
    );
};

export default TreatmentRecommendations;
