import React, { useRef } from "react";
import assets from "../../assets/assets";
import "./Banner.css";
import Button from "../Button/Button";
import { motion, useScroll, useTransform } from "framer-motion";

const Banner = () => {
    const bannerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: bannerRef,
        offset: ["start start", "end start"],
    });

    const ellipseScale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);
    const ellipseRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
    const gradientOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

    return (
        <div
            ref={bannerRef}
            className="banner relative w-full bg-black sm:rounded-b-[60px] overflow-hidden z-[1] flex flex-col justify-between"
        >
            <div className="banner-gradient"></div>

            <div className="container h-auto md:h-[calc(50vh-60px)] pt-25 sm:pt-30 flex items-center">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    className="w-full flex flex-col items-center justify-center relative z-10"
                >
                    <span className="text-[18px] sm:text-[22px] leading-8 text-white inline-block border border-white/30 rounded-md px-4 py-1 hello-span">
                        Hello everyone!
                    </span>

                    <h1 className="text-[30px] leading-[38px] sm:text-[44px] sm:leading-[52px] lg:text-[48px] lg:leading-[56px] font-bold text-white max-w-[900px] mx-auto text-center mt-6">
                        I’m <span className="text-secondary">Deepu</span>. Let’s
                        make something meaningful together.
                    </h1>

                    <div className="xl:hidden mt-10 sm:mt-15">
                        <Button title="Download CV" variant="download" />
                    </div>
                </motion.div>
            </div>

            <div className="w-full flex justify-center relative z-5 h-[50vh] mt-15">
                <motion.figure
                    initial={{ scale: 0.6, opacity: 0, y: 40 }}
                    whileInView={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.4,
                        delay: 0.6,
                        ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    className="ellipse w-full max-w-[480px] max-sm:px-4 rounded-full"
                    style={{
                        scale: ellipseScale,
                        rotate: ellipseRotate,
                    }}
                >
                    <motion.div
                        className="ellipse-gradient"
                        style={{
                            opacity: gradientOpacity,
                        }}
                    />

                    <img
                        src={assets.Ellipse}
                        alt="Ellipse"
                        className="w-full h-full relative z-10"
                    />
                </motion.figure>

                <motion.figure
                    initial={{ scale: 0.9, opacity: 0, y: 40 }}
                    whileInView={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.4,
                        delay: 0.3,
                        ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    className="banner-image w-full max-w-[260px] sm:max-w-[400px] z-[11]"
                >
                    <img
                        src={assets.MyImage}
                        alt="My Photo"
                        className="w-full h-full"
                    />
                </motion.figure>
            </div>
        </div>
    );
};

export default Banner;
