//File name: AnalogClock.jsx
//Author: Kyle McColgan
//Date: 01 August 2025
//Description: This file contains the Analog clock component for the dedicated clock site.

import useClockTime from "../../utils/useClockTime";
import useHandAngles from "../../utils/useHandAngles";
import TickMarks from "../TickMarks/TickMarks.jsx";
import RomanNumerals from "../RomanNumerals/RomanNumerals.jsx";
import ClockHands from "../ClockHands/ClockHands.jsx";

import styles from './AnalogClock.module.css';

export default function AnalogClock()
{
    const time = useClockTime();
    useHandAngles(time);

    return (
        <div className = {styles.clockContainer}>
            <div className = {styles.clockFace}>
                <svg className={styles.ticks} viewBox="0 0 200 200">
                    <TickMarks />
                    <RomanNumerals />
                </svg>
                <ClockHands />
                <div className={styles.glassOverlay} />
            </div>
        </div>
    );
}
