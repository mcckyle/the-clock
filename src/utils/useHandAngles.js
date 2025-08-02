//File name: useHandAngles.js
//Author: Kyle McColgan
//Date: 01 August 2025
//Description: This file contains utility functions for the React clock site.

import { useEffect } from "react";
import styles from '../components/AnalogClock/AnalogClock.module.css';

export default function useHandAngles({ h, m, s })
{
    useEffect(() => {
        const hourDeg = ((h % 12) + m / 60) * 30;
        const minuteDeg = m * 6 + s * 0.1;
        const secondDeg = s * 6;

        const root = document.documentElement;
        root.style.setProperty("--hourDeg", `${hourDeg}deg`);
        root.style.setProperty("--minuteDeg", `${minuteDeg}deg`);
        root.style.setProperty("--secondDeg", `${secondDeg}deg`);

        // Synchronized tick highlighting.
        const now = document.querySelector(`line[data-second="${s}"]`);
        const prev = document.querySelector(`line[data-second="${(s + 59) % 60}"]`);

        now?.classList.add(styles.active);
        prev?.classList.remove(styles.active);

        const timeout = setTimeout(() => now?.classList.remove(styles.active), 450);
        return () => clearTimeout(timeout);
    }, [h, m, s]);
}
