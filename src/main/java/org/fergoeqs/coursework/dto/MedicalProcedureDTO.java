package org.fergoeqs.coursework.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import org.fergoeqs.coursework.models.enums.ProcedureType;

import java.time.LocalDateTime;

@Schema(description = "DTO медицинской процедуры")
public record MedicalProcedureDTO(
        @Schema(description = "ID процедуры", example = "1")
        Long id,
        @Schema(description = "Тип процедуры", example = "EXAMINATION")
        ProcedureType type,
        @Schema(description = "Название", example = "Общий осмотр")
        String name,
        @Schema(description = "Дата и время", example = "2024-01-15T10:30:00")
        LocalDateTime date,
        @Schema(description = "Описание", example = "Плановый осмотр")
        String description,
        @Schema(description = "Заметки", example = "Все показатели в норме")
        String notes,
        @Schema(description = "ID питомца", example = "1")
        Long pet,
        @Schema(description = "ID ветеринара", example = "1")
        Long vet,
        @Schema(description = "URL отчета")
        String reportUrl,
        @Schema(description = "ID анамнеза", example = "1")
        Long anamnesis
) {}