--- !Ups

CREATE DATABASE my_research OWNER postgres ENCODING 'UTF-8' TEMPLATE template0;
COMMENT ON DATABASE my_research IS  'Banco de dados do My Research App.';

--- !Downs

DROP DATABASE my_research;