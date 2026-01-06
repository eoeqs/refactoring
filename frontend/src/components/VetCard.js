import React from "react";
import PawStub from "../pics/paw.png";

const VetCard = ({ vet, averageRating, review, onLeaveReview, onSeeAllReviews }) => {
    const renderStars = (rating) => {
        const stars = Math.round(rating);
        return "⭐".repeat(stars) + "✯".repeat(5 - stars);
    };

    return (
        <div style={{
            marginBottom: "20px",
            padding: '10px',
            textAlign: 'center'
        }}>
            {vet.photoUrl ? (
                <img
                    className="avatar"
                    src={vet.photoUrl}
                    alt={`${vet.name}'s avatar`}
                    style={{
                        width: "200px",
                        height: "200px",
                        borderRadius: "50%"
                    }}
                />
            ) : (
                <img
                    className="avatar"
                    src={PawStub}
                    alt={`photo stub`}
                    style={{
                        width: "200px",
                        height: "200px",
                        borderRadius: "50%"
                    }}
                />
            )}
            <h3 style={{marginTop: "15px"}}>Dr. {vet.name} {vet.surname}</h3>
            <h6>{vet.qualification || "Expert in Veterinary Medicine"}</h6>
            <div style={{margin: '5px 0'}}>
                <p style={{marginBottom: "5px"}}>
                    {renderStars(averageRating)} ({averageRating})
                </p>
            </div>
            <p style={{marginBottom: "5px"}}>
                <strong>Latest Review:</strong> "{review}"
            </p>
            <div style={{
                display: "flex",
                gap: "10px",
                justifyContent: 'center'
            }}>
                <button
                    className="button btn-no-border rounded-3"
                    onClick={onLeaveReview}
                >
                    Leave a Review
                </button>
                <button
                    className="button btn-no-border rounded-3"
                    onClick={onSeeAllReviews}
                >
                    See all Reviews
                </button>
            </div>
        </div>
    );
};

export default VetCard;
