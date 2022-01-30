/* eslint-disable @typescript-eslint/no-unused-vars */
import { render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import DetailsPage from "../components/DetailsPage";
import FrontCard from "../components/FrontCard";
import {EventActivity} from '../model/Event'


describe('testing details Page', () => {

   
it('renders without crashing', () => {

 
 render(<DetailsPage  />) 
})


it('renders the selected meetup from the frontcard component', () => {

 render (< FrontCard/>)
 render (<DetailsPage />)
 const eventName = 'Yoga'
 const eventDescription = 'This group allows beginners to feel comfortable about experiencing Yoga and Meditation.Anyone and everyone should join! We would like to help anyone looking to learn more about Meditation and Yoga'
 const readMore = screen.getAllByTestId('readmoreBtn')[0]
 userEvent.click(readMore)


})
})