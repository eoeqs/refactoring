package org.fergoeqs.coursework.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import java.time.LocalDate;
import java.time.LocalTime;

@Schema(description = "DTO слота времени для записи")
public record SlotDTO(
        @Schema(description = "ID слота", example = "1")
        Long id,
        @Schema(description = "Дата", example = "2024-01-15")
        LocalDate date,
        @Schema(description = "Время начала", example = "10:00:00")
        LocalTime startTime,
        @Schema(description = "Время окончания", example = "11:00:00")
        LocalTime endTime,
        @Schema(description = "ID ветеринара", example = "1")
        Long vetId,
        @Schema(description = "Приоритетный слот", example = "false")
        Boolean isPriority){}
