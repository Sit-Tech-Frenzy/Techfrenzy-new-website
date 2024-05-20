import React from 'react';
import './index.css';
import { TimelinePage } from './components/TimelinePage';
import { PrizesPage } from './components/PrizesPage';
import { SponsorsPage } from './components/SponsersPage';
import { Navigation } from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import CardPage from './components/CardPage';
// import TestimonialPage from './components/TestimonialPage';
import { Element } from 'react-scroll';
import { Testimonial } from './components/Testimonial';

function App() {
  return (
    <div className='bg-gray-900'>
      <Navigation />
      <Element name='home'>
        <Hero />
      </Element>
      {/* <Element name='timeline'>
        <TimelinePage />
      </Element> */}
      <Element name='prizes'>
        <PrizesPage />
      </Element>
      {/* <Element name='sponsors'>
        <SponsorsPage />
      </Element> */}
      <Element name='about'>
        <About />
      </Element>
      <Element name='members'>
        <CardPage />
      </Element>
      <Element name='testimonial'>
        <Testimonial />
      </Element>
      <Element name='contact'>
        <Footer />
      </Element>
    </div>
  );
}

export default App;
