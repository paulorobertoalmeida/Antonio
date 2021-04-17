import './App.css';
import React, { Component } from 'react'
import Navbar from './components/main/Navbar'
import Header from './components/main/Header'
import MarketPlace from './components/main/MarketPlace'
import LastRented from './components/main/LastRented'
import AboutUs from './components/main/AboutUs'
import LorenIpsun from './components/main/LorenIpsun'
import TopRenters from './components/main/TopRenters'
import Games from './components/main/Games'
import SocialMedia from './components/main/SocialMedia'
import Footer from './components/main/Footer'
import maincss from './components/main/main.css'

function App() {
  return (
    <div id="landingpage-container">
      <Navbar />
      <Header />
      <MarketPlace />
      <LastRented />
      <AboutUs />
      <LorenIpsun />
      <TopRenters />
      <Games />
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default App;
