import React, {Component} from 'react';

import "./_logout_panel.scss"

import Header from "../home/0.header/header/Header";
import Decorator from "../general/decorator/Decorator";
import {Link} from "react-router-dom";

class LogoutPanel extends Component
{

    render() {

        return (
            <>
                <Header/>
                <section className="section-logout-panel">
                    <div className="container">
                        <div className="logout-panel">
                            <h2>Wylogowanie nastąpiło pomyślnie!</h2>
                            <Decorator/>
                            <Link to="/">
                                <input className="logout-btn"
                                       type="button"
                                       value="Strona główna"/>
                            </Link>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default LogoutPanel;