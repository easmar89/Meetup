import React, { useState } from "react"
import { EventActivity } from '../model/Event'
import '../App.css'

interface Props {
  activity: EventActivity
}


const FrontCard = ({ activity }: Props): JSX.Element => {

       const [peopleRegistred, setPeopleRegistred] = useState<number>(20)
  
  /*    const [isDisabled, setIsDisabled] = useState<boolean>(false)
    
      const handleButtonClick = () => {
        setPeopleRegistred(peopleRegistred - 1)
        setIsDisabled(true)
      } */

  return (
    <section className="frontCard" data-testid="create-group-btn" >
      <img className="event-icon" src={activity.imgUrl} alt="event picture" />
      <h3 className="activity-title">{activity.title}</h3>
      <div className="date-location">
        <p className="date-time">{activity.date}</p>
        <p className="location">{activity.location}</p>
      </div>
      <p className="place-remain" data-testid="placeRemain">Places remaining:&nbsp;  <span style={{color:"red"}} data-testid="mutable-num">{peopleRegistred} </span></p>
      <p>{activity.description}</p>      
      {/*    <button disabled={isDisabled} onClick={handleButtonClick} className="register-button" data-testid="registerBtn">{isDisabled ? 'Registered!' : 'Register'}</button><br /> */}
      <button  className="readmore-button" data-testid="readmoreBtn">Read more</button>
      

    </section>
  )
}

export default FrontCard