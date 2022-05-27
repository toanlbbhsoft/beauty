import React from 'react';
import ContainerWithPadding from "./ContainerWithPadding";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";

const TypographyHeader = styled(Typography)(() => ({
    fontWeight: 600,
    color: "#FF64AE"
}))
const TypographySlogan = styled(Typography)(({theme}) => ({
    fontWeight: 600,
    fontSize: "3.6rem",
    lineHeight: "125%",
    margin: "0",
    color: "#091156",
    [theme.breakpoints.up("xs")]: {
        white: "wrap"
    },
    [theme.breakpoints.up("xl")]: {
        white: "nowrap"
    }
}))
const TypographyDescription = styled(Typography)(() => ({
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0.1em",
    color: "#8B8B8B",
    maxWidth: "41rem",
    float: "right"
}))

function SideSectionWithComponent(props) {
    const {
        reverse = false,
        header,
        slogan,
        description,
        component,
        actionBox,
        children,
        gridInfoSide = 5,
        gridComponentSide = 5,
        marginActionBox,
        margin,
        contactForm = false
    } = props;
    return (
        <ContainerWithPadding>
            {children}
            <Grid container rowSpacing={1}
                  columnSpacing={{xs: 1, sm: 2, md: 3}}
                  flexDirection={{xs: "column", lg: !reverse ? "row" : "row-reverse"}}
                  justifyContent="space-between"
            >
                {contactForm && <Grid
                    container
                    margin={margin}
                    justifyContent="center"
                    alignItems="center"
                    flexDirection={{xs: "column", lg: "row"}}>
                    <Grid item lg={6} rowSpacing={12} textAlign={{xs: "center", lg: "start"}}>
                        <TypographyHeader variant="h5" component="h1">{header}</TypographyHeader>
                        <TypographySlogan variant="h2" component="h2">{slogan}</TypographySlogan>
                    </Grid>
                    <Grid item lg={6} textAlign={{
                        xs: "center",
                        lg: "start"
                    }} justifyContent="center">
                        <TypographyDescription variant="p" component="p">{description}</TypographyDescription>
                    </Grid>
                </Grid>}
                <Grid item lg={gridInfoSide} xs={12}
                      display="flex"
                      flexDirection="column"
                      alignItems={{
                          lg: "flex-start",
                          xs: "center"
                      }}
                      textAlign={{
                          xs: "center",
                          lg: "start"
                      }}
                      sx={{
                          '&.MuiGrid-root': {
                              padding: '0'
                          },
                          marginTop: "4rem"
                      }}

                >
                    {!contactForm && (<>
                        <TypographyHeader variant="h5" fontWeight={600} component="h1"
                                          sx={{color: "#FF64AE"}}>{header}</TypographyHeader>
                        <TypographySlogan variant="h2" component="h2"
                                          sx={{margin: "1.2rem 0",}}>{slogan}</TypographySlogan>
                        <TypographyDescription variant="p" component="p" sx={{
                            maxWidth: "85rem",
                            marginBottom: actionBox ? marginActionBox ? marginActionBox : "8.2rem" : "0",
                        }}>{description}</TypographyDescription>
                    </>)}
                    {actionBox}
                </Grid>
                <Grid item lg={gridComponentSide} xs={12} mt={{xs: "3rem", lg: "0"}} display="flex"
                      alignItems="center" justifyContent="center">
                    {component}
                </Grid>
            </Grid>
        </ContainerWithPadding>
    );
}

export default SideSectionWithComponent;