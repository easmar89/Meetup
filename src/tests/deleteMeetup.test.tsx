const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CreateMeetup from '../components/CreateMeetup';
import FrontCard from '../components/FrontCard';

describe('renders delete meetup button for the newly created event', () => {
  it('renders without crashing', () => {
    render(<CreateMeetup />);
  });

  it('delete button is displayed after clicking the postevent button', () => {
    render(<CreateMeetup />);
    const postButton = screen.getByTestId('post-button');
    console.log(postButton);
    userEvent.click(postButton);
    render(<FrontCard searchText="" />);
    const deleteButton = screen.getAllByTestId("delete-button");
    expect(deleteButton).toBeInTheDocument();
  });
});
