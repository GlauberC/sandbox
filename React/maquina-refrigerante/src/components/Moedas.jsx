import React from 'react'

const style = {
    margin: '0.5em'
}
const bootstrapClass = "btn btn-secondary col-md-3"

export default props => {
    return(

        <div>
        <h2>Selecione a moeda</h2>
        <div className = "row">
            <button style = {style} onClick = {() => props.inserirMoeda(0.05)}  className = {bootstrapClass}>R$ 0,05</button>
            <button style = {style} onClick = {() => props.inserirMoeda(0.10)}  className = {bootstrapClass}>R$ 0,10</button>
            <button style = {style} onClick = {() => props.inserirMoeda(0.25)}  className = {bootstrapClass}>R$ 0,25</button>
            <button style = {style} onClick = {() => props.inserirMoeda(0.50)}  className = {bootstrapClass}>R$ 0,50</button>
            <button style = {style} onClick = {() => props.inserirMoeda(1.00)}  className = {bootstrapClass}>R$ 1,00</button>
        </div>
    </div>
    )
}
