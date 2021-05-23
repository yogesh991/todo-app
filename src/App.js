import React, { Component } from 'react';
import FirstComponent from './components/learning-exercise/FirstComponent';
import SecondComponent, {AdditionalComponent} from './components/learning-exercise/SecondComponent';
import ThirdComponent from './components/learning-exercise/ThirdComponent';
import './App.css';
import Counter from './components/counter/Counter';

class App extends Component {
  render(){
    return (
      <div className="App">
        My First React App - MyToDo Application
        <Counter></Counter>
        <Counter by={5}></Counter>
        <Counter by={10}></Counter>
        
      </div>
    );
  }
}


export default App;
