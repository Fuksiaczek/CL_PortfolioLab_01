import React, {Component} from 'react';
import '../App.css';


import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';



class Home extends Component
{
    render() {
        return (
            <>
                <HomeHeader/>
                <HomeThreeColumns/>
            </>
        )
    }
}

export default Home;