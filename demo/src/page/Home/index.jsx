import React from 'react';
import './home.scss';
import Banner from './Banner';
import CurrentNews from './CurrentNews';
import Roles from './Roles';
function Home(){

    return (
        <div id = "home-main-div">
            <Banner />
            <Roles />
            <CurrentNews />
        </div>
    )
}

export default Home;