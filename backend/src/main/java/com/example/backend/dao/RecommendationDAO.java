package com.example.backend.dao;

import com.example.backend.entity.Recommendation;
import org.apache.ibatis.annotations.Mapper;
import java.util.List;

@Mapper
public interface RecommendationDAO {
    void save(Recommendation recommendation);
    Recommendation findById(Long recId);
    List<Recommendation> findBySessionId(Long sessionId);
    void delete(Long recId);
} 