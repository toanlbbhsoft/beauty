import React from 'react';
import ContainerWithPadding from "./ui/ContainerWithPadding";
import CenterSectionWithCard from "./ui/CenterSectionWithCard";
import {Card, Grid, Link, Stack} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import img1 from '../access/unsplash_pTrhfmj2jDA.png';
import img2 from "../access/unsplash_FVh_yqLR9eA.png";
import img3 from "../access/unsplash_mEZ3PoFGs_k.png";
import Facebook from "../access/Facebook.png";
import Twitter from "../access/Twitter.png";
import Instagram from "../access/Instagram.png"

const CardStyled = styled(Card)(({active}) => ({
    paddingLeft: "3.4rem",
    paddingRight: "3.4rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center", // maxHeight: "45.8rem",
    maxWidth: "42.4rem",
    height: active ? "62.56rem" : "auto",
    background: "transparent",
    boxShadow: active ? "0 25px 50px 25px #F7F7FF;" : "none",
    borderRadius: "4.2rem",
    border: "none",
    outline: "none",
    margin: active ? "4rem 2rem" : "0",
}))

function ProfessionalTeams() {
    return (<ContainerWithPadding>
        <CenterSectionWithCard
            title="Professional Teams"
            slogan="The Professional expert"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
        >
            <CardProfessional img={img1} field="Surgeon" name="Briyan Nevalli"
                              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"/>
            <CardProfessional active={Boolean(true)} img={img2} field="Dermatologist" name="Bella sebastian"
                              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"/>
            <CardProfessional img={img3} field="Stylist expert" name="Lilly Adams"
                              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"/>
        </CenterSectionWithCard>
    </ContainerWithPadding>);
}

export default ProfessionalTeams;

export function CardProfessional({img, field, name, description, active = Boolean(false)}) {
    return (<Grid item xs={12} md={6} lg={4}>
            <CardStyled active={active} sx={{
                width: {
                    customHome1: active ? "42.4rem" : "auto",
                }
            }}>
                <Box component="img" src={img} alt=""
                     sx={{borderRadius: "100%", width: "14.6rem", margin: "5.3rem  auto"}}/>
                <Typography variant="h5" sx={{
                    fontWeight: 600, fontSize: "1.6rem", lineHeight: "125%", color: "#FF64AE", marginBottom: "1.6rem"
                }}>{field}</Typography>
                <Typography variant="h5" sx={{
                    fontWeight: 600, fontSize: "1.8rem", lineHeight: "125%", color: "#091156", marginBottom: "1.6rem"
                }}>{name}</Typography>
                <Typography variant="p" sx={{
                    fontWeight: 400,
                    fontSize: "1.4rem",
                    lineHeight: "2.1rem",
                    letterSpacing: "0.1em",
                    color: "#8B8B8B",
                    marginBottom: "5.2rem",
                }}>{description}</Typography>
                <Stack direction="row">
                    <Link href="https://twitter.com/" target="_blank" rel="noreferrer noopener">
                        <Box component="img" alt="social icon" src={Twitter}></Box>
                    </Link>
                    <Link href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener">
                        <Box component="img" alt="social icon" src={Facebook}></Box>
                    </Link>
                    <Link href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener">
                        <Box component="img" alt="social icon" src={Instagram}></Box>
                    </Link>
                </Stack>
            </CardStyled>
        </Grid>

    )
}