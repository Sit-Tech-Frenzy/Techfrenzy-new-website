import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import About from "./components/About";
import Footer from "./components/Footerr"

const App = () => {
  return (<div>
    <div className="h-full flex flex-col justify-center items-center bg-gray-900">
      <Navigation />
      <Hero/>
      <About/>
      <Footer/>
    </div>
      
    </div>
  );
};

export default App;