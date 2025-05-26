package com.example.backend.dao;

import com.example.backend.entity.Feedback;
import org.apache.ibatis.annotations.Mapper;
import java.util.List;

@Mapper
public interface FeedbackDAO {
    void save(Feedback feedback);
    Feedback findById(Long feedbackId);
    List<Feedback> findByRecId(Long recId);
    void delete(Long feedbackId);
} 