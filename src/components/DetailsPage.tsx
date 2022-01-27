import { useState, useEffect, useRef } from 'react';
import { FaToggleOn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { EventActivity } from '../model/Event';
import Comments from './Comments';

const DetailsPage = () => {
  const [isAttending, setIsAttending] = useState<boolean>(false);

  let eventID = +(localStorage.getItem('eventID') || -1);

  let eventDetail = JSON.parse(localStorage.getItem('events') || '').filter(
    (e: EventActivity) => e.id === eventID,
  )[0];

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
      <button
        onClick={() => setIsAttending(!isAttending)}
        className="register-button"
        data-testid="registerBtn"
      >
        {!isAttending ? 'Click to Attend' : 'Not attending anymore'}
      </button>
      <Comments singleEvent={eventDetail} />
    </section>
  );
};

export default DetailsPage;
