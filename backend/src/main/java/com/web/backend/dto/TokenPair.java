package com.web.backend.dto;

public record TokenPair(
        String accessToken,
        String refreshToken
) {

}
