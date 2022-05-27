import React, {useState} from 'react';
import CenterSectionWithComponent from "./ui/CenterSectionWithComponent";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Stack} from "@mui/material";
import {styled} from "@mui/material/styles";
import img1 from '../access/team/unsplash_Z5g_6TLS6Ho.png';
import img2 from '../access/team/unsplash_y2T5hT7pWx4.png';
import img3 from '../access/team/unsplash_W7b3eDUb_2I.png';
import star from '../access/team/star.svg'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {keyframes} from "@mui/styled-engine";

const ReviewBox = styled(Stack)(() => ({
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
}))

const showUp = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const CardStyled = styled(Stack)(() => ({
    alignItems: "center",
    maxWidth: "55rem",
    animation: `${showUp} 2s ease 0s 1 normal forwards`,
}))

const data = [
    {
        img: img1,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit.",
        rating: 5
    },
    {
        img: img2,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit.",
        rating: 4
    },
    {
        img: img3,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit.",
        rating: 5
    }
]

function OurTestimonials() {
    const [indexReview, setIndexReview] = useState(0);

    const nextReview = () => {
        setIndexReview(prev => {
            if (prev < data.length - 1) return prev + 1;
            else return 0;
        })
    }
    const prevReview = () => {
        setIndexReview(prev => {
            if (prev > 0) return prev - 1;
            else return data.length - 1;
        })
    }

    return (
        <>
            <CenterSectionWithComponent
                title="Assistance Team"
                slogan="Meet the pro assistance"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
                marginTop="11.5rem"
            >
                <ReviewBox>
                    <ArrowBackIcon sx={{
                        fontSize: "3.5rem",
                        color: "#091156"
                    }} onClick={prevReview}/>
                    {indexReview >= 0 && <ReviewCard data={data[indexReview]}/>}
                    <ArrowForwardIcon sx={{
                        fontSize: "3.5rem",
                        color: "#091156"
                    }} onClick={nextReview}/>
                </ReviewBox>
            </CenterSectionWithComponent>
        </>
    );
}

export default OurTestimonials;

const ReviewCard = ({data}) => {
    return (
        <CardStyled key={data.img}>
            <Box component="img" alt="" src={data.img} sx={{
                width: "7.3rem",
                alignItems: "center",
                display: "flex"
            }}></Box>
            <Typography sx={{
                fontWeight: 400,
                fontSize: "1.4rem",
                lineHeight: "2.1rem",
                textAlign: "center",
                letterSpacing: "0.1em",
                color: "#8B8B8B",
                margin: "1.4rem 0"
            }}>{data.review}</Typography>
            <Stack direction="row">
                {Array(data.rating).fill().map(() => (
                    <Box component="img" src={star} sx={{
                        width: "2.5rem",
                        height: "2.5rem",
                        margin: "0 0.6rem"
                    }}/>
                ))}
            </Stack>
        </CardStyled>
    )
}
