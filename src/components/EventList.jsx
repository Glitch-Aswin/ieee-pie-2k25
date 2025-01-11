import React from 'react';
import EventCard from './EventCard';
import './EventList.css';

// Sample events data - you can move this to a separate file
const events = [
  {
    title: 'Managerial Talk: Leadership in the Tech Era',
    time: '10:00 AM - 11:30 AM',
    date: 'January 15th, 2025',
    speakers: ['Anjali', 'Ramesh'],
    topics: ['Leadership in Tech', 'Building Teams for Innovation', 'Challenges in Tech Leadership'],
    description: 'In this session, you will learn about the key leadership skills needed in the rapidly changing world of technology.',
    imageUrl: '/tlk.png'
  },
  {
    title: 'Cybersecurity Workshop: Defending the Digital Frontier',
    time: '12:00 PM - 2:00 PM',
    date: 'January 15th, 2025',
    speakers: ['Arvind', 'Paul'],
    topics: ['Introduction to Cybersecurity', 'Cyber Threats & Defense', 'Best Practices in Cyber Hygiene'],
    description: 'Learn how to protect yourself and organizations from digital threats, including hacking techniques and defensive strategies.',
    imageUrl: '/cyb.png'
  },
  {
    title: 'Stock Market Workshop: Navigating the Market',
    time: '2:30 PM - 4:00 PM',
    date: 'January 15th, 2025',
    speakers: ['Nikhil', 'Rekha'],
    topics: ['Stock Trading Basics', 'Technical vs Fundamental Analysis', 'Building an Investment Portfolio'],
    description: 'Understand how to navigate the stock market, make informed decisions, and grow your investment portfolio.',
    imageUrl: '/stocks.png'
  }
];

const EventList = () => {
  return (
    <div className="event-list">
      {events.map((event, index) => (
        <EventCard
          key={index}
          title={event.title}
          time={event.time}
          date={event.date}
          speakers={event.speakers}
          topics={event.topics}
          description={event.description}
          imageUrl={event.imageUrl}
        />
      ))}
    </div>
  );
};

export default EventList;