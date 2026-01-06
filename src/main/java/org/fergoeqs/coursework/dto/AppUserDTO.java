package org.fergoeqs.coursework.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import org.fergoeqs.coursework.models.enums.RoleType;
import java.util.Set;

@Schema(description = "DTO пользователя системы")
public record AppUserDTO(
    @Schema(description = "ID пользователя", example = "1")
    Long id,
    @Schema(description = "Имя пользователя", example = "john_doe")
    String username,
    @Schema(description = "Email адрес", example = "john@example.com")
    String email,
    @Schema(description = "Номер телефона", example = "+7 (999) 123-45-67")
    String phoneNumber,
    @Schema(description = "Имя", example = "John")
    String name,
    @Schema(description = "Фамилия", example = "Doe")
    String surname,
    @Schema(description = "Роли пользователя")
    Set<RoleType> roles,
    @Schema(description = "ID клиники", example = "1")
    Long clinic,
    @Schema(description = "Расписание работы")
    String schedule,
    @Schema(description = "Квалификация (для ветеринаров)", example = "Ветеринарный врач")
    String qualification,
    @Schema(description = "Рабочие часы", example = "09:00-18:00")
    String workingHours,
    @Schema(description = "URL фотографии профиля")
    String photoUrl) {
}
