-- UPDATE FROM TABELA SET CAMPO = VALOR WHERE CONDICAO
update USUARIOS set nome = 'Arthur Carlos' where id_usuario = 1;

update USUARIOS set nome = 'Arthur Souza' where id_usuario = (select id_usuario from usuarios where usuario = 'Arthur');

update USUARIOS set pais = 'USA' where id_usuario = (select id_usuario from usuarios where usuario = 'Jonh');

update USUARIOS set pais = NULL;

update USUARIOS set pais = 'Brasil' where pais is null;

update USUARIOS set pais = 'Brasil' where id_usuario in (select id_usuario from usuarios where pais is null);

update USUARIOS set pais = 'Brasil' where id_usuario in (1, 2, 3);

update JOGOS set preco = 9 where id_jogo = 1;

update JOGOS set preco = 7 where id_jogo = 2;
