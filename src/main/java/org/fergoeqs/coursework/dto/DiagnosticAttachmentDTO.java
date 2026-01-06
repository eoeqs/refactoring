package org.fergoeqs.coursework.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import java.time.LocalDateTime;

@Schema(description = "DTO диагностического вложения")
public record DiagnosticAttachmentDTO(
        @Schema(description = "ID вложения", example = "1")
        Long id,
        @Schema(description = "Название файла", example = "xray_scan.pdf")
        String name,
        @Schema(description = "Описание", example = "Рентген грудной клетки")
        String description,
        @Schema(description = "URL файла")
        String fileUrl,
        @Schema(description = "Дата загрузки", example = "2024-01-15T10:30:00")
        LocalDateTime uploadDate,
        @Schema(description = "ID анамнеза", example = "1")
        Long anamnesis,
        @Schema(description = "ID диагноза", example = "1")
        Long diagnosis) {
}
