import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        My First React App - MyToDo Application
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
      </div>
    );
  }
}

class FirstComponent extends Component {
  render (){
    return (
      <div name="firstComponent">
        FirstComponent
      </div>  
    );
  }
}
class SecondComponent extends Component {
  render (){
    return (
      <div name="secondComponent">
        SecondComponent
      </div>  
    );
  }
}

export default App;
