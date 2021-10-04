import React from "react";
import NavSection from "./NavSection";
import Reveal from 'react-reveal/Reveal';
import HeaderSection from "./HeaderSection";
import ToSignUp from "./ToSignUp";
import MainSection from "./MainSection";
import Footer from "../Footer/Footer";
const MainHome = () => {
    return (
        <>
            <NavSection />

            <HeaderSection />

            <Reveal effect="tosignupAnime" duration={1000}>
                <ToSignUp />
            </Reveal>

            <MainSection />

            <Footer />
        </>
    )
}

export default MainHome; 