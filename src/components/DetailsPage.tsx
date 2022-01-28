import { useState } from 'react';
// import { FaToggleOn } from 'react-icons/fa';
//import { Link } from 'react-router-dom';
import { EventActivity } from '../model/Event';
import Comments from './Comments';

const DetailsPage = () => {
  const [isAttending, setIsAttending] = useState<boolean>(false);

  let eventID = +(localStorage.getItem('eventID') || -1);

  let eventDetail;
  const detail = localStorage.getItem('events' || '');

  if (detail) {
    try {
      eventDetail = JSON.parse(detail).filter(
        (e: EventActivity) => e.id === eventID,
      )[0];
    } catch (e) {
      console.log('no event saved');
    }
    console.log(eventDetail.id);

  
  }

  return (
    <section className="detailsPage">
     {/*  <Link to="/">Home</Link> |{' '}  */}
      {eventDetail ? (
        <div>
          <img data-testid = "image" className="event-icon" src={eventDetail.imgUrl} alt="event" />
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
        </div>
      ) : null}
    </section>
  );
};

export default DetailsPage;
