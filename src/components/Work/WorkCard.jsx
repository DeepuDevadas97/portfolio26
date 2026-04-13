import React from "react";
import "./Work.css";
import assets from "../../assets/assets";

const WorkCard = ({ id, title, image, url }) => {
    return (
        <div className="work-card w-full rounded-[40px] relative px-5 pt-6 sm:pt-9 pb-5 z-50 max-sm:max-w-[320px] max-sm:mx-auto">
            <img
                src={assets.CardBg}
                alt="Card Layer"
                className="w-full h-full object-cover absolute left-0 top-0"
            />
            <a
                href={url}
                target="_blank"
                className="inline-flex justify-center items-center w-14 h-14 sm:w-13 sm:h-13 lg:w-17 lg:h-17 bg-black duration-500 hover:bg-white rounded-full absolute right-1 top-1 sm:right-0 sm:top-0 md:right-2 md:top-2 z-5 border-5 border-white/20 work-link"
            >
                <img
                    src={assets.RightTop}
                    alt="Right Top"
                    className="w-5 h-5"
                />
            </a>
            <div className="flex flex-col justify-between h-full">
                <div className="card-header relative">
                    <h4 className="text-[24px] sm:text-[28px] font-bold text-white">
                        {title}
                    </h4>
                </div>
                <figure className="w-full work-img rounded-[24px] overflow-hidden relative z-10">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </figure>
            </div>
        </div>
    );
};

export default WorkCard;
