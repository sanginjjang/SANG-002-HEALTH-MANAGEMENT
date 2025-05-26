package com.example.backend.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChatSession {
    private Long sessionId;
    private Long userId;
    private String startedAt;
} 