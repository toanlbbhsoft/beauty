import React from 'react';
import ContainerWithPadding from "./ui/ContainerWithPadding";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import heroIMG from '../access/aboutIMG.jpg'
import playBTN from '../access/Play Button.svg'
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";

const GridContainer = styled(Grid)(({theme}) => ({
    justifyContent: "space-between",
    [theme.breakpoints.up("xs")]: {
        alignItems: "center",
        alignContent: "center",
        marginTop: "10rem",
        flexDirection: "column"
    },
    [theme.breakpoints.up("md")]: {
        marginTop: "20rem",
    },
    [theme.breakpoints.up("lg")]: {
        marginTop: "20rem",
        alignItems: "flex-start",
        alignContent: "flex-start",
    },
}))
const TypographyHeader = styled(Typography)(() => ({
    color: "#FF64AE",
    fontWeight: 600,
}))
const TypographySlogan = styled(Typography)(() => ({
    fontWeight: 600,
    fontSize: "3.6rem",
    lineHeight: "125%",
    maxWidth: "73rem",
    margin: "1.2rem 0",
    color: "#091156",
}))
const TypographyDescription = styled(Typography)(() => ({
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0.1em",
    color: "#8B8B8B",
    maxWidth: "85rem",
    marginBottom: "8.2rem",
}))

function AboutSection() {
    return (
        <ContainerWithPadding>
            <GridContainer container rowSpacing={1}>
                <Grid item xs={8}
                      display="flex"
                      flexDirection="column"
                      alignItems="flex-start"
                      sx={{
                          textAlign: {
                              lg: "start",
                              xs: "center"
                          },
                          alignItems: {
                              lg: "flex-start",
                              xs: "center"
                          }
                      }}
                >
                    <TypographyHeader variant="h5" component="h1">About</TypographyHeader>
                    <TypographySlogan variant="h2" component="h2">We are a leading beauty clinic that has been around
                        since 2002</TypographySlogan>
                    <TypographyDescription variant="p" component="p">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit ut aliquam, purus sit amet luctus venenatis</TypographyDescription>
                </Grid>
                <Grid item xs={12} mt={{xs: "3rem", lg: "auto"}} display="flex" justifyContent="flex-end"
                      sx={{position: "relative"}}>
                    <Box component="img" src={heroIMG} alt="" width="100%" sx={{
                        boxShadow: "0 25px 50px 25px #F6F7FF",
                        borderRadius: "5rem",
                    }}/>
                    <Box component="img" src={playBTN} alt="" sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        width: "12rem",
                        transform: "translate(-50%,-50%)"
                    }}/>
                </Grid>
            </GridContainer>
        </ContainerWithPadding>
    );
}

export default AboutSection;

