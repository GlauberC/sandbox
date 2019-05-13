import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import SelecionaGame from './components/SelecionaGame';
import PedraPapelTesoura from './components/games/pedra-papel-tesoura/PedraPapelTesoura';
import ParOuImpar from './components/games/par-ou-impar/ParOuImpar';


export default class App extends Component {
  render(){
    return(

      <div>
        <BrowserRouter>
          <Switch>
            <Route exact = {true} path = '/' component = {SelecionaGame}/>
            <Route path = '/parouimpar' component = {ParOuImpar}/>
            <Route path = '/pedrapapeltesoura' component = {PedraPapelTesoura}/>
          </Switch>
        </BrowserRouter>
      </div>

    )
  }
}
