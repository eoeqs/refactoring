package org.fergoeqs.coursework.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import java.time.LocalDate;

@Schema(description = "DTO анамнеза")
public record AnamnesisDTO(
        @Schema(description = "ID анамнеза", example = "1")
        Long id,
        @Schema(description = "Название", example = "Плановый осмотр")
        String name,
        @Schema(description = "Описание", example = "Общее состояние удовлетворительное")
        String description,
        @Schema(description = "Дата", example = "2024-01-15")
        LocalDate date,
        @Schema(description = "ID питомца", example = "1")
        Long pet,
        @Schema(description = "ID записи", example = "1")
        Long appointment
) {
}
