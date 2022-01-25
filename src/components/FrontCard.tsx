import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { EventActivity } from '../model/Event';
import data from '../model/data';
import '../App.css';

export default function FrontCard() {
  const [events, setEvents] = useState<any>([]);
  const navigate = useNavigate();

  function handleReadMore(id: number) {
    console.log(id);
    localStorage.setItem('eventID', JSON.stringify(id));
    navigate('/details');
  }

  localStorage.setItem('events', JSON.stringify(data));

  useEffect(() => {
    if (localStorage.getItem('events')) {
      let fetchEvents = JSON.parse(localStorage.getItem('events') || '');
      console.log(fetchEvents);

      setEvents(fetchEvents);
    }
  }, []);

  return (
    <>
      {events.map((activity: EventActivity) => {
        return (
          <section
            key={activity.id}
            className="frontCard"
            data-testid="create-group-btn"
          >
            <img className="event-icon" src={activity.imgUrl} alt="event" />
            <h3 className="activity-title">{activity.title}</h3>
            <div className="date-location">
              <p className="date-time">{activity.date}</p>
              <p className="location">{activity.location}</p>
            </div>
            <p className="place-remain" data-testid="placeRemain">
              Places remaining:&nbsp;{' '}
              <span style={{ color: 'red' }} data-testid="mutable-num">
                {activity.placesAvailable}{' '}
              </span>
            </p>
            <p>{activity.description}</p>

            <button
              className="readmore-button"
              onClick={() => handleReadMore(activity.id)}
              data-testid="readmoreBtn"
            >
              Read more
            </button>
          </section>
        );
      })}
    </>
  );
}


