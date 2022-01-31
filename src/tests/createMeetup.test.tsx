/* eslint-disable import/first */
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CreateMeetup from '../components/CreateMeetup';
import FrontCard from '../components/FrontCard';

describe('createMeetup component testing', () => {
  it('renders without crashing', () => {
    render(<CreateMeetup />);
  });
  it('new event is getting saved after clicking the postevent button', () => {
    render(<CreateMeetup />);
    const postButton = screen.getByRole('button');
    const input = screen.getByPlaceholderText('Name for your event');
    userEvent.type(input as HTMLElement, 'Yoga');
    userEvent.click(postButton);
    render(<FrontCard searchText="" />);
    const title = screen.getByDisplayValue('Yoga');
    expect(title).toBeInTheDocument();
  });
});
