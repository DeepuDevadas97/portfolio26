import React from "react";
import "./Skills.css";
import Html from "../../assets/icons/Html";
import Css from "../../assets/icons/Css";
import JavaScript from "../../assets/icons/JavaScript";
import ReactIcon from "../../assets/icons/ReactIcon";
import NextIcon from "../../assets/icons/NextIcon";
import Tailwind from "../../assets/icons/Tailwind";
import Bootstrap from "../../assets/icons/Bootstrap";
import ReactNative from "../../assets/icons/ReactNative";
import Figma from "../../assets/icons/Figma";
import XdIcon from "../../assets/icons/XdIcon";
import WordPress from "../../assets/icons/WordPress";
import GitIcon from "../../assets/icons/GitIcon";
import assets from "../../assets/assets";

const SkillsData = [
    {
        id: 1,
        name: "HTML",
        icon: <Html />,
    },
    {
        id: 2,
        name: "CSS",
        icon: <Css />,
    },
    {
        id: 3,
        name: "Javascript",
        icon: <JavaScript />,
    },
    {
        id: 4,
        name: "React",
        icon: <ReactIcon />,
    },
    {
        id: 5,
        name: "Next",
        icon: <NextIcon />,
    },
    {
        id: 6,
        name: "Bootstap",
        icon: <Bootstrap />,
    },
    {
        id: 7,
        name: "Tailwind",
        icon: <Tailwind />,
    },
    {
        id: 8,
        name: "Native",
        icon: <ReactNative />,
    },
    {
        id: 9,
        name: "Figma",
        icon: <Figma />,
    },
    {
        id: 10,
        name: "Adobe XD",
        icon: <XdIcon />,
    },
    {
        id: 11,
        name: "WordPress",
        icon: <WordPress />,
    },
    {
        id: 12,
        name: "Git",
        icon: <GitIcon />,
    },
];

const Skills = () => {
    return (
        <div className="skills bg-grdient bg-white py-20 md:py-30" id="skills">
            <div className="container">
                <div className="flex flex-col items-center">
                    <h2 className="text-gradient font-bold text-[36px] leading-10 md:text-[48px] md:leading-14 mb-8 text-center">Design to Deployment</h2>
                    <p className="text-black/80 text-[16px] sm:text-[18px] leading-8 font-light max-w-[740px] text-center">
                        I use a diverse set of industry-leading tools to craft
                        seamless digital experiences. From high-fidelity
                        prototypes in Figma to pixel-perfect implementation
                        using modern JavaScript frameworks, I ensure every
                        detail is intentional.
                    </p>
                    <img src={assets.DrawLine} alt="drawline" className="mt-2 max-w-[140px] md:max-w-[200px]"/>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 gap-y-3 sm:gap-y-8 lg:gap-y-20 mt-15 sm:mt-25">
                    {SkillsData.map((skill, key) => {
                        return (
                            <div
                                key={skill.id}
                                className="flex max-lg:flex-col items-center justify-center gap-2 sm:gap-3 max-lg:border max-lg:border-black/15 max-lg:pb-3 max-lg:pt-5 max-lg:px-2"
                            >
                                <div>{skill.icon}</div>
                                <h3 className="text-black/80 text-[20px] sm:text-[28px] font-bold leading-8 sm:leading-9">
                                    {skill.name}
                                </h3>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Skills;
