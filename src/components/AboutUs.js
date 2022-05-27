import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import {useNavigate} from "react-router-dom";
import SideSectionWithComponent from "./ui/SideSectionWithComponent";
import img from '../access/61573684a3156d5a8b5a1f2bd2815948.jpg'
import Box from "@mui/material/Box";
import {Button, Modal, Stack} from "@mui/material";
import ButtonPink from "./ui/ButtonPink";
import playIcon from '../access/playbtn.svg'
import background from '../access/BGright.png'

export default function AboutUs(props) {
    return (
        <SideSectionWithComponent
            reverse={false}
            header="About Us"
            slogan="We are the best beauty clinic"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.
Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim."
            actionBox={<ActionBox/>}
            component={<Image/>}
        >
            {/*Background*/}
            <Box component="img"
                 alt="" src={background}
                 position="absolute"
                 zIndex="-1"
                 right={0}
                 bottom={{
                     lg: "-10rem"
                 }}
                 maxWidth={{
                     lg: "65%"
                 }}
            />
        </SideSectionWithComponent>
    );
}


function Image() {
    return <Box sx={{
        width: "47.6rem",
        height: "35rem",
        boxShadow: "0 0 50px 25px #FFFFFF",
        borderRadius: "5rem",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
    }>
        <Box component="img" alt="" src={img}/>
    </Box>
}

function ActionBox() {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "45rem",
        border: 'none',
    };

    return <Stack spacing={2} direction="row">
        <ButtonPink onClick={() => navigate('/about')}>Learn More</ButtonPink>
        <Button
            onClick={handleOpen}
            startIcon={<Box component="img" src={playIcon} alt="" sx={{
                height: "4.9rem",
            }}/>}
            sx={{
                border: "none",
                outline: "none",
                background: "none",
                display: "flex",
                alignItems: "center",
                fontWeight: 600,
                fontSize: "1.6rem",
                letterSpacing: ".1em",
                color: "#8B8B8B",
                // marginLeft
            }}>Watch video</Button>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <iframe width="450" height="300" src="https://www.youtube.com/embed/X31t_cnTcS4"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </Box>
            </Fade>
        </Modal>
    </Stack>
}