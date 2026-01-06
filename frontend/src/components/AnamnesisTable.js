import React from "react";
import { useNavigate } from "react-router-dom";

const AnamnesisTable = ({ anamneses, userRole, onAddAnamnesis }) => {
    const navigate = useNavigate();

    return (
        <>
            <h2>Anamneses</h2>
            <div className="bg-table element-space">
                {anamneses.length > 0 ? (
                    <table cellPadding="5" cellSpacing="0" className="uniq-table">
                        <tbody>
                        {anamneses.map((anamnesis) => (
                            <tr key={anamnesis.id}>
                                <td>{new Date(anamnesis.date).toLocaleDateString()}</td>
                                <td>{anamnesis.description}</td>
                                <td>
                                    <button
                                        className="button btn-no-border"
                                        onClick={() => navigate(`/anamnesis/${anamnesis.id}`)}
                                    >
                                        More info
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No anamneses found.</p>
                )}
                {userRole === "ROLE_VET" && (
                    <button
                        className="button rounded-3 btn-no-border"
                        onClick={onAddAnamnesis}
                    >
                        Add New Anamnesis
                    </button>
                )}
            </div>
        </>
    );
};

export default AnamnesisTable;
