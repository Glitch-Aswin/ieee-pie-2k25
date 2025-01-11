import React, { useState } from 'react';
import './EventCard.css';

const EventCard = ({ title, time, date, description, imageUrl, speakers, topics }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`event-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="card">
        {/* Front Side */}
        <div className="card-front">
          <div className="image-container">
            <img src={imageUrl || '/placeholder-event.jpg'} alt={title} className="event-image" />
          </div>
          <div className="content-container">
            <h3>{title}</h3>
            <p className="time">{time}</p>
            <p className="date">{date}</p>
            {speakers && (
              <div className="speakers">
                <p className="speaker-label">Speakers:</p>
                <p>{speakers.join(', ')}</p>
              </div>
            )}
          </div>
        </div>
        {/* Back Side */}
        <div className="card-back">
          <h3>Event Details</h3>
          {topics && (
            <div className="topics">
              <h4>Topics:</h4>
              <ul>
                {topics.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
            </div>
          )}
          <p>{description}</p>
          <button>Register Now</button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;