import React, { useState, useEffect } from 'react';
import './CountDown.css';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [targetDate]);

  const padWithZero = (num) => {
    return num.toString().padStart(2, '0');
  };

  return (
    <div className="countdown-container">
      <h2 className="countdown-title">Time Remaining</h2>
      
      <div className="countdown-wrapper">
        {/* Days */}
        <div className="countdown-item">
          <div className="countdown-box">
            <span className="countdown-value">
              {padWithZero(timeLeft.days)}
            </span>
          </div>
          <span className="countdown-label">Days</span>
        </div>

        {/* Hours */}
        <div className="countdown-item">
          <div className="countdown-box">
            <span className="countdown-value">
              {padWithZero(timeLeft.hours)}
            </span>
          </div>
          <span className="countdown-label">Hours</span>
        </div>

        {/* Minutes */}
        <div className="countdown-item">
          <div className="countdown-box">
            <span className="countdown-value">
              {padWithZero(timeLeft.minutes)}
            </span>
          </div>
          <span className="countdown-label">Minutes</span>
        </div>

        {/* Seconds */}
        <div className="countdown-item">
          <div className="countdown-box">
            <span className="countdown-value">
              {padWithZero(timeLeft.seconds)}
            </span>
          </div>
          <span className="countdown-label">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;