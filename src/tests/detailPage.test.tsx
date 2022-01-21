import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DetailPage from '../components/DetailPage';
import { EventActivity } from '../model/Event';

// afterEach(cleanup);

describe('DetailPage component', () => {
  it('renders detail without errors', () => {
    const testData: EventActivity = {
      id: 1,
      title: 'Yoga',
      description: 'This is a yoga group',
      imgUrl: '',
      date: '',
      location: '',
    };
    render(<DetailPage activity={testData} />);
  });

  it('renders activity title, location, description and date', () => {
    const testData: EventActivity = {
      id: 234,
      title: 'Running',
      description: 'Running together is fun',
      imgUrl: '',
      date: '',
      location: '',
    };
    render(<DetailPage activity={testData} />);

    screen.getAllByText(testData.title, { exact: false });
    screen.getAllByText(testData.location, { exact: false });
    screen.getAllByText(testData.description, { exact: false });
    screen.getAllByText(testData.date, { exact: false });
  });

  it('renders image correctly with src imgUrl', () => {
    const testData: EventActivity = {
      id: 24,
      title: '',
      description: '',
      imgUrl:
        'https://images.unsplash.com/photo-1561375807-5af05d4d7fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      date: '',
      location: '',
    };
    const { getByAltText } = render(<DetailPage activity={testData} />);
    const image = getByAltText('event picture');

    expect(image).toHaveAttribute(
      'src',
      'https://images.unsplash.com/photo-1561375807-5af05d4d7fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    );
  });

  it('displays place remain', () => {
    const testData: EventActivity = {
      id: 7,
      title: '',
      description: '',
      imgUrl: '',
      date: '',
      location: '',
    };

    render(<DetailPage activity={testData} />);

    expect(screen.getByTestId('placeRemain')).toHaveTextContent('Place remain');
  });

  it('shows register button responding correctly', () => {
    const testData: EventActivity = {
      id: 8,
      title: '',
      description: '',
      imgUrl: '',
      date: '',
      location: '',
    };

    render(<DetailPage activity={testData} />);
    const button = screen.getByTestId('registerBtn');

    fireEvent.click(button);

    expect(button).toHaveTextContent('Registered!');
  });

  it('shows correct number on place remain after register button clicked', () => {
    const testData: EventActivity = {
      id: 9,
      title: '',
      description: '',
      imgUrl: '',
      date: '',
      location: '',
    };

    render(<DetailPage activity={testData} />);
    const button = screen.getByTestId('registerBtn');

    fireEvent.click(button);

    expect(screen.getByTestId('mutable-num').textContent).toBe('19');
    expect(button).toHaveTextContent('Registered!');
    expect(button).toBeDisabled();
  });
});

// function afterEach(cleanup: () => void) {
//   throw new Error('Function not implemented.');
// }
