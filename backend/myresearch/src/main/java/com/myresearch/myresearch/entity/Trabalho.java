package com.myresearch.myresearch.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(schema = "my_research", name= "trabalho")
@Getter
@Setter
public class Trabalho {

    @Id
    @Column(name = "id", updatable = false, nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "nome")
    private String nome;

    @Column(name = "categoria")
    private String categoria;

    @Column(name = "tipo")
    private String tipo;

    @Column(name = "status")
    private String status;

    @Column(name = "datainicio")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date dataInicio;

    @Column(name = "datafim")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date dataFim;

    @Column(name = "descricao")
    private String descricao;
}
