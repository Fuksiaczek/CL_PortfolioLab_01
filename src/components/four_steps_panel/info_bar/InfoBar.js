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
                                {this.props.yellowBarInfo}
                            </h3>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default InfoBar;