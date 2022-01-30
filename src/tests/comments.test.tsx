import { render, screen } from '@testing-library/react';
import Comments from '../components/Comments';
import { EventActivity } from '../model/Event';

describe('testing comments component', () => {
  const testData: EventActivity = {
    id: 1,
    title: 'Yoga',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imgUrl:
      'https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    date: 'Mon,FEB 1 @1:00 AM CET',
    location: 'Kellers Park',
    comments: [
      { user: 'sara', message: 'how to book this event?' },
      { user: 'anonymous', message: 'Is this event free?' },
    ],
  };
  it('renders without crashing', () => {
    render(<Comments singleEvent={testData} />);
  });
  it('has textarea to write comments',() => {

    render (<Comments singleEvent={testData}/>)
   let placeholderComment = screen.getByPlaceholderText('Enter your comment here...')
   expect(placeholderComment).toBeInTheDocument()
  })

  it('has input to write the GuestName',() => {

    render (<Comments singleEvent={testData}/>)
   let placeholderName = screen.getByPlaceholderText('Enter your Name')
   expect(placeholderName).toBeInTheDocument()
  })

  it('has button to save the comments', () => {
    render (<Comments singleEvent={testData}/>)
    let button = screen.getByRole('button')
    expect(button).toBeInTheDocument()

  })
  
  it('has listitem to display the message', () => {
     render (<Comments singleEvent={testData}/>)

    let messages = screen.getAllByTestId('message-list')
    expect(messages[0].textContent).toBe("how to book this event?")
  }) 
  it('has listitem to display the name', () => {
    render (<Comments singleEvent={testData}/>)
    let names = screen.getAllByTestId('listitem')
    expect(names[0].textContent).toBe('sara')

  })
});

