var modeloParImpar = {
    getModel : function(numeroJogador, escolha) {
        return {
            jogador: Number(numeroJogador),
            escolha: escolha,
            adversario: Math.floor( Math.random() * 5 + 1 )
        }
    }
}