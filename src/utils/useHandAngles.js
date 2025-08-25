//File name: useHandAngles.js
//Author: Kyle McColgan
//Date: 24 August 2025
//Description: This file contains a utility function for the React AnalogClock component.

import { useEffect } from "react";
import styles from '../components/AnalogClock/AnalogClock.module.css';

export default function useHandAngles({ h, m, s })
{
    useEffect(() => {

        //Continuous time...
        //const hourDeg = ((h % 12) + m / 60 + s / 3600) * 30;
        const hourDeg = (h % 12) * 30;
        //const minuteDeg = (m + s / 60) * 6;
        const minuteDeg = m * 6;
        const secondDeg = s * 6;

        const root = document.documentElement;
        root.style.setProperty("--hourDeg", `${hourDeg}deg`);
        root.style.setProperty("--minuteDeg", `${minuteDeg}deg`);
        root.style.setProperty("--secondDeg", `${secondDeg}deg`);

        //Round fractional seconds to nearest int for tick highlighting.
        const secondIndex = Math.floor(s % 60);

        // Synchronized tick highlighting.
        const nowTick = document.querySelector(`line[data-second="${secondIndex}"]`);
        const prevTick = document.querySelector(`line[data-second="${(secondIndex + 59) % 60}"]`);

        nowTick?.classList.add(styles.active);
        prevTick?.classList.remove(styles.active);

        const timeout = setTimeout(() => nowTick?.classList.remove(styles.active), 450);
        return () => clearTimeout(timeout);
    }, [h, m, s]);
}
