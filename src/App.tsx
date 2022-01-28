import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import FrontCard from './components/FrontCard';
import DetailsPage from './components/DetailsPage';




function App() {
  const [searchString, setSearchString] = useState<string>('');

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
                searchText={searchString}
                setSearchText={setSearchString}
              />
               <FrontCard />
              
            </>
          }
        />

        <Route path="/details" element={<><DetailsPage /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
