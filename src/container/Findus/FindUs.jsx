import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact"/>
      <h1 className="headtext_cormorant" style={{marginBottom: '3rem'}}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">1175 Wantagh Ave, Wantagh, NY 11793 </p>
        <p className="p__opensans" style={{color: '#db006b', margin: '2rem 0'}}> Opening Hours </p>
        <p className="p__opensans"> Monday - Friday 12:00pm - 8:00pm </p>
        <p className="p__opensans"> Saturday - Sunday 12:00pm - 8:00pm </p>
      </div>
      <button className="custom__button" style={{color: 'white' ,background:'#db006b', marginTop: '2rem'}}>Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus"/>
    </div>


  </div>
);

export default FindUs;
