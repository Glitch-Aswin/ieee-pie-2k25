import React from "react";
import EventList from "../../components/EventList.jsx";
import './Events.css';
import CountdownTimer from "../CountDownTimer.jsx";

export const Events = () => {
  return (
    <section id="events" className="events-section">
      <div className="events-header">
        <h1>Event Sessions</h1>
        <p>Join us for a day of innovation, learning, and networking with industry experts. Our carefully curated sessions bring you the latest insights in technology, leadership, and financial markets.</p>
      </div>
      <div className="events-container">
        <EventList />
      </div>
      <div className="events-container">
        <CountdownTimer targetDate="2025-01-15T10:00:00"/>
      </div>
    </section>
  );
};