import React, { useState } from 'react';
import { EventActivity } from '../model/Event';

interface Props {
  singleEvent: EventActivity;
}

function Comments({ singleEvent }: Props) {
  const [inputValue, setInputValue] = useState(' ');
  const [user, setUser] = useState('');
  const [comment, setSaveComment] = useState('');

  const handleComment = (e: any) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const handleSaveComment = () => {
    let toPost = {
      user: user,
      message: comment,
    };
    singleEvent.comments.push(toPost);
    console.log(singleEvent);
  };

  return (
    <div>
      <textarea
        rows={5}
        cols={30}
        placeholder="Enter your comment here..."
        value={inputValue}
        onChange={handleComment}
      />
      <br />
      <button onClick={handleSaveComment} type="submit">
        Submit
      </button>
      <br />
      <li>{comment}</li>
    </div>
  );
}

export default Comments;
