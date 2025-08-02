//File name: RomanNumerals.jsx
//Author: Kyle McColgan
//Date: 01 August 2025
//Description: This file contains the numerals component for the React clock site.

import styles from '../AnalogClock/AnalogClock.module.css';

const ROMAN = [
    "XII","I","II","III","IV","V",
    "VI","VII","VIII","IX","X","XI"
];

export default function RomanNumerals()
{
    return (
        <>
            {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i * 30 - 90) * (Math.PI / 180);
                const x = 100 + 70 * Math.cos(angle);
                const y = 100 + 70 * Math.sin(angle);

                return (
                    <text key = {i} x={x} y={y} className={styles.numeral}>
                        {ROMAN[i]}
                    </text>
                );
            })}
        </>
    );
}
