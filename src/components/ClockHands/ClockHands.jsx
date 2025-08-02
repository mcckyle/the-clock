//File name: ClockHands.jsx
//Author: Kyle McColgan
//Date: 01 August 2025
//Description: This file contains the clock hands component for the React clock site.

import styles from './ClockHands.module.css';

export default function ClockHands()
{
    return (
        <div className={styles.hands}>
            <div className={styles.handWrapper}>
                <div className = {styles.hourHand} />
            </div>
            <div className={styles.handWrapper}>
                <div className = {styles.minuteHand} />
            </div>
            <div className={styles.handWrapper}>
                <div className = {styles.secondHand} />
            </div>
        </div>
    );
}
