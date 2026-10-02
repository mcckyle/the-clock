//File name: AnalogClock.jsx
//Author: Kyle McColgan
//Date: 2 October 2026
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
      <div
        className={styles.clockContainer}
        role="img"
        aria-label="Classical style analog clock showing the current time"
      >
        <div className={styles.clockFace}>
          <div className={styles.giltOuterRing} />
          <div className={styles.enamelSurface} />
          <div className={styles.chapterRing} />

          <svg
            className={styles.ticks}
            viewBox="0 0 200 200"
            aria-hidden="true"
            focusable="false"
          >
            <TickMarks />
            <RomanNumerals />
          </svg>

          <ClockHands />

          <div className={styles.centerMedallion} />
        </div>
      </div>
    );
}
