package com.myresearch.myresearch.controller;

import com.myresearch.myresearch.entity.Usuario;
import com.myresearch.myresearch.repository.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/usuarios")
@RequiredArgsConstructor
public class UsuarioController {

    private final UsuarioRepository usuarioRepository;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void salvar(@RequestBody Usuario usuario){
        usuarioRepository.save(usuario);
    }
}
