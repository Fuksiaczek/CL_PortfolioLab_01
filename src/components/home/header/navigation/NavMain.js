import React, {Component} from 'react';
import './_navigation.scss';

import {Link} from 'react-scroll';

class NavMain extends Component
{
    render() {
        return (
            <>
                <div className="container">
                    <nav className="nav-main nav">
                        <ul>
                            <li>
                                <Link to="main">Start</Link>
                            </li>
                            <li>
                                <Link to="three-columns">O co chodzi?</Link>
                            </li>
                            <li>
                                <Link to="four-steps">O nas</Link>
                            </li>
                            <li>
                                <Link to="/">Fundacja i organizacje</Link>
                            </li>
                            <li>
                                <Link to="/">Kontakt</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </>
        )
    }
}

export default NavMain;