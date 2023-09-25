import React from 'react';
import Hero from "../components/Hero";
import Highlights from "../components/Highlights"
import Testimonials from "../components/Testimonials";
import About from "../components/About";

export default function HomePage() {
    return (
        <>
            {/* Render the Header, Nav, Hero, Highlights, Testimonials and Footer components */}
            <Hero/>
            <Highlights/>
            <Testimonials/>
            <About/>
        </>
    );
}