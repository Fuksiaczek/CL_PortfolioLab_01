import React, {Component} from 'react';

import FourStepsHeader from "./1.four_steps_header/FourStepsHeader";
import FourStepsMain from "./2.four_steps_main/FourStepsMain";
import FourStepsLast from "./3.four_steps_last/FourStepsLast";

class FourSteps extends Component
{
    render() {
        return (
            <>
                <section className="section-four-steps" id="scroll-four-steps">
                    <FourStepsHeader/>
                    <FourStepsMain/>
                    <FourStepsLast/>
                </section>
            </>
        )
    }
}

export default FourSteps;