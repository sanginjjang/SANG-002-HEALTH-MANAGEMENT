package com.example.backend.dao;

import com.example.backend.entity.ChatSession;
import org.apache.ibatis.annotations.Mapper;
import java.util.List;

@Mapper
public interface ChatSessionDAO {
    void save(ChatSession chatSession);
    ChatSession findById(Long sessionId);
    List<ChatSession> findByUserId(Long userId);
    void delete(Long sessionId);
} 