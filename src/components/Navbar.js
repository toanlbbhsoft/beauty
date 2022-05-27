import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import logo from '../access/mainlogo.svg'
import {NavLink, useLocation} from "react-router-dom";
import ContainerWithPadding from "./ui/ContainerWithPadding";
import ButtonPink from "./ui/ButtonPink";
import {MenuItem, Modal} from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import CloseIcon from '@mui/icons-material/Close';
import Typography from "@mui/material/Typography";

const pages = ['Home +', 'About', 'Service', 'Gallery', "Blog", "Contact"];

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const location = useLocation();

    console.log(location.pathname)
    const handleOpenNavMenu = (event) => {
        setOpen(true);
    };
    const handleCloseNavMenu = () => {
        setOpen(false);
    };

    const style = {
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "100vw",
        height: "100vh",
        border: 'none',
        background: "#fff",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding:"4rem"
    };

    return (<AppBar position="absolute" sx={{background: "none", border: "none", boxShadow: "none", top: 0, zIndex: 1}}>
        <ContainerWithPadding>
            <Toolbar disableGutters>
                <Box component="img" alt="" src={logo} sx={{mr: 1, height: {xs: "5rem", md: "6.3rem"}}}/>
                {/*Normal Navlist*/}
                <Box sx={{flexGrow: 1, display: {xs: 'none', lg: 'flex'}, justifyContent: "flex-end"}}>
                    <NavLinkButton pathname="" title="Home +"/>
                    <NavLinkButton pathname="about" title="About"/>
                    <NavLinkButton pathname="service" title="Service"/>
                    <NavLinkButton pathname="gallery" title="Gallery"/>
                    <NavLinkButton pathname="blog" title="Blog"/>
                    <NavLink to="/contact"><ButtonPink sx={{ml: 1}}>Contact</ButtonPink></NavLink>
                </Box>
                {/*Hamberger Menu*/}
                <Box sx={{flexGrow: 1, display: {xs: 'flex', lg: 'none'}, justifyContent: "flex-end"}}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="black"
                    >
                        <MenuIcon sx={{width: "2.5rem", height: "2.5rem"}}/>
                    </IconButton>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open}
                        onClose={handleCloseNavMenu}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={open}>
                            <Box sx={style}>
                                <CloseIcon onClick={handleCloseNavMenu} sx={{
                                    position: 'absolute',
                                    right: 10,
                                    top: 10,
                                    fontSize: "4rem",
                                    zIndex: 999
                                }}/>
                                {pages.map((page, index) => (
                                    <MenuItem key={page} sx={{
                                        justifyContent: "center",
                                    }}>
                                        <NavLink
                                            onClick={handleCloseNavMenu}
                                            to={`/${index === 0 ? "" : page.toLowerCase()}`}
                                            style={({isActive}) => {
                                                return {
                                                    fontWeight: isActive ? "600" : "500",
                                                    color: isActive ? "darkblue" : "gray",
                                                    textAlign: "center",
                                                }
                                            }}
                                        >
                                            <Typography textAlign="center" fontSize="2.5rem" fontWeight="inherit"
                                                        fontStyle="inherit">{page}</Typography>
                                        </NavLink>
                                    </MenuItem>
                                ))}
                            </Box>
                        </Fade>
                    </Modal>
                    {/*<Menu*/}
                    {/*    id="menu-appbar"*/}
                    {/*    anchorEl={anchorElNav}*/}
                    {/*    anchorOrigin={{*/}
                    {/*        vertical: 'bottom', horizontal: 'left',*/}
                    {/*    }}*/}
                    {/*    keepMounted*/}
                    {/*    transformOrigin={{*/}
                    {/*        vertical: 'top', horizontal: 'left',*/}
                    {/*    }}*/}
                    {/*    open={Boolean(anchorElNav)}*/}
                    {/*    onClose={handleCloseNavMenu}*/}
                    {/*    sx={{*/}
                    {/*        display: {xs: 'block', lg: 'none'},*/}

                    {/*    }}*/}
                    {/*>*/}
                    {/*    {pages.map((page, index) => (<MenuItem key={page}>*/}
                    {/*        <NavLink*/}
                    {/*            to={`/${index === 0 ? "" : page.toLowerCase()}`}*/}
                    {/*            style={({isActive}) => {*/}
                    {/*                return {*/}
                    {/*                    fontWeight: isActive ? "600" : "500", color: isActive ? "darkblue" : "gray"*/}
                    {/*                }*/}
                    {/*            }}*/}
                    {/*        >*/}
                    {/*            <Typography textAlign="center" fontSize="1.6rem" fontStyle="inherit">{page}</Typography>*/}
                    {/*        </NavLink>*/}
                    {/*    </MenuItem>))}*/}
                    {/*</Menu>*/}
                </Box>
            </Toolbar>
        </ContainerWithPadding>
    </AppBar>);
};
export default Navbar;

function NavLinkButton({pathname, title}) {
    return (
        <NavLink to={`/${pathname}`} style={({isActive}) => {
            return {
                fontWeight: isActive ? "600" : "500", color: isActive ? "darkblue" : "gray"
            }
        }}>
            <Button
                sx={{
                    m: 1,
                    color: "inherit",
                    fontWeight: "inherit",
                    display: 'block',
                    fontSize: "1.6rem",
                    whiteSpace: "nowrap",
                    textTransform: "capitalize",
                }}
            >
                {title}
            </Button>
        </NavLink>
    )
}