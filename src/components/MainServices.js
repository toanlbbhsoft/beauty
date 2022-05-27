import React from 'react';
import ContainerWithPadding from "./ui/ContainerWithPadding";
import CenterSectionWithCard from "./ui/CenterSectionWithCard";
import {Card, Grid} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import img1 from '../access/Animation1.png';
import img2 from "../access/Animation2.png";
import img3 from "../access/Animation3.png";


const CardStyled = styled(Card)(() => ({
    paddingLeft: "3.4rem",
    paddingRight: "3.4rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    maxWidth: "34.3rem",
    maxHeight: "45.8rem",
    background: "#FFFFFF",
    boxShadow: "0px 25px 50px 25px #F7F7FF",
    borderRadius: "4.2rem",
}))

function CardService({img, title, description}) {
    return (
        <Grid item xs={12} md={6} lg={4} sx={{
          '&.MuiGrid-root' : {
              margin:"0",
          }
        }}>
            <CardStyled>
                <Box component="img" src={img} alt=""
                     sx={{borderRadius: "100%", width: "16rem", margin: "5.9rem auto"}}/>
                <Typography variant="h5" sx={{
                    fontWeight: 600,
                    fontSize: "1.8rem",
                    lineHeight: "125%",
                    color: "#091156",
                    marginBottom: "1.6rem"
                }}>{title}</Typography>
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

function MainServices() {
    return (
        <ContainerWithPadding>
            <CenterSectionWithCard
                title="Main Services"
                slogan="Learn services to focus on your beauty"
                description="Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis."
            >
                <CardService img={img1} title="Beauty consultation"
                             description="Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis."/>
                <CardService img={img2} title="Skin treatments"
                             description="Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis."/>
                <CardService img={img3} title="Beauty product"
                             description="Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis."/>
            </CenterSectionWithCard>
        </ContainerWithPadding>
    );
}

export default MainServices;