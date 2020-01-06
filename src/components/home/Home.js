import React, {Component} from 'react';
import '../../App.css';


import HomeHeader from './HomeHeader';
import HomeThreeColumns from './HomeThreeColumns';
import HomeMainSection from './HomeMainSection';



class Home extends Component
{
    render() {
        return (
            <>
                <HomeHeader/>
                <HomeMainSection  name="main"/>
                <HomeThreeColumns/>
            </>
        )
    }
}

export default Home;