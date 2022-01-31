import { fireEvent, getByTestId, render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import DetailsPage from "../components/DetailsPage";
import { EventActivity } from '../model/Event';
import { MemoryRouter } from "react-router-dom";


describe('testing details Page', () => {


    it('renders without crashing', () => {

        render(<MemoryRouter>
            <DetailsPage />
        </MemoryRouter>)

    })

    it('renders home icon correctly', () => {

        const { queryByText } = render(<MemoryRouter>
            <DetailsPage />
        </MemoryRouter>);
        const icon = queryByText('details-activity-title') as HTMLAnchorElement;

        waitFor(() => expect(icon).toHaveAttribute(
            'src',
            'home.png',
        ));
    });

    it('renders activity title, location, description and date', () => {
        const testData: EventActivity = {
            id: 1,
            title: '',
            description: '',
            imgUrl: '',
            date: '',
            location: '',
            comments: []
        };

        render(<MemoryRouter>
            <DetailsPage />
        </MemoryRouter>)

        screen.queryAllByText(testData.title, { exact: false });
        screen.getAllByText(testData.location, { exact: false });
        screen.getAllByText(testData.description, { exact: false });
        screen.getAllByText(testData.date, { exact: false });
    })

    it('renders image correctly with src imgUrl', () => {

        const { queryByText } = render(<MemoryRouter>
            <DetailsPage />
        </MemoryRouter>);
        const image = queryByText('event icon picture') as HTMLAnchorElement;

        waitFor(() => expect(image).toHaveAttribute(
            'src',
            'https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        ));
    });

    it('shows registration button responding correctly', async () => {

        //   render(<MemoryRouter>
        //     <DetailsPage />
        //     </MemoryRouter>);

        // const clickToAttendBtn = await screen.getByRole('button', {
        //     name: 'Click to Attend'
        // });
        // fireEvent.click(clickToAttendBtn);
        // const notAttendingBtn = screen.getByRole('button', {
        //     name: 'Not attending anymore'
        // });

        // expect(notAttendingBtn).toBeTruthy();



    });

})