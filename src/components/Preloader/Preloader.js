import React from 'react';
import './Preloader.css';
 
const Preloader = () => {
 return (
   <div className="preloader">
     <div className="preloader__inner">
       <div className="preloader__spinner"></div>
     </div>
   </div>
 );
};
 
export default Preloader;