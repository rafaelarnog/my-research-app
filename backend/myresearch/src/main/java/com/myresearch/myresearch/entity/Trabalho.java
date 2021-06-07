package com.myresearch.myresearch.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

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
    private String dataInicio;

    @Column(name = "datafim")
    private String dataFim;

    @Column(name = "descricao")
    private String descricao;
}
