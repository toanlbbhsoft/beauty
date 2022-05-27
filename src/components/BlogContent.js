import React from 'react';
import {alpha, styled} from '@mui/material/styles';
import ContainerWithPadding from "./ui/ContainerWithPadding";
import {Grid, InputBase, Pagination, Paper, Stack, useMediaQuery, useTheme} from "@mui/material";
import BlogPost from "./BlogPost";

import SearchIcon from '@mui/icons-material/Search';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import imgPost1 from '../access/blog/unsplash_3ewkNkfJj2k.png'
import imgPost2 from '../access/blog/unsplash_7tDGb3HrITg.png'
import imgPost3 from '../access/blog/unsplash_0_McYfdyEDA.png'
import imgRecent1 from '../access/blog/c8b46a49a4cbc2c51e5e7553c5375054.jpg';
import imgRecent2 from '../access/blog/4917ef3e5a3e8ee1487a40e3665b35dc.jpg';
import imgRecent3 from '../access/blog/ed21e92086ee567a7b56f7c9501cc51d.jpg';

import Facebook from "../access/blog/facebook-f.svg";
import Instagram from '../access/blog/Instagram.svg';
import Linkedin from '../access/blog/linkedin-in.svg';
import Twitter from '../access/blog/Twitter.svg'

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    backgroundColor: "#fff",
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',

    boxShadow: "-2px 4px 31px 9px #F2F4FF",
    borderRadius: "5rem",
    overflow: "hidden",
}));
const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing("2rem", "0", "2rem", "2.7rem"),
        // vertical padding + font size from searchIcon
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
        fontSize: "1.6rem",
    },
}));
const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing("2.6rem", "2rem"),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    right: 0,
    backgroundColor: "#172176",
    color: "#fff",
    "& .MuiSvgIcon-root": {
        fontSize: "3.5rem"
    }
}));

const BoxStyled = styled(Box)(() => ({
    padding: "5.8rem 2.8rem 6.5rem 4.9rem",
    background: "#FFFFFF",
    boxShadow: "-2px 4px 31px 9px #F2F4FF",
    borderRadius: "2.5rem",
}))

const TypographyHeader = styled(Typography)(() => ({
    fontSize: "1.6rem",
    fontWeight: "600",
    color: "#091156",
    marginBottom: "3rem"
}))
const TypographyTitle = styled(Typography)(({color}) => ({
    fontSize: "1.4rem",
    fontWeight: "600",
    color: color,
}))
const TypographyDescription = styled(Typography)(() => ({
    fontWeight: 400,
    fontSize: '1.2rem',
    lineHeight: "1.8rem",
    letterSpacing: " 0.1em",
    color: "#8B8B8B"
}))
const RecentImage = styled(Box)(({img}) => ({
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "8.2rem",
    height: "8.2rem",
}))

const Tag = styled(Paper)(() => ({
    background: "#FFFFFF",
    boxShadow: "0 4px 17px #EEF0FF",
    borderRadius: "5rem",
    width: "8.2rem",
    height: "2.6rem",
    fontWeight: 400,
    fontSize: "1.4rem",
    lineHeight: "2.1rem",
    textAlign: "center",
    letterSpacing: "0.1em",
    color: "#8B8B8B",
    padding: '0.2rem 0.6rem'
}))
const SocialIcon = styled("img")(() => ({
    width: "4.3rem",
    height: "4.3rem",
    padding: "1rem",
    borderRadius: "100%",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 19px 11px #F6F7FF",

}))

function BlogContent() {
    const theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.up('sm'))
    // const isMd = useMediaQuery(theme.breakpoints.up('md'))
    return (
        <ContainerWithPadding>
            <Grid container mt="4.08rem" columnSpacing="6rem" sx={{
                justifyContent: "center"
            }}>
                <Grid item xs={12} lg={8} direction="column">
                    <BlogPost
                        img={imgPost1}
                        category="Consultation"
                        title="How much does a consultation cost at our clinic?"
                        description="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…"
                    />
                    <BlogPost
                        img={imgPost2}
                        category="Beauty"
                        title="Watch out! don't choose the wrong beauty product"
                        description="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…"
                    />
                    <BlogPost
                        img={imgPost3}
                        category="Treatments"
                        title="About skin care you need to know"
                        description="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…"
                    />
                </Grid>
                <Grid item xs={isSm ? 7 : 12} lg={4}>
                    <Search>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{'aria-label': 'search'}}
                        />
                        <SearchIconWrapper>
                            <SearchIcon fontSize="large"/>
                        </SearchIconWrapper>
                    </Search>
                    <BoxStyled mt="7.3rem">
                        <TypographyHeader>Recent Posts</TypographyHeader>
                        <RecentPost img={imgRecent1} title="01 jan 2021"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing."/>
                        <RecentPost img={imgRecent2} title="01 jan 2021"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing."/>
                        <RecentPost img={imgRecent3} title="01 jan 2021"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing."/>
                    </BoxStyled>
                    <BoxStyled mt="8.3rem">
                        <TypographyHeader>Categories</TypographyHeader>
                        <Category>Consultation</Category>
                        <Category>Beauty</Category>
                        <Category>Treatments</Category>
                        <Category>News</Category>
                    </BoxStyled>
                    <BoxStyled mt="8.3rem">
                        <TypographyHeader>Cloud Tags</TypographyHeader>
                        <Stack direction="row" flexWrap="wrap"
                               sx={{
                                   justifyContent: "space-between",
                                   height: {
                                       xs: "23.6rem",
                                       md: "11.6rem"
                                   }
                               }}>
                            <Tag>beauty</Tag>
                            <Tag>cute</Tag>
                            <Tag>skin</Tag>
                            <Tag>glow</Tag>
                            <Tag>style</Tag>
                            <Tag>clinic</Tag>
                            <Tag>style</Tag>
                            <Tag>great</Tag>
                            <Tag>cute</Tag>
                        </Stack>
                    </BoxStyled>
                    <BoxStyled mt="8.3rem">
                        <TypographyHeader>Social Connect</TypographyHeader>
                        <Stack direction="row" justifyContent="space-between">
                            <SocialIcon alt="Facebook" src={Facebook}/>
                            <SocialIcon alt="Twitter" src={Twitter}/>
                            <SocialIcon alt="Instagram" src={Instagram}/>
                            <SocialIcon alt="Instagram" src={Linkedin}/>
                        </Stack>
                    </BoxStyled>
                </Grid>
            </Grid>
            <Pagination hidePrevButton hideNextButton count={3} sx={{
                '& .Mui-selected': {
                    backgroundColor: "#172176 !important",
                    color: "#fff"
                },
                '& .MuiPaginationItem-root': {
                    fontSize: "1.6rem",
                    height: "3.5rem",
                    width: "3.5rem",
                    margin: "0 1rem"
                },
                '& .MuiPagination-ul': {
                    justifyContent: "center"
                },
                marginTop: {
                    lg: "0",
                    xs: "8rem"
                }
            }}/>
        </ContainerWithPadding>
    );
}

export default BlogContent;

const RecentPost = ({img, title, description}) => {
    return (
        <Stack direction="row" sx={{
            justifyContent: {
                lg: 'space-between',
                xs: "flex-start"
            },
            marginBottom: "2.6rem",
            flexWrap: "wrap"
        }}>
            <RecentImage img={img} sx={{
                borderRadius: "1rem",
                marginRight: "2.6rem"
            }}/>
            <Box maxWidth="15.5rem">
                <TypographyTitle color="#FF64AE">{title}</TypographyTitle>
                <TypographyDescription>{description}</TypographyDescription>
            </Box>
        </Stack>
    )
}

const Category = ({children}) => {
    return (
        <TypographyDescription sx={{
            lineHeight: "2.8rem",
            fontSize: "1.4rem",
            marginBottom: "0.3rem",
        }}>{children}</TypographyDescription>

    )
}
