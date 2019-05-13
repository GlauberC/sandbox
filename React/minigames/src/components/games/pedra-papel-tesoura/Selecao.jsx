import React, {Component} from 'react'
export default class Selecao extends Component{
    constructor(){
        super()
        this.state = {
            numeroJogador: 0,
        }
    }
    clickImage = () => {
        let numero = ( this.state.numeroJogador + 1 ) % 3
        this.props.numeroJogador(numero)
        this.setState( { numeroJogador: numero } )
    }
    render(){

        let valueImg = (n) => {
            return n === 0 ? 'pedra' :
                n === 1 ? 'papel' : 'tesoura'
        }

        let adversario = this.props.numeroAdversario === '' ? '' :
            (<div className = 'offset-4 col-md-2'>
                <h4>Adversario</h4>
                <img src = {require('./img/' + valueImg(Number(this.props.numeroAdversario)) + '.png')} alt = {valueImg(Number(this.props.numeroAdversario))}/>
            </div>)

        return(
            <div className = 'row mt-4'>
                <div className = 'offset-1 col-md-2'>
                    <h4>Jogador</h4>
                    <img onClick = {this.clickImage} src = {require('./img/' + valueImg(this.state.numeroJogador) + '.png')} alt = {valueImg(this.state.numeroJogador)}/>
                </div>
                {adversario}

            </div>
        )
    }
}