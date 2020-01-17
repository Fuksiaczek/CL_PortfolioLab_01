import React, {Component} from 'react';

import "./_registration_panel.scss"

import Header from "../home/0.header/header/Header";
import Decorator from "../general/decorator/Decorator";
import {Link} from "react-router-dom";

class RegistrationPanel extends Component
{
    state =
        {
            email: "",
            emailVal: false,
            password: "",
            passwordVal: false,
            passwordRepeat: "",
            passwordRepeatVal: false,
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
        else
        {
            this.setState({
                emailVal: false,
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
        else
        {
            this.setState({
                passwordVal: false,
            })
        }
    };

    handleChangePasswordRepeat = e =>
    {
        this.setState({
            passwordRepeat: e.target.value.replace(" ", "")
        });
        if(this.state.passwordRepeat === this.state.password && this.state.passwordRepeat >= 5)
        {
            this.setState({
                passwordRepeatVal: true,
            })
        }
        else
        {
            this.setState({
                passwordRepeatVal: false,
            })
        }
    };

    handleSubmit = e => {

        e.preventDefault();

        const {password, email, passwordRepeat} = this.state;

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

        if (passwordRepeat === password && passwordRepeat >= 5) {
            this.setState({
                passwordRepeatVal: true,
            })
        }
    };

    render() {
        const {email, emailVal, password, passwordVal, passwordRepeat, passwordRepeatVal,
            submitHandle, errorClassName} = this.state;
        return (
            <>
                <Header/>
                <section className="section-registration-panel">
                    <div className="container">
                        <div className="registration-panel">
                            <h2>Złóż konto</h2>
                            <Decorator/>
                            <div className="registration-panel-form">
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
                                    <label>Powtórz hasło
                                        <input type="password"
                                               name="password"
                                               value={passwordRepeat}
                                               onChange={this.handleChangePasswordRepeat}
                                               className={(!passwordRepeatVal & submitHandle) && errorClassName}/>
                                        {(!passwordRepeatVal && submitHandle) ?
                                            <p className="panel-form-error">
                                                Podane hasła nie są identyczne!
                                            </p> :
                                            <div className="panel-form-invisible"/>}
                                    </label>
                                    <div className="registration-panel-form-buttons">
                                        <Link to="/login">
                                            <input className="form-btn"
                                                   type="button"
                                                   value="Zaloguj się"/>
                                        </Link>
                                        <input className="form-btn"
                                               type="submit"
                                               value="Załóż konto"/>

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

export default RegistrationPanel;