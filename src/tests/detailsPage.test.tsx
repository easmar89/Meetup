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



})