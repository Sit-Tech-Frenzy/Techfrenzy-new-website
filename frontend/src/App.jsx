import React from 'react';
import './index.css';
import { TimelinePage } from './components/TimelinePage';
import { PrizesPage } from './components/PrizesPage';
import { SponsorsPage } from './components/SponsersPage';

function App() {
  return (
    <div className='bg-black'>
      <div>
        <TimelinePage />
      </div>
      <div>
        <PrizesPage />
      </div>
      <div>
        <SponsorsPage />
      </div>
    </div>
  );
}

export default App;
