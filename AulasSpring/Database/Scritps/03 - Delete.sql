-- DELETE FROM TABELA WHERE CONDICAO
delete from USUARIOS WHERE id_usuario = 3;

delete from USUARIOS WHERE id_usuario = 5;

delete from USUARIOS where pais is null and nome is null;

delete from USUARIOS where id_usuario in (select id_usuario from usuarios where pais is null);

delete from USUARIOS where id_usuario not in (select id_usuario from jogos_usuarios);