import React, {Component} from 'react';
import './_four_steps_last.scss';
import {Link} from "react-router-dom";


class FourStepsLast extends Component
{
    render() {
        return (
            <>
                <section className="section-four-steps-last">
                    <div className="container">
                        <div className="four-steps-last">
                            <Link to="/login" className="btn">ODDAJ RZECZY</Link>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default FourStepsLast;