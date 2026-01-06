package org.fergoeqs.coursework.dto;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "DTO симптома")
public record SymptomDTO(
        @Schema(description = "ID симптома", example = "1")
        Long id,
        @Schema(description = "Название симптома", example = "Кашель")
        String name,
        @Schema(description = "Описание", example = "Сухой кашель")
        String description)
{}
