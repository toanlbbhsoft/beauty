import React from 'react';
import ContainerWithPadding from "./ui/ContainerWithPadding";
import {Grid, ImageList, ImageListItem, useMediaQuery, useTheme} from "@mui/material";
import Typography from "@mui/material/Typography";
import img1 from '../access/gallery/1.png';
import img2 from '../access/gallery/2.png';
import img3 from '../access/gallery/3.png';
import img4 from '../access/gallery/4.png';
import img5 from '../access/gallery/5.png';
import img6 from '../access/gallery/6.png';
import img7 from '../access/gallery/7.png';
import img8 from '../access/gallery/8.png';
import img9 from '../access/gallery/9.png';

const itemData = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

function OurGallery(props) {
    // const isMobile = useMediaQuery(theme.breakpoints.up('sm'))
    const theme = useTheme();
    const isLg = useMediaQuery(theme.breakpoints.up('lg'))
    const isMd = useMediaQuery(theme.breakpoints.up('md'))
    return (
        <ContainerWithPadding>
            <Grid container rowSpacing={1}
                  flexDirection={{
                      xs: "column",
                  }}
                  justifyContent="space-between"
                  sx={{
                      alignItems: {
                          lg: "flex-start",
                          xs: "center"
                      },
                      alignContent: {
                          lg: "flex-start",
                          xs: "center"
                      },
                      marginTop: {
                          md: "20rem",
                          xs: "10rem"
                      },

                  }}
            >
                <Grid container
                      display="flex"
                      flexDirection="row"
                      alignItems="flex-start"
                      justifyContent="center"
                      sx={{
                          textAlign: {
                              lg: "start",
                              xs: "center"
                          },
                          alignItems: "center",
                          marginBottom: "7.5rem"

                      }}
                      spacing={12}
                >
                    <Grid item lg={7}>
                        <Typography variant="h5" fontWeight={600} component="h1"
                                    sx={{color: "#FF64AE"}}>Our Gallery</Typography>
                        <Typography variant="h2" component="h2" sx={{
                            fontWeight: 600,
                            fontSize: "3.6rem",
                            lineHeight: "125%",
                            maxWidth: "73rem",
                            margin: "1.2rem 0",
                            color: "#091156",
                        }}>Check out the collection pictures from our clinic</Typography>
                    </Grid>
                    <Grid item lg={5}>
                        <Typography variant="p" component="p" sx={{
                            fontWeight: 400,
                            fontSize: "16px",
                            lineHeight: "24px",
                            letterSpacing: "0.1em",
                            color: "#8B8B8B",
                            maxWidth: "85rem",
                        }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                            venenatis</Typography>
                    </Grid>

                </Grid>
                {/*<Grid container mt={{xs: "3rem", lg: "auto"}}>*/}
                <ImageList sx={{width: "100%", justifyItems: "center"}}
                           cols={isLg ? 3 : isMd ? 2 : 1}
                           gap="3.8rem"

                >
                    {itemData.map((item) => (
                        <ImageListItem key={item} sx={{
                            maxWidth: "35.6rem"
                        }}>
                            <img
                                src={item}
                                alt={""}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
                <Typography variant="p" component="p" sx={{
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: "0.1em",
                    color: "#8B8B8B",
                    maxWidth: "66rem",
                    marginTop: "6.6rem",
                    textAlign: {
                        lg: "start",
                        xs: "center"
                    },
                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                    lectus magna fringilla urna, porttitor rhoncus dolor purus non enim,
                    <Typography variant="p" component="span" sx={{
                        fontWeight: 600,
                        fontSize: "1.6rem",
                        lineHeight: "2.4rem",
                        letterSpacing: "0.1em",
                        color: "#414880",
                    }}> our teams.</Typography>
                </Typography>
                {/*</Grid>*/}
            </Grid>
        </ContainerWithPadding>
    );
}

export default OurGallery;