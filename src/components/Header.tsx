import '../App.css'
import React,{useState} from 'react';
import { FaSistrix } from "react-icons/fa"
import Modal from 'react-modal';
import CreateMeetup from '../components/CreateMeetup'


interface Props {
  searchText: string
  setSearchText: (search: string) => void
}

const Header = ({ searchText, setSearchText }: Props) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }
    const setModalIsOpenToFalse =()=>{
      setModalIsOpen(false)
  }
  return(
    <div className="header-container">
      <header className="header-wrapper">
        <h1 data-testid="test-title" className="main-title">MeetUp</h1>            
        <div>
        <button onClick={setModalIsOpenToTrue}>Create Meetup</button>
        <Modal isOpen={modalIsOpen}>
                <button onClick={setModalIsOpenToFalse}>x</button>
                <CreateMeetup/>
            </Modal>
          <input className="search-input-test" type="text" value={searchText} onChange={event => setSearchText(event.target.value)} placeholder='Search for "Hiking"' />
          <FaSistrix className="magnify-search" />
        </div>
      </header>
    </div>
  )
}

export default Header