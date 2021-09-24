import React from 'react'
import Button from './componentes/button';
import Input from './componentes/input';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="formulario-cadastro">
        <p className="title">Formulário de Cadastro</p>
        <div className="inputs-button">
          <Input placeholder="Nome: " />
          <Input placeholder="Email: " />
          <Input placeholder="Senha: " />
          <Button />
        </div>
      </div>
    </div>
  );
}

export default App;
