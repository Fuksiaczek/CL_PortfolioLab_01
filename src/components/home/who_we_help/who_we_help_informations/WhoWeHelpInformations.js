import React, {Component} from 'react';

import './_who_we_help_informations.scss';
import WhoWeHelpInformationsList1 from "./list1/List1";

class WhoWeHelpInformations extends Component
{
    render() {
        return (
            <>

                    <div className="who-we-help-informations">
                        <div className="who-we-help-informations-text">
                            <WhoWeHelpInformationsList1/>
                        </div>

                    </div>
            </>
        )
    }
}

export default WhoWeHelpInformations;