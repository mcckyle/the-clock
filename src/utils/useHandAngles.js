//File name: useHandAngles.js
//Author: Kyle McColgan
//Date: 15 May 2026
//Description: This file contains a utility function for the AnalogClock React project.

import { useEffect, useRef } from "react";
import styles from '../components/AnalogClock/AnalogClock.module.css';

export default function useHandAngles({ h, m, s })
{
    const activeTickRef = useRef(null);

    useEffect(() =>
    {
        const root = document.documentElement;

        //Continuous time...
        root.style.setProperty("--hourDeg", `${(h % 12) * 30}deg`);
        root.style.setProperty("--minuteDeg", `${m * 6}deg`);
        root.style.setProperty("--secondDeg", `${s * 6}deg`);

        //Round fractional seconds to nearest int for tick highlighting.
        const secondIndex = Math.floor(s % 60);

        // Synchronized tick highlighting.
        const activeTick = document.querySelector(`line[data-second="${secondIndex}"]`);

        if (activeTickRef.current != activeTick)
        {
            activeTickRef.current?.classList.remove(styles.active);
            activeTick?.classList.add(styles.active);
            activeTickRef.current = activeTick;
        }
    }, [h, m, s]);
}
