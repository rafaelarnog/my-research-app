package com.myresearch.myresearch.service.impl;

import com.myresearch.myresearch.entity.Usuario;
import com.myresearch.myresearch.exception.UsuarioCadastradoException;
import com.myresearch.myresearch.repository.UsuarioRepository;
import com.myresearch.myresearch.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UsuarioServiceImpl implements UsuarioService, UserDetailsService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario usuario = usuarioRepository
                .findByUsername(username)
                .orElseThrow( () -> new UsernameNotFoundException("Username não encontrado.") );

        return User
                .builder()
                .username(usuario.getUsername())
                .password(usuario.getPassword())
                .roles("USER")
                .build();
    }

    public Usuario salvar(Usuario usuario){
        boolean exists = usuarioRepository.existsByUsername(usuario.getUsername());
        if(exists) {
            throw new UsuarioCadastradoException(usuario.getUsername());
        }
        return usuarioRepository.save(usuario);
    }
}
