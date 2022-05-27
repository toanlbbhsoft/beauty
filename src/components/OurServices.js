import React from 'react';
import CenterSectionWithComponent from "./ui/CenterSectionWithComponent";
import {Grid} from "@mui/material";
import img1 from '../access/service/unsplash_5TJ0Hoy5FLY.png';
import img2 from '../access/service/unsplash_ZOT2Mewzmh8.png';
import img3 from '../access/service/unsplash_gzfIO69Q6eM.png';
import img4 from '../access/service/unsplash_pTrhfmj2jDA.png'
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";

const ImageBox = styled(Box)(() => ({
    backgroundSize: 'cover',
    backgroundPosition: "center",
    borderRadius: "2.5rem",
    height: "25.4rem",
}))

function OurServices() {
    return (
        <CenterSectionWithComponent
            title="Our Services"
            slogan="We focus on your beauty"
            description="Lorem ipsum dolor sit amet"
            marginTop="22.9rem"
        >
            <Grid container columnSpacing="8.4rem" rowSpacing="6.8rem">
                <Grid item lg={4} md={6} xs={12}>
                    <ImageBox sx={{backgroundImage: `url(${img1})`}}></ImageBox>
                </Grid>
                <Grid item lg={8} md={6} xs={12}>
                    <ImageBox sx={{backgroundImage: `url(${img2})`}}></ImageBox>
                </Grid>
                <Grid item lg={8} md={6} xs={12}>
                    <ImageBox sx={{backgroundImage: `url(${img3})`}}></ImageBox>
                </Grid>
                <Grid item lg={4} md={6} xs={12}>
                    <ImageBox sx={{backgroundImage: `url(${img4})`}}></ImageBox>
                </Grid>
            </Grid>
        </CenterSectionWithComponent>

    );
}

export default OurServices;