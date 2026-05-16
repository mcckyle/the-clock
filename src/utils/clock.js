//File name: clock.js
//Author: Kyle McColgan
//Date: 15 May 2026
//Description: This file contains a helper function for the AnalogClock React project.

export const getChicagoParts = () => {

    const now = new Date();

    //Get the current time in CST (Chicago Time).
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Chicago",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    });

    const parts = formatter.formatToParts(now);
    const getPart = (type) => Number(parts.find((part) => part.type === type)?.value ?? 0);

    const seconds = getPart("second") + now.getMilliseconds() / 1000;
    const minutes = getPart("minute") + seconds / 60;
    const hours = getPart("hour") + minutes / 60;

    //return { h, m, s };
    return { h: hours, m: minutes, s: seconds, };
}
