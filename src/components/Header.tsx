import '../App.css'
import { FaSistrix } from "react-icons/fa"


interface Props {
  searchText: string
  setSearchText: (search: string) => void
}

const Header = ({ searchText, setSearchText }: Props) => {
  return(
    <div className="header-container">
      <header className="header-wrapper">
        <h1 data-testid="test-title" className="main-title">MeetUp</h1>            
        <div>
          <input className="search-input-test" type="text" value={searchText} onChange={event => setSearchText(event.target.value)} placeholder='Search for "Hiking"' />
          <FaSistrix className="magnify-search" />
        </div>
      </header>
    </div>
  )
}

export default Header