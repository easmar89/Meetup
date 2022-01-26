import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { EventActivity } from '../model/Event';
import Comments from './Comments';
const DetailsPage = () => {
  let eventID = +(localStorage.getItem('eventID') || -1);

  console.log(eventID);
  let eventDetail = JSON.parse(localStorage.getItem('events') || '').filter(
    (e: EventActivity) => e.id === eventID,
  )[0];

  // const [placesAvailable, setPlacesAvailable] = useState<number>(
  //   eventDetail.placesAvailable,
  // );
  
  const [isAttending, setIsAttending] = useState<boolean>(false);

    useEffect(() => {})

  const handleRegisterEvent = () => {
    setIsAttending(true)
    let allEvents: EventActivity[] = JSON.parse(
      localStorage.getItem('events') || '',
    );
    let updatedEvents = allEvents.map(e => {
      if (e.id === eventID) {
        if (isAttending) {
          return { ...e, placesAvailable: e.placesAvailable - 1 };
        } else {
          return { ...e, placesAvailable: e.placesAvailable + 1 };
        }
      } else {
        return e;
      }
    });
    // setPlacesAvailable(eventDetail.placesAvailable - 1);

    localStorage.setItem('events', JSON.stringify(updatedEvents));
  };

  return (
    <section data-testid={'event' + eventDetail.id} className="detailsPage">
      <Link to="/">Home</Link> |{' '}
      <img className="event-icon" src={eventDetail.imgUrl} alt="" />
      <h3 className="activity-title">{eventDetail.title}</h3>
      <div className="date-location">
        <p className="date-time">{eventDetail.date}</p>
        <p className="location">{eventDetail.location}</p>
      </div>
      <p>{eventDetail.description}</p>
      <p data-testid="placeRemain">
        Places Remaining:{' '}
        <span style={{ color: 'red' }} data-testid="mutable-num">
          {eventDetail.placesAvailable}
        </span>
      </p>
      <button
        onClick={handleRegisterEvent}
        className="register-button"
        data-testid="registerBtn"
      >
        {!isAttending ? 'subscribe' : 'Unsubscribe'}
      </button>
      <Comments singleEvent={eventDetail} />
    </section>
  );
};

export default DetailsPage;
