import React from 'react';
import SideSectionWithComponent from "./ui/SideSectionWithComponent";
import img from '../access/Contact Animations.png'
import Box from "@mui/material/Box";
import background from '../access/BGright.png';
import ContactUsForm from "./ContactUsForm";

export default function ContactUsInContactUs() {
    return (
        <SideSectionWithComponent
            reverse={true}
            header="Contact Us"
            slogan="Contact service for our customers"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
            actionBox={<ContactUsForm/>}
            component={<Image/>}
            margin="22.9rem 0 0 0"
            contactForm={true}
        >
            {/*Background*/}
            <Box component="img"
                 alt="" src={background}
                 position="absolute"
                 zIndex="-1"
                 right={0}
                 bottom={{
                     lg: "10rem"
                 }}
                 maxWidth="100vw"

            />
        </SideSectionWithComponent>

    );
}


function Image() {
    return (<Box component="img" alt="" src={img}
                 display={{lg: "flex", xs: "none"}}
                 sx={{width: "52rem", alignItems: "center", justifyContent: "center",}}>
    </Box>)
}

