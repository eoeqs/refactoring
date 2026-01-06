package org.fergoeqs.coursework.dto;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "DTO лечения")
public record TreatmentDTO(
        @Schema(description = "ID лечения", example = "1")
        Long id,
        @Schema(description = "Название лечения", example = "Антибактериальная терапия")
        String name,
        @Schema(description = "Описание", example = "Курс антибиотиков")
        String description,
        @Schema(description = "Назначенные лекарства", example = "Амоксициллин 250мг")
        String prescribedMedication,
        @Schema(description = "Длительность", example = "7 дней")
        String duration,
        @Schema(description = "ID диагноза", example = "1")
        Long diagnosis,
        @Schema(description = "ID питомца", example = "1")
        Long pet,
        @Schema(description = "Завершено ли лечение", example = "false")
        Boolean isCompleted
) { }
