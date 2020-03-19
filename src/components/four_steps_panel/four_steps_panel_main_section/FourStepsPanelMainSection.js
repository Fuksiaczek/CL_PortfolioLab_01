import React, {Component} from 'react';
import './_four_steps_panel_main_section.scss';

import Decorator from "../../general/decorator/Decorator";



class FourStepsPanelMainSection extends Component
{
    render() {
        return (
            <>
                <section className="section-four-steps-panel-main">
                    <div className="container">
                        <div className="main">
                            <div className="main-background"/>
                            <div className="main-info">
                                <div className="main-info-text">
                                    <h2>Oddaj rzeczy, których już nie chcesz</h2>
                                    <h2>POTRZEBUJĄCYM</h2>
                                </div>
                                <Decorator/>
                                <h2>Wystarczą 4 proste kroki</h2>
                                <div className="main-info-steps">
                                    <div className="main-info-steps-step">
                                        <h2>1</h2>
                                        <h3>Wybierz rzeczy</h3>
                                    </div>
                                    <div className="main-info-steps-step">
                                        <h2>2</h2>
                                        <h3>Spakuj je w&nbsp;worki</h3>
                                    </div>
                                    <div className="main-info-steps-step">
                                        <h2>3</h2>
                                        <h3>Wybierz fundację</h3>
                                    </div>
                                    <div className="main-info-steps-step">
                                        <h2>4</h2>
                                        <h3>Zamów kuriera</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default FourStepsPanelMainSection;