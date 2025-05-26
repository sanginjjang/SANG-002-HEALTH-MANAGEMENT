package com.example.backend.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RecommendationDTO {
    private Long recId;
    private Long sessionId;
    private String summary;
    private String fullResponse;
    private String createdAt;
} 