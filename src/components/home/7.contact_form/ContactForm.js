import React, {Component} from 'react';
import "./_contact_form.scss";
import Decorator from "../../general/decorator/Decorator";
import Footer from "../8.footer/Footer";

class ContactForm extends Component
{





    render() {
        return (
            <>
                <section className="section-contact-form" id="scroll-contact-form">
                    <div className="container">
                        <div className="contact-form">
                            <div className="contact-form-img"/>
                            <div className="contact-form-form">
                                <h2>Skontaktuj się z nami</h2>
                                <Decorator/>
                                <form>
                                    <label>Wpisz swoje imię
                                        <input type="text" name="name" placeholder="Krzysztof"/>
                                    </label>
                                    <label>Wpisz swój email
                                        <input type="email" name="email" placeholder="abc@xyz.pl"/>
                                    </label>
                                    <label>Wpisz swoją wiadomość
                                        <textarea name="message"
                                                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                  nisi ut aliquip ex ea commodo consequat."/>
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