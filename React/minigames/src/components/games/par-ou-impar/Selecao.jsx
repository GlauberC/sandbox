import React, {Component} from 'react'
export default class Selecao extends Component{
    constructor(){
        super()
        this.state = {
            numero: 0
        }
    }
    mudaNumero = (e) => {
        this.setState({numero: e.target.value})
        this.props.numero(e.target.value)
    }

    render(){

        return(
            <div>
                <div className = 'row'>
                    <div className = 'offset-1 col-md-4'>
                        <h4>Escolha do jogador</h4>
                        <input onChange = {this.mudaNumero} type = 'number' value = {this.state.numero} min = '0' max = '5' />
                    </div>
                    <div className = 'offset-2 col-md-4'>
                        <h4>Escolha do adversário</h4>
                        <p>{this.props.adversario}</p>
                    </div>
                </div>
            </div>
        )
    }
}