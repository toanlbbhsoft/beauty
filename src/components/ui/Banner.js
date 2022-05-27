import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";
import {styled} from "@mui/material/styles";

const BoxStyled = styled(Box)(({direction, theme}) => ({
    display: "flex",
    flexDirection: direction === "column" ? "column" : "row",
    marginTop: "9rem",
    position: "relative",
    minHeight: "30rem",
    [theme.breakpoints.up("lg")]: {
        textAlign: direction === "column" ? "center" : "start",
        padding: "16.5rem 15rem",
    },
    [theme.breakpoints.up("xs")]: {
        textAlign: "center",
        padding: "5.5rem 5rem"
    },
}))

const BoxBackground = styled(Box)(({backgroundImage}) => ({
    position: "absolute",
    top: "0",
    left: "0",
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    zIndex: "-1",
    width: "100%",
    height: "100%"
}))

const BoxOverlay = styled(Box)(() => ({
    background: "rgba(9, 17, 86, 0.6)",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: "-1",
    width: "100%",
    height: "100%"
}))

const GridContainer = styled(Grid)(({direction}) => ({
    flexDirection: direction === "column" ? "column" : "row",
    alignItems: direction === "column" ? "center" : "",
}))

const TypographyTitle = styled(Typography)(() => ({
    fontWeight: 600,
    fontSize: "3.6rem",
    lineHeight: "125%",
    color: "#FFFFFF",
    zIndex: "2",
    margin: "1.2rem 0"
}))

const TypographyDescription = styled(Typography)(() => ({
    fontWeight: 400,
    fontSize: "1.6rem",
    lineHeight: "2.4rem",
    letterSpacing: "0.1em",
    color: "#CACACA",
    zIndex: "2",
}))

function Banner({direction = "column", title, description, backgroundImage, actionComponent, hasOverlay = true}) {
    // direction : "row", "column"
    return (
        <BoxStyled direction={direction}>
            {/*Background */}
            <BoxBackground backgroundImage={backgroundImage}></BoxBackground>
            {hasOverlay && <BoxOverlay/>}
            {/*End of Background Mask*/}
            <GridContainer container rowSpacing="2rem" direction={direction}>
                <Grid item lg={6} xs={12}>
                    <TypographyTitle>{title}</TypographyTitle>
                    <TypographyDescription>{description}</TypographyDescription>
                </Grid>
                <Grid item lg={6} xs={12} sx={{
                    "& .MuiBox-root": {
                        justifyContent: "center",
                    },
                }}>
                    {actionComponent}
                </Grid>
            </GridContainer>
        </BoxStyled>
    );
}

export default Banner;