--- !Ups

CREATE TABLE my_research.trabalho (
    id SERIAL NOT NULL,
    nome VARCHAR(60) NOT NULL,
    categoria VARCHAR(20) NOT NULL,
    tipo VARCHAR(20) not null,
    status VARCHAR(20) not null,
    datainicio TIMESTAMP not null,
    datafim TIMESTAMP not null,
    descricao VARCHAR(250) not null,
    CONSTRAINT pk_trabalho PRIMARY KEY (id)
);

COMMENT ON TABLE my_research.trabalho IS 'Entidade que armazena os trabalhos acadêmicos.';
COMMENT ON COLUMN my_research.trabalho.id IS 'Chave primária e identificador único da entidade.';
COMMENT ON COLUMN my_research.trabalho.nome IS 'Nome do trabalho acadêmico.';
COMMENT ON COLUMN my_research.trabalho.categoria IS 'Categoria do trabalho acadêmico.';
COMMENT ON COLUMN my_research.trabalho.tipo IS 'Tipo do trabalho acadêmico.';
COMMENT ON COLUMN my_research.trabalho.datainicio IS 'Data início do trabalho acadêmico.';
COMMENT ON COLUMN my_research.trabalho.datafim IS 'Data fim do trabalho acadêmico.';
COMMENT ON COLUMN my_research.trabalho.descricao IS 'Descrição do trabalho acadêmico.';

GRANT INSERT, DELETE, UPDATE ON my_research.trabalho TO my_research;
GRANT SELECT, USAGE ON my_research.trabalho_id_seq  TO my_research;

--- !Downs

DROP TABLE my_research.trabalho;