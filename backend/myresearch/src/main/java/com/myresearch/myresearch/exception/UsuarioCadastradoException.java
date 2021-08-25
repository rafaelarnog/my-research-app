package com.myresearch.myresearch.exception;

public class UsuarioCadastradoException extends RuntimeException{

    public UsuarioCadastradoException( String username ) {
        super("Usuário já cadastrado com o username "+ username);
    }
}
