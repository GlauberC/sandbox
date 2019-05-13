import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Placar from '../../gerais/Placar'
import Selecao from './Selecao'

export default class PedraPapelTesoura extends Component{
    constructor(){
        super()
        this.state = {
            placarJogador: 0,
            placarAdversario : 0,
            numeroJogador: 0,
            numeroAdversario: '',
            msg: '',
            displayBotao: 1,
            styleMsg: ''
        }
    }
    resolucao = () => {
        let sorteioAdversario = Math.floor( Math.random() * 3 )
        this.setState({numeroAdversario: String(sorteioAdversario)})

        // Para evitar clicks repetitivos muito rapido
        this.setState({displayBotao: 0})
        setTimeout(() => {
            this.setState({displayBotao: 1})
        }, 300)
        let jogador = Number(this.state.numeroJogador)
        
        if(jogador === sorteioAdversario){
            this.empate()
        }else if(Math.abs(jogador - sorteioAdversario) === 1){
            jogador > sorteioAdversario ? this.jogadorVenceu() : this.jogadorPerdeu()
        }else{
            jogador < sorteioAdversario ? this.jogadorVenceu() : this.jogadorPerdeu()
        }



    }
    getNumeroJogador = ( n ) =>{
        this.setState({ numeroJogador: Number(n) })
    }
    empate = () => {
        this.setState({styleMsg: 'blue'})
        this.setState({msg: 'A partida empatou'})
    }
    jogadorVenceu = () => {
        this.setState({styleMsg: 'green'})
        this.setState({msg: 'O jogador Venceu'})
        this.setState({placarJogador: this.state.placarJogador + 1})
    }
    jogadorPerdeu = () => {
        this.setState({styleMsg: 'red'})
        this.setState({msg: 'O jogador Perdeu'})
        this.setState({placarAdversario: this.state.placarAdversario + 1})
    }
    render(){
        let styleMsg = {
            'backgroundColor': this.state.styleMsg,
            'color': 'white'
        }

        let msg = this.state.msg === '' ? '' :
            <p style = {styleMsg} className = 'mt-4 offset-3 col-md-4 alert'>{this.state.msg}</p>

        let botaoJogar = this.state.displayBotao === 0 ? '' :
            <button onClick = {this.resolucao} className = 'btn btn-success offset-4 col-md-2'>Jogar</button>

        return(
            <div>
                <div className = 'jumbotron'>
                    <h1>Pedra Papel e Tesoura</h1>
                </div>
                <main className = 'container'>
                    <Placar jogador = { this.state.placarJogador } adversario = { this.state.placarAdversario } />
                    <Selecao numeroJogador = { n => this.getNumeroJogador(n)} numeroAdversario = {this.state.numeroAdversario}/>
                    {botaoJogar}
                    {msg}
                </main>
                <small>Tips: Clique na imagem do jogador</small><br/>
                <Link className = 'btn btn-danger mt-4' to = '/'>Voltar para a seleção de jogos</Link>
            </div>
        )
    }
}