import './index.css'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero.js';
import React, { useState } from 'react';
import Menu from './components/Menu/Menu';
import hero from './static/hero.jpg';
import CartModal from './components/Modals/CartModal/CartModal';
import Footer from './components/Footer/Footer';

function App() {

  const [showCartModal, setShowCartModal] = useState(false);

  const toggleCartModal = () => {
    setShowCartModal(prevState => !prevState);
  }

  return (
    <>
      <div style={{backgroundImage:`url(${hero})`}} className='py-10 object-cover min-h-screen'>
        {showCartModal ? <CartModal toggleCartModal={toggleCartModal}/> : ''}
        <Navbar toggleCartModal={toggleCartModal}/>
        <Hero />
        <div className="bg-stone-200 mx-auto my-10 w-[95%] sm:w-11/12 lg:w-10/12 tex-white z-0 p-2 sm:p-3 rounded-2xl">
          <Menu />
        </div>
        </div>
      <Footer />
    </>
  );
}

export default App;
