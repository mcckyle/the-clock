//File name: ClockHands.jsx
//Author: Kyle McColgan
//Date: 1 October 2025
//Description: This file contains the clock hands component for the React analog clock project.

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
