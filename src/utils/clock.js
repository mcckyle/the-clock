//File name: clock.js
//Author: Kyle McColgan
//Date: 24 August 2025
//Description: This file contains a helper function for the AnalogClock component.

export const getChicagoParts = () => {

    const now = new Date();

    //Get the current time in CST (Chicago Time).\
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Chicago",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
    });

    const parts = formatter.formatToParts(now);
    const get = type => Number(parts.find(p => p.type === type)?.value ?? 0);

    // const options = { timeZone: "America/Chicago" };
    // const chicagoTime = new Date(now.toLocaleString("en-US", options));
    //
    // const ms = chicagoTime.getMilliseconds();
    // const s = chicagoTime.getSeconds() + ms / 1000;
    // const m = chicagoTime.getMinutes() + s / 60;
    // const h = chicagoTime.getHours() + m / 60;

    const h = get("hour");
    const m = get("minute");
    const s = get("second") + now.getMilliseconds() / 1000;

    //Continuous fractions...
    const minuteFraction = m + s / 60;
    const hourFraction = h + minuteFraction / 60;

    //return { h, m, s };
    return { h: hourFraction, m: minuteFraction, s };
}
