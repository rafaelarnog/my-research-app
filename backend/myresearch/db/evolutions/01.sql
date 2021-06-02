--- !Ups

CREATE ROLE my_research
    NOSUPERUSER
    NOCREATEDB
    NOCREATEROLE
    NOINHERIT
    LOGIN
    NOREPLICATION
    ENCRYPTED PASSWORD 'ac932db13c14b9073cf5c3d0208ddef05d6ed131';


CREATE SCHEMA my_research;

COMMENT ON SCHEMA my_research IS 'Esquema responsável por armazenar as entidades do My Research App.';

GRANT USAGE ON SCHEMA my_research TO my_research;

ALTER DEFAULT PRIVILEGES
    IN SCHEMA my_research GRANT SELECT ON tables TO my_research;

ALTER DEFAULT PRIVILEGES
    IN SCHEMA my_research GRANT USAGE, SELECT ON SEQUENCES TO my_research;

--- !Downs

REVOKE USAGE ON SCHEMA my_research FROM my_research;

ALTER DEFAULT PRIVILEGES
    IN SCHEMA my_research REVOKE SELECT ON tables FROM my_research;

ALTER DEFAULT PRIVILEGES
    IN SCHEMA my_research REVOKE USAGE, SELECT ON SEQUENCES FROM my_research;

DROP ROLE my_research;

DROP SCHEMA my_research;