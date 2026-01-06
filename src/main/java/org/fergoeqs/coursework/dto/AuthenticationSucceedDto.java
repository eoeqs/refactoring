package org.fergoeqs.coursework.dto;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "DTO успешной аутентификации")
public record AuthenticationSucceedDto(
        @Schema(description = "JWT токен", example = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...")
        String token,
        @Schema(description = "Время истечения токена в миллисекундах", example = "3600000")
        long expiresIn
) {
}
