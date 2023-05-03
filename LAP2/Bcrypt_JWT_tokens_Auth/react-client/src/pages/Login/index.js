import React, { Component } from 'react';

class Login extends Component {
    state = {
        email: "",
        password: ""
    }

    handleInput = e => this.setState({ [e.target.name]: e.target.value })
    formIncomplete = () => Object.values(this.state).some(v => !v)

    login = e => {
        e.preventDefault()
        this.props.login(this.state)
    }

    render(){
        return (
            <form onSubmit={this.login}>
                <input type="email" name="email" value={this.state.email} onChange={this.handleInput} placeholder="Email" />
                <input type="password" name="password" value={this.state.password} onChange={this.handleInput} placeholder="Password" />
                <input type="submit" className={this.formIncomplete() ? 'disabled' : 'enabled'} disabled={this.formIncomplete()} value="Login" />
            </form>
        );
    }
}

export default Login;
