//File name: TickMarks.jsx
//Author: Kyle McColgan
//Date: 2 October 2026
//Description: This file contains the tick marks component for the analog clock React project.

import { useMemo } from "react";
import styles from "./TickMarks.module.css";

export default function TickMarks()
{
  const ticks = useMemo(() =>
  {
    const minuteTicks = [];
    const hourTicks = [];
    const quarterTicks = [];

    for (let i = 0; i < 60; i++)
    {
      const angle = (i * 6) * (Math.PI / 180);

      const isQuarter = i % 15 === 0;
      const isHour = i % 5 === 0;

      const radiusInner = isQuarter ? 76.5 : isHour ? 81 : 89;
      const radiusOuter = isQuarter ? 96 : isHour ? 95 : 91.5;

      const x1 = 100 + radiusInner * Math.cos(angle);
      const y1 = 100 + radiusInner * Math.sin(angle);
      const x2 = 100 + radiusOuter * Math.cos(angle);
      const y2 = 100 + radiusOuter * Math.sin(angle);

      const line = (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          className={isQuarter ? styles.quarterTick : isHour ? styles.hourTick : styles.tick}
          vectorEffect="non-scaling-stroke"
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
        {ticks}
      </g>
    );
}
