import React from 'react';
import {Stack} from "@mui/material";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";


const ProfileCard = styled(Stack)(({theme}) => ({
    [theme.breakpoints.up("xs")]: {
        flexDirection: "column",
    },
    [theme.breakpoints.up("lg")]: {
        flexDirection: "row",
    },
    textAlign: "start",
    width: "100%",
    alignItems: "center",
}))

const ProfileImage = styled(Box)(({theme}) => ({
    borderRadius: "2rem",
    [theme.breakpoints.up("xs")]: {
        width: "100%",
        marginBottom: "3rem",
    },
    [theme.breakpoints.up("lg")]: {
        width: "39.8rem",
        height: "25.3rem",
        marginRight: "17.2rem",
    },
}))


function Profile({img, name, job, description, marginBottom}) {
    return (
        <ProfileCard mb={marginBottom}>
            <ProfileImage component="img" alt="" src={img}/>
            <Box sx={{
                maxWidth: {
                    lg: "40rem"
                }
            }}>
                <Box display="flex" flexDirection="row" alignItems="center">
                    <Typography sx={{
                        fontSize: "1.8rem",
                        color: "#091156",
                        fontWeight: 600,
                    }}>{name} /</Typography>
                    <Typography sx={{
                        fontSize: "1.4rem",
                        color: "#8B8B8B",
                        fontWeight: 400
                    }}>{job}</Typography></Box>
                <Typography sx={{
                    fontWeight: 400,
                    fontSize: "1.6rem",
                    lineHeight: "2.4rem",
                    letterSpacing: "0.1em",
                    color: "#8B8B8B",
                    marginTop: "2rem"
                }}>{description}</Typography>
            </Box>
        </ProfileCard>
    );
}

export default Profile;