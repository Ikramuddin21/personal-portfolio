import React from 'react';
import Header from '../Header/Header';
import HomeContent from '../HomeContent/HomeContent';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <HomeContent />
        </div>
    );
};

export default Home;