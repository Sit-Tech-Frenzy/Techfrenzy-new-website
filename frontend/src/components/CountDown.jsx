import React, { useState, useEffect } from 'react';

export const CountDown = () => {
    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        const difference = +new Date(`${year}-05-17T10:00:00`) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0'),
                minutes: Math.floor((difference / 1000 / 60) % 60).toString().padStart(2, '0'),
                seconds: Math.floor((difference / 1000) % 60).toString().padStart(2, '0'),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div className="flex gap-2 lg:gap-5 justify-center items-center bg-gray-900 text-white lg:p-10 rounded-lg">
            <div className="flex flex-col items-center bg-gray-700 p-2 lg:p-5 rounded-lg">
                <span className="countdown font-mono text-6xl">{timeLeft.days}</span>
                <span className="text-xl">Days</span>
            </div>
            <span className="text-6xl">:</span>
            <div className="flex flex-col items-center bg-gray-700 p-2 lg:p-5 rounded-lg">
                <span className="countdown font-mono text-6xl">{timeLeft.hours}</span>
                <span className="text-xl">Hours</span>
            </div>
            <span className="text-6xl">:</span>
            <div className="flex flex-col items-center bg-gray-700 p-2 lg:p-5 rounded-lg">
                <span className="countdown font-mono text-6xl">{timeLeft.minutes}</span>
                <span className="text-xl">Minutes</span>
            </div>
            <span className="text-6xl">:</span>
            <div className="flex flex-col items-center bg-gray-700 p-2 lg:p-5 rounded-lg">
                <span className="countdown font-mono text-6xl">{timeLeft.seconds}</span>
                <span className="text-xl">Seconds</span>
            </div>
        </div>
    );
}