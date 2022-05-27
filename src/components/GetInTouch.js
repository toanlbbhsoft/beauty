import React from 'react';
import ContainerWithPadding from "./ui/ContainerWithPadding";
import CenterSectionWithCard from "./ui/CenterSectionWithCard";
import {Card, Grid} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import markIcon from '../access/map-marker-alt.svg';
import phoneIcon from '../access/phone-alt.svg';
import mailIcon from '../access/mail-bulk.svg'

const CardStyled = styled(Card)(({active}) => ({
    paddingLeft: "3.4rem",
    paddingRight: "3.4rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center", // maxHeight: "45.8rem",
    maxWidth: "42.4rem",
    minWidth: active ? "35rem" : "28rem",
    // height: active ? "62.56rem" : "auto",
    background: "transparent",
    boxShadow: active ? "0 25px 50px 25px #F7F7FF;" : "none",
    borderRadius: "4.2rem",
    border: "none",
    outline: "none",
    margin: active ? "0 2rem" : "0",
}))

function GetInTouch(props) {
    return (<ContainerWithPadding>
        <CenterSectionWithCard
            title="Get in Touch"
            slogan="Get direct handling by us"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
        >
            <CardContact img={markIcon} field="Address" name="101 Baker Street, NY"
                         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"/>
            <CardContact active={Boolean(true)} img={phoneIcon} field="Phone" name="+896 120 5889"
                         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"/>
            <CardContact img={mailIcon} field="Mail" name="mail@company.com"
                         description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"/>
        </CenterSectionWithCard>
    </ContainerWithPadding>);
}

export default GetInTouch;

function CardContact({img, field, name, description, active = Boolean(false)}) {
    return (<Grid item xs={12} md={6} lg={4}>
            <CardStyled active={active} sx={{
                width: {
                    customHome1: active ? "42.4rem" : "auto",
                }
            }}>
                <Box component="img" src={img} alt=""
                     sx={{borderRadius: "100%", width: "6.5rem", margin: "5.3rem  auto"}}/>
                <Typography variant="h5" sx={{
                    fontWeight: 600, fontSize: "1.6rem", lineHeight: "125%", color: "#FF64AE", marginBottom: "1.6rem"
                }}>{field}</Typography>
                <Typography variant="h5" sx={{
                    fontWeight: 600, fontSize: "2.4rem", lineHeight: "125%", color: "#091156", marginBottom: "1.6rem"
                }}>{name}</Typography>
                <Typography variant="p" sx={{
                    fontWeight: 400,
                    fontSize: "1.4rem",
                    lineHeight: "2.1rem",
                    letterSpacing: "0.1em",
                    color: "#8B8B8B",
                    marginBottom: "5.2rem",
                }}>{description}</Typography>
            </CardStyled>
        </Grid>

    )
}