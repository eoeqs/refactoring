package org.fergoeqs.coursework.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import java.time.LocalDateTime;

@Schema(description = "DTO обновления состояния здоровья")
public record HealthUpdateDTO(
        @Schema(description = "ID обновления", example = "1")
        Long id,
        @Schema(description = "Дата и время", example = "2024-01-15T10:30:00")
        LocalDateTime date,
        @Schema(description = "Симптомы", example = "Кашель, насморк")
        String symptoms,
        @Schema(description = "Заметки", example = "Состояние улучшается")
        String notes,
        @Schema(description = "Динамика (true - положительная, false - отрицательная)", example = "true")
        boolean dynamics,
        @Schema(description = "ID питомца", example = "1")
        Long pet
) {
}
