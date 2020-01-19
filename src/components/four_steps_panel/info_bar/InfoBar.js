import React, {Component} from 'react';
import './_info_bar.scss';


class InfoBar extends Component
{
    render() {
        return (
            <>
                <section className="section-four-steps-panel-info-bar">
                    <div className="container">
                        <div className="info-bar">
                            <h2>Ważne!</h2>
                            <h3>
                                Uzupełnij szczegóły dotyczące Twoich rzeczy.
                                Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.
                            </h3>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default InfoBar;