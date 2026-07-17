//File name: TickMarks.jsx
//Author: Kyle McColgan
//Date: 16 July 2026
//Description: This file contains the tick marks component for the analog clock React project.

import { useMemo } from "react";
import styles from "./TickMarks.module.css";

export default function TickMarks()
{
  const ticks = useMemo(() => {
    const quarterTicks = [];
    const hourTicks = [];
    const minuteTicks = [];

    for (let i = 0; i < 60; i ++ )
    {
      const angle = (i * 6) * (Math.PI / 180);

      const isQuarter = i % 15 === 0;
      const isHour = i % 5 === 0;

      const radiusInner = isQuarter ? 76 : isHour ? 79 : 87;
      const radiusOuter = isQuarter ? 97 : isHour ? 95 : 92;

      const x1 = 100 + radiusInner * Math.cos(angle);
      const y1 = 100 + radiusInner * Math.sin(angle);
      const x2 = 100 + radiusOuter * Math.cos(angle);
      const y2 = 100 + radiusOuter * Math.sin(angle);

      // Pick the gradient based on the tick type.
      const strokeUrl = isQuarter
        ? "url(#quarterMark)"
        : isHour
        ? "url(#hourMark)"
        : "url(#minuteMark)";

    const line = (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          className={`${styles.tick} ${
            isQuarter ? styles.quarterTick : isHour ? styles.hourTick : ""
          }`}
          stroke={strokeUrl}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      );

    if (isQuarter)
    {
      quarterTicks.push(line);
    }
    else if (isHour)
    {
      hourTicks.push(line);
    }
    else
    {
      minuteTicks.push(line);
    }
  }

    return [...minuteTicks, ...hourTicks, ...quarterTicks];
  }, []);

    return (
      <g className={styles.tickRing}>
        <defs>
          <linearGradient id="minuteMark" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f6f0dc" />
            <stop offset="100%" stopColor="#b9a46a" />
          </linearGradient>

          <linearGradient id="hourMark" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fff4c6" />
            <stop offset="60%" stopColor="#d2ad3f" />
            <stop offset="100%" stopColor="#7a5a00" />
          </linearGradient>

          <radialGradient id="quarterMark" cx="100" cy="100" r="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fff7da" />
            <stop offset="45%" stopColor="#f2c94c" />
            <stop offset="80%" stopColor="#b27e2d" />
            <stop offset="100%" stopColor="#3a2800" />
          </radialGradient>
        </defs>
        {ticks}
      </g>
    );
}
