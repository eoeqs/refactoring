package org.fergoeqs.coursework.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import org.fergoeqs.coursework.models.enums.BodyPart;

import java.util.List;

@Schema(description = "DTO рекомендуемого диагноза")
public record RecommendedDiagnosisDTO(
        @Schema(description = "ID диагноза", example = "1")
        Long id,
        @Schema(description = "Название", example = "Острый бронхит")
        String name,
        @Schema(description = "Описание", example = "Воспаление бронхов")
        String description,
        @Schema(description = "Заразное заболевание", example = "true")
        Boolean contagious,
        @Schema(description = "Часть тела", example = "CHEST")
        BodyPart bodyPart,
        @Schema(description = "Список ID симптомов")
        List<Long> symptoms) {}
