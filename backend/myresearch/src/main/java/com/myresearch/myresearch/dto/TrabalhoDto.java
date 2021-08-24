package com.myresearch.myresearch.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Data
@Getter
@Setter
public class TrabalhoDto {

    private String nome;
    private String categoria;
    private String tipo;
    private String status;
    private Date dataInicio;
    private Date dataFim;
    private String descricao;

}
