import React from 'react';
//import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Intro from '../Intro/Intro';
// import Commercial from '../Commercial/Commercial';
import Swip from '../Slider/Slider';
import Photo from '../Photo/Photo';
import Footer from '../Footer/Footer';
 import Offers from '../Offers/Offers';
// import Portfolio from '../Porfolio/Portfolio';
import './Main.css';


function Main() {
    return (
      <>
        <Header  isMain={true}/>
        <main>
          <Hero />
          <Intro />
          <Swip />
          <Offers />
          <Photo/>
        </main>
        <Footer />
      </>
    );
  }
  
  export default Main;