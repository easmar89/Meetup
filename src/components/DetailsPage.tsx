import { useState } from 'react';
// import { FaToggleOn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { EventActivity } from '../model/Event';
import Comments from './Comments';
import home from './home.png';

const DetailsPage = () => {
  const [isAttending, setIsAttending] = useState<boolean>(false);

  let eventID = +(localStorage.getItem('eventID') || -1);

  let eventDetail = JSON.parse(localStorage.getItem('events') || '').filter(
    (e: EventActivity) => e.id === eventID,
  )[0];

  return (
    <section data-testid={'event' + eventDetail.id} className="detailsPage">
      <div className="home-icon">
        <Link to="/">
          <img className="details-home-icon" src={home} alt="home" />
        </Link>
      </div>

      <h3 className="details-activity-title">{eventDetail.title}</h3>

      <img
        className="details-event-icon"
        src={eventDetail.imgUrl}
        alt="event"
      />

      <div className="details-container">
        <div className="details-date-location">
          <p className="date-time">{eventDetail.date}</p>
          <p className="location">{eventDetail.location}</p>
        </div>

        <button
          onClick={() => setIsAttending(!isAttending)}
          className="register-button"
          data-testid="registerBtn"
        >
          {!isAttending ? 'Click to Attend' : 'Not attending anymore'}
        </button>
      </div>
      <p className="details-description">{eventDetail.description}</p>
      <Comments singleEvent={eventDetail} />
    </section>
  );
};

export default DetailsPage;
