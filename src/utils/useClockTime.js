//File name: useClockTime.js
//Author: Kyle McColgan
//Date: 01 August 2025
//Description: This file contains utility functions for the React clock site.

import { useState, useEffect } from "react";
import { getChicagoParts } from "./clock.js";

export default function useClockTime()
{
    const [time, setTime] = useState(getChicagoParts());

    // Tick every second.
    useEffect(() => {
        const id = setInterval(() => setTime(getChicagoParts()), 1000);
        return () => clearInterval(id);
    }, []);

    return time;
}
