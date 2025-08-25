//File name: useClockTime.js
//Author: Kyle McColgan
//Date: 24 August 2025
//Description: This file contains a utility function for the React AnalogClock component.

import { useState, useEffect } from "react";
import { getChicagoParts } from "./clock.js";

export default function useClockTime()
{
    const [time, setTime] = useState(getChicagoParts());

    // Tick every second.
    useEffect(() => {

        let animationFrameId;

        const tick = () => {
            setTime(getChicagoParts());
            animationFrameId = requestAnimationFrame(tick); //~60 FPS.
        };

        animationFrameId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return time;
}
