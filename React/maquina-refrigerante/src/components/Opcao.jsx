import React from 'react'
import './css/opcao.css'


export default props => {
    const style = {margin: "1em"}

    return <div>
        <button style = {style} className = {"btn col-md-4 " + props.color}
            onClick = {(e) => props.selecionaRefri(props.nome, props.preco)}>
            {props.nome}<br/>R$ {props.preco}
        </button>
    </div>
}
    