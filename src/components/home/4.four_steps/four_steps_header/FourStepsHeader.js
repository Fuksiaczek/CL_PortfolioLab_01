import React, {Component} from 'react';
import './_four_steps_header.scss';
import Decorator from "../../../general/decorator/Decorator";
import {Link} from "react-scroll";


class FourStepsHeader extends Component
{
    render() {
        return (
            <>
                <section className="section-four-steps-header">
                    <div className="container">
                        <div className="four-steps-header">
                            <h2>Wystarczą 4 proste kroki</h2>
                            <Decorator/>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default FourStepsHeader;