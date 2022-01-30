import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { EventActivity } from '../model/Event';
import data from '../model/data';
import '../App.css';

interface Props {
  searchText: string;
}

export default function FrontCard({ searchText }: Props) {
  const [events, setEvents] = useState<any>([]);
  const navigate = useNavigate();

  function handleReadMore(id: number) {
    localStorage.setItem('eventID', JSON.stringify(id));
    navigate('/details');
  }

  if (!localStorage.getItem('events')) {
    localStorage.setItem('events', JSON.stringify(data));
    setEvents(data);
  }

  useEffect(() => {
    if (localStorage.getItem('events')) {
      let fetchEvents = JSON.parse(localStorage.getItem('events') || '');

      setEvents(fetchEvents);
    }
  }, []);

  return (
    <>
      {events.map((activity: EventActivity) => {
        return (
          <section data-testid="all-events" className="grid-container">
            <section
              key={activity.id}
              className="frontCard"
              data-testid="create-group-btn"
            >
              <img
                className="event-icon"
                src={activity.imgUrl}
                alt="event icon picture"
              />
              <h3 className="activity-title">{activity.title}</h3>
              <div className="date-location">
                <p className="date-time">{activity.date}</p>
                <p className="location">{activity.location}</p>
              </div>
              <p>{activity.description}</p>

              <button
                className="readmore-button"
                onClick={() => handleReadMore(activity.id)}
                data-testid="readmoreBtn"
              >
                Read more
              </button>
            </section>
          </section>
        );
      })}
    </>
  );
}
