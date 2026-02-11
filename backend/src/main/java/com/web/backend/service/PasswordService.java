package com.web.backend.service;

import com.web.backend.entity.User;
import com.web.backend.exception.BadRequestException;
import com.web.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PasswordService {
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;

    public void checkingPassword(String rawPassword,String encodedPassword){
        if (!passwordEncoder.matches(rawPassword,encodedPassword)){
            throw new BadRequestException("Incorrect password!");
        }
    }
    public void updatePassword(User user,String password){
        user.setPassword(passwordEncoder.encode(password));
        userRepository.save(user);
    }
}
