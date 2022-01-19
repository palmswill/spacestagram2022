import React from 'react';
import Routing from '../Routing';
import Navbar from './NavBar';

const Mainpanel = () => {
  
  return (
    <>
    <Navbar/>
    <main>
      <Routing/>
    </main>
    </>
  );
}

export default Mainpanel;
