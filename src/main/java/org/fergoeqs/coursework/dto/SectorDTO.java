package org.fergoeqs.coursework.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import org.fergoeqs.coursework.models.enums.CategoryType;

@Schema(description = "DTO сектора")
public record SectorDTO(
        @Schema(description = "ID сектора", example = "1")
        Long id,
        @Schema(description = "Категория сектора", example = "DANGEROUS")
        CategoryType category,
        @Schema(description = "Вместимость", example = "10")
        Integer capacity,
        @Schema(description = "Текущая занятость", example = "5")
        Integer occupancy,
        @Schema(description = "Доступен ли сектор", example = "true")
        Boolean isAvailable
) {}
