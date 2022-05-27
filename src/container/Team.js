import React from 'react';
import Box from "@mui/material/Box";
import OurTeam from "../components/OurTeam";
import AssistanceTeam from "../components/AssistanceTeam";
import Banner from "../components/ui/Banner";
import bgBanner from "../access/team/unsplash_rE6FqsyyqwM.png";
import OurTestimonials from "../components/OurTestimonials";
import Footer from "../components/Footer";

function Team() {
    return (
        <Box component="div" sx={{marginTop: "22.9rem"}}>
            <OurTeam/>
            <AssistanceTeam/>
            <Banner
                direction="column"
                title="Customer satisfaction is our main goal"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
                backgroundImage={bgBanner}
            />
            <OurTestimonials/>
            <Footer marginTop={{lg: "10rem"}} />
        </Box>
    );
}

export default Team;