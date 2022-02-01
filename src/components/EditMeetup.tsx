import { useState, useEffect } from 'react';
import { EventActivity } from '../model/Event';

interface Props {
  eventDetails: EventActivity;
}

export default function EditMeetup({ eventDetails }: Props) {
  const [title, setTitle] = useState(eventDetails.title);
  const [details, setDetails] = useState(eventDetails.description);
  const [date, setDate] = useState(eventDetails.date);
  const [location, setLocation] = useState(eventDetails.location);
  const [image, setImage] = useState<Blob[]>([]);
  const [imageURL, setImageURL] = useState<any>(eventDetails.imgUrl);

  const newMeetup: EventActivity = {
    id: Date.now(),
    title: title,
    description: details,
    imgUrl: imageURL,
    date: date,
    location: location,
    creator: 'organiser',
    comments: [],
  };

  const postEvent = () => {
    if (!title || !details || !date || !location) {
      console.log('Please fill in all the details');
      return;
    }
    let allEvents = JSON.parse(localStorage.getItem('events') || '[]');
    let filteredEvents = allEvents.filter(
      (e: EventActivity) => e.id !== eventDetails.id,
    );
    filteredEvents.push(newMeetup);
    localStorage.setItem('events', JSON.stringify(filteredEvents));
  };

  function uploadImage(e: any) {
    setImage([...e.target.files]);
  }

  useEffect(() => {
    if (image.length < 1) {
      return;
    }

    let reader = new FileReader();
    reader.readAsDataURL(image[0]);

    reader.onload = function () {
      setImageURL(reader.result);
    };
  }, [image]);

  return (
    <div className="edit-event-container">
      <form className="edit-event-wrapper"  action="/">

        <h4 className='edit-event-h4title'>Edit Event Here</h4>

        <div className="edit-event-title">
        <label htmlFor="">
          Event Title:
          <input
            type="text"
            placeholder="Name for your event"
            value={title}
            onChange={e => {
              setTitle(e.target.value);
            }}
          />
        </label>
        </div>

        <div className="edit-event-details">
        <label htmlFor="">
          Event Details
          <input
            type="text"
            placeholder="Describe your event"
            value={details}
            onChange={e => {
              setDetails(e.target.value);
            }}
          />
        </label>
        </div>

        <div className="edit-event-date">
        <label htmlFor="">
          Date and Time:
          <input
            type="text"
            placeholder="Event date and time"
            value={date}
            onChange={e => {
              setDate(e.target.value);
            }}
          />
        </label>
        </div>

        <div className="edit-event-location">
        <label htmlFor="">
          Event Location:
          <input
            type="text"
            placeholder="Event location"
            value={location}
            onChange={e => {
              setLocation(e.target.value);
            }}
          />
        </label>
        </div>

        <div className="edit-event-img">
        <label>
          Select image:
          <input type="file" accept="image/*" onChange={uploadImage} />
        </label>
        <img className='newly-added-img' src={imageURL} alt="" />
        </div>

        <div className="edit-event-button">
        <button className="edit-event-botun" onClick={postEvent}>Edit event</button>
        </div>
      </form>
    </div>
  );
}
