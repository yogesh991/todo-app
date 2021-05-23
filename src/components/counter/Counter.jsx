import React, {Component} from 'react';
import './Counter.css';

class Counter extends Component{

    constructor(){
        super();

        this.state = {
            counter : 0
        }

        this.increment = this.increment.bind(this);
    }

    render(){
        return(
            <div className="Counter">
            <button onClick = {this.increment}>+{this.props.by}</button>
            <span className = "count">{this.state.counter}</span>    
            </div>   
        );
    }

    increment(){
        console.log('increment')

        this.setState({
            counter : this.state.counter + this.props.by
        });
    }

}

export default Counter;