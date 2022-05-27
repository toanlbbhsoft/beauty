import {Route, Routes, useLocation,} from "react-router-dom";
import {CssBaseline, GlobalStyles} from "@mui/material";
import Home from "./container/Home";
import Navbar from "./components/Navbar";
import About from "./container/About";
import Service from "./container/Service";
import Gallery from "./container/Gallery";
import Team from "./container/Team";
import Contact from "./container/Contact";
import Blog from "./container/Blog";
import {useEffect} from "react";


function App() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])

    return (<>
        <GlobalStyles styles={{ul: {margin: 0, padding: 0, listStyle: 'none'}, body: {fontSize: "1.6rem"}}}/>
        <CssBaseline/>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="service" element={<Service/>}/>
            <Route path="gallery" element={<Gallery/>}/>
            <Route path="blog" element={<Blog/>}/>
            <Route path="team" element={<Team/>}/>
            <Route path="contact" element={<Contact/>}/>
        </Routes>
    </>);
}

export default App;
