import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
<<<<<<< HEAD
      <div className='h-[4000px]'></div>
=======
      {/* <div className='h-[4000px]'></div> */}
>>>>>>> 76419053caf109301743e2574879ba58ad0986cd
    </div>
  );
};

export default App;
