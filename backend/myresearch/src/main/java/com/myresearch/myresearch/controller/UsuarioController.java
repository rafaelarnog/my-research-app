package com.myresearch.myresearch.controller;

import com.myresearch.myresearch.entity.Usuario;
import com.myresearch.myresearch.exception.UsuarioCadastradoException;
import com.myresearch.myresearch.repository.UsuarioRepository;
import com.myresearch.myresearch.service.UsuarioService;
import com.myresearch.myresearch.service.impl.UsuarioServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.swing.plaf.synth.SynthTabbedPaneUI;

@RestController
@RequestMapping("/api/usuarios")
@RequiredArgsConstructor
public class UsuarioController {

    private final UsuarioService usuarioService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void salvar(@RequestBody Usuario usuario){
        try {
            usuarioService.salvar(usuario);
        }catch (UsuarioCadastradoException e){
            throw new ResponseStatusException( HttpStatus.BAD_REQUEST, e.getMessage() );
        }
    }
}
