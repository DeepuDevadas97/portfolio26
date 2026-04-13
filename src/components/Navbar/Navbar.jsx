import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/Logo";
import "./Navbar.css";
import Button from "../Button/Button";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={`navbar sticky top-0 w-full py-2.5 sm:py-3 md:py-4 transition-all duration-300 backdrop-blur-xl 
      ${isScrolled ? "bg-black/70" : "bg-black/30"}`}
        >
            <div className="container">
                <div className="flex items-center justify-between">
                    <div className="w-full max-w-[148px]">
                        <a
                            href="#"
                            className="logo-wrapper flex items-center gap-2 sm:gap-3 outline-0"
                        >
                            <Logo />
                            <span className="logo text-[16px] sm:text-[20px] font-bold text-white">
                                Portfolio
                            </span>
                        </a>
                    </div>

                    <nav
                        className={`main-nav ${isOpen === true ? "open" : ""}`}
                    >
                        <div
                            className="px-3 py-2.5 flex justify-end md:hidden"
                            onClick={() => setIsOpen(false)}
                        >
                            <button>
                                <svg
                                    width="36px"
                                    height="36px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g
                                        id="SVGRepo_bgCarrier"
                                        strokeWidth="0"
                                    ></g>
                                    <g
                                        id="SVGRepo_tracerCarrier"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            clipRule="evenodd"
                                            d="m7.53033 6.46967c-.29289-.29289-.76777-.29289-1.06066 0s-.29289.76777 0 1.06066l4.46963 4.46967-4.46963 4.4697c-.29289.2929-.29289.7677 0 1.0606s.76777.2929 1.06066 0l4.46967-4.4696 4.4697 4.4696c.2929.2929.7677.2929 1.0606 0s.2929-.7677 0-1.0606l-4.4696-4.4697 4.4696-4.46967c.2929-.29289.2929-.76777 0-1.06066s-.7677-.29289-1.0606 0l-4.4697 4.46963z"
                                            fill="#ffffff"
                                            fillRule="evenodd"
                                        ></path>
                                    </g>
                                </svg>
                            </button>
                        </div>
                        <ul className="text-white text-[18px] md:text-[16px] lg:text-[18px] font-normal flex items-center gap-x-3">
                            <li className="px-2" onClick={() => setIsOpen(!isOpen)}>
                                <a href="#">Home</a>
                            </li>
                            <li className="px-2" onClick={() => setIsOpen(!isOpen)}>
                                <a href="#about">About</a>
                            </li>
                            <li className="px-2" onClick={() => setIsOpen(!isOpen)}>
                                <a href="#services">Services</a>
                            </li>
                            <li className="px-2" onClick={() => setIsOpen(!isOpen)}>
                                <a href="#skills">Skills</a>
                            </li>
                            <li className="px-2" onClick={() => setIsOpen(!isOpen)}>
                                <a href="#work">My Works</a>
                            </li>
                            <li className="px-2" onClick={() => setIsOpen(!isOpen)}>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </nav>

                    <button className="md:hidden" onClick={handleMenu}>
                        <svg
                            width="36px"
                            height="36px"
                            viewBox="0 -0.5 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <path
                                    d="M5.5 11.75C5.08579 11.75 4.75 12.0858 4.75 12.5C4.75 12.9142 5.08579 13.25 5.5 13.25V11.75ZM19.5 13.25C19.9142 13.25 20.25 12.9142 20.25 12.5C20.25 12.0858 19.9142 11.75 19.5 11.75V13.25ZM7.834 15.75C7.41979 15.75 7.084 16.0858 7.084 16.5C7.084 16.9142 7.41979 17.25 7.834 17.25V15.75ZM17.167 17.25C17.5812 17.25 17.917 16.9142 17.917 16.5C17.917 16.0858 17.5812 15.75 17.167 15.75V17.25ZM7.834 7.75C7.41979 7.75 7.084 8.08579 7.084 8.5C7.084 8.91421 7.41979 9.25 7.834 9.25V7.75ZM17.167 9.25C17.5812 9.25 17.917 8.91421 17.917 8.5C17.917 8.08579 17.5812 7.75 17.167 7.75V9.25ZM5.5 13.25H19.5V11.75H5.5V13.25ZM7.834 17.25H17.167V15.75H7.834V17.25ZM7.834 9.25H17.167V7.75H7.834V9.25Z"
                                    fill="#ffffff"
                                ></path>{" "}
                            </g>
                        </svg>
                    </button>

                    <div className="max-xl:hidden">
                        <Button title="Download CV" variant="download" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
