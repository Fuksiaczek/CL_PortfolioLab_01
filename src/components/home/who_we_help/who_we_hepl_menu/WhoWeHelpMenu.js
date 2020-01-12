import React, {Component} from 'react';

import './_who_we_help_menu.scss';

class WhoWeHelpMenu extends Component
{
    render() {
        return (
            <>
                <div className="who-we-help-menu">
                    <ul>
                        <li>
                            Fundacjom
                        </li>
                        <li>
                            Organizacjom pozarządowym
                        </li>
                        <li>
                            Lokalnym zbiórkom
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}

export default WhoWeHelpMenu;