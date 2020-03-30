import React from 'react';
import axios from 'C:/ReactApp2/src/axios';
import { Redirect } from 'react-router-dom';

import './Auth.css';

class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }

    postLoginHandler = () => {
        const authData = {
            email: this.state.email,
            password: this.state.password,
            returnSecureToken: true
        };
        console.log(authData);
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDhHGxeVNcXRJzwQY99KZZMtZ_ftwsD_a8', authData)
            .then(response => {
                console.log(response)
                localStorage.setItem('token', JSON.stringify(response.data));
                this.props.setAuthentication(true, response.data);
            })
            .catch(err => {
                console.log(err);
                this.props.setAuthentication(false, {});
            });
    }

    postRegisterHandler = () => {
        const authData = {
            email: this.state.email,
            password: this.state.password,
            returnSecureToken: true
        };
        console.log(authData);
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDhHGxeVNcXRJzwQY99KZZMtZ_ftwsD_a8', authData)
            .then(response => {
                console.log(response)
                localStorage.setItem('token', JSON.stringify(response.data)); //guarda los usuarios que han accedido
                this.props.setAuthentication(true, response.data);
            })
            .catch(err => {
                console.log(err);
                this.props.setAuthentication(false, {});
            });
    }

    render() {
        let redirect = null;
        if (this.state.submitted) {
            redirect = < Redirect to = "/posts" / > ;
        }
        return ( <
            div className = "Login o Register" > { redirect } <
            h1 > Login < /h1> <
            label > Email < /label> <
            input type = "text"
            value = { this.state.email }
            onChange = {
                (event) => this.setState({ email: event.target.value }) }
            /> <
            label > Password < /label> <
            input type = "password"
            value = { this.state.password }
            onChange = {
                (event) => this.setState({ password: event.target.value }) }
            /> <
            button onClick = { this.postLoginHandler } > LOGIN < /button> <
            button onClick = { this.postRegisterHandler } > REGISTER < /button> <
            /div>
        );
    }
}

export default Login;
