import React from "react";
import assets from "../../assets/assets";
import "./About.css";
import CountUp from "../CountUp/CountUp";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div
            className="about pt-35 pb-30 bg-black mt-[-60px] relative overflow-hidden"
            id="about"
        >
            <figure className="w-full h-full absolute top-[-15%] pointer-events-none">
                <img
                    src={assets.BlueEllipse}
                    alt="Blue layer"
                    className="w-full h-full object-cover"
                />
            </figure>
            <figure className="w-[70%] absolute top-[-25%] left-[-35%] opacity-50 pointer-events-none">
                <img
                    src={assets.RedCircle}
                    alt="Red circle"
                    className="w-full h-full object-cover"
                />
            </figure>
            <figure className="w-[70%] absolute top-[-25%] right-[-35%] opacity-50 pointer-events-none">
                <img
                    src={assets.RedCircle}
                    alt="Red circle"
                    className="w-full h-full object-cover"
                />
            </figure>

            <div
                
                className="container"
            >
                <div className="overview rounded-[24px] w-full py-4 sm:py-6 border-3 border-white/10 max-w-[800px] mx-auto grid grid-cols-3 gap-2 sm:gap-6">
                    <div className="item-1 flex flex-col gap-1 items-center text-white">
                        <h3 className="text-[32px] leading-10 md:text-[48px] md:leading-[54px] font-semibold">
                            <CountUp end={5} />
                            <span className="text-secondary">+</span>
                        </h3>
                        <p className="text-[15px] sm:text-[18px] leading-5 text-white font-light text-center">
                            Years <br className="sm:hidden" /> Experience
                        </p>
                    </div>
                    <div className="item-2 flex flex-col gap-1 items-center text-white">
                        <h3 className="!text-[32px] !leading-10 md:!text-[48px] md:!leading-[54px] font-semibold">
                            <CountUp end={30} />
                            <span className="text-secondary">+</span>
                        </h3>
                        <p className="text-[15px] sm:text-[18px] leading-5 text-white font-light text-center">
                            Completed Project
                        </p>
                    </div>
                    <div className="item-2 flex flex-col gap-1 items-center text-white">
                        <h3 className="text-[32px] leading-10 md:text-[48px] md:leading-[54px] font-semibold">
                            <CountUp end={25} />
                            <span className="text-secondary">+</span>
                        </h3>
                        <p className="text-[15px] sm:text-[18px] leading-5 text-white font-light text-center">
                            Happy <br className="sm:hidden" /> Client
                        </p>
                    </div>
                </div>
                <div className="mt-10 md:mt-20 w-full max-w-[980px]  mx-auto about-text relative">
                    <p className="text-[18px] leading-8 sm:text-[20px] sm:leading-10 lg:text-[24px] lg:leading-[44px] xl:text-[28px] xl:leading-[48px] text-white font-thin">
                        Hi, I am a{" "}
                        <span className="text-gradient font-light">
                            front-end developer
                        </span>{" "}
                        with{" "}
                        <span className="text-gradient font-light">
                            5 years
                        </span>{" "}
                        of professional experience, currently working at
                        CAPITAIRE Consulting, Kochi, Kerala. I specialize in
                        creating seamless{" "}
                        <span className="text-gradient font-light">
                            UI/UX designs
                        </span>{" "}
                        and converting design files into high-performance web
                        applications using{" "}
                        <span className="text-gradient font-light">
                            React.js
                        </span>{" "}
                        and Next.js. With a strong foundation in front-end
                        development and a keen eye for design also focusing on{" "}
                        <span className="text-gradient font-light">
                            responsive layouts
                        </span>
                        , clean code, and optimal user experience. I have
                        successfully delivered 30+ projects for clients across
                        India and internationally, including regions like the
                        UAE, UK, and USA.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
