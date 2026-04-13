import React from "react";
import "./Button.css";

const Button = ({ title, variant }) => {
    return (
        <>
            <button
                className={`btn-styles ${(variant === "download" && "download-btn") || (variant === "outline" && "outline-btn") || (variant === "fill" && "fill-btn")}`}
            >
                {title}
            </button>
        </>
    );
};

export default Button;
