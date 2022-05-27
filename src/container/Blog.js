import React from 'react';
import Box from "@mui/material/Box";
import bg from '../access/blog/bg.png'
import ContainerWithPadding from "../components/ui/ContainerWithPadding";
import {Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import BlogContent from "../components/BlogContent";
import Footer from "../components/Footer";


function Blog() {
    return (
        <Box component="div" sx={{position: "relative", marginTop: "14rem"}}>
            <Box sx={{
                height: "28.5rem",
                width: "100%",
                alignItems: "center",
                display: "flex",
                position: "relative"
            }}>
                <BackgroundBanner/>
                <BannerBlog/>
            </Box>
            <BlogContent/>
            <Footer marginTop={{lg: "10rem"}}/>
            {/*<Footer marginTop={{lg: "10rem"}} />*/}
        </Box>
    );
}

export default Blog;

const BackgroundBanner = () => {
    return (
        <>
            <Box sx={{
                position: "absolute",
                top: "0",
                left: "0",
                backgroundImage: `url(${bg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                zIndex: "-1",
                width: "100%",
                height: "100%"
            }}></Box>
            <Box sx={{
                background: "rgba(9, 17, 86, 0.6)",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: "-1",
                width: "100%",
                height: "100%"
            }}></Box>
        </>
    )
}
const BannerBlog = () => {
    return (
        <ContainerWithPadding>
            <Stack sx={{
                flexDirection: {
                    lg: "row",
                    xs: "column"
                },
                "& .MuiTypography-root": {
                    color: "#fff",
                },
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <Typography sx={{fontSize: "3.6rem", fontWeight: 600}}>Blog</Typography>
                <Typography sx={{fontSize: "1.6rem", fontWeight: 500, letterSpacing: "0.1em"}}>Home •
                    Blog</Typography>
            </Stack>
        </ContainerWithPadding>
    )
}
