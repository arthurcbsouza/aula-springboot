-- INSERT INTO TABELA ( CAMPOS ) VALUES ( VALORES )
INSERT INTO USUARIOS ( USUARIO, SENHA, NOME ) VALUES ( 'Arthur', '1234', null );
INSERT INTO USUARIOS ( USUARIO, SENHA, NOME ) VALUES ( 'Magalhaes', 'lootear', null );
INSERT INTO USUARIOS ( USUARIO, SENHA, NOME, PAIS ) VALUES ( 'Jonh', 'lootear', null, 'USA' );
INSERT INTO USUARIOS ( USUARIO, SENHA, NOME ) VALUES ( 'Paulo', 'lootear', null );
INSERT INTO USUARIOS ( USUARIO, SENHA, NOME ) VALUES ( 'Manoel', 'lootear', null );

insert into jogos (nome, preco) values ('Fortnite', 0.0);
insert into jogos (nome, preco) values ('Overshoot', 0.0);

insert into jogos_usuarios (id_usuario, id_jogo) values (5, 1);

insert into jogos_usuarios (id_usuario, id_jogo) values ((select id_usuario from usuarios where usuario = 'Arthur'), 1);
insert into jogos_usuarios (id_usuario, id_jogo) values ((select id_usuario from usuarios where usuario = 'Arthur'), 2);

DELETE FROM jogos_usuarios;

select * from jogos;
select * from jogos_usuarios;
select * from total_jogador;

delete from jogos_usuarios where id_jogo_usuario = 11;