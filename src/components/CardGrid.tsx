import FrontCard from "./FrontCard"
import { EventActivity } from '../model/Event'

const data: EventActivity[] = [
  {
    id: 1, 
    title: 'Yoga', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
    imgUrl: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    date: "Mon,FEB 1 @1:00 AM CET",
    location: 'Kellers Park'
  },
  {
    id: 2, 
    title: 'Hiking', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
    imgUrl: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    date: "Wed,MAR 5 @12:00 AM CET",
    location: 'Delsjön'
  },
  {
    id: 3, 
    title: 'Photography', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
    imgUrl: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    date: "Mon,FEB 12 @9:00 AM CET",
    location: 'Brunnsparken'
  },
  {
    id: 4, 
    title: 'Connect!', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
    imgUrl: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    date: "Fri,APR 3 @5:00 PM CET",
    location: 'Gothenburg'
  },
  {
    id: 5, 
    title: 'Gamers unite!', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
    imgUrl: 'https://images.unsplash.com/photo-1544652478-6653e09f18a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    date: "Mon,DEC 1 @1:00 AM CET",
    location: 'Online'
  },
  {
    id: 6, 
    title: 'Book Club', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
    imgUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    date: "Sun,NOV 1 @2:00 PM CET",
    location: 'Online'
  },
]

interface Props {
  searchString: string
}

const CardGrid = ({ searchString }: Props) => {
  const filteredData = data.filter(activity => activity.title.toLowerCase().includes(searchString.toLowerCase())) 

  return(
   <>
    <h4 className="events-title" >Events</h4>
    <section data-testid="all-events" className="card-grid">
      {filteredData.map(activity => (
        <FrontCard key={activity.id} activity={activity} />
       ))}
    </section>    
   </>
  )
}

export default CardGrid
     