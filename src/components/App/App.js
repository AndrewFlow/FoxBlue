
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Contacts from '../Contacts/Contacts';
import React, { useState, useEffect } from 'react';
import Preloader from '../Preloader/Preloader.js';

import './App.css';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
 
    setTimeout(() => {
        setIsLoading(false);
    }, 2000);
}, []);

  return (
    <div>
      {isLoading ? <Preloader /> :
        <>
          <Routes>
            <Route path="/" element=
              {
                <Main />
              }
            />
            <Route path="/contacts" element=
              {
                <Contacts />
              }
            />
          </Routes>
        </>}
    </div>
  );
};

export default App;


