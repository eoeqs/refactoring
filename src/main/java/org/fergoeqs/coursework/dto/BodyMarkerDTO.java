package org.fergoeqs.coursework.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import org.fergoeqs.coursework.models.enums.BodyPart;

@Schema(description = "DTO маркера на теле")
public record BodyMarkerDTO(
        @Schema(description = "ID маркера", example = "1")
        Long id,
        @Schema(description = "Позиция X", example = "100")
        Integer positionX,
        @Schema(description = "Позиция Y", example = "200")
        Integer positionY,
        @Schema(description = "Часть тела", example = "CHEST")
        BodyPart bodyPart,
        @Schema(description = "ID питомца", example = "1")
        Long pet,
        @Schema(description = "ID записи", example = "1")
        Long appointment
) {
}
