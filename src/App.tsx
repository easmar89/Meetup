import { useState } from 'react';
import './App.css';

//import FrontCard from './components/FrontCard'
import Header from './components/Header';
import CardGrid from './components/CardGrid';

function App() {
  const [searchString, setSearchString] = useState<string>('');

  return (
    <div className="App">
      <header className="header-test">
        <Header searchText={searchString} setSearchText={setSearchString} />
      </header>

      <main>
        <CardGrid searchString={searchString} />
      </main>
    </div>
  );
}

export default App;
