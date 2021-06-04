package com.myresearch.myresearch.service;

import com.myresearch.myresearch.dto.TrabalhoDto;
import com.myresearch.myresearch.entity.Trabalho;

import java.util.List;

public interface TrabalhoService {

    Trabalho findById(Integer id);

    List<Trabalho> findAll();

    Trabalho create(TrabalhoDto trabalhoDto);

    Trabalho edit(TrabalhoDto trabalhoDto, Integer id);

    Trabalho remove(Integer id);
}
