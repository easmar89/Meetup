import '../App.css';
import { useState } from 'react';
import { FaSistrix } from 'react-icons/fa';
import Modal from 'react-modal';
import CreateMeetup from '../components/CreateMeetup';
import add from './add-button.png';

interface Props {
  searchText: string;
  setSearchText: (search: string) => void;
}

const Header = ({ searchText, setSearchText }: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };
  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="header-container">
      <header className="header-wrapper">
        <h1 data-testid="test-title" className="main-title">
          MeetUp
        </h1>
        <div>
          
          <Modal 
          isOpen={modalIsOpen}
          style={{
            content: {
              background: 'rgb(206, 211, 219)',              
            }}}>
            <button onClick={setModalIsOpenToFalse}>x</button>
            <CreateMeetup />
          </Modal>
          <input
            className="search-input-test"
            type="text"
            value={searchText}
            onChange={event => setSearchText(event.target.value)}
            placeholder='Search for "Hiking"'
          />
          <FaSistrix className="magnify-search" />

          <button className='create-event' onClick={setModalIsOpenToTrue}>
            <img className="create-event-icon" src={add} alt="add event" />
            </button>
            
        </div>
      </header>
    </div>
  );
};

export default Header;
