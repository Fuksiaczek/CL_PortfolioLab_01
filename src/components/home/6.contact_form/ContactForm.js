import React, {Component} from 'react';
import "./_contact_form.scss";
import Decorator from "../../general/decorator/Decorator";
import Footer from "../7.footer/Footer";

class ContactForm extends Component
{
    state =
        {
            name: "",
            nameVal: false,
            email: "",
            emailVal: false,
            message: "",
            messageVal: false,
            submitMessage: "",
            errorClassName: "form-error",
            submitHandle: false,
        };

    emailValidate = (email) =>
    {
    const emailValidationCharSet = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailValidationCharSet.test(email);
    };

    handleChangeName = e =>
    {
        this.setState({
            name: e.target.value.replace(" ", ""),
        });
        if(this.state.name !== "")
        {
            this.setState({
                nameVal: true,
            })
        }
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

    handleChangeMessage = e =>
    {
        this.setState({
            message: e.target.value,
        });
        if(this.state.message.length >= 119)
        {
            this.setState({
                messageVal: true,
            })
        }
    };

    handleSubmit = e =>
    {
        e.preventDefault();

        const {name, email, message} = this.state;

        let nameValVar;
        let emailValVar;
        let messageValVar;

        if(name !== "")
        {
            nameValVar = true;
            this.setState({
                nameVal: true,
            })
        }

        if(this.emailValidate(email))
        {
            emailValVar = true;
            this.setState({
                emailVal: true,
            })
        }

        if(message.length > 120)
        {
            messageValVar = true;
            this.setState({
                messageVal: true,
            })
        }

        if(nameValVar && emailValVar && messageValVar)
        {
            fetch("https://fer-api.coderslab.pl/v1/portfolio/contact",
                {
                    headers: {"Content-Type": "application/json"},
                    method: 'POST',
                    dataType: "json",
                    body: JSON.stringify({name, email, message}),
                })
            .then(resp =>{
                if (!resp.ok) {
                    throw new Error("something is wrong...");
                }
                else
                {
                    this.setState({
                        submitMessage: "Wiadomośc została wysłana! W krótce się skontaktujemy.",
                        name: "",
                        email: "",
                        message: "",
                    });
                    console.log(resp);
                }
            })
            .catch(err => console.error(err));
        }
        else
        {
            this.setState({
                submitMessage: "",
                submitHandle: true,
            });
        }
    };

    render() {
        const {name, email, message, submitMessage, errorClassName, submitHandle,
            nameVal, emailVal, messageVal} = this.state;
        return (
            <>
                <section className="section-contact-form " id="scroll-contact-form">
                    <div className="container">
                        <div className="contact-form">
                            <div className="contact-form-img"/>
                            <div className="contact-form-content">
                                <h2>Skontaktuj się z nami</h2>
                                <Decorator/>
                                {submitMessage &&
                                <p className="contact-form-content-submit-message">
                                    {submitMessage}
                                </p>}
                                <form onSubmit={this.handleSubmit}>
                                    <label>Wpisz swoje imię
                                        <input type="text"
                                               name="name"
                                               value={name}
                                               placeholder="Krzysztof"
                                               className={(!nameVal & submitHandle) && errorClassName}
                                               onChange={this.handleChangeName}/>
                                        {(!nameVal && submitHandle) ?
                                            <p className="contact-form-content-error">
                                                Podane imię jest nieprawidłowe!
                                            </p> :
                                            <div className="contact-form-content-invisible"/>}
                                    </label>

                                    <label>Wpisz swój email
                                        <input type="email"
                                               name="email"
                                               value={email}
                                               className={(!emailVal & submitHandle) && errorClassName}
                                               onChange={this.handleChangeEmail}
                                               placeholder="abc@xyz.pl"/>
                                        {(!emailVal && submitHandle) ?
                                            <p className="contact-form-content-error">
                                                Podany email jest nieprawidłowy!
                                            </p> :
                                            <div className="contact-form-content-invisible"/>}
                                    </label>
                                    <label>Wpisz swoją wiadomość
                                        <textarea name="message"
                                                  value={message}
                                                  className={(!messageVal & submitHandle) && errorClassName}
                                                  onChange={this.handleChangeMessage}
                                                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                  nisi ut aliquip ex ea commodo consequat."/>
                                        {(!messageVal && submitHandle) ?
                                            <p className="contact-form-content-error">
                                                Wiadomośc musi mieć co najmniej 120 znaków!
                                            </p> :
                                            <div className="contact-form-content-invisible"/>}
                                    </label>
                                    <input className="form-button" type="submit" value="Wyślij"/>
                                </form>
                            </div>
                        </div>
                        <Footer/>
                    </div>
                </section>
            </>
        )
    }
}

export default ContactForm;