import { useState, useEffect } from 'react';
import { EventActivity } from '../model/Event';

export default function CreateMeetup() {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState<Blob[]>([]);
  const [imageURL, setImageURL] = useState<any>('');

  const newMeetup: EventActivity = {
    id: Date.now(),
    title: title,
    description: details,
    imgUrl: imageURL,
    date: date,
    location: location,
    attending: false,
    creator: 'organiser',
    comments: [],
  };
  let newUpdate: Array<object> | null = [];

  const postEvent = () => {
    if (!title || !details || !date || !location) {
      console.log('Please fill in all the details');
      return;
    }
    let events = localStorage.getItem('events');
    if (events) {
      newUpdate = JSON.parse(events);
      newUpdate?.push(newMeetup);
      console.log(newUpdate);
      localStorage.setItem('events', JSON.stringify(newUpdate));
    } else {
      localStorage.setItem('events', JSON.stringify(newMeetup));
    }
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
    <div className="create-event-container">
      <form className="create-event-wrapper" action="/">
        <h4 className="create-event-h4title">Create Event Here</h4>

        <div className="create-event-title">
          <label htmlFor="">
            Event Title:{' '}
            <input
              type="text"
              placeholder="Name for your event"
              onChange={e => {
                setTitle(e.target.value);
              }}
            />
          </label>
        </div>

        <div className="create-event-details">
          <label htmlFor="">
            Event Details:{' '}
            <input
              type="text"
              placeholder="Describe your event"
              onChange={e => {
                setDetails(e.target.value);
              }}
            />
          </label>
        </div>

        <div className="create-event-date">
          <label htmlFor="">
            Date and Time:{' '}
            <input
              type="datetime-local"
              placeholder="Event date and time"
              onChange={e => {
                setDate(e.target.value);
              }}
            />
          </label>
        </div>

        <div className="create-event-location">
          <label htmlFor="">
            Event Location:{' '}
            <input
              type="text"
              placeholder="Event location"
              onChange={e => {
                setLocation(e.target.value);
              }}
            />
          </label>
        </div>

        <div className="create-event-img">
          <label>
            Select image:{' '}
            <input type="file" accept="image/*" onChange={uploadImage} />
          </label>
          <img className='newly-added-img' src={imageURL} alt="" />
        </div>

        <div className="create-event-button">
          <button data-testid = "post-button" className="create-event-botun" onClick={postEvent}>
            POST EVENT
          </button>
        </div>
      </form>
    </div>
  );
}
