import React, {Component} from 'react';

import WhoWeHelpHeader from "./who_we_help_header/WhoWeHelpHeader";
import WhoWeHelpMenu from "./who_we_hepl_menu/WhoWeHelpMenu";
import WhoWeHelpInformations from "./who_we_help_informations/WhoWeHelpInformations";

class WhoWeHelp extends Component
{
    state =
        {
            activeLi: null,

        };


    handleClickWhoWeHelp = (e, i) =>
    {
        this.setState({
            activeLi: i
        })
    };

    render() {
        return (
            <>
                <section className="section-who-we-help" id="scroll-who-we-help">
                    <div className="container">
                        <div className="who-we-help">
                            <WhoWeHelpHeader/>
                            <WhoWeHelpMenu
                                handleClickWhoWeHelp={this.handleClickWhoWeHelp}/>
                            <WhoWeHelpInformations
                                activeLi={this.state.activeLi}/>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default WhoWeHelp;