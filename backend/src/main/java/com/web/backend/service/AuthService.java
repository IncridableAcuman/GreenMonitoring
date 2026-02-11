package com.web.backend.service;

import com.web.backend.dto.*;
import com.web.backend.entity.User;
import com.web.backend.exception.BadRequestException;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserService userService;
    private final TokenService tokenService;
    private final PasswordService passwordService;
    private final MailService mailService;
    private final RedisService redisService;

    @Transactional
    public AuthResponse register(RegisterRequest request, HttpServletResponse response){
        User user = userService.create(request);
        return tokenService.tokenDependencies(user,response);
    }
    public AuthResponse login(LoginRequest request,HttpServletResponse response){
        User user = userService.findUser(request.getEmail());
        passwordService.checkingPassword(request.getPassword(),user.getPassword());
        return tokenService.tokenDependencies(user,response);
    }
    public AuthResponse refresh(String refreshToken,HttpServletResponse response){
        String email = tokenService.extractSubjectFromToken(refreshToken);
        User user = userService.findUser(email);
        String cacheToken = redisService.getToken(user);
        if (cacheToken == null || !cacheToken.equals(refreshToken)){
            throw new BadRequestException("Invalid refresh token!");
        }
        redisService.removeTokenFromCache(user);
        return tokenService.tokenDependencies(user,response);
    }
    @Transactional
    public void logout(String refreshToken,HttpServletResponse response){
        String email = tokenService.extractSubjectFromToken(refreshToken);
        User user = userService.findUser(email);
        String cacheToken = redisService.getToken(user);
        if (cacheToken == null || !cacheToken.equals(refreshToken)){
            throw new BadRequestException("Invalid refresh token!");
        }
        tokenService.clearTokenDependencies(user,response);
    }
    public void forgotPassword(ForgotPasswordRequest request){
        User user = userService.findUser(request.getEmail());
        mailService.sendMail(user);
    }
    public void resetPassword(ResetPasswordRequest request){
        String email = tokenService.extractSubjectFromToken(request.getToken());
        User user = userService.findUser(email);
        passwordService.updatePassword(user,request.getPassword());
    }
}
