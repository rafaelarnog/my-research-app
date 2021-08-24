--- !Ups

CREATE TABLE my_research.usuario (
    id SERIAL NOT NULL,
    username VARCHAR(60) NOT NULL UNIQUE,
    senha VARCHAR(60) NOT NULL,
    CONSTRAINT pk_usuario PRIMARY KEY (id)
);

COMMENT ON TABLE my_research.usuario IS 'Entidade que armazena os usuários.';
COMMENT ON COLUMN my_research.usuario.id IS 'Chave primária e identificador único da entidade.';
COMMENT ON COLUMN my_research.usuario.username IS 'Username do usuário.';
COMMENT ON COLUMN my_research.usuario.senha IS 'Senha do usuário.';

GRANT INSERT, DELETE, UPDATE ON my_research.usuario TO my_research;
GRANT SELECT, USAGE ON my_research.usuario_id_seq  TO my_research;

--- !Downs

DROP TABLE my_research.usuario;