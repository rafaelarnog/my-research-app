package com.myresearch.myresearch.controller;

import com.myresearch.myresearch.dto.TrabalhoDto;
import com.myresearch.myresearch.entity.Trabalho;
import com.myresearch.myresearch.service.TrabalhoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/trabalho")
public class TrabalhoController {

    @Autowired
    private TrabalhoService trabalhoService;

    @GetMapping
    public ResponseEntity<List<Trabalho>> findAll(){
        return ResponseEntity.ok().body(trabalhoService.findAll());
    }

    @GetMapping(value = "/{id}")
    private ResponseEntity<Trabalho> findById(@PathVariable("id") Integer id){
        return ResponseEntity.ok().body(trabalhoService.findById(id));
    }

    @PostMapping(value = "/add")
    private ResponseEntity<Trabalho> create(@RequestBody TrabalhoDto trabalhoDto){
        return ResponseEntity.ok().body(trabalhoService.create(trabalhoDto));
    }

    @PutMapping(value = "edit/{id}")
    private ResponseEntity<Trabalho> edit(@PathVariable("id") Integer id, @RequestBody TrabalhoDto trabalhoDto){
        return ResponseEntity.ok().body(trabalhoService.edit(trabalhoDto,id));
    }

    @DeleteMapping(value = "remove/{id}")
    private ResponseEntity<Trabalho> remove(@PathVariable("id") Integer id){
        return ResponseEntity.ok().body(trabalhoService.remove(id));
    }
}
