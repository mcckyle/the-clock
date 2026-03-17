//File name: RomanNumerals.jsx
//Author: Kyle McColgan
//Date: 16 March 2026
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
            {ROMAN.map((value, i) => {
                const angle = (i * 30 - 90) * (Math.PI / 180);

                const isCardinal = i === 0 || i === 6;
                const radius = isCardinal ? 60 : 67;

                const x = 100 + radius * Math.cos(angle);
                const y = 100 + radius * Math.sin(angle);

                return (
                    <text
                      key={i}
                      x={x}
                      y={y}
                      className={`${styles.numeral} ${isCardinal ? styles.cardinal : ""}`}
                    >
                      {value}
                    </text>
                );
            })}
        </>
    );
}
