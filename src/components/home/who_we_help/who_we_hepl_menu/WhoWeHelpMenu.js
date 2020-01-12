import React, {Component} from 'react';

import './_who_we_help_menu.scss';

import {Link} from 'react-scroll';
class WhoWeHelpMenu extends Component
{

    state =
        {
            menuEl: ["Fundacjom", "Organizacjom pozarządowym", "Lokalnym zbiórkom"]
        };

    // handleClickWhoWeHelp = (e, i) =>
    // {
    //     this.setState({
    //         activeLi: i
    //     })
    // };


    render() {
        const {menuEl} = this.state;
        const {handleClickWhoWeHelp} = this.props;

        const menu = [];
        for (let i = 0; i < menuEl.length ; i++)
        {
            const menuList =
                <li>
                    <Link key={i}
                          onClick={e => handleClickWhoWeHelp(e, i)}
                          activeClass="active"
                          to="scroll-who-we-help"
                          smooth={true}
                          duration={500}
                          delay={100}>
                        {menuEl[i]}
                    </Link>
                </li>;

            menu.push(menuList);
        }

        return (
            <>
                <div className="who-we-help-menu">
                    <ul>
                        {menu}
                    </ul>
                </div>
            </>
        )
    }
}

export default WhoWeHelpMenu;