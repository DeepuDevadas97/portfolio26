import React from "react";
import Phone from "../../assets/icons/Phone";
import Email from "../../assets/icons/Email";
import LinkedIn from "../../assets/icons/LinkedIn";
import WhatsApp from "../../assets/icons/WhatsApp";
import Button from "../Button/Button";
import assets from "../../assets/assets";
import './Footer.css';

const footerLinks = [
    {
        id: 1,
        icon: <Phone />,
        link: "tel:+918921565392",
    },
    {
        id: 2,
        icon: <Email />,
        link: "mailto:deepu.devadas1997@gmail.com",
    },
    {
        id: 3,
        icon: <LinkedIn />,
        link: "https://www.linkedin.com/in/deepuputhuvoth2019/",
    },
    {
        id: 4,
        icon: <WhatsApp />,
        link: "https://wa.me/918921565392",
    },
];

const Footer = () => {
    return (
        <div id="contact" className="w-full bg-black py-15 sm:py-20 md:py-25">
            <div className="container">
                <h2 className="text-white text-[30px] leading-9 md:text-[48px] md:leading-[54px] font-medium mb-7 md:mb-15 max-w-[410px] md:max-w-[600px] max-sm:text-center max-sm:mx-auto">
                    <span className="text-secondary">Contact</span> me for the
                    service you want to use
                </h2>
                <div className="flex justify-between items-center max-sm:flex-col-reverse gap-12">
                    <nav className="footer-nav">
                        <ul className="flex items-center gap-4">
                            {footerLinks.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a
                                            className="flex justify-center items-center w-12 h-12 rounded-full bg-white/10"
                                            href={item.link}
                                            target="_blank"
                                        >
                                            {item.icon}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                    <a
                        href="#"
                        className="inline-flex justify-center items-center w-14 h-14 sm:w-13 sm:h-13 lg:w-17 lg:h-17 bg-gradient duration-500 hover:bg-white rounded-full work-link rotate-[-45deg]"
                    >
                        <img
                            src={assets.RightTop}
                            alt="Right Top"
                            className="w-5 h-5"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
