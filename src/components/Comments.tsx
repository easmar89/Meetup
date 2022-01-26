import React, { useState } from 'react';
import { EventActivity } from '../model/Event';

interface Props {
  singleEvent: EventActivity;
}
function Comments({ singleEvent }: Props) {
  const [commentValue, setCommentValue] = useState('');
  const [user, setUser] = useState('');
  

  const handleComment = (e: any) => {
    setCommentValue(e.target.value);
 
  };

  const handleSaveName = (e: any) => {
    setUser(e.target.value);
  };
  const handleSaveComment = () => {
       console.log('comment is: .. ', commentValue);
    let toPost = {
      user: user,
      message: commentValue,
    };
   
    singleEvent.comments.push(toPost);
    setUser('');
    console.log(singleEvent.comments);
  };
  return (
    <div>
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
      <button onClick={handleSaveComment} type="submit">
        Add Comment
      </button>
      <br />
      <div className="comments-section">
        {singleEvent.comments.map((c: any, index: number) => {
          return (
            <ul key={index}>
              <li>
                {c.user}: <span>{c.message}</span>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default Comments;
