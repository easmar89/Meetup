import React, { useState } from 'react';
import { EventActivity } from '../model/Event';

export default function CreateMeetup() {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');
  

  const newMeetup: EventActivity = {
    id: Date.now(),
    title: title,
    description: details,
    imgUrl: image,
    date: date,
    location: location,
    comments: [{ user: '', message: '' }],
  };
  let newUpdate: Array<object> | null = [];

  const postEvent = () => {
    if(!title || !details || !date || !location){
      return
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

  

  return (
    <div>
      <form action='/'>
        <h4>Create Event Here</h4>
        <label htmlFor="">
          Event Title:
          <input
            type="text"
            placeholder="Name for your event"
            onChange={e => {
              setTitle(e.target.value);
            }}
          />
        </label>
        <label htmlFor="">
          Event Details
          <input
            type="text"
            placeholder="Describe your event"
            onChange={e => {
              setDetails(e.target.value);
            }}
          />
        </label>
        <label htmlFor="">
          Where and When:
          <input
            type="text"
            placeholder="Event date and time"
            onChange={e => {
              setDate(e.target.value);
            }}
          />
        </label>
        <label htmlFor="">
          Event Location:
          <input
            type="text"
            placeholder="Event location"
            onChange={e => {
              setLocation(e.target.value);
            }}
          />
        </label>
        <label>Select image:
        <input type="file" accept="image/*" value={image} onChange={(e) => {setImage(e.target.value)}}/>
        </label>
        <button onClick={postEvent}>POST EVENT</button>
      
      </form>
    </div>
  );
}
