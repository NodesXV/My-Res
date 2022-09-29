import React from 'react';

import {images} from '../../constants'

import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
  </div>
    
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img"></img> 
        <p className="p__opensans">Shao Huang</p>
        <p className="p__opensans">Hi! My name is Shao Huang and I am a chef from China. Since I came to the United States more than twenty years ago, I have been working as a chef and always had a dream to have my own restaurant. I wish to bring you the finest temptations of Chinese food and to share the elegant culture of Chinese cuisine with others. Jani is the realization of my dream, I am determined to bring you authentic style of the orient while altering it to suit the taste of the American people. My recipes particularly reflects my endeavor in this matter. The recipes include the most tasty and elegant dishes of both Chinese and Japanese food in our Chinese restaurants for many years. </p>
        <button type="button" style={{color: 'white' ,background:'#db006b'}} className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content-knife flex__center">
        <img src={images.knife} alt="about_knife"></img>
        </div>

        <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img"></img> 
        <p className="p__opensans">We use the freshest ingredients, and have noodles, dim-sum, barbecue, sushi as well as the open-kitchen are what sets Jani apart from traditional Chinese restaurants. Those specialties enable Jani to maintain a high standard of quality in the prepared dishes and a friendly cooking style. Jani is a result of many years of learning, planning, and working. It has been my effort to create a comfortable atmosphere, an attractive setting. fine food and drinks as well as courteous service. When you walk into Jani you will see my treasure of teapots that have been lovingly collected from all around the world. Most of the teapots have been given by family and friends and I invite you to enjoy this unique collection as well as the wide selection of delectable dishes. The staff and I hope you have a delightful experience at Jani and I thank you for your continuous support.   </p>
        <button type="button" style={{color: 'white' ,background:'#db006b'}} className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
