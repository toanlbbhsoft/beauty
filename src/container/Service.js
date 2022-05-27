import React from 'react';
import Box from "@mui/material/Box";
import OurServices from "../components/OurServices";
import SideSectionWithComponent from "../components/ui/SideSectionWithComponent";
import Typography from "@mui/material/Typography";
import img1 from '../access/service/Animation1.svg';
import img2 from '../access/service/Animation2.svg';
import img3 from '../access/service/Animation3.svg';
import bgBanner from '../access/service/unsplash_NPjNtTExSJ4.png'
import arrow from '../access/service/angle-double-right.svg';
import playButton from '../access/playButtonTransparent.svg'
import Banner from "../components/ui/Banner";
import ServicesFAQ from "../components/ServicesFAQ";
import Footer from "../components/Footer";

function Service() {
    return (
        <Box component="div">
            <OurServices/>
            <SideSectionWithComponent
                reverse={true}
                header="Beauty Consultation"
                slogan="We services beauty consultation"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero."
                marginActionBox="0.9rem"
                component={<ImageBox img={img1}/>}
                actionBox={<ActionBox/>}/>
            <SideSectionWithComponent
                reverse={false}
                header="Skin Treatements"
                slogan="Skin care and treatment by expert"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero."
                marginActionBox="0.9rem"
                component={<ImageBox img={img2}/>}
                actionBox={<ActionBox/>}/>
            <SideSectionWithComponent
                reverse={true}
                header="Beauty Product"
                slogan="We present quality beauty products"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero."
                marginActionBox="0.9rem"
                component={<ImageBox img={img3}/>}
                actionBox={<ActionBox/>}/>
            <Banner

                direction="row"
                title="Best responsibility and service for our customers"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
                backgroundImage={bgBanner}
                actionComponent={
                    <Box sx={{
                        display: "flex",
                        flexDirection: {
                            lg:"row",
                            xs:"column"
                        },
                        alignItems: "center",

                    }}>
                        <Box component="img" alt="" src={playButton} sx={{
                            // marginLeft: "1.3rem",
                            width: "12.7rem"
                        }}></Box>
                        <Typography sx={{
                            fontWeight: 600,
                            fontSize: "1.6rem",
                            lineHeight: "2.4rem",
                            letterSpacing: "0.1em",
                            color: "#fff",
                        }}
                        >Treatments Videos</Typography>

                    </Box>
                }
            />
            <ServicesFAQ />
            <Footer marginTop={{lg: "11rem"}}  />
        </Box>
    );
}

export default Service;

const ActionBox = () => {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
        }}>
            <Typography sx={{
                fontWeight: 600,
                fontSize: "1.6rem",
                lineHeight: "2.4rem",
                letterSpacing: "0.1em",
                color: "#091156",
            }}
            >Make an Appointment</Typography>
            <Box component="img" alt="" src={arrow} sx={{
                marginLeft: "1.3rem",
                width: "2.5rem"
            }}></Box>
        </Box>
    )
}
const ImageBox = ({img})=>{
    return(<Box component="img" alt="" src={img} sx={{
        maxWidth: {
            md: "47.5rem",
            xs: "36.5rem"
        }
    }}/>)
}