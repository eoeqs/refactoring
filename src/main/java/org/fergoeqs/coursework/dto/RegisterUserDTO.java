package org.fergoeqs.coursework.dto;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "DTO для регистрации нового пользователя")
public record RegisterUserDTO(
        @Schema(description = "Имя пользователя", example = "john_doe", required = true)
        String username,
        @Schema(description = "Email адрес", example = "john@example.com", required = true)
        String email,
        @Schema(description = "Пароль", example = "password123", required = true)
        String password,
        @Schema(description = "Номер телефона", example = "+7 (999) 123-45-67", required = true)
        String phoneNumber,
        @Schema(description = "Имя", example = "John")
        String name,
        @Schema(description = "Фамилия", example = "Doe")
        String surname
) {}
