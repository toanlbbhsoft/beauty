import React from 'react';
import SideSectionWithComponent from "./ui/SideSectionWithComponent";
import img from '../access/Contact Animations.png'
import Box from "@mui/material/Box";
import background from '../access/BGleft.png';
import ContactUsForm from "./ContactUsForm";

export default function ContactUs() {
    return (<SideSectionWithComponent
        reverse={true}
        header="Contact Us"
        slogan="Send your inquiry to our expert team"
        description="Lorem ipsum dolor sit amet nulla turapis tellus."
        actionBox={<ContactUsForm/>}
        component={<Image/>}
    >
        {/*Background*/}
        <Box component="img"
             alt="" src={background}
             position="absolute"
             zIndex="-1"
             left={0}
             bottom={{
                 lg: "10rem"
             }}
             maxWidth="100vw"

        />
    </SideSectionWithComponent>);
}


function Image() {
    return (<Box component="img" alt="" src={img}
                 display={{lg: "flex", xs: "none"}}
                 sx={{width: "52rem", alignItems: "center", justifyContent: "center",}}>
    </Box>)
}

