import React, {Component} from 'react';
import './_navigation.scss';

import { Link} from 'react-scroll'



class NavMain extends Component
{

render() {
        return (
            <>
                <div className="container">
                    <nav className="nav-main nav">
                        <ul>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="scroll-main"
                                    smooth={true}
                                    duration={500}
                                    delay={100}>Start</Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="scroll-four-steps"
                                    smooth={true}
                                    duration={500}
                                    delay={100}
                                    offset={-100}>O co chodzi?</Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="scroll-about-us"
                                    smooth={true}
                                    duration={500}
                                    delay={100}>O nas</Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="scroll-who-we-help"
                                    smooth={true}
                                    duration={500}
                                    delay={100}>Fundacja i organizacje</Link>
                            </li>
                            <li>
                                <Link to="">Kontakt</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </>
        )
    }
}

export default NavMain;