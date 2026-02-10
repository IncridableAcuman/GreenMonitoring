package com.web.backend.dto;


import com.web.backend.entity.User;

public record AuthResponse(
        Long id,
        String email,
        String accessToken
) {
    public static AuthResponse from(User user,String accessToken){
        return new AuthResponse(
                user.getId(),
                user.getEmail(),
                accessToken
        );
    }
}
