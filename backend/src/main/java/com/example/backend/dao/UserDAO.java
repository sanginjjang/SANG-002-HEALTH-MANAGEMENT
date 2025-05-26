package com.example.backend.dao;

import com.example.backend.entity.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserDAO {
    User findByEmail(String email);
    void save(User user);
    boolean existsByEmail(String email);
} 