//File name: TickMarks.jsx
//Author: Kyle McColgan
//Date: 9 October 2025
//Description: This file contains the tick marks component for the React analog clock project.

import { useMemo } from "react";
import styles from './TickMarks.module.css';

export default function TickMarks()
{
  const ticks = useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => {
      const angle = (i * 6) * (Math.PI / 180);
      const radiusInner = ( (i % 5) === 0) ? 76 : 84;
      const radiusOuter = ( (i % 15) === 0) ? 100 : ( (i % 5) === 0 ? 96 : 94);

      const x1 = 100 + radiusInner * Math.cos(angle);
      const y1 = 100 + radiusInner * Math.sin(angle);
      const x2 = 100 + radiusOuter * Math.cos(angle);
      const y2 = 100 + radiusOuter * Math.sin(angle);

      // Pick the gradient based on the tick type.
      let strokeUrl = "url(#minuteGradient)";
      if (i % 15 === 0)
      {
        strokeUrl = "url(#quarterGradient)";
      }
      else if (i % 5 === 0)
      {
        strokeUrl = "url(#hourGradient)";
      }

      return (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          data-second={i}
          className={`${styles.tick} ${i % 5 === 0 ? styles.hourTick : ''} ${
            i % 15 === 0 ? styles.quarterTick : ''
          }`}
          stroke={strokeUrl}
        />
      );
    });
  }, []);

    return (
      <g className={styles.tickRing}>
        <defs>
          <linearGradient id="minuteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f9f7ef" />
            <stop offset="100%" stopColor="#d1b879" />
          </linearGradient>

          <linearGradient id="hourGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffecb3" />
            <stop offset="40%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#7a5b00" />
          </linearGradient>

          <radialGradient id="quarterGradient" cx="100" cy="100" r="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fff9dc" />
            <stop offset="40%" stopColor="#f2ce55" />
            <stop offset="75%" stopColor="#b98b34" />
            <stop offset="100%" stopColor="#4a3200" />
          </radialGradient>
        </defs>
        {ticks}
      </g>
    );
}
