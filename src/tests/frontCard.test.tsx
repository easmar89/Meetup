const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FrontCard from '../components/FrontCard';
import { EventActivity } from '../model/Event';


describe('FrontCard component', () => {

    //afterEach(cleanup)

    it('renders frontCard without errors', () => {

        render(<FrontCard searchText={''} />);

    });

    it('renders activity title, location, description and date', () => {
        const testData: EventActivity = {
            id: 234,
            title: '',
            description: '',
            imgUrl: '',
            date: '',
            location: '',
            comments: [] 
        };
        render(<FrontCard searchText={''}/>);

        screen.getAllByText(testData.title, { exact: false });
        screen.getAllByText(testData.location, { exact: false });
        screen.getAllByText(testData.description, { exact: false });
        screen.getAllByText(testData.date, { exact: false });
    });

    it('renders image correctly with src imgUrl', () => {

        const { getAllByAltText } = render(<FrontCard searchText={''}/>);
        const image = getAllByAltText('event icon picture')[0] as HTMLAnchorElement;

        expect(image).toHaveAttribute(
            'src',
            'https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        );
    });

    it('shows read more button responding correctly', () => {

        render(<FrontCard searchText={''}/>);

        const button = screen.queryAllByText('Read more')[0] as HTMLAnchorElement;

        fireEvent.click(button);
        expect(button).toBeEnabled();
    });
});
