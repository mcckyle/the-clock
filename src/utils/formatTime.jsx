//File name: formatTime.js
//Author: Kyle McColgan
//Date: 24 August 2025
//Description: This file contains a custom formatting helper function built for the React timer site.

export function formatTime(ms, includeCentiseconds = false)
{
    const centiSeconds = Math.floor((ms % 1000) / 10);
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const hours = Math.floor(ms / (1000 * 60 * 60));

    const pad = (num, size = 2) => String(num).padStart(size, "0");

    const formatted = {
        hours: pad(hours),
        minutes: pad(minutes),
        seconds: pad(seconds),
    };

    if (includeCentiseconds)
    {
        formatted.centiSeconds = pad(centiSeconds);
    }

    return formatted;
}
