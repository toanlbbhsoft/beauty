import React from 'react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {Stack} from "@mui/material";
import {styled} from "@mui/material/styles";

const ContainerStyled = styled(Container)(() => ({
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    padding: "0 !important"
}))
const TypographyTitle = styled(Typography)(() => ({
    color: "#FF64AE",
    fontWeight: "600",
}))
const TypographySlogan = styled(Typography)(() => ({
    fontWeight: 600,
    fontSize: "3.6rem",
    lineHeight: "125%",
    maxWidth: "46rem",
    margin: "1.2rem 0",
    color: "#091156"
}))
const TypographyDescription = styled(Typography)(() => ({
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "center",
    letterSpacing: "0.1em",
    color: "#8B8B8B",
    maxWidth: "85rem",
    marginBottom: "8.2rem",
}))

const StackStyled = styled(Stack)(({theme}) => ({
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "0",
    [theme.breakpoints.up("xs")]: {
        flexDirection: "column"
    },
    [theme.breakpoints.up("lg")]: {
        flexDirection: "row"
    },
}))

function CenterSectionWithCard({title, slogan, description, children}) {
    return (
        <ContainerStyled>
            <TypographyTitle variant="h5" component="h1">{title}</TypographyTitle>
            <TypographySlogan variant="h2" component="h2">{slogan}</TypographySlogan>
            <TypographyDescription variant="p" component="p">{description}</TypographyDescription>
            <StackStyled spacing={5}>{children}</StackStyled>
        </ContainerStyled>
    );
}

export default CenterSectionWithCard;