import React from 'react';
import './index.css';
import { TimelinePage } from './components/TimelinePage';
import { PrizesPage } from './components/PrizesPage';
import { SponsorsPage } from './components/SponsersPage';
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer"
import CardPage from './components/CardPage';
import TestimonialPage from './components/TestimonialPage';

function App() {
  return (
    <div className='bg-gray-900'>
      <Navigation />
      <Hero/>
      <TimelinePage />
      <PrizesPage />
      <SponsorsPage />
      <About/>
      <CardPage />
      <TestimonialPage />
      <Footer/>
    </div>
  );
}

export default App;
