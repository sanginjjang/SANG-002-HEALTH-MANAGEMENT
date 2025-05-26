package com.example.backend.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChatSessionDTO {
    private Long sessionId;
    private Long userId;
    private String startedAt;
} 