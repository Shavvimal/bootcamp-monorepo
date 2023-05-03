import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Register extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        passwordConfirmation: ""
    }

    handleInput = e => this.setState({ [e.target.name]: e.target.value })
    formIncomplete = () => Object.values(this.state).some(v => !v) || this.state.password !== this.state.passwordConfirmation

    register = async (e) => {
        e.preventDefault();
        try {
            const userData = { 
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            }
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            }
            const r = await fetch(`http://localhost:3000/auth/register`, options)
            const data = await r.json()
            if (data.err){ throw Error(data.err) }
            this.props.login(userData);
            this.props.history.push('./feed')
        } catch (err) {
            console.warn(err);
            this.setState({
                username: "",
                email: "",
                password: "",
                passwordConfirmation: ""
            })
        }
    }

    render(){
        return (
            <form onSubmit={this.register}>
                <input type="text" name="username" value={this.state.username} onChange={this.handleInput} placeholder="Username" />
                <input type="email" name="email" value={this.state.email} onChange={this.handleInput} placeholder="Email" />
                <input type="password" name="password" value={this.state.password} onChange={this.handleInput} placeholder="Password" />
                <input type="password" name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.handleInput} placeholder="Confirm Password" />
                <input type="submit" className={this.formIncomplete() ? 'disabled' : 'enabled'} disabled={this.formIncomplete()} value="Create Account" />
            </form>
        );
    }
}

export default withRouter(Register);
