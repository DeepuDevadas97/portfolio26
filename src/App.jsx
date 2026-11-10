import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

const App = () => {
    return (
        <ReactLenis
            root
            options={{
                anchors: true,
                smoothWheel: true,
                lerp: 0.05,
                duration: 1.3,
                wheelMultiplier: 0.85,
            }}
        >
            <div>
                <Navbar />
                <Banner />
                <About />
                <Services />
                <Skills />
                <Work />
                <Footer />
            </div>
        </ReactLenis>
    );
};

export default App;
