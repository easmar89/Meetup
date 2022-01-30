import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import FrontCard from './components/FrontCard';
import DetailsPage from './components/DetailsPage';

function App() {
  const [searchString, setSearchString] = useState<string>('');
  const [online, setOnline] = useState<boolean>(false);
  const [live, setLive] = useState<boolean>(false);

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
              <div className="conta">
                <h4 className="events-title">Events</h4>
                <main>
                  <FrontCard searchText={searchString} />
                </main>
              </div>
            </>
          }
        />

        <Route
          path="/details"
          element={
            <>
              <DetailsPage />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
