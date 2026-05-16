//File name: AnalogClock.jsx
//Author: Kyle McColgan
//Date: 15 May 2026
//Description: This file contains the clock component for the clock React project.

import useClockTime from "../../utils/useClockTime";
import useHandAngles from "../../utils/useHandAngles";

import TickMarks from "../TickMarks/TickMarks.jsx";
import RomanNumerals from "../RomanNumerals/RomanNumerals.jsx";
import ClockHands from "../ClockHands/ClockHands.jsx";

import styles from "./AnalogClock.module.css";

export default function AnalogClock()
{
    const time = useClockTime();
    useHandAngles(time);

    return (
      <div className={styles.clockContainer}>
        <div className={styles.outerHalo} />

        <div className={styles.clockFace}>
          <div className={styles.bezelRing} />
          <div className={styles.innerBezel} />
          <div className={styles.shimmerLayer} />

          <svg
            className={styles.ticks}
            viewBox="0 0 200 200"
            aria-hidden="true"
          >
            <TickMarks />
            <RomanNumerals />
          </svg>

          <ClockHands />

          <div className={styles.solarCore} />
          <div className={styles.rosette} />
          <div className={styles.glassOverlay} />
        </div>
      </div>
    );
}
