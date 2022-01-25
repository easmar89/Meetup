import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EventActivity } from '../model/Event';

const DetailsPage = () => {
  let eventID = +(localStorage.getItem('eventID') || -1);

  console.log(eventID);
  let eventDetail = JSON.parse(localStorage.getItem('events') || '').filter(
    (e: EventActivity) => e.id === eventID,
  )[0];

  
  const [selectedEvent, setSelectedEvent] = useState<number>(
    eventDetail.placesAvailable,
  );
  const [isAttending, setIsAttending] = useState<boolean>(false);

  const handleRegisterEvent = () => {
    setIsAttending(!isAttending);
    let allEvents: EventActivity[] = JSON.parse(
      localStorage.getItem('events') || '',
    );
    let updatedEvents = allEvents.map(e => {
      if (e.id === eventID) {
        if(isAttending){
         
          return { ...e, placesAvailable: e.placesAvailable - 1 };
          
        }else{
          
          return { ...e, placesAvailable: e.placesAvailable + 1 };
        }
       
      } else {
        return e;
      }
    });
    setSelectedEvent(eventDetail.placesAvailable - 1)

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
          {selectedEvent}
        </span>
      </p>
      <button
        onClick={handleRegisterEvent}
        className="register-button"
        data-testid="registerBtn"
      >
        {!isAttending ? 'subscribe' : 'unsubscribe'}
      </button>
    </section>
  );
};

export default DetailsPage;
