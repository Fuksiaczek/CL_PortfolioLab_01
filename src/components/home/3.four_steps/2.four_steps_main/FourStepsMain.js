import React, {Component} from 'react';
import './_four_steps_main.scss';


class FourStepsMain extends Component
{
    render() {
        return (
            <>
                <section className="section-four-steps-main">
                    <div className="container">
                        <div className="four-steps-main">
                            <div className="four-steps-main-col">
                                <div className="four-steps-main-col-icon icon-1"/>
                                <h4>Wybierz rzeczy</h4>
                                <div className="four-steps-main-col-divider"/>
                                <p>ubrania, zabawki, sprzęt i inne</p>
                            </div>
                            <div className="four-steps-main-col">
                                <div className="four-steps-main-col-icon icon-2"/>
                                <h4>Spakuj je</h4>
                                <div className="four-steps-main-col-divider"/>
                                <p>skorzystaj z worków na śmieci</p>
                            </div>
                            <div className="four-steps-main-col">
                                <div className="four-steps-main-col-icon icon-3"/>
                                <h4>Zdecyduj komu chcesz pomóc</h4>
                                <div className="four-steps-main-col-divider"/>
                                <p>wybierz zaufane miejsce</p>
                            </div>
                            <div className="four-steps-main-col">
                                <div className="four-steps-main-col-icon icon-4"/>
                                <h4>Zamów kuriera</h4>
                                <div className="four-steps-main-col-divider"/>
                                <p>kurier przyjedzie w dogodnym terminie</p>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default FourStepsMain;