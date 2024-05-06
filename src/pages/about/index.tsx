import React from "react";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Skills from "./Skills";

export default function index() {
    return (
        <>
            <Hero />
            <AboutMe/>
            <Skills/>
            {/* <Experience/> */}
        </>
    );
}
