import React, { Component } from 'react';
import Opcoes from './components/Opcoes'
import Opcao from './components/Opcao'
import Display from './components/Display'
import Moedas from './components/Moedas'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      selecionado: {
        nome:'',
        preco: 0.00
      },
      dinheiroInserido: 0.00
    }
  }

  selecionaRefri = (nome, preco) => {
    if(this.state.selecionado.nome === ''){
      preco = Number(preco.replace(',', '.'))
      this.setState({selecionado: {nome: nome, preco: preco}})
      console.log(nome, preco)
    }
  }
  cancelaSelecao = () => {
    this.setState({selecionado: {nome:'', preco: 0.00}, dinheiroInserido: 0.00})
  }
  
  inserirMoeda = moeda => {
    if(this.state.selecionado.nome !== ''){
      const novoValor = this.state.dinheiroInserido + moeda
      if(novoValor < this.state.selecionado.preco){
        this.setState({dinheiroInserido: novoValor})
      }
      else{
        this.cancelaSelecao()
      }
    }
  }
  render() {
    let display = this.state.selecionado.nome !== "" ? 
        <Display nome = {this.state.selecionado.nome}
                 preco = {this.state.selecionado.preco}
                 inserido = {this.state.dinheiroInserido}/> :
        null
    let cancela = this.state.selecionado.nome !== "" ?
        <button className = "btn btn-danger btn-lg" onClick = {this.cancelaSelecao}>Cancelar Pedido</button>  :
        null
        
    return (
      <div className = "container">

        {display}
        {cancela}
        <hr/>
        <Opcoes>
          <div className = 'row'>
            <Opcao color = "coca" nome = "Coca Cola" preco = "4,99" selecionaRefri = {(nome, preco) => this.selecionaRefri(nome, preco)} />
            <Opcao color = "laranja" nome = "Fanta Laranja" preco = "4,59" selecionaRefri = {(nome, preco) => this.selecionaRefri(nome, preco)} />
            <Opcao color = "uva" nome = "Fanta Uva" preco = "4,59" selecionaRefri = {(nome, preco) => this.selecionaRefri(nome, preco)} />
            <Opcao color = "sprite" nome = "Sprite" preco = "4,39" selecionaRefri = {(nome, preco) => this.selecionaRefri(nome, preco)} />
            <Opcao color = "kuat" nome = "Kuat" preco = "3,99" selecionaRefri = {(nome, preco) => this.selecionaRefri(nome, preco)} />
          </div>
        </Opcoes>
        <hr/>
        <Moedas inserirMoeda = {moeda => this.inserirMoeda(moeda) }/>


      </div>
      // <Seleciona/>
    )
  }
}

