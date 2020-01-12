import React, {Component} from 'react';

import './_who_we_help_informations.scss';
import WhoWeHelpInformationsList1 from "./lists/List1";
import WhoWeHelpInformationsList2 from "./lists/List2";
import WhoWeHelpInformationsList3 from "./lists/List3";

class WhoWeHelpInformations extends Component
{
    render() {
        const {activeLi} =  this.props;


        return (
            <>

                    <div className="who-we-help-informations">
                        <div className="who-we-help-informations-text">
                            {activeLi === 0 && <WhoWeHelpInformationsList1/>}
                            {activeLi === 1 && <WhoWeHelpInformationsList2/>}
                            {activeLi === 2 && <WhoWeHelpInformationsList3/>}
                        </div>

                    </div>
            </>
        )
    }
}

export default WhoWeHelpInformations;