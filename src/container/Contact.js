import React from 'react';
import Box from "@mui/material/Box";
import ContactUsInContactUs from "../components/ContactUsInContactUs";
import Banner from "../components/ui/Banner";
import backgroundImage from '../access/map.png'
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";

function Contact() {
    return (
        <Box component="div">
            <ContactUsInContactUs/>
            <Banner hasOverlay={false} backgroundImage={backgroundImage}/>
            <GetInTouch/>
            <Footer/>
        </Box>
    );
}

export default Contact;