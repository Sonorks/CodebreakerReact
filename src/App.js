import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      response: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Codebreaker React</h1>
        </header>
        <div className = "codebreaker">
          <p className="App-intro">
            INGRESA EL SECRETO!
          </p>
          <input placeholder="Secreto" type="text" className="secreto" onChange={this.handleChange} value={this.state.value} ></input><br/>
          <button className="enviarSecreto" onClick={() => this.consumirServicio()}>Enviar Secreto</button>
          <br/><input type="text" placeholder="Respuesta" value={this.state.response}></input>
        </div>
      </div>
    );
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  consumirServicio() {
    var url= 'http://codebreaker-api-jd-s.herokuapp.com/adivinarSecreto/'+this.state.value;
    console.log(url);
    fetch(url)
    .then(results => {
      return results.text();
    }).then( data =>{
      console.log(data);
      this.setState({response: data})
    })
  }
}

export default App;
