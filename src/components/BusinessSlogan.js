import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import background from '../access/businessIMG.png'

export function BusinessSlogan() {
    return (
        <Box sx={{
            textAlign: "center",
            padding: {
                lg: "16.5rem 38rem",
                xs: "16.5rem 5rem"
            },
            marginTop: "9rem",
            position: "relative",
        }}>
            {/*Background */}
            <Box sx={{
                position: "absolute",
                top: "0",
                left: "0",
                backgroundImage: `url(${background})`,
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
            {/*End of Background Mask*/}
            <Typography sx={{
                fontWeight: 600,
                fontSize: "1.6rem",
                lineHeight: "125%",
                color: "#ABB4FF",
                zIndex: "2",
            }}>Business Slogan</Typography>
            <Typography sx={{
                fontWeight: 600,
                fontSize: "3.6rem",
                lineHeight: "125%",
                color: "#FFFFFF",
                zIndex: "2",
                margin: "1.2rem 0"
            }}>Best responsibility and service for our customers</Typography>
            <Typography sx={{
                fontWeight: 400,
                fontSize: "1.6rem",
                lineHeight: "2.4rem",
                letterSpacing: "0.1em",
                color: "#CACACA",
                zIndex: "2",

            }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                venenatis</Typography>
        </Box>
    )
}