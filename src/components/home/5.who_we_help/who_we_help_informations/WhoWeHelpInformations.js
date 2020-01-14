import React, {Component} from 'react';

import './_who_we_help_informations.scss';
import WhoWeHelpInformationsFoundations from "./list/foundations";
import WhoWeHelpInformationsOrganizations from "./list/organizations";
import WhoWeHelpInformationsLocal from "./list/local";

class WhoWeHelpInformations extends Component
{
    render() {
        const {activeLi} =  this.props;


        return (
            <>
                <div className="who-we-help-informations">
                    {activeLi === 0 && <WhoWeHelpInformationsFoundations/>}
                    {activeLi === 1 && <WhoWeHelpInformationsOrganizations/>}
                    {activeLi === 2 && <WhoWeHelpInformationsLocal/>}
                </div>
            </>
        )
    }
}

export default WhoWeHelpInformations;