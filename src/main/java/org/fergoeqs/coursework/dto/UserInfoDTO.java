package org.fergoeqs.coursework.dto;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "DTO с информацией о текущем пользователе")
public record UserInfoDTO(
        @Schema(description = "ID пользователя", example = "1")
        Long id,
        @Schema(description = "Роль пользователя", example = "ROLE_OWNER")
        String role
) {
}