package com.example.backend.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Recommendation {
    private Long recId;
    private Long sessionId;
    private String summary;
    private String fullResponse;
    private String createdAt;
} 