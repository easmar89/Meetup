import { render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import CreateMeetup from "../components/CreateMeetup";


describe('createMeetup component testing', () => {
  it('renders without crashing', () => {
    render (<CreateMeetup/>)
  })

  it('new event is getting saved after clicking the postevent button', ()=> {
    render (<CreateMeetup/>)
   const postButton = screen.getByRole('button')
   const input = screen.getAllByPlaceholderText('Name for your event')
   userEvent.click(postButton)
  
  })
})