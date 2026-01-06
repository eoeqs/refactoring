import React from "react";

const ProcedureTimeline = ({ procedures, onDownloadReport }) => {
    const getProcedureColor = (type) => {
        switch (type) {
            case "DIAGNOSIS":
                return "#FF6B6B";
            case "TREATMENT":
                return "#4ECDC4";
            case "EXAMINATION":
                return "#45B7D1";
            case "PROCEDURE":
                return "#96CEB4";
            case "SURGERY":
                return "#FFEEAD";
            default:
                return "#D3D3D3";
        }
    };

    return (
        <>
            <h2 style={{ marginTop: "30px" }}>Procedure Timeline</h2>
            <div className="bg-table element-space" style={{ padding: "20px" }}>
                {procedures.length > 0 ? (
                    <>
                        <div style={{ position: "relative", height: "100px", overflowX: "auto", padding: "0 40px" }}>
                            <div
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "20px",
                                    right: "20px",
                                    height: "2px",
                                    backgroundColor: "#000",
                                }}
                            />
                            {procedures
                                .sort((a, b) => new Date(a.date) - new Date(b.date))
                                .map((procedure, index) => {
                                    const date = new Date(procedure.date);
                                    const totalProcedures = procedures.length;
                                    const marginPercentage = 10;
                                    const adjustedPosition =
                                        totalProcedures > 1
                                            ? `${marginPercentage + (index / (totalProcedures - 1)) * (100 - 2 * marginPercentage)}%`
                                            : "50%";
                                    return (
                                        <div
                                            key={procedure.id}
                                            style={{
                                                position: "absolute",
                                                left: adjustedPosition,
                                                top: "50%",
                                                transform: "translate(-50%, -50%)",
                                                width: "20px",
                                                height: "20px",
                                                backgroundColor: getProcedureColor(procedure.type),
                                                borderRadius: "50%",
                                                cursor: "pointer",
                                            }}
                                            title={`${procedure.name} (${date.toLocaleDateString()})`}
                                            onClick={() => onDownloadReport(procedure.id)}
                                        >
                                            <span
                                                style={{
                                                    position: "absolute",
                                                    top: "-25px",
                                                    left: "50%",
                                                    transform: "translateX(-50%)",
                                                    fontSize: "12px",
                                                    whiteSpace: "nowrap",
                                                }}
                                            >
                                                {date.toLocaleDateString()}
                                            </span>
                                        </div>
                                    );
                                })}
                        </div>
                        <div style={{ marginTop: "20px" }}>
                            <h4>Legend</h4>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <div
                                        style={{
                                            width: "15px",
                                            height: "15px",
                                            backgroundColor: "#FF6B6B",
                                            borderRadius: "50%",
                                            marginRight: "5px",
                                        }}
                                    />
                                    <span>Diagnosis</span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <div
                                        style={{
                                            width: "15px",
                                            height: "15px",
                                            backgroundColor: "#4ECDC4",
                                            borderRadius: "50%",
                                            marginRight: "5px",
                                        }}
                                    />
                                    <span>Treatment</span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <div
                                        style={{
                                            width: "15px",
                                            height: "15px",
                                            backgroundColor: "#45B7D1",
                                            borderRadius: "50%",
                                            marginRight: "5px",
                                        }}
                                    />
                                    <span>Examination</span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <div
                                        style={{
                                            width: "15px",
                                            height: "15px",
                                            backgroundColor: "#96CEB4",
                                            borderRadius: "50%",
                                            marginRight: "5px",
                                        }}
                                    />
                                    <span>Procedure</span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <div
                                        style={{
                                            width: "15px",
                                            height: "15px",
                                            backgroundColor: "#9c1212",
                                            borderRadius: "50%",
                                            marginRight: "5px",
                                        }}
                                    />
                                    <span>Surgery</span>
                                </div>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <div
                                        style={{
                                            width: "15px",
                                            height: "15px",
                                            backgroundColor: "#D3D3D3",
                                            borderRadius: "50%",
                                            marginRight: "5px",
                                        }}
                                    />
                                    <span>Other</span>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <p>No procedures found.</p>
                )}
            </div>
        </>
    );
};

export default ProcedureTimeline;
