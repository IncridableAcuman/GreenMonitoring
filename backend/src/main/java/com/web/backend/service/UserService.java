package com.web.backend.service;

import com.web.backend.dto.RegisterRequest;
import com.web.backend.entity.User;
import com.web.backend.enums.Role;
import com.web.backend.exception.BadRequestException;
import com.web.backend.exception.NotFoundException;
import com.web.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public User create(RegisterRequest request){
        if (userRepository.findByEmail(request.getEmail()).isPresent()){
            throw new BadRequestException("User already exist!");
        }
        User user = new User();
        user.setFirstName(request.getFirstname());
        user.setLastname(request.getLastname());
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(Role.USER);
        return userRepository.save(user);
    }
    public User findUser(String email){
        return userRepository.findByEmail(email).orElseThrow(()->new NotFoundException("User not found!"));
    }

}
