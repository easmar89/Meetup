import React, {useState} from 'react';

function Comments() {

  const [inputValue, setInputValue] = useState(" ");
  const [comment, setSaveComment] = useState("")

  const handleComment = (e: any) => {
    
    setInputValue(e.target.value)
  };

  const handleSaveComment = () => {
    setSaveComment(inputValue)
    setInputValue("")
  }
  return (
    <div>
      <textarea rows={5} cols={30}       
        placeholder="Enter your comment here..."
        value={inputValue}
        onChange={handleComment}
      />
         <br />
      <button  onClick={handleSaveComment} type="submit">Submit</button>
      <br/>
      <p>{comment}</p>
    </div>
  );
}

export default Comments;