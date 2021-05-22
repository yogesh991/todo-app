import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        My First React App - MyToDo Application
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
      </div>
    );
  }
}

class FirstComponent extends Component {
  render (){
    return (
      <div name="firstComponent">
        FirstComponent is class Component
      </div>  
    );
  }
}
class SecondComponent extends Component {
  render (){
    return (
      <div name="secondComponent">
        SecondComponent is class Component
      </div>  
    );
  }
}

function ThirdComponent(){
  return (
    <div name = "thirdComponent">
      Third Component is Functional Component
    </div>
  );
}

export default App;
