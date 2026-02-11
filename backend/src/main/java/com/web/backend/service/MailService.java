package com.web.backend.service;

import com.web.backend.dto.TokenPair;
import com.web.backend.entity.User;
import com.web.backend.util.JwtUtil;
import com.web.backend.util.MailUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MailService {
    private final MailUtil mailUtil;
    private final JwtUtil jwtUtil;

    public void sendMail(User user){
        TokenPair tokens = jwtUtil.getTokens(user);
        String url = "http://localhost:5173/reset-password?token="+tokens.accessToken();
        mailUtil.sendMail(user.getEmail(),"Reset Password",url);
    }
}
