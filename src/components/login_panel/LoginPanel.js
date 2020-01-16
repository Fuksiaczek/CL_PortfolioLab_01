import React, {Component} from 'react';

import "./_login_panel.scss"

import Header from './0.header/header/Header';
import Decorator from "../general/decorator/Decorator";
import {Link} from "react-router-dom";

class LoginPanel extends Component
{
    state =
        {
            email: "",
            emailVal: false,
            password: "",
            passwordVal: false,
            errorClassName: "form-error",
            submitHandle: false,
            submitVal: false
        };

    emailValidate = (email) =>
    {
        const emailValidationCharSet = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailValidationCharSet.test(email);
    };

    handleChangeEmail = e =>
    {
        this.setState({
            email: e.target.value
        });
        if(this.emailValidate(this.state.email))
        {
            this.setState({
                emailVal: true,
            })
        }
    };

    handleChangePassword = e =>
    {
        this.setState({
            password: e.target.value.replace(" ", "")
        });
        if(this.state.password.length >= 5)
        {
            this.setState({
                passwordVal: true,
            })
        }
    };

    handleSubmit = e => {

        e.preventDefault();

        const {password, email} = this.state;

        this.setState({
            emailVal: false,
            passwordVal: false,
            submitHandle: true,
        });

        if (this.emailValidate(email)) {
            this.setState({
                emailVal: true,
            })
        }

        if (password.length >= 6) {
            this.setState({
                passwordVal: true,
            })
        }



    };


    render() {
        const {emailVal, passwordVal, submitHandle, errorClassName, password, email, submitVal} = this.state;
        return (
            <>
                <Header/>
                <section className="section-log-in-panel">
                    <div className="container">
                        <div className="log-in-panel">
                            <h2>Zaloguj się</h2>
                            <Decorator/>
                            <div className="log-in-panel-form">
                                <form onSubmit={this.handleSubmit}>
                                    <label>Email
                                        <input type="email"
                                               name="email"
                                               value={email}
                                               onChange={this.handleChangeEmail}
                                               className={(!emailVal & submitHandle) && errorClassName}/>
                                            {(!emailVal && submitHandle) ?
                                            <p className="panel-form-error">
                                                Podany email jest nieprawidłowy!
                                            </p> :
                                            <div className="panel-form-invisible"/>}
                                    </label>
                                    <label>Hasło
                                        <input type="password"
                                               name="password"
                                               value={password}
                                               onChange={this.handleChangePassword}
                                               className={(!passwordVal & submitHandle) && errorClassName}/>
                                            {(!passwordVal && submitHandle) ?
                                            <p className="panel-form-error">
                                                Podane hasło jest nieprawidłowe!
                                            </p> :
                                            <div className="panel-form-invisible"/>}
                                    </label>
                                    <div className="log-in-panel-form-buttons">
                                        <Link to="/registration">
                                            <input className="form-btn"
                                                   type="button"
                                                   value="Złóż konto"/>
                                        </Link>
                                        <input className="form-btn"
                                               type="submit"
                                               value="Zaloguj się"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default LoginPanel;