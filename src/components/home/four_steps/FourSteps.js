import React, {Component} from 'react';

import './_four_steps.scss';

import FourStepsHeader from "./four_steps_header/FourStepsHeader";
import FourStepsMain from "./four_steps_main/FourStepsMain";
import FourStepsLast from "./four_steps_last/FourStepsLast";




class Home extends Component
{
    render() {
        return (
            <>
                <section className="section-four-steps">
                    <FourStepsHeader/>
                    <FourStepsMain/>
                    <FourStepsLast/>
                </section>
            </>
        )
    }
}

export default Home;