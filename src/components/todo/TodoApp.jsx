import React, {Component} from 'react';

class TodoApp extends Component{
    render(){
        return (
            <div className="TodoApp">
                <LoginComponent></LoginComponent> 
            </div>
        );
    }
}

class LoginComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
               username : 'user',
               password : '' 
        }
        this.handleChange = this.handleChange.bind(this)
    }
    render(){
        return (
            <div className="LoginComponent">
                UserName : <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button>Login</button>
            </div>
        );
    }
    handleChange(event){
        console.log(event.target.value)
        this.setState({[event.target.name] : event.target.value})
    }
}

export default TodoApp;