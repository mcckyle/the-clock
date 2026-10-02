//File name: RomanNumerals.jsx
//Author: Kyle McColgan
//Date: 2 October 2026
//Description: This file contains the numerals component for the analog clock React project.

import styles from "./RomanNumerals.module.css";

const ROMAN = [
    "XII","I","II","III","IV","V",
    "VI","VII","VIII","IX","X","XI"
];

export default function RomanNumerals()
{
    return (
        <>
            {ROMAN.map((value, i) =>
            {
                const angle = (i * 30 - 90) * (Math.PI / 180);
                const radius = 65.5;

                const x = 100 + radius * Math.cos(angle);
                const y = 100 + radius * Math.sin(angle);

                return (
                    <text
                      key={value}
                      x={x}
                      y={y}
                      className={styles.numeral}
                    >
                      {value}
                    </text>
                );
            })}
        </>
    );
}
