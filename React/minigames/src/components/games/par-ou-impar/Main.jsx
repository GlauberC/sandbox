import React, {Component} from 'react'
import Placar from './Placar'
import Selecao from './Selecao'

export default class Main extends Component{
    constructor(){
        super()
        this.state = {
            placarJogador: 0,
            placarAdversario : 0,
            numeroJogador: 0,
            numeroAdversario: '',
            msg: '',
            styleMsg: '',
            displayBotoes: 1 ,
        }
    }

    resolucao = (e) => {
        // par = 0 , impar = 1
        let numeroAdversarioSorteado = Math.floor( Math.random() * 6 )
        this.setState({numeroAdversario : String(numeroAdversarioSorteado)}) 
        
        let resultado = ( this.state.numeroJogador +  numeroAdversarioSorteado ) % 2 === 0

        if( e.target.value === '0') {
            resultado ? this.jogadorVenceu() : this.jogadorPerdeu()
        } else {
            resultado ? this.jogadorPerdeu() : this.jogadorVenceu()
        }
    }
    jogadorVenceu = () => {
        this.setState({placarJogador: this.state.placarJogador + 1})
        this.setState({msg: ''})
        this.setState({styleMsg: 'green'})
        this.setState({displayBotoes: 0})
        setTimeout(() => {
            this.setState({msg: 'O jogador venceu a partida'})
            this.setState({displayBotoes: 1})
        }, 300)
        
        
    }
    jogadorPerdeu = () => {
        this.setState({placarAdversario: this.state.placarAdversario + 1})
        this.setState({msg: ''})
        this.setState({styleMsg: 'red'})
        this.setState({displayBotoes: 0})
        setTimeout(() => {
            this.setState({msg: 'O jogador perdeu a partida'})
            this.setState({displayBotoes: 1})
        }, 300)
        
        
    }

    getNumeroJogador = ( n ) =>{
        this.setState({ numeroJogador: n })
    }
    
    render(){
        let stylesMsg = {
            'backgroundColor': this.state.styleMsg,
            'color': 'white'
        }
        let botoes = this.state.displayBotoes === 0 ? '' :
        (
            <div className = 'row mt-4 offset-1'>
                <button value = '0' onClick = { this.resolucao } className = 'btn btn-primary col-md-1'>Par</button>
                <button value = '1' onClick = { this.resolucao } className = 'btn- btn-danger col-md-1'>Impar</button>
            </div>
        )

        let mensagem = this.state.msg == '' ? '' : <p  className ='offset-4 col-md-3 alert' style = {stylesMsg}>{this.state.msg}</p>
        return(
            <main className = 'container'>
                <Placar jogador = { this.state.placarJogador } adversario = { this.state.placarAdversario } />
                <Selecao numero = { this.getNumeroJogador } adversario = { this.state.numeroAdversario }/>
                {botoes}
                
                <div className = 'row mt-4'>
                    {mensagem}
                </div>
            </main>
        )
    }
}