-- Apaga as tabelas caso existam
DROP TABLE IF EXISTS ITENS;
DROP TABLE IF EXISTS JOGOS_USUARIOS;
DROP TABLE IF EXISTS JOGOS;
DROP TABLE IF EXISTS USUARIOS;

-- Criando tabelas
-- CREATE TABLE NOME ( CAMPOS );
CREATE TABLE USUARIOS (
                          ID_USUARIO SERIAL PRIMARY KEY,
                          USUARIO VARCHAR(10) NOT NULL,
                          SENHA VARCHAR(20) NOT NULL,
                          NOME VARCHAR(40)
);

CREATE TABLE JOGOS (
                       ID_JOGO SERIAL PRIMARY KEY,
                       NOME VARCHAR(40),
                       PRECO NUMERIC(12, 2)
);

CREATE TABLE JOGOS_USUARIOS (
                                ID_JOGO_USUARIO SERIAL PRIMARY KEY,
                                ID_USUARIO INT NOT NULL,
                                ID_JOGO INT NOT NULL,
                                FOREIGN KEY (ID_USUARIO) REFERENCES USUARIOS(ID_USUARIO),
                                FOREIGN KEY (ID_JOGO) REFERENCES JOGOS(ID_JOGO)
);

CREATE TABLE ITENS (
                       ID_ITEM SERIAL PRIMARY KEY,
                       ID_JOGO_USUARIO INT NOT NULL,
                       DESCRICAO VARCHAR(20),
                       QUANTIDADE INT,
                       FOREIGN KEY (ID_JOGO_USUARIO) REFERENCES JOGOS_USUARIOS(ID_JOGO_USUARIO)
);