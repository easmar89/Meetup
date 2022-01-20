import {fireEvent, render, screen, cleanup} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import FrontCard from '../components/FrontCard'
import { EventActivity } from '../model/Event'



afterEach(cleanup)

describe('FrontCard component', () => {

  it('renders frontCard without errors', () => {
    const testData: EventActivity = { id: 1, title: 'Yoga', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
                                    imgUrl: '', date: '', location: '' }
    render(<FrontCard activity={testData} />)
  })

  it('renders activity title, location, description and date', () => {
    const testData: EventActivity = { id: 234, title: 'Running', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
                                      imgUrl: '', date: '', location: '' }
    render(<FrontCard activity={testData} />)

    screen.getAllByText(testData.title, { exact: false })
    screen.getAllByText(testData.location, { exact: false })
    screen.getAllByText(testData.description, { exact: false })
    screen.getAllByText(testData.date, { exact: false })
  })

  it('renders image correctly with src imgUrl', () => {
    const testData: EventActivity = { id: 24, title: '', description: '', imgUrl: 'https://images.unsplash.com/photo-1561375807-5af05d4d7fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', date: '', location: ''}
    const { getByAltText } = render (<FrontCard  activity={testData} />)
    const image = getByAltText('event picture')
    
    expect(image).toHaveAttribute('src', 'https://images.unsplash.com/photo-1561375807-5af05d4d7fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')
  })

  it('shows read more button responding correctly', () => {
    const testData: EventActivity = { id: 8, title: '', description: '', imgUrl: '', date: '', location: ''  }
    
    render(<FrontCard activity={testData} />, )
    const button = screen.getByTestId('readmoreBtn')

    fireEvent.click(button)

    expect(button).toBeCalled()
  })


})
function afterEach(cleanup: () => void) {
    throw new Error('Function not implemented.')
}

