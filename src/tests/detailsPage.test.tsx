import { render} from "@testing-library/react";
import DetailsPage from "../components/DetailsPage";


describe('testing details Page', () => {

 
it('renders without crashing', () => {

 render(<DetailsPage  />) 
})
it('renders correct title for the selected event', () => {
 
 render (<DetailsPage />)
 

 
 
})

})