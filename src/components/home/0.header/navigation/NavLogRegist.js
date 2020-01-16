import React, {Component} from 'react';
import './_navigation.scss';
import {Link} from "react-router-dom";


class NavLogRegist extends Component
{
    render() {
        return (
            <>
                <div className="container">
                    <nav className="nav-log-reg nav">
                        <ul>
                            <li>
                                <Link to="/login">Zaloguj</Link>
                            </li>
                            <li>
                                <Link to="/registration">Załóż konto</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </>
        )
    }
}

export default NavLogRegist;