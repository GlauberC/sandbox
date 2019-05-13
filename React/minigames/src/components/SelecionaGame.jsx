import React, {Component} from 'react'
import {Link} from 'react-router-dom'
export default class SelecionaGame extends Component{
    render(){
        return(
            <div>
                <div className = 'jumbotron'>
                    <h1>Selecione um jogo</h1>
                </div>
                <div className = 'list-group'>
                    <Link className = 'list-group-item' to="/parouimpar">Par ou Impar</Link> 
                </div>
                <div className = 'list-group'>
                    <Link className = 'list-group-item' to="/pedrapapeltesoura">Pedra Papel e Tesoura</Link> 
                </div>
            </div>
        )
    }
}