import { render, screen, cleanup } from '@testing-library/react'
import { shallow, mount } from 'enzyme'
import Header from '../components/Header'

afterEach(cleanup)

describe('Header component', () => {
  it('renders without errors', () => {
    render(<Header searchText="" setSearchText={() => {}} />)
  })

  it('renders empty input initially', () => {
		const wrapper = shallow(<Header searchText="" setSearchText={() => {}} />)
		const input = wrapper.find('input')
		expect( input.exists() ).toBe(true)
		
		const value = input.render().val()
		expect( value ).toBe('')
	})

	it('renders title "MeetUp"', () => {
    render(<Header searchText="" setSearchText={() => {}} />)

		expect(screen.getByTestId('test-title')).toBeInTheDocument()
	})

	it('renders search input element', () => {
		render(<Header searchText="" setSearchText={() => {}} />)

		expect(screen.getByPlaceholderText('Search for "Hiking"')).toBeInTheDocument()
	})

	it('Displays filtered cards when user types in letters in the search bar', () => {
		const filterTestFn = jest.fn()
		const wrapper = mount(<Header searchText="" setSearchText={filterTestFn} />)
		const input = wrapper.find('.search-input-test')
    
    input.simulate('change', { target: { value: 'Dance' } })

		expect(filterTestFn).toHaveBeenCalled()
		expect(filterTestFn).toHaveBeenCalledWith('Dance')
    
	})
})


		
    
    
  