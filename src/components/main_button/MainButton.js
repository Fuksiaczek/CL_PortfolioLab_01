import React, {Component} from 'react';
import './_main_button.scss';

import {Link} from "react-router-dom";



class MainButton extends Component
{
    render() {
        return (
            <>
                <Link to="link" className="btn" value="value"/>
            </>
        )
    }
}

export default MainButton;