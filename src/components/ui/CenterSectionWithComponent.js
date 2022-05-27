import React from 'react';
import ContainerWithPadding from "./ContainerWithPadding";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";

const ContainerMain = styled(Container)(({marginTop}) => ({
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    padding: "0 !important",
    marginTop: marginTop
}))
const TypographyTitle = styled(Typography)(() => ({
    fontWeight: 600,
    color: "#FF64AE"
}))
const TypographySlogan = styled(Typography)(() => ({
    fontWeight: 600,
    fontSize: "3.6rem",
    lineHeight: "125%",
    maxWidth: "45rem",
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

function CenterSectionWithComponent({slogan, title, description, children, marginTop}) {
    return (
        <ContainerWithPadding>
            <ContainerMain marginTop={marginTop}>
                <TypographyTitle variant="h5" component="h1">{title}</TypographyTitle>
                <TypographySlogan variant="h2" component="h2">{slogan}</TypographySlogan>
                <TypographyDescription variant="p" component="p">{description}</TypographyDescription>
                {children}
            </ContainerMain>
        </ContainerWithPadding>
    );
}

export default CenterSectionWithComponent;