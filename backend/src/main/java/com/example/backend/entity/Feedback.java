package com.example.backend.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Feedback {
    private Long feedbackId;
    private Long recId;
    private String difficulty;
    private String comment;
    private String submittedAt;
} 