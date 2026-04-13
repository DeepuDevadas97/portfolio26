import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";

const App = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <About />
            <Services />
            <Skills />
            <Work />
            <Footer />
        </div>
    );
};

export default App;
