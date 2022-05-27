import React from 'react';
import Box from "@mui/material/Box";
import bg from "../access/SlideBackground.png";
import ContainerWithPadding from "./ui/ContainerWithPadding";
import {Button, ButtonGroup, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import ButtonPink from "./ui/ButtonPink";
import img from "../access/Frame 1.png";
import {styled} from "@mui/material/styles";

const SliderButton = styled(Button)(() => ({
    minWidth: "14.82px !important",
    minHeight: "3.09px !important",
    background: "#EEEEEE",
    borderRadius: "50px",
    transform: "matrix(1, 0, 0, -1, 0, 0)",
    border: "none",
    padding: "0.15rem 0.7rem",
    "&:disabled": {
        minWidth: "25.31px !important",
        minHeight: "8.15px !important",
        background: "#414880",
        borderRadius: "50px !important",
    },
    margin: "0 .5rem",
}))

function HeroSection() {
    return (
        <>
            <Box
                position="absolute"
                component="img"
                src={bg}
                alt=""
                sx={{
                    top: 0, left: 0, width: "85vw", maxHeight: "100vh", zIndex: -1,
                }}
            />
            <ContainerWithPadding>
                <Stack
                    // position="absolute"
                    direction={{xs: 'column', sm: 'row'}}
                    spacing={{xs: 1, md: 2}}
                    zIndex={999}
                    sx={{
                        width: "100%",
                        marginTop: {xs: "30%", md: "25%", sm: "20%", lg: "10%"},
                        justifyContent: "center",
                        alignItems: 'center',
                    }}>
                    <Box
                        component="div"
                        sx={{
                            maxWidth: {lg: "40%"}, marginLeft: {lg: "3.9rem"}, textAlign: {xs: "center", lg: "left"}
                        }}>
                        <Typography
                            variant="h2"
                            component="h2"
                            fontSize="4.8rem"
                            fontWeight={600}
                            sx={{
                                color: "#091156"
                            }}>
                            Clinic & beauty <br/> consultant
                        </Typography>
                        <Typography
                            marginBottom="2.8rem"
                            variant="h5"
                            component="p"
                            sx={{color: "#091156"}}>
                            It is a
                            long established fact that a reader
                            will be
                            by the readable
                            content of a page.
                        </Typography>
                        <ButtonPink>More Details</ButtonPink>
                    </Box>
                    <Box component="img" alt="img" src={img}
                         sx={{display: {xs: "none", lg: "block"}, maxWidth: "60rem"}}/>

                </Stack>
                <ButtonGroup
                    variant="outlined"
                    aria-label="outlined button group"
                    sx={{width: "100%", justifyContent: "center", marginTop: "8rem", alignItems: "center"}}>
                    <SliderButton></SliderButton>
                    <SliderButton disabled></SliderButton>
                    <SliderButton></SliderButton>
                </ButtonGroup>
            </ContainerWithPadding>
        </>
    );
}

export default HeroSection;