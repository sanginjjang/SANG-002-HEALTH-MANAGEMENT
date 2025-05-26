package com.example.backend.dao;

import com.example.backend.entity.ChatLog;
import org.apache.ibatis.annotations.Mapper;
import java.util.List;

@Mapper
public interface ChatLogDAO {
    void save(ChatLog chatLog);
    List<ChatLog> findBySessionId(Long sessionId);
    void deleteBySessionId(Long sessionId);
} 