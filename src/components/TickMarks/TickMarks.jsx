//File name: TickMarks.jsx
//Author: Kyle McColgan
//Date: 13 October 2025
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
            <stop offset="0%" stopColor="#f8f5e8" />
            <stop offset="100%" stopColor="#cbb77a" />
          </linearGradient>

          <linearGradient id="hourGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff4c2" />
            <stop offset="50%" stopColor="#d9b43f" />
            <stop offset="100%" stopColor="#806200" />
          </linearGradient>

          <radialGradient id="quarterGradient" cx="100" cy="100" r="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fff6d4" />
            <stop offset="45%" stopColor="#f2c94c" />
            <stop offset="80%" stopColor="#b27e2d" />
            <stop offset="100%" stopColor="#3a2800" />
          </radialGradient>
        </defs>
        {ticks}
      </g>
    );
}
