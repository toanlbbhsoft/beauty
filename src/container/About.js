import React from 'react';
import Box from "@mui/material/Box";
import AboutSection from "../components/AboutSection";
import ProfessionalTeams from "../components/ProfessionalTeams";
import {BusinessSlogan} from "../components/BusinessSlogan";
import VisionAndMission from "../components/VisionAndMission";
import OurClients from "../components/OurClients";
import Footer from "../components/Footer";

function About() {
    return (
        <Box component="div">
            <AboutSection/>
            <ProfessionalTeams/>
            <BusinessSlogan/>
            <VisionAndMission/>
            <OurClients />
            <Footer marginTop={{lg: "10rem"}} />
        </Box>
    );
}

export default About;

