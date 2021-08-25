package com.myresearch.myresearch.service;

import com.myresearch.myresearch.entity.Usuario;
import org.springframework.security.core.userdetails.UserDetails;

public interface UsuarioService {
    UserDetails loadUserByUsername(String username);

    Usuario salvar(Usuario usuario);
}
