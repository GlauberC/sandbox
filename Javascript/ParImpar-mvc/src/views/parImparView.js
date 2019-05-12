// var parImparView = {
//     adversario: document.querySelector('.adversario'),
//     resultado: document.querySelector('.resultado'),
//     render : function(msg, model){
//         this.adversario.textContent = model.adversario
//         this.resultado.textContent = msg
//     }

// }

var parImparView = {
    render : (msg, model) => {
        let adversario = document.querySelector('.adversario')
        let resultado = document.querySelector('.resultado')
        adversario.textContent = model.adversario
        resultado.textContent = msg
    }

}