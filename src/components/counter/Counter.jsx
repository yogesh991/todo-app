import React, {Component} from 'react';
import './Counter.css';
import Proptypes from 'prop-types';


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
            <div className = "counter">
            <CounterButton by = {1} incrementMethod = {this.increment}></CounterButton>
            <CounterButton by = {5} incrementMethod = {this.increment}></CounterButton>
            <CounterButton by = {10} incrementMethod = {this.increment}></CounterButton>
            <span className = "count">{this.state.counter}</span>
            </div>
            );
    }

    increment(by){
        this.setState({
            counter : this.state.counter + by
        });
    }
}


class CounterButton extends Component{

    constructor(){
        super();

        this.state = {
            counter : 0
        }

        this.increment = this.increment.bind(this);
    }

    render(){
        return(
            <div className="CounterButton">
            <button onClick = {this.increment}>+{this.props.by}</button>
            </div>   
        );
    }

    increment(by){
        this.setState({
            counter : this.state.counter + by
        });
        this.props.incrementMethod(by);
    }

}

Counter.defaultProps = {
    by : 1
}

// Counter.proptypes = {
//     by : Proptypes.number
// }
export default Counter;