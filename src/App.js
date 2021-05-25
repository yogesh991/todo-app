import React, { Component } from 'react';
import FirstComponent from './components/learning-exercise/FirstComponent';
import SecondComponent, {AdditionalComponent} from './components/learning-exercise/SecondComponent';
import ThirdComponent from './components/learning-exercise/ThirdComponent';
import './App.css';
import Counter from './components/counter/Counter';
import TodoApp from './components/todo/TodoApp';


class App extends Component {
  render(){
    return (
      <div className="App">
        {/*<Counter></Counter> */}
        <TodoApp></TodoApp>
      </div>
    );
  }
}


export default App;
