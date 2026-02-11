package com.web.backend.service;

import com.web.backend.dto.AuthResponse;
import com.web.backend.dto.TokenPair;
import com.web.backend.entity.User;
import com.web.backend.util.CookieUtil;
import com.web.backend.util.JwtUtil;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TokenService {
    private final JwtUtil jwtUtil;
    private final CookieUtil cookieUtil;
    private final RedisService redisService;

    public AuthResponse tokenDependencies(User user, HttpServletResponse response){
        TokenPair tokens = jwtUtil.getTokens(user);
        cookieUtil.addCookie(tokens.refreshToken(),response);
        redisService.saveToken(tokens.refreshToken(),user);
        return AuthResponse.from(user,tokens.accessToken());
    }
    public void clearTokenDependencies(User user,HttpServletResponse response){
        cookieUtil.clearCookie(response);
        redisService.removeTokenFromCache(user);
    }
    public String extractSubjectFromToken(String token){
        return jwtUtil.extractSubject(token);
    }
}
