import React from 'react';
import HeroSection from "../components/HeroSection";
import MainServices from "../components/MainServices";
import AboutUs from "../components/AboutUs";
import ProfessionalTeams from "../components/ProfessionalTeams";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";


function Home() {
    return (<>
        <HeroSection/>
        <MainServices/>
        <AboutUs/>
        <ProfessionalTeams/>
        <ContactUs/>
        <Footer/>
    </>);
}

export default Home;