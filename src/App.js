import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: '',
      response: '',
      responseSet: '',
      code: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSet = this.handleChangeSet.bind(this);
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
            CONFIGURA EL SECRETO!
          </p>
          <input placeholder="ingresa Secreto" type="text" className="secreto" onChange={this.handleChangeSet} value={this.state.code} ></input><br/>
          <button className="enviarSecreto" onClick={() => this.cambiarSecreto()}>Enviar Secreto</button>
          <br/><input type="text" placeholder="Respuesta" value={this.state.responseSet}></input>
        </div>
        <br/>
        <div className = "codebreaker">
          <p className="App-intro">
            INGRESA EL NÚMERO PARA COMPARAR EL SECRETO!
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

  handleChangeSet(event) {
    this.setState({code: event.target.value});
  }

  consumirServicio() {
    var url= 'http://localhost:5000/adivinarSecreto/'+this.state.value;
    console.log(url);
    fetch(url)
    .then(results => {
      return results.text();
    }).then( data =>{
      console.log(data);
      this.setState({response: data})
    })
  }

  /* enviar() {
    var cadena;
    this.cadena = this.state.defSecreto;
  
    axios.post('http://localhost:5000/setsecreto/',{ "secret": this.cadena })
    .then(res=>  {
      const clave = res.data;
      this.setState({clave});
    })
  } */

  cambiarSecreto() {
    console.log(this.state.code);
    let aux;
    this.aux = this.state.code;
    var url= 'http://localhost:5000/setsecreto/';
    axios.post(url, {"secret":this.aux})
    .then( data =>{
      console.log(data.data);
      this.setState({responseSet: data.data})
    })
  }

}

export default App;
