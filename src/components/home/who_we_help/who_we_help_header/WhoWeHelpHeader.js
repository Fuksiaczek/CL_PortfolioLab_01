import React, {Component} from 'react';

import './_who_we_help_header.scss';
import Decorator from "../../../decorator/Decorator";

class WhoWeHelpHeader extends Component
{
    render() {
        return (
            <>
                <div className="who-we-help-header">
                    <h2>Komu pomagamy?</h2>
                    <Decorator/>
                </div>
            </>
        )
    }
}

export default WhoWeHelpHeader;