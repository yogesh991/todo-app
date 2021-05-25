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
               password : '',
               hasLoginFailed : false,
               showSuccessMessage : false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }
    render(){
        return (
            <div className="LoginComponent">
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Successful</div>}
                UserName : <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button onClick = {this.loginClicked}>Login</button>
            </div>
        );
    }
    handleChange(event){
        this.setState({[event.target.name] : event.target.value})
    }

    loginClicked(){
        if(this.state.username === 'user' && this.state.password === 'dummy'){
            console.log('Successful')
            this.setState({showSuccessMessage:true})
            this.setState({hasLoginFailed:false})
        }else{
            console.log('Login Failed')
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        }
    }


}
function ShowInvalidCredential(props){
    if(props.hasLoginFailed)
        return <div>Invalid Credentials</div>
    else
        return null    
}

function ShowLoginSuccessMessage(props){
    if(props.showSuccessMessage)
        return <div>Login SuccessFul</div>
    else
        return null
}

export default TodoApp;