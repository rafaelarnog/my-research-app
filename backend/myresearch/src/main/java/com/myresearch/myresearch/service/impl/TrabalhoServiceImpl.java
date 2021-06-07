package com.myresearch.myresearch.service.impl;

import com.myresearch.myresearch.dto.TrabalhoDto;
import com.myresearch.myresearch.entity.Trabalho;
import com.myresearch.myresearch.repository.TrabalhoRepository;
import com.myresearch.myresearch.service.TrabalhoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TrabalhoServiceImpl implements TrabalhoService {

    @Autowired
    private TrabalhoRepository trabalhoRepository;

    @Override
    public Trabalho findById(Integer id){
        return trabalhoRepository.findById(id).orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @Override
    public List<Trabalho> findAll(){
        return trabalhoRepository.findAll().stream().collect(Collectors.toList());
    }

    @Override
    public Trabalho create(TrabalhoDto trabalhoDto){
        if(trabalhoDto != null
                && trabalhoDto.getNome() == null
                || trabalhoDto.getNome().isBlank()

                || trabalhoDto.getCategoria() == null
                || trabalhoDto.getCategoria().isBlank()

                || trabalhoDto.getTipo() == null
                || trabalhoDto.getTipo().isBlank()

                || trabalhoDto.getStatus() == null
                || trabalhoDto.getStatus().isBlank()

                || trabalhoDto.getDataInicio() == null
                || trabalhoDto.getDataInicio().isBlank()

                || trabalhoDto.getDataFim() == null
                || trabalhoDto.getDataFim().isBlank()

                || trabalhoDto.getDescricao() == null
                || trabalhoDto.getDescricao().isBlank()
        ){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Dados inválidos!");
        }

        Trabalho trabalho = new Trabalho();
        trabalho.setNome(trabalhoDto.getNome());
        trabalho.setCategoria(trabalhoDto.getCategoria());
        trabalho.setTipo(trabalhoDto.getTipo());
        trabalho.setStatus(trabalhoDto.getStatus());
        trabalho.setDataInicio(trabalhoDto.getDataInicio());
        trabalho.setDataFim(trabalhoDto.getDataFim());
        trabalho.setDescricao(trabalhoDto.getDescricao());

        Trabalho lastTrabalho = trabalhoRepository.save(trabalho);

        return trabalhoRepository.findById(lastTrabalho.getId()).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Trabalho não encontrado!"));
    }

    @Override
    public Trabalho edit(TrabalhoDto trabalhoDto, Integer id){
        if(trabalhoDto != null
                && trabalhoDto.getNome() == null
                || trabalhoDto.getNome().isBlank()

                || trabalhoDto.getCategoria() == null
                || trabalhoDto.getCategoria().isBlank()

                || trabalhoDto.getTipo() == null
                || trabalhoDto.getTipo().isBlank()

                || trabalhoDto.getStatus() == null
                || trabalhoDto.getStatus().isBlank()

                || trabalhoDto.getDataInicio() == null
                || trabalhoDto.getDataInicio().isBlank()

                || trabalhoDto.getDataFim() == null
                || trabalhoDto.getDataFim().isBlank()

                || trabalhoDto.getDescricao() == null
                || trabalhoDto.getDescricao().isBlank()
        ){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Dados inválidos");
        }

        return trabalhoRepository.findById(id).map(record -> {
            record.setNome(trabalhoDto.getNome());
            record.setTipo(trabalhoDto.getTipo());
            record.setCategoria(trabalhoDto.getCategoria());
            record.setStatus(trabalhoDto.getStatus());
            record.setDataInicio(trabalhoDto.getDataInicio());
            record.setDataFim(trabalhoDto.getDataFim());
            record.setDescricao(trabalhoDto.getDescricao());
            return trabalhoRepository.save(record);
        }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Trabalho acadêmico não encontrado!"));
    }

    @Override
    public Trabalho remove(Integer id){

        return trabalhoRepository.findById(id).map(record -> {
            trabalhoRepository.deleteById(id);
            return record;
        }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Trabalho acadêmico não encontrado!"));
    }
}
