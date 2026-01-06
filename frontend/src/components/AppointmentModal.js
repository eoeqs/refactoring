import React from "react";
import AppointmentPage from "./AppointmentPage";

const AppointmentModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div
            style={{
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
            }}
        >
            <div
                style={{
                    backgroundColor: "white",
                    padding: "20px",
                    borderRadius: "8px",
                    width: "80%",
                    maxWidth: "800px",
                    maxHeight: "80vh",
                    overflowY: "auto",
                    position: "relative",
                }}
            >
                <button
                    onClick={onClose}
                    style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        border: "none",
                        background: "transparent",
                        fontSize: "20px",
                        cursor: "pointer",
                    }}
                >
                    ✕
                </button>
                <AppointmentPage onClose={onClose} />
            </div>
        </div>
    );
};

export default AppointmentModal;
