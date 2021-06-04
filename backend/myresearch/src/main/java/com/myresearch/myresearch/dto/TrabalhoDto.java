package com.myresearch.myresearch.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class TrabalhoDto {

    private String nome;
    private String categoria;
    private String tipo;
    private String dataInicio;
    private String dataFim;
    private String descricao;

}
