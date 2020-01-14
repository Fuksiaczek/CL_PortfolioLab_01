import React, {Component} from 'react';
import './_header.scss';

import NavMain from '../navigation/NavMain';
import NavLogRegist from '../navigation/NavLogRegist';

class Header extends Component
{
    render() {
        return (
            <>
                <header className="header">
                    <NavLogRegist/>
                    <NavMain/>
                </header>
            </>
        )
    }
}

export default Header;