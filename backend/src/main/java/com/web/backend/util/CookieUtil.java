package com.web.backend.util;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class CookieUtil {
    @Value("${jwt.refresh_time}")
    private int refreshTime;

    public void addCookie(String refreshToken, HttpServletResponse response){
        Cookie cookie = new Cookie("refreshToken",refreshToken);
        cookie.setValue(refreshToken);
        cookie.setSecure(false);
        cookie.setHttpOnly(true);
        cookie.setMaxAge(refreshTime/1000);
        cookie.setPath("/");
        response.addCookie(cookie);
    }

    public void clearCookie(HttpServletResponse response){
        Cookie cookie = new Cookie("refreshToken",null);
        cookie.setValue(null);
        cookie.setSecure(false);
        cookie.setHttpOnly(true);
        cookie.setMaxAge(0);
        cookie.setPath("/");
        response.addCookie(cookie);
    }
}
