// Variaveis globais
var acoesEscolhidas = []
var abstracoesEscolhidas = []
var coisasEscolhidas = []
var contNumeroEscolhido = document.querySelector('.selected-number')
var divLista = document.querySelector('.lista')
var ulEscolhido = document.querySelector('.escolhido')


escolha = () => {
    reseta()
    let numero = Number(document.getElementById('numero').value)
    let ul = criaUl()
    sorteiaNumeros(0, numero)
    sorteiaNumeros(1, numero)
    sorteiaNumeros(2, numero)
    ul = criaDado(0, ul)
    ul = criaDado(1, ul)
    ul = criaDado(2, ul)
    divLista.appendChild(ul)
}

reseta = () => {
    acoesEscolhidas = []
    abstracoesEscolhidas = []
    coisasEscolhidas = []
    contNumeroEscolhido.textContent = 0
    divLista.innerHTML = ''
}

criaImg = (sorteado, local) => {
    let imgSrc = `./images/${local}/${sorteado+1}.PNG`
    let img = document.createElement('img')
    img.onclick = (e) => {
        let imagem = e.target
        if(imagem.classList.value === ''){
            imagem.classList.add('img-escolhido')
            contNumeroEscolhido.textContent = Number(contNumeroEscolhido.textContent) + 1
            imagem.parentElement.removeChild(imagem)
            ulEscolhido.appendChild(imagem)
        }
    }
    img.src = imgSrc
    img.width = "128"
    img.height = "128"
    return img
}

criaUl = () => {
    let ul = document.createElement('ul')
    ul.classList.add('ul-lista')
    ul.classList.add('list-inline')
    return ul
}

criaLi = img => {
    let li = document.createElement('li')
    li.classList.add('li-imagem')
    li.classList.add('list-inline-item')
    li.append(img)
    return li
}

sorteiaNumeros = (local, numero) => {
    // 0 = acoes
    // 1 = coisas
    // 2 = abstracoes

    let sorteado
    if(local === 0){
        let limite = (numero / 8) * 3
        for(let i = 0 ; i< limite; i++){
            do{
                sorteado = Math.floor(Math.random() * 55)
            }while(acoesEscolhidas.includes(sorteado))
            acoesEscolhidas.push(sorteado)
        }
    }else if(local === 1){

        let limite = (numero / 8) * 3
        for(let i = 0 ; i< limite; i++){
            do{
                sorteado = Math.floor(Math.random() * 55)
            }while(coisasEscolhidas.includes(sorteado))
            coisasEscolhidas.push(sorteado)
        }
    }else{

        let limite = (numero / 8) * 2
        for(let i = 0 ; i< limite; i++){
            do{
                sorteado = Math.floor(Math.random() * 35)
            }while(abstracoesEscolhidas.includes(sorteado))
            abstracoesEscolhidas.push(sorteado)
        }
    }
}

criaDado = (local, ul) => {
    if(local === 0){
        acoesEscolhidas.forEach( n => {
            let img = criaImg(n, 'acao')
            ul.appendChild(criaLi(img))
        })
        return ul
    }else if(local === 1){
        coisasEscolhidas.forEach( n => {
            let img = criaImg(n, 'coisas')
            ul.appendChild(criaLi(img))
        })
        return ul
    }else{
        abstracoesEscolhidas.forEach( n => {
            let img = criaImg(n, 'abstrato')
            ul.appendChild(criaLi(img))
        })
        return ul
    }
}

