
// var parImparController = {
//     view: parImparView,
//     model: modeloParImpar,
//     controlaJogo : function(parImpar) {
//         let numeroJogador = document.querySelector('.input-jogador').value
//         let model = this.model.getModel(numeroJogador, parImpar)
//         let msg = this.vencedor(model)
//         this.view.render(msg, model)
//     },
    
//     vencedor : (modelParImpar) => {
//         let msg = ''
//         if(modelParImpar.escolha == 'par'){
//             msg = (modelParImpar.jogador + modelParImpar.adversario) % 2 == 0 ? 
//                 'O jogador venceu' :
//                 'A CPU venceu'
//             return msg
//         }else{
//             msg = (modelParImpar.jogador + modelParImpar.adversario) % 2 == 0 ? 
//                 'A CPU venceu' :
//                 'O jogador venceu'
//             return msg
//         }
//     }
// }

var parImparController = {
    controlaJogo : (parImpar) => {
        let numeroJogador = document.querySelector('.input-jogador').value
        let modelo = modeloParImpar.getModel(numeroJogador, parImpar)
        let msg = parImparController.vencedor(modelo)
        parImparView.render(msg, modelo)
    },
    
    vencedor : (modelParImpar) => {
        let msg = ''
        if(modelParImpar.escolha == 'par'){
            msg = (modelParImpar.jogador + modelParImpar.adversario) % 2 == 0 ? 
                'O jogador venceu' :
                'A CPU venceu'
            return msg
        }else{
            msg = (modelParImpar.jogador + modelParImpar.adversario) % 2 == 0 ? 
                'A CPU venceu' :
                'O jogador venceu'
            return msg
        }
    }
}