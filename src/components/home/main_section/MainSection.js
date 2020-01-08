import React, {Component} from 'react';
import './_main_section.scss';

import {Link} from "react-router-dom";



class MainSection extends Component
{
    render() {
        return (
            <>
                <section className="section-main">
                    <div className="container">
                        <div className="main">
                            <div className="main-background"/>
                            <div className="main-info">
                                <div className="main-info-text">
                                    <h2>Zacznij pomagać!</h2>
                                    <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                                </div>
                                <div className="main-info-img"/>
                                <div className="main-info-btns">
                                    <Link to="/login" className="main-info-btn btn">ODDAJ RZECZY</Link>
                                    <Link to="/login" className="main-info-btn btn">ZORGANIZUJ ZBIÓRKĘ</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default MainSection;