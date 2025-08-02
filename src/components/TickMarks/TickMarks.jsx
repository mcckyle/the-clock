//File name: TickMarks.jsx
//Author: Kyle McColgan
//Date: 01 August 2025
//Description: This file contains the tick marks component for the React clock site.

import styles from './TickMarks.module.css';

export default function TickMarks()
{
    return (
        <g className={styles.tickRing}>
            {Array.from({ length: 60 }).map((_, i) => {
                const angle = (i * 6) * (Math.PI / 180);
                const x1 = 100 + 85 * Math.cos(angle);
                const y1 = 100 + 85 * Math.sin(angle);
                const x2 = 100 + 95 * Math.cos(angle);
                const y2 = 100 + 95 * Math.sin(angle);

                return (
                    <line key = {i}
                    x1={x1} y1={y1} x2={x2} y2={y2}
                    data-second={i}
                    className={`${styles.tick} ${((i + 15) % 5 === 0 ? styles.hourTick : '')}`}/>
                );
            })}
        </g>
    );
}
