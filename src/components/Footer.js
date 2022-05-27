import React from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ContainerWithPadding from "./ui/ContainerWithPadding";
import {Grid, List, ListItem, ListSubheader, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";

import bulletList from '../access/bullet.svg';
import bg from '../access/FooterBG.svg'
import footerLogo from '../access/FooterLogo.png'

import Facebook from '../access/facebook-f.png';
import Twitter from '../access/twitter (1).png';
import Linkedin from "../access/linkedin-in.png";
import YouTube from '../access/youtube.png';
import Instagram from '../access/instagram2.png';
import {Link} from "react-router-dom";
import ToTopButton from "../access/ToTopButton.svg";

const ListItemTriangle = styled(ListItem)(() => ({
    "&.MuiListItem-root:before": {
        content: `url(${bulletList})`, position: "absolute", left: 0,
    },
    color: "#D7DBFF"
}))
const ListSubheaderStyled = styled(ListSubheader)(() => ({
    fontWeight: 600,
    lineHeight: '2.7rem',
    fontSize: '1.8rem',
    color: '#fff',
    background: "none",
    marginBottom: "2.4rem",
}))

const SocialIcon = styled(Box)(() => ({
    width: "2.5rem"
}))

const FooterContainer = styled(Container)(({marginTop, theme}) => ({
    paddingRight: 0,
    paddingLeft: 0,
    width: "100%",
    "&.MuiContainer-root": {
        maxWidth: "100vw",
        padding: 0,
        fontSize: '1.6rem',
        position: "relative",
    },
    [theme.breakpoints.up("lg")]: {
        "&.MuiContainer-root": {
            marginTop: marginTop?.lg ? marginTop.lg : "20rem"
        }
    }

}))

function Footer({marginTop}) {
    const style = {
        position: 'absolute',
        bottom:"17rem",
        right:"6.5rem",
        width:"3.6rem",
    }
    return (
        <FooterContainer>
            <Background/>
            {/*Main content*/}
            <ContainerWithPadding>
                <Stack direction="column" sx={{
                    color: "#D7DBFF",
                }}>
                    {/*Navlink and infomation*/}
                    <Stack sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: {
                            customHome1: "10rem", xs: "5rem"
                        },
                        marginBottom: {
                            customHome1: "10rem", xs: "2rem"
                        },
                        flexDirection: {
                            customHome1: "row", xs: "column"
                        },
                        // textAlign: {
                        //     xs: 'center', customHome1: "start"
                        // }
                    }}>
                        <Stack  direction="column" sx={{
                            alignItems: {
                                customHome1: "flex-start", xs: "center"
                            }
                        }}>
                            <Box component="img" alt="" src={footerLogo} maxWidth="25.8rem"/>
                            <Typography fontSize="1.6rem" margin="2.6rem 0" lineHeight="2.1rem"><b>Beautice</b> is a
                                Beauty
                                Clinic WordPress Theme.</Typography>
                            <Typography fontSize="1.4rem" fontStyle="italic">Baker Steet 101, NY, United
                                States.</Typography>
                            <Box display="flex" sx={{
                                flexDirection: {
                                    md: "row",
                                    xs: "column"
                                }
                            }}>
                                <Typography fontSize="1.4rem" sx={{
                                    marginRight: {
                                        md: "2.8rem"
                                    }
                                }}>+521 569 8966.
                                </Typography>
                                <Typography fontSize="1.4rem"
                                            fontStyle="italic"
                                            sx={{textDecoration: "underline"}}>mail@company.com.
                                </Typography>
                            </Box>
                        </Stack>
                        <Grid maxWidth="50%" container rowSpacing={1}
                              columnSpacing={{xs: 1, sm: 2, md: 3}}
                              justifyContent="space-between"
                        >
                            <Grid item xs={6}>
                                <List sx={{listStyleType: 'disc'}}>
                                    <ListSubheaderStyled>
                                        Pages
                                    </ListSubheaderStyled>
                                    <Link to="/"> <ListItemTriangle>Home</ListItemTriangle></Link>
                                    <Link to="/about"><ListItemTriangle>About</ListItemTriangle></Link>
                                    <Link to="/service"><ListItemTriangle>Service</ListItemTriangle></Link>
                                    <Link to="/gallery"><ListItemTriangle>Gallery</ListItemTriangle></Link>
                                    <Link to="/team"><ListItemTriangle>Team</ListItemTriangle></Link>
                                </List>
                            </Grid>
                            <Grid item xs={6}>
                                <List sx={{listStyleType: 'disc'}}>
                                    <ListSubheaderStyled>
                                        Infomation
                                    </ListSubheaderStyled>
                                    <ListItemTriangle>Terms & conditions</ListItemTriangle>
                                    <ListItemTriangle>Privacy policy</ListItemTriangle>
                                    <Link to="/blog"> <ListItemTriangle>Blog</ListItemTriangle></Link>
                                    <Link to="/contact"> <ListItemTriangle>Contact</ListItemTriangle></Link>
                                </List>
                            </Grid>
                        </Grid>
                    </Stack>
                    {/*Social and copyright*/}
                    <Stack justifyContent="space-between" sx={{
                        flexDirection: {
                            customHome1: "row", xs: "column"
                        }, alignItems: "center", textAlign: "center",
                    }}>
                        <Stack sx={{
                            width: "30rem",
                            justifyContent: "space-between",
                            flexDirection: "row",
                            alignItems: "center",
                            marginBottom: "2rem"
                        }}>
                            <SocialIcon component="img" alt="" src={Facebook}></SocialIcon>
                            <SocialIcon component="img" alt="" src={Twitter}></SocialIcon>
                            <SocialIcon component="img" alt="" src={Linkedin}></SocialIcon>
                            <SocialIcon component="img" alt="" src={YouTube}></SocialIcon>
                            <SocialIcon component="img" alt="" src={Instagram}></SocialIcon>
                        </Stack>
                        <Typography sx={{
                            fontSize: "1.6rem", lineHeight: "2.4rem", letterSpacing: "0.1em",
                        }}>© AltDesain Studio 2021 - All right reserved.</Typography>
                    </Stack>
                </Stack>
            </ContainerWithPadding>
            <Box component="img" src={ToTopButton} sx={style} onClick={()=>window.scrollTo(0,0)}/>
        </FooterContainer>);
}

export default Footer;


const Background = () => {
    return (
        <>
            <Box component="img" alt="" src={bg} sx={{
                width: "100%",
                position: "absolute",
                bottom: 0,
                display: {
                    customHome1: "block", xs: "none"
                }
            }}/>
            <Box component="div" width="100%"
                 sx={{
                     backgroundColor: "#0D165C",
                     boxShadow: "0 -6px 15px 10px rgba(13,22,92,0.69)",
                     position: "absolute",
                     bottom: 0,
                     zIndex: -1,
                     height: {
                         customHome1: "50%", xs: "100%"
                     }
                 }}/>
        </>
    )
}