import React from 'react';
import './index.css';
import { TimelinePage } from './components/TimelinePage';
import { PrizesPage } from './components/PrizesPage';
import { SponsorsPage } from './components/SponsersPage';
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer"

function App() {
  return (
    <div className='bg-gray-900'>
      <div>
        <Navigation />
      </div>
      <div>
        <Hero/>
      </div>
      <div>
        <TimelinePage />
      </div>
      <div>
        <PrizesPage />
      </div>
      <div>
        <SponsorsPage />
      </div>
      <div>
        <About/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
