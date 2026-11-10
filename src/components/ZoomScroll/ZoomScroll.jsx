import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./ZoomScroll.css";
import assets from "../../assets/assets";

const sections = [
    {
        image: assets.Bird,
        title: "UX Design",
        text: "Designing intuitive and engaging user experiences that put users first.",
    },
    {
        image: assets.Gear,
        title: "Development",
        text: "Building fast, scalable, and responsive web applications using modern technologies.",
    },
    {
        image: assets.Airplane,
        title: "Branding",
        text: "Creating consistent and memorable brand identities that stand out in the market.",
    },
];

const ZoomSection = ({ image, title, text }) => {
    const ref = useRef(null);
    
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.98]);

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [0, 1, 0]
    );

    const x = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [-40, 0, 40]
    );

    const y = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [40, 0, -40]
    );

    return (
        <section ref={ref} className="zoom-section">
            <motion.div
                className="zoom-content"
                style={{
                    scale,
                    opacity,
                }}
            >
                <motion.figure
                    className="w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[360px] mb-[-50px] sm:mb-[-80px] z-[1]"
                    style={{
                        x,
                        y,
                    }}
                >
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full"
                        loading="lazy"
                        decoding="async"
                    />
                </motion.figure>

                <h2>{title}</h2>
                <p>{text}</p>
            </motion.div>
        </section>
    );
};

const ZoomScroll = () => {
    return (
        <div className="zoom-container bg-black">
            {sections.map((section, index) => (
                <ZoomSection
                    key={index}
                    image={section.image}
                    title={section.title}
                    text={section.text}
                />
            ))}
        </div>
    );
};

export default ZoomScroll;
