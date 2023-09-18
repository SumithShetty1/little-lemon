import Hero from "./Hero";
import Highlights from "./Highlights"
import Testimonials from "./Testimonials";
import About from "./About";

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