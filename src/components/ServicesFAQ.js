import * as React from 'react';
import {styled} from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ContainerWithPadding from "./ui/ContainerWithPadding";
import Box from "@mui/material/Box";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({theme}) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
    '&': {
        border: "none",
    },
    '& .MuiTypography-root': {
        fontSize: "1.4rem",
        color: "#8B8B8B",
        fontWeight: 400,
        maxWidth: "84rem",
    }
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{fontSize: '0.9rem'}}/>}
        {...props}
    />
))(({theme}) => ({
    flexDirection: 'row',
    '& .MuiAccordionSummary-expandIconWrapper': {
        transform: 'rotate(90deg)',

    },
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(-90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
    '& .MuiTypography-root': {
        fontSize: "1.6rem",
        color: "#091156 !important",
        fontWeight: "600 !important",
    },
    '& .MuiSvgIcon-root': {
        width: "2rem",
        height: "2rem",
    }
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
    padding: "5.2rem 7.6rem",
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    "&.MuiAccordionDetails-root": {
        backgroundColor: "#F6F7FF"
    },
    fontStyle: "italic"
}));

const TypographyHeader = styled(Typography)(() => ({
    fontWeight: 600,
    fontSize: "3.6rem",
    lineHeight: "125%",
    // maxWidth:"45rem",
    margin: "1.2rem 0",
    textAlign: "center",
    color: "#091156"
}))

export default function ServicesFAQ() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <ContainerWithPadding>
            <TypographyHeader>Services FAQ’s</TypographyHeader>
            {/* Pink dot */}
            <Box sx={{border: "5px solid #FF64AE", width: "4.0rem", borderRadius: "2rem", margin: "auto"}}></Box>
            {/* Accordion */}
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Is beauty consultation handled thoroughly?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                        venenatis, lectus magna fringilla urna
                        <br/><br/>
                        porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est
                        ullamcorper eget nulla
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>Can I be beautiful in an instant time?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                        venenatis, lectus magna fringilla urna
                        <br/><br/>
                        porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est
                        ullamcorper eget nulla
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>Are there any side effects to the treatment methods or treatments at this
                        clinic?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                        venenatis, lectus magna fringilla urna
                        <br/><br/>
                        porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est
                        ullamcorper eget nulla
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography>Do professionals have accreditation in their respective fields?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                        venenatis, lectus magna fringilla urna
                        <br/><br/>
                        porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est
                        ullamcorper eget nulla
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </ContainerWithPadding>
    );
}
