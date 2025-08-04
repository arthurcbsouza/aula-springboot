-- Instrucoes de agrupamento
-- min(campo) Retorna o menor valor daquele campo na tabea
select min(id_usuario) from usuarios;
select max(id_usuario) from usuarios;
select count(id_usuario) from usuarios;


select
    min(usuarios.usuario) as NOME,
    sum(jogos.preco) as GASTO
from usuarios,
     jogos,
     jogos_usuarios
     where
            usuarios.id_usuario = jogos_usuarios.id_usuario and
            jogos_usuarios.id_jogo = jogos.id_jogo
group by usuarios.usuario
having sum(jogos.preco) > 10;


select * from (
                  select
                      min(usuarios.id_usuario) as ID,
                      min(usuarios.usuario) as NOME,
                      sum(jogos.preco) as GASTO
                  from usuarios,
                       jogos,
                       jogos_usuarios
                  where
                      usuarios.id_usuario = jogos_usuarios.id_usuario and
                      jogos_usuarios.id_jogo = jogos.id_jogo
                  group by usuarios.usuario
                  having sum(jogos.preco) > 10
              UNION
                  select
                      min(usuarios.id_usuario) as ID,
                      min(usuarios.usuario) as NOME,
                      sum(jogos.preco) as GASTO
                  from usuarios,
                       jogos,
                       jogos_usuarios
                  where
                      usuarios.id_usuario = jogos_usuarios.id_usuario and
                      jogos_usuarios.id_jogo = jogos.id_jogo
                  group by usuarios.usuario
                  having sum(jogos.preco) < 10
              ) as MENOR;


select
    99 as ID,
    'Jeca' as NOME,
    0.00 as GASTO
UNION ALL
select
    92 as ID,
    'Mané' as NOME,
    1.00 as GASTO
UNION ALL
select
        min(usuarios.id_usuario) as ID,
        min(usuarios.usuario) as NOME,
        sum(jogos.preco) as GASTO
    from usuarios,
         jogos,
         jogos_usuarios
    where
        usuarios.id_usuario = jogos_usuarios.id_usuario and
        jogos_usuarios.id_jogo = jogos.id_jogo
    group by usuarios.usuario
    having sum(jogos.preco) > 10
UNION ALL
select
    min(usuarios.id_usuario) as ID,
    min(usuarios.usuario) as NOME,
    sum(jogos.preco) as GASTO
from usuarios,
     jogos,
     jogos_usuarios
where
    usuarios.id_usuario = jogos_usuarios.id_usuario and
    jogos_usuarios.id_jogo = jogos.id_jogo
group by usuarios.usuario
having sum(jogos.preco) > 10;

SELECT * FROM (
      SELECT	1	    ,	'Manoel'	,	0.25	 UNION ALL
      SELECT	2	,	'Manoel'	,	0.27	 UNION ALL
      SELECT	3	,	'Manoel'	,	0.29	 UNION ALL
      SELECT	4	,	'Manoel'	,	0.31	 UNION ALL
      SELECT	5	,	'Manoel'	,	0.33	 UNION ALL
      SELECT	6	,	'Manoel'	,	0.35	 UNION ALL
      SELECT	7	,	'Manoel'	,	0.37	 UNION ALL
      SELECT	8	,	'Manoel'	,	0.39	 UNION ALL
      SELECT	9	,	'Manoel'	,	0.41	 UNION ALL
      SELECT	10	,	'Manoel'	,	0.43	 UNION ALL
      SELECT	11	,	'Manoel'	,	0.45	 UNION ALL
      SELECT	12	,	'Manoel'	,	0.47	 UNION ALL
      SELECT	13	,	'Manoel'	,	0.49	 UNION ALL
      SELECT	14	,	'Manoel'	,	0.51	 UNION ALL
      SELECT	15	,	'Manoel'	,	0.53	 UNION ALL
      SELECT	16	,	'Manoel'	,	0.55	 UNION ALL
      SELECT	17	,	'Manoel'	,	0.57	 UNION ALL
      SELECT	18	,	'Manoel'	,	0.59	 UNION ALL
      SELECT	19	,	'Manoel'	,	0.61	 UNION ALL
      SELECT	20	,	'Manoel'	,	0.63	 UNION ALL
      SELECT	21	,	'Manoel'	,	0.65	 UNION ALL
      SELECT	22	,	'Manoel'	,	0.67	 UNION ALL
      SELECT	23	,	'Manoel'	,	0.69	 UNION ALL
      SELECT	24	,	'Manoel'	,	0.71	 UNION ALL
      SELECT	25	,	'Manoel'	,	0.73	 UNION ALL
      SELECT	26	,	'Manoel'	,	0.75 ) MOCK;


SELECT ID_USUARIO,
       ('Nome : ' || CAST(ID_USUARIO AS VARCHAR)) NOME
        FROM
            USUARIOS
        WHERE
            ID_USUARIO IN (SELECT ID_USUARIO FROM USUARIOS WHERE USUARIO LIKE '%a%') AND
            NOT EXISTS (SELECT ID_USUARIO FROM USUARIOS WHERE ID_USUARIO = 99);

SELECT id_usuario, usuario, RETORNA_TOTAL(id_usuario), coalesce(RETORNA_TOTAL(id_usuario), 0.0) FROM USUARIOS;

