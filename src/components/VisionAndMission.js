import React from 'react';
import SideSectionWithComponent from "./ui/SideSectionWithComponent";
import Box from "@mui/material/Box";
import imgRight from "../access/Illustration.svg";
import imgLeft from "../access/Illustration-2.svg";
import {Stack} from "@mui/material";
import bg from "../access/Bubble BG Footer.svg";

function VisionAndMission(props) {
    return (
        <Stack sx={{
            position: "relative"
        }}>
            <Box
                position="absolute"
                component="img"
                src={bg}
                alt=""
                sx={{
                    top: "12rem", left: 0, zIndex: -1,
                    maxWidth: "90vw"
                }}
            />
            <SideSectionWithComponent
                reverse={true}
                header="Our Vision"
                slogan="Be the best and go international"
                description={<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.<br/><br/>Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</span>}
                component={<Box component="img" alt="" src={imgRight} sx={{
                    maxWidth: {
                        md: "47.5rem",
                        xs: "36.5rem"
                    }
                }}/>}
            >
            </SideSectionWithComponent>
            <SideSectionWithComponent
                reverse={false}
                header="Our Mission"
                slogan="Special & premium service to any clients"
                description={<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.<br/><br/>Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</span>}
                component={<Box component="img" alt="" src={imgLeft} sx={{
                    maxWidth: {
                        md: "47.5rem",
                        xs: "36.5rem"
                    }
                }}/>}
            >
            </SideSectionWithComponent>
        </Stack>
    );
}

export default VisionAndMission;