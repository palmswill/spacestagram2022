import React from 'react';
import Displaycards from '../components/DisplayCards';
import Mainsidebar from '../components/MainSideBar';

const Homepage = () => {
  return (
    <div className="home-page flex">
      <div className="sidebar">
        <Mainsidebar/>
      </div>
      <div className="main-card-container">
        <Displaycards/>
      </div>
    </div>
  );
}

export default Homepage;
