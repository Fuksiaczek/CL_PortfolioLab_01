import React, {Component} from 'react';
import '../../App.css';

import NavMain from '../navigation/NavMain';
import NavLogRegist from '../navigation/NavLogRegist';

class HomeHeader extends Component
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

export default HomeHeader;