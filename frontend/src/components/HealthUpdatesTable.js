import React from "react";

const HealthUpdatesTable = ({ healthUpdates, onViewDetails, onAddHealthUpdate }) => {
    return (
        <>
            <h2 style={{ marginTop: "30px" }}>Health Updates</h2>
            <div className="bg-table">
                {healthUpdates.length > 0 ? (
                    <table cellPadding="5" cellSpacing="0" className="uniq-table">
                        <tbody>
                        {healthUpdates.map((update) => (
                            <tr key={update.id}>
                                <td>{new Date(update.date).toLocaleDateString()}</td>
                                <td>{update.dynamics ? "positive" : "negative"} dynamic</td>
                                <td>
                                    <button
                                        className="button btn-no-border"
                                        onClick={() => onViewDetails(update.id)}
                                    >
                                        More info
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No health updates found.</p>
                )}
                <button
                    className="button rounded-3 btn-no-border"
                    onClick={onAddHealthUpdate}
                >
                    Add Health Update
                </button>
            </div>
        </>
    );
};

export default HealthUpdatesTable;
