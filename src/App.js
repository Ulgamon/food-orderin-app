import './index.css'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero.js';
import React, { useState } from 'react';
import Menu from './components/Menu/Menu';
import hero from './static/hero.jpg';

function App() {
  return (
    <div style={{backgroundImage:`url(${hero})`}} className='py-10 object-cover'>
      <Navbar />
      <Hero />
      <div className="bg-stone-200 mx-auto my-10 w-11/12 lg:w-10/12 tex-white z-0 p-3 rounded-2xl">
        <Menu />
      </div>
    </div>
  );
}

export default App;
