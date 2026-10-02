//File name: useHandAngles.js
//Author: Kyle McColgan
//Date: 2 October 2026
//Description: This file contains a utility function for clock hand positioning in the AnalogClock React project.

import { useEffect } from "react";
import styles from '../components/AnalogClock/AnalogClock.module.css';

export default function useHandAngles({ h, m, s })
{
    useEffect(() =>
    {
        const root = document.documentElement;

        //Continuous time...
        root.style.setProperty("--hourDeg", `${(h % 12) * 30}deg`);
        root.style.setProperty("--minuteDeg", `${m * 6}deg`);
        root.style.setProperty("--secondDeg", `${s * 6}deg`);
    }, [h, m, s]);
}
