package com.web.backend.exception;

import com.web.backend.dto.ErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {


    @ExceptionHandler(BadRequestException.class)
    public ResponseEntity<ErrorResponse> getBadRequest(BadRequestException e){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ErrorResponse.from(e,HttpStatus.BAD_REQUEST));
    }
    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<ErrorResponse> getNotFound(NotFoundException e){
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ErrorResponse.from(e,HttpStatus.NOT_FOUND));
    }
    @ExceptionHandler(UnAuthorizedException.class)
    public ResponseEntity<ErrorResponse> getUnAuthorized(UnAuthorizedException e){
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(ErrorResponse.from(e,HttpStatus.UNAUTHORIZED));
    }
    @ExceptionHandler(ForbiddenException.class)
    public ResponseEntity<ErrorResponse> getForbidden(ForbiddenException e){
        return ResponseEntity.status(HttpStatus.FORBIDDEN).body(ErrorResponse.from(e,HttpStatus.FORBIDDEN));
    }
    @ExceptionHandler(ServerErrorException.class)
    public ResponseEntity<ServerErrorException> getServer(ServerErrorException e){
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e);
    }
}
