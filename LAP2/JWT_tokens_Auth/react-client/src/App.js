import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import { Switch, Route, withRouter } from 'react-router-dom';
import { NavBar, PrivateRoute, LoggedOutRoute } from './components';
import { Login, Register, Feed, Profile, Welcome } from './pages';

class App extends Component {
    state = {
        isLoggedIn: false,
        currentUser: {}
    }

    componentDidMount = () => {
        const token = localStorage.getItem('token');
        if(token){
            this.setState({ isLoggedIn: true })
            this.login(token);
        }
    }

    requestLogin = async (userData) => {
        try {
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            }
            const r = await fetch(`http://localhost:3000/auth/login`, options)
            const data = await r.json()
            console.log('data is', data);
            if (!data.success) { 
                throw new Error('Login not authorised'); 
            } else {
                this.login(data.token)
            } 
        } catch (err) {
            console.warn(`${err}`);
        }
    }

    login = async (token) => {
        console.log(token);
        try {
            const user = jwt_decode(token);
            localStorage.setItem('token', token)
            this.setState({ isLoggedIn: true, currentUser: user });
            this.props.history.push('/feed')
        } catch (err) {
            console.warn(`${err}`);
        }
    }

    logout = () => {
        this.setState({ isLoggedIn: false });
        localStorage.clear();
        this.props.history.push('/');
    }

    render(){
        return (
            <>
            <NavBar isLoggedIn={this.state.isLoggedIn} logout={this.logout} />

            <Switch>
                <Route exact path='/' component={Welcome}/>
                <LoggedOutRoute path='/login' isLoggedIn={this.state.isLoggedIn} login={this.requestLogin} component={Login} />
                <LoggedOutRoute path='/register' isLoggedIn={this.state.isLoggedIn} login={this.requestLogin} component={Register} /> 
                <PrivateRoute path='/feed' isLoggedIn={this.state.isLoggedIn} component={Feed} logout={this.logout} />
                <PrivateRoute path='/profile' isLoggedIn={this.state.isLoggedIn} user={this.state.currentUser} component={Profile} /> 
            </Switch>
            </>
       );
    }
}
export default withRouter(App);