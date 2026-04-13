import React, { useEffect, useRef, useState } from "react";
import './CountUp.css';

const CountUp = ({ end, duration = 1000 }) => {
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(false);

    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    setVisible(true);

                    let start = 0;
                    const increment = end / (duration / 16);

                    const counter = () => {
                        start += increment;

                        if (start < end) {
                            setCount(Math.floor(start));
                            requestAnimationFrame(counter);
                        } else {
                            setCount(end);
                        }
                    };

                    counter();
                }
            },
            {
                threshold: 0.4,
            }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, [end, duration]);

    return (
        <span
            ref={ref}
            className={`count-number ${visible ? "show" : ""}`}
        >
            {count}
        </span>
    );
};

export default CountUp;