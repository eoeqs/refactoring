package org.fergoeqs.coursework.dto;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "DTO медицинского отчета")
public record ReportDTO(
        @Schema(description = "Финальный диагноз", example = "Острый бронхит")
        String finalDiagnosis,
        @Schema(description = "Финальное состояние", example = "Стабильное")
        String finalCondition,
        @Schema(description = "Рекомендации", example = "Продолжить прием антибиотиков")
        String recommendations,
        @Schema(description = "Дополнительные наблюдения", example = "Температура нормализовалась")
        String additionalObservations,
        @Schema(description = "Замечания владельца", example = "Питомец активен")
        String ownerRemarks,
        @Schema(description = "Дата следующего осмотра", example = "2024-01-30")
        String nextExaminationDate) {
}
