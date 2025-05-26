package com.example.backend.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChatLog {
    private Long chatId;
    private Long sessionId;
    private String sender;
    private String message;
    private String timestamp;
} 