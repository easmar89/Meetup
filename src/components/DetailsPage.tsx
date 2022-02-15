import { useState, useEffect } from 'react';
// import { FaToggleOn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { EventActivity } from '../model/Event';
import Comments from './Comments';
import home from './home.png';

const DetailsPage = () => {
  const [isAttending, setIsAttending] = useState<boolean>();

  const eventID = +(localStorage.getItem('eventID') || -1);
  const eventsList = JSON.parse(localStorage.getItem('events') || '[]');
  let eventDetail: any;

  if (eventsList) {
    try {
      eventDetail = eventsList.filter(
        (e: EventActivity) => e.id === eventID,
      )[0];
    } catch (e) {
      console.log('no event saved');
    }
  }

  useEffect(() => {
    setIsAttending(eventDetail.attending);
  }, []); 

  function handleAttendingButton() {
    eventDetail.attending = !eventDetail.attending;
    setIsAttending(eventDetail.attending);

    let updatedEventsList = eventsList.map((e: EventActivity) => {
      if (e.id === eventID) {
        e.attending = eventDetail.attending;
        return e;
      } else {
        return e;
      }
    });

    localStorage.setItem('events', JSON.stringify(updatedEventsList));
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
          <img
            data-testid="image"
            className="details-event-icon"
            src={eventDetail.imgUrl}
            alt="event"
          />
          <div className="details-container">
            <div className="details-date-location">
              <p className="details-date-time">{eventDetail.date}</p>
              <p className="location">{eventDetail.location}</p>
            </div>

            <button
              onClick={handleAttendingButton}
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
