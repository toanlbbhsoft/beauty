import React from 'react';
import Box from "@mui/material/Box";
import OurGallery from "../components/OurGallery";
import Banner from "../components/ui/Banner";
import bgBanner from "../access/gallery/unsplash_eflLpWC1Geo.png";
import playButton from "../access/playButtonTransparent.svg";
import SideSectionWithComponent from "../components/ui/SideSectionWithComponent";
import ButtonPink from "../components/ui/ButtonPink";
import Footer from "../components/Footer";

function Gallery(props) {
    return (
        <Box component="div">
            <OurGallery/>
            <Banner
                direction="column"
                title="Best responsibility and service for our customers"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
                backgroundImage={bgBanner}
                actionComponent={
                    <Box sx={{
                        display: "flex",
                        flexDirection: {
                            lg: "row",
                            xs: "column"
                        },
                        alignItems: "center",

                    }}>
                        <Box component="img" alt="" src={playButton} sx={{
                            // marginLeft: "1.3rem",
                            width: "12.7rem"
                        }}></Box>
                    </Box>
                }
            />
            <SideSectionWithComponent
                reverse={false}
                header="Get The Quota"
                slogan="Want to be handled by our professional team immediately?"
                description="Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim."
                // marginActionBox="0.9rem"
                gridInfoSide={7}
                component={<ButtonPink>Make an Appointment</ButtonPink>}
            />
            <Footer marginTop={{lg: "10rem"}}/>
        </Box>
    );
}

export default Gallery;