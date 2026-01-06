package org.fergoeqs.coursework.dto;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "DTO записи на прием")
public record AppointmentDTO(
        @Schema(description = "ID записи", example = "1")
        Long id,
        @Schema(description = "Приоритетная запись", example = "true")
        Boolean priority,
        @Schema(description = "Описание", example = "Плановый осмотр")
        String description,
        @Schema(description = "ID слота времени", example = "1")
        Long slotId,
        @Schema(description = "ID питомца", example = "1")
        Long petId
) {}
