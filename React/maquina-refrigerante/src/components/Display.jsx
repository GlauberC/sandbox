import React from 'react'

export default props => 
    <div>
        <h1>{props.nome}</h1> 
        <h2><span className ="small">Inserir:</span>R$  {props.preco.toString().replace('.', ',')}</h2>
        <h2><span className = "small">Valor Inserido:</span> R$ {props.inserido.toFixed(2).toString().replace('.', ',')}</h2>
    </div>