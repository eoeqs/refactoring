import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import VetCard from "./VetCard";

const VetCarousel = ({ vets, vetRatings, onLeaveReview, onSeeAllReviews }) => {
    const getAverageRating = (ratings) => {
        if (!ratings || ratings.length === 0) return 0;
        const total = ratings.reduce((sum, rating) => sum + rating.rating, 0);
        return (total / ratings.length).toFixed(1);
    };

    if (vets.length === 0) {
        return <p>No veterinarians found.</p>;
    }

    return (
        <div style={{padding: '0 20px'}}>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                breakpoints={{
                    320: {slidesPerView: 1},
                    768: {slidesPerView: 2},
                    1024: {slidesPerView: 4},
                }}
            >
                {vets.map((vet) => {
                    const ratings = vetRatings[vet.id] || [];
                    const averageRating = getAverageRating(ratings);
                    const review = ratings.length > 0 ? ratings[ratings.length - 1].review : "No reviews yet";

                    return (
                        <SwiperSlide key={vet.id}>
                            <VetCard
                                vet={vet}
                                averageRating={averageRating}
                                review={review}
                                onLeaveReview={() => onLeaveReview(vet.id, `${vet.name} ${vet.surname}`)}
                                onSeeAllReviews={() => onSeeAllReviews(vet)}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default VetCarousel;
