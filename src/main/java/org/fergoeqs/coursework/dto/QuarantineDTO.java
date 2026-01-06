package org.fergoeqs.coursework.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import org.fergoeqs.coursework.models.enums.QuarantineStatus;

import java.time.LocalDateTime;

@Schema(description = "DTO карантина")
public record QuarantineDTO(
        @Schema(description = "ID карантина", example = "1")
        Long id,
        @Schema(description = "Причина карантина", example = "Инфекционное заболевание")
        String reason,
        @Schema(description = "Описание", example = "Питомец помещен в карантин")
        String description,
        @Schema(description = "Дата начала", example = "2024-01-15T10:00:00")
        LocalDateTime startDate,
        @Schema(description = "Дата окончания", example = "2024-01-30T10:00:00")
        LocalDateTime endDate,
        @Schema(description = "Статус карантина", example = "ACTIVE")
        QuarantineStatus status,
        @Schema(description = "ID сектора", example = "1")
        Long sector,
        @Schema(description = "ID питомца", example = "1")
        Long pet) {
}
