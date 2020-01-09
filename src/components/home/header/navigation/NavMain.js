import React, {Component} from 'react';
import './_navigation.scss';

import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



class NavMain extends Component
{

render() {
        return (
            <>
                <div className="container">
                    <nav className="nav-main nav">
                        <ul>
                            <li>
                                <Link activeClass="active" to="main">Start</Link>
                            </li>
                            <li>
                                <Link activeClass="active" to="four_steps">O co chodzi?</Link>
                            </li>
                            <li>
                                <Link to="about_us">O nas</Link>
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