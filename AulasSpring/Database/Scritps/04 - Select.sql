-- SELECT CAMPOS FROM TABELA
select * from usuarios where ( pais is not null and nome is null and senha <> 'lootear' ) or senha = '1234';

select
        usuarios.id_usuario,
        usuarios.usuario,
        jogos_usuarios.id_jogo,
        jogos.nome,
        jogos.preco
    from
         usuarios,
         jogos_usuarios,
         jogos
    where
        usuarios.id_usuario = jogos_usuarios.id_usuario and
        jogos_usuarios.id_jogo = jogos.id_jogo
    order by usuarios.usuario asc, jogos.nome desc;

select usuarios.id_usuario,
       usuarios.usuario,
       jogos_usuarios.id_jogo,
       jogos.nome,
       jogos.preco
from usuarios inner join jogos_usuarios on usuarios.id_usuario = jogos_usuarios.id_usuario
              inner join jogos on jogos_usuarios.id_jogo = jogos.id_jogo;

select usuarios.id_usuario,
       usuarios.usuario,
       jogos_usuarios.id_jogo,
       jogos.nome,
       jogos.preco
from usuarios left join jogos_usuarios on usuarios.id_usuario = jogos_usuarios.id_usuario
              left join jogos on jogos_usuarios.id_jogo = jogos.id_jogo;

select usuarios.id_usuario,
       usuarios.usuario,
       jogos_usuarios.id_jogo,
       jogos.nome,
       jogos.preco
from usuarios right join jogos_usuarios on usuarios.id_usuario = jogos_usuarios.id_usuario
              right join jogos on jogos_usuarios.id_jogo = jogos.id_jogo;

select usuarios.id_usuario,
       usuarios.usuario,
       jogos_usuarios.id_jogo,
       jogos.nome,
       jogos.preco
from usuarios left outer join jogos_usuarios on usuarios.id_usuario = jogos_usuarios.id_usuario
              left outer join jogos on jogos_usuarios.id_jogo = jogos.id_jogo;

select distinct(usuarios.usuario)
from usuarios inner join jogos_usuarios on usuarios.id_usuario = jogos_usuarios.id_usuario
              inner join jogos on jogos_usuarios.id_jogo = jogos.id_jogo
    order by usuarios.usuario;

select min(usuarios.usuario) as NOME,
       sum(jogos.preco) as GASTO
from usuarios inner join jogos_usuarios on usuarios.id_usuario = jogos_usuarios.id_usuario
              inner join jogos on jogos_usuarios.id_jogo = jogos.id_jogo
    group by usuarios.usuario;