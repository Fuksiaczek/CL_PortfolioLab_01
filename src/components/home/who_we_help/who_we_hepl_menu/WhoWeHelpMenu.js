import React, {Component} from 'react';

import './_who_we_help_menu.scss';
import {Link} from "react-router-dom";

class WhoWeHelpMenu extends Component
{
    render() {
        return (
            <>
                <div className="who-we-help-menu">
                    <ul>
                        <li>
                            <Link>Fundacjom</Link>
                        </li>
                        <li>
                            <Link>Organizacjom pozarządowym</Link>
                        </li>
                        <li>
                            <Link>Lokalnym zbiórkom</Link>
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}

export default WhoWeHelpMenu;