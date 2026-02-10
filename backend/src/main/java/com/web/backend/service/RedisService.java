package com.web.backend.service;

import com.web.backend.entity.User;
import com.web.backend.exception.BadRequestException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.concurrent.TimeUnit;

@Service
@RequiredArgsConstructor
public class RedisService {
    @Value("${jwt.refresh_time}")
    private int refreshTime;
    private final RedisTemplate<String,Object> template;

    public String getKey(User user){
        return "refreshToken:"+user.getId();
    }
    public void saveToken(String refreshToken,User user){
       if (user == null || refreshToken == null || refreshToken.isEmpty()){
        throw new BadRequestException("User or token is null or empty!");
       }
       String key = getKey(user);
       template.opsForValue()
               .set(
                       key,
                       refreshToken,
                       refreshTime,
                       TimeUnit.MILLISECONDS
               );
    }
    public String getToken(User user){
        if (user == null) return null;
        Object token = getKey(user);
        return token != null ? token.toString() : null;
    }
    public void removeTokenFromCache(User user){
        if (user == null) return;
        template.delete(getKey(user));
    }
}
