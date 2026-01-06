package org.fergoeqs.coursework.dto;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "DTO рейтинга и отзыва")
public record RatingAndReviewsDTO(
        @Schema(description = "ID отзыва", example = "1")
        Long id,
        @Schema(description = "Рейтинг (1-5)", example = "5")
        Integer rating,
        @Schema(description = "Текст отзыва", example = "Отличный ветеринар!")
        String review,
        @Schema(description = "ID ветеринара", example = "1")
        Long vet,
        @Schema(description = "ID владельца", example = "1")
        Long owner
){}
