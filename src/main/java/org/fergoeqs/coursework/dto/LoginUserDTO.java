package org.fergoeqs.coursework.dto;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "DTO для аутентификации пользователя")
public record LoginUserDTO(
        @Schema(description = "Имя пользователя", example = "john_doe", required = true)
        String username,
        @Schema(description = "Пароль", example = "password123", required = true)
        String password
) {
}