import React, {Component} from 'react'
export default class Placar extends Component{
    render(){
        return(
            <div>
                <div className = 'row'>
                    <div className = 'col-md-1'>
                        <h4>Placar jogador</h4>
                        <p>{this.props.jogador}</p>
                    </div>
                    <div className = 'offset-8 col-md-1'>
                        <h4>Placar adversário</h4>
                        <p>{this.props.adversario}</p>
                    </div>
                </div>
            </div>
        )
    }
}