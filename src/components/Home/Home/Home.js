import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AboutUs from '../AboutUs/AboutUs';
import Advantages from '../Advantages/Advantages';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import Header from '../Header/Header/Header';
import OurServices from '../OurServices/OurServices';
import OurWork from '../OurWork/OurWork';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header/>
            <BusinessInfo/>
            <OurServices/>
            <AboutUs/>
            <Reviews/>
            <OurWork/>
            <Advantages/>
            <Footer/>
        </div>
    );
};

export default Home;