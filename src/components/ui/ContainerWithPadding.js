import React from 'react';
import Container from "@mui/material/Container";

function ContainerWithPadding(props) {
    return (
        <Container maxWidth="100vw" sx={{
            width: "100%",
            padding: {xs: "4rem 3rem", sm: "5rem 5rem", md: "5.8rem 6rem", lg: "5.8rem 15rem"},
            margin: "0",
            position: "relative"
        }}>{props.children}</Container>
    );
}

export default ContainerWithPadding;