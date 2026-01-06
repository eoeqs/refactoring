package org.fergoeqs.coursework.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import java.time.LocalDateTime;

@Schema(description = "DTO уведомления")
public record NotificationDTO(
        @Schema(description = "ID уведомления", example = "1")
        Long id,
        @Schema(description = "Дата и время", example = "2024-01-15T10:30:00")
        LocalDateTime dateTime,
        @Schema(description = "Содержание уведомления", example = "У вас новая запись на прием")
        String content,
        @Schema(description = "ID пользователя", example = "1")
        Long appUser) {
}
