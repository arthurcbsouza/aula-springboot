CREATE OR REPLACE VIEW V_DADOS AS
select usuarios.id_usuario,
       usuarios.usuario,
       jogos_usuarios.id_jogo,
       jogos.nome,
       jogos.preco
from usuarios left outer join jogos_usuarios on usuarios.id_usuario = jogos_usuarios.id_usuario
              left outer join jogos on jogos_usuarios.id_jogo = jogos.id_jogo;

SELECT * FROM V_DADOS;