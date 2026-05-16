//File name: useClockTime.js
//Author: Kyle McColgan
//Date: 15 May 2026
//Description: This file contains a utility function for the AnalogClock React project.

import { useState, useEffect } from "react";
import { getChicagoParts } from "./clock.js";

export default function useClockTime()
{
    const [time, setTime] = useState(getChicagoParts());

    // Tick every second.
    useEffect(() =>
    {
        let frameId;
        let previousFrame = 0;
        const FRAME_INTERVAL = 1000 / 30;

        const update = (timestamp) =>
        {
            if (timestamp - previousFrame >= FRAME_INTERVAL)
            {
                previousFrame = timestamp;
                setTime(getChicagoParts());
            }

            frameId = requestAnimationFrame(update); //~30 FPS.
        };

        frameId = requestAnimationFrame(update);
        return () => cancelAnimationFrame(frameId);
    }, []);

    return time;
}
