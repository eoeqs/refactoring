package org.fergoeqs.coursework.controllers;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.fergoeqs.coursework.dto.AnamnesisDTO;
import org.fergoeqs.coursework.services.AnamnesisService;
import org.fergoeqs.coursework.utils.Mappers.AnamnesisMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Anamnesis", description = "API для управления анамнезами")
@RestController
@RequestMapping("/api/anamnesis")
public class AnamnesisController {
    private final AnamnesisService anamnesisService;
    private final AnamnesisMapper anamnesisMapper;
    private static final Logger logger = LoggerFactory.getLogger(AnamnesisController.class);

    public AnamnesisController(AnamnesisService anamnesisService, AnamnesisMapper anamnesisMapper) {
        this.anamnesisService = anamnesisService;
        this.anamnesisMapper = anamnesisMapper;
    }


    @Operation(summary = "Получить анамнез по ID", description = "Возвращает информацию об анамнезе по его ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Анамнез найден",
                    content = @Content(schema = @Schema(implementation = AnamnesisDTO.class))),
            @ApiResponse(responseCode = "404", description = "Анамнез не найден")
    })
    @SecurityRequirement(name = "Bearer Authentication")
    @GetMapping("/{id}")
    public ResponseEntity<?> getAnamnesis(@Parameter(description = "ID анамнеза") @PathVariable Long id) {
        try {
            return ResponseEntity.ok(anamnesisMapper.toDTO(anamnesisService.findAnamnesisById(id)));
        } catch (Exception e) {
            logger.error("Error getting anamnesis", e);
            throw e;
        }
    }

    @GetMapping("/all-by-patient/{petId}")
    public ResponseEntity<?> getAllByPatient(@PathVariable Long petId) {
        try {
            return ResponseEntity.ok(anamnesisMapper.toDTOs(anamnesisService.findAllAnamnesesByPet(petId)));
        } catch (Exception e) {
            logger.error("Error getting anamnesis by patient", e);
            throw e;
        }
    }

    @Operation(summary = "Сохранить анамнез", description = "Создает новый анамнез (только для ветеринаров и администраторов)")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Анамнез успешно сохранен",
                    content = @Content(schema = @Schema(implementation = AnamnesisDTO.class))),
            @ApiResponse(responseCode = "403", description = "Доступ запрещен"),
            @ApiResponse(responseCode = "400", description = "Некорректные данные")
    })
    @SecurityRequirement(name = "Bearer Authentication")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_VET')")
    @PostMapping("/save")
    public ResponseEntity<?> saveAnamnesis(@RequestBody AnamnesisDTO anamnesisDTO) {
        try {
            return ResponseEntity.ok(anamnesisMapper.toDTO(anamnesisService.saveAnamnesis(anamnesisDTO)));
        } catch (Exception e) {
            logger.error("Error saving anamnesis", e);
            throw e;
        }
    }

}
