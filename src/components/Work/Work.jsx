import React from "react";
import assets from "../../assets/assets";
import "./Work.css";
import { title } from "framer-motion/client";
import WorkCard from "./WorkCard";

const workData = [
    {
        id: 1,
        title: "Brackenberry",
        image: assets.Brackenberry,
        url: "https://www.brackenberry.com/",
    },
    {
        id: 2,
        title: "Special 40",
        image: assets.Special40,
        url: "https://www.special40.com/",
    },
    {
        id: 3,
        title: "Alice Care",
        image: assets.AliceCare,
        url: "https://www.alice.care/",
    },
    {
        id: 4,
        title: "Eplimo",
        image: assets.Eplimo,
        url: "https://www.eplimo.ae/",
    },
    {
        id: 5,
        title: "Agent App",
        image: assets.AgentApp,
        url: "https://play.google.com/store/apps/details?id=com.edgeprop.agent&hl=en",
    },
    {
        id: 6,
        title: "Aim",
        image: assets.Aim,
        url: "https://aimksa.com/",
    },
];

const designData = [
    {
        id: 1,
        title: "Brackenberry",
        image: assets.Brackenberry,
        url: "https://www.figma.com/proto/UcDpAbsvX6IMQ3hs7ehrKH/Brackenberry?node-id=1-3767&t=6cV490BNj49HV1bc-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3767",
    },
    {
        id: 2,
        title: "Leet 9",
        image: assets.Leet9,
        url: "https://www.figma.com/proto/QQEIQfdoEFRGceBGx2IDwT/Leet9-Web?node-id=1-5122&t=w6EMGte9cBUKzdEP-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A5122",
    },
    {
        id: 3,
        title: "Edge Prop",
        image: assets.EdgeProp,
        url: "https://www.figma.com/proto/6Ofg95MKNr9EVJSKJuHv8c/Dashboard?node-id=3-7363&t=WXIlX6M3ktfPnUKG-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A8897",
    },
];

const Work = () => {
    return (
        <div className="w-full bg-black py-20 md:py-25 overflow-hidden relative" id="work">
            <figure className="w-full h-full absolute top-0 pointer-events-none">
                <img
                    src={assets.BlueEllipse}
                    alt="Blue layer"
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </figure>
            <figure className="w-[65%] absolute top-[30%] left-[-30%] opacity-50 pointer-events-none">
                <img
                    src={assets.RedCircle}
                    alt="Red circle"
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </figure>
            <figure className="w-[65%] absolute top-[30%] right-[-30%] opacity-50 pointer-events-none">
                <img
                    src={assets.RedCircle}
                    alt="Red circle"
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </figure>
            <div className="container">
                <div className="w-full frontend-section">
                    <h2 className="text-gradient text-[36px] leading-11  md:text-[48px] md:leading-[54px] font-bold mb-5 text-center">
                        Recent Work
                    </h2>
                    <p className="text-white/80 text-[16px] md:text-[18px] leading-7 text-center mx-auto font-light max-w-[600px] mb-2">
                        Here are some of the projects I've recently worked on,
                        showcasing my skills in frontend development and UI
                        implementation.
                    </p>
                    <img
                        src={assets.DrawLine}
                        alt="drawline"
                        loading="lazy"
                        className="mt-2 max-w-[140px] md:max-w-[200px] mx-auto mb-10 md:mb-15"
                    />
                    <div className="w-full bg-white/3 rounded-[40px] sm:rounded-[60px] backdrop-blur-2xl relative overflow-hidden p-4 sm:p-6 md:p-8 py-8 sm:py-10 max-sm:max-w-[400px] max-sm:mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-6 md:gap-8 relative">
                            {workData.map((work, index) => {
                                return (
                                    <WorkCard
                                        id={work.id}
                                        title={work.title}
                                        image={work.image}
                                        url={work.url}
                                        key={index}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="w-full mt-15 md:mt-22">
                    <h2 className="text-gradient text-[36px] leading-11  md:text-[48px] md:leading-[54px] font-bold mb-5 md:mb-8 text-center">
                        UX Design
                    </h2>
                    <div className="w-full bg-white/3 rounded-[40px] sm:rounded-[60px] backdrop-blur-2xl relative overflow-hidden p-4 sm:p-6 md:p-8 py-8 sm:py-10 max-sm:max-w-[400px] max-sm:mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-6 md:gap-8 relative">
                            {designData.map((work, index) => {
                                return (
                                    <WorkCard
                                        id={work.id}
                                        title={work.title}
                                        image={work.image}
                                        url={work.url}
                                        key={index}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
