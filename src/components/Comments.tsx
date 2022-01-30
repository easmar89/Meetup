import React, { useState } from 'react';
import { EventActivity } from '../model/Event';

interface Props {
  singleEvent: EventActivity;
}
function Comments({ singleEvent }: Props) {
  const [commentValue, setCommentValue] = useState('');
  const [user, setUser] = useState('');
    const [event, setEvent] = useState(singleEvent);


  const handleComment = (e: any) => {
    setCommentValue(e.target.value);
  };

  const handleSaveName = (e: any) => {
    setUser(e.target.value);
  };
  const handleSaveComment = () => {
       let toPost = {
      user: user,
      message: commentValue,
    };

    let storedData = JSON.parse(localStorage.getItem('events') || '');
    let updatedData = storedData.map((e: any) => {
      if (e.id === singleEvent.id) {
        e.comments.push(toPost);
        return e;
      } else {
        return e;
      }
    });

    localStorage.setItem('events', JSON.stringify(updatedData));

    setUser('');
    setCommentValue('');
    setEvent(updatedData.find((e: any) => e.id === singleEvent.id));
  };
  
  return (
    <div className="details-comment">
      <textarea
        rows={5}
        cols={30}
        placeholder="Enter your comment here..."
        value={commentValue}
        onChange={handleComment}
      />
      <br />

      <input
        type="text"
        id="name"
        value={user}
        placeholder="Enter your Name"
        onChange={handleSaveName}
      />
      <button
        className="details-submit-btn"
        onClick={handleSaveComment}
        type="submit"
      >
        Post
      </button>
      <br />
      <div className="comments-section">
        {event ? event.comments.map((c: any, index: number) => {
          return (
            <ul key={index}>
                <li >
             <span data-testid = "listitem">{c.user}:</span>   
              <span data-testid = 'message-list'>{c.message}</span>
              </li>

            </ul>
          );
        }) : null}
      </div>
    </div>
  );
}

export default Comments;
