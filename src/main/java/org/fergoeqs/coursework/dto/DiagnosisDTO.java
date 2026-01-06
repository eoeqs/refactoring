package org.fergoeqs.coursework.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import org.fergoeqs.coursework.models.enums.BodyPart;

import java.time.LocalDateTime;
import java.util.List;

@Schema(description = "DTO диагноза")
public record DiagnosisDTO(
        @Schema(description = "ID диагноза", example = "1")
        Long id,
        @Schema(description = "Название диагноза", example = "Острый бронхит")
        String name,
        @Schema(description = "Описание", example = "Воспаление бронхов")
        String description,
        @Schema(description = "Дата постановки диагноза", example = "2024-01-15T10:30:00")
        LocalDateTime date,
        @Schema(description = "Заразное заболевание", example = "true")
        Boolean contagious,
        @Schema(description = "План обследования", example = "Рентген, анализ крови")
        String examinationPlan,
        @Schema(description = "ID анамнеза", example = "1")
        Long anamnesis,
        @Schema(description = "Часть тела", example = "CHEST")
        BodyPart bodyPart,
        @Schema(description = "Список ID симптомов")
        List<Long> symptoms
) {
}
