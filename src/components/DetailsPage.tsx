import { useState } from 'react';
// import { FaToggleOn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { EventActivity } from '../model/Event';
import Comments from './Comments';
import home from './home.png';

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
    <div className="home-icon">
      <Link to="/">
        <img className="details-home-icon" src={home} alt="home" />
      </Link>
    </div>
    {eventDetail ? (
      <div>

        <h3 className="details-activity-title">{eventDetail.title}</h3>


        <img data-testid="image" className="details-event-icon" src={eventDetail.imgUrl} alt="event icon picture" />

        <div className="details-container">

          <div className="details-date-location">
            <p className="details-date-time">{eventDetail.date}</p>
            <p className="location">{eventDetail.location}</p>
          </div>

          <button
            onClick={() => setIsAttending(!isAttending)}
            className="register-button"
            data-testid="registerBtn"
            type="button"
            aria-label="button"
          >
            {!isAttending ? 'Click to Attend' : 'Not attending anymore'}
          </button>
        </div>

        <p className="details-description">{eventDetail.description}</p>

        <Comments singleEvent={eventDetail} />
      </div>
    ) : null}
  </section>
  );
};

export default DetailsPage;
