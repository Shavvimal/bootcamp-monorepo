import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { NavBar, PrivateRoute, LoggedOutRoute } from './components';
import { Login, Register, Feed, Profile, Welcome } from './pages';

class App extends Component {
    state = {
        isLoggedIn: false,
        currentUser: {}
    }

    login = async (userData) => {
        try {
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData)
            }
            const r = await fetch(`http://localhost:3000/auth/login`, options)
            const data = await r.json()
            if (data.err){ throw Error(data.err) }
            this.setState({ isLoggedIn: true, currentUser: data.user })
            this.props.history.push('./feed')
        } catch (err) {
            console.warn(`Error: ${err}`);
        }
    }

    logout = () => {
        this.setState({ isLoggedIn: false })
        this.props.history.push('/')
    }

    render(){
        return (
            <>
            {/* <h1>{this.state.isLoggedIn ? 'In' : 'Out'}</h1> */}
            <NavBar isLoggedIn={this.state.isLoggedIn} logout={this.logout} />

            <Switch>
                <Route exact path='/' component={Welcome}/>
                <LoggedOutRoute path='/login' isLoggedIn={this.state.isLoggedIn} login={this.login} component={Login} />
                <LoggedOutRoute path='/register' isLoggedIn={this.state.isLoggedIn} login={this.login} component={Register} /> 
                <PrivateRoute path='/feed' isLoggedIn={this.state.isLoggedIn} component={Feed} />
                <PrivateRoute path='/profile' isLoggedIn={this.state.isLoggedIn} user={this.state.currentUser} component={Profile} /> 
            </Switch>
            </>
       );
    }
}
export default withRouter(App);