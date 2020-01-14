import React, {Component} from 'react';
import "./_contact_form.scss";
import Decorator from "../../general/decorator/Decorator";
import Footer from "../7.footer/Footer";

class ContactForm extends Component
{
    state =
        {
            name: "",
            nameVal: null,
            email: "",
            emailVal: null,
            message: "",
            messageVal: null,
            submitMessage: "",
            errorClassName: "form-error",
            submitHandle: false,
        };

    handleChange = e =>
    {
        this.setState({
            [e.target.name]: e.target.value.replace(" ", ""),
            [e.target.email]: e.target.value.replace(" ", ""),
            [e.target.message]: e.target.value,
        });
    };

    handleSubmit = e =>
    {
        e.preventDefault();

        const {name, nameVal, email, emailVal, message, messageVal} = this.state;

        this.setState({
            nameVal: false,
            emailVal: false,
            messageVal: false
        });

        function emailValidate(email)
        {
            const emailValidationCharSet = /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return emailValidationCharSet.test(email);
        }

            if(name !== "")
            {
                this.setState({
                    nameVal: true,
                });
            }else
            {
                console.log("błędne imie");
            }

            if(emailValidate(email))
            {
                this.setState({
                    emailVal: true,
                })
            }
            else
            {
                console.log("błędny email");
            }

            if(message.length >= 120)
            {
                this.setState({
                   messageVal: true,
                })
            }
            else
            {
                console.log("błęda wiadomość");
            }

            if( nameVal && emailVal && messageVal)
            {
                console.log("co jest wysyłane: " + name + " " + email + " " + message);

                fetch("https://fer-api.coderslab.pl/v1/portfolio/contact",
                    {
                        headers: {"Content-Type": "application/json"},
                        method: 'POST',
                        dataType: "json",
                        body: JSON.stringify(name, email, message),
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
                                               onChange={this.handleChange}/>
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
                                               className={ (!emailVal & submitHandle) && errorClassName}
                                               onChange={this.handleChange}
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
                                                  onChange={this.handleChange}
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