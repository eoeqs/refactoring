package org.fergoeqs.coursework.dto;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "DTO клиники")
public record ClinicDTO(
        @Schema(description = "ID клиники", example = "1")
        Long id,
        @Schema(description = "Адрес", example = "10 Veterinary Street, Moscow")
        String address,
        @Schema(description = "Рабочие часы", example = "09:00-18:00")
        String workingHours
) {}
