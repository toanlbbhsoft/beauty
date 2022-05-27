import React from 'react';
import {Stack} from "@mui/material";
import logo1 from '../access/LOGO1.png';
import logo2 from '../access/LOGO2.png';
import logo3 from '../access/LOGO3.png';
import logo4 from '../access/LOGO4.png';
import logo5 from '../access/LOGO5.png';
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import CenterSectionWithComponent from "./ui/CenterSectionWithComponent";

const LogoClient = styled(Box)(() => ({
    width: "14.7rem",

}))

function OurClients(props) {
    return (
        <CenterSectionWithComponent title="Our Clients" slogan="Well-known agencies"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit">
            <Stack direction="row" sx={{
                width: "100%",
                justifyContent: {
                    md: "space-between",
                    xs: "center"
                },
                alignItems: "center",
                flexWrap: "wrap"
            }}>
                <LogoClient component="img" alt="" src={logo1}/>
                <LogoClient component="img" alt="" src={logo2}/>
                <LogoClient component="img" alt="" src={logo3}/>
                <LogoClient component="img" alt="" src={logo4}/>
                <LogoClient component="img" alt="" src={logo5}/>
            </Stack>
        </CenterSectionWithComponent>


    );
}

export default OurClients;