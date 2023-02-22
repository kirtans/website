import React from "react";
import './about.css';
import { Helmet } from 'react-helmet';


const About = () => {
  return (
      <div className="body">
          <Helmet>
              <title>About</title>
              <meta name="description" content="About Me" />
          </Helmet>
          <h2>About</h2>
          <div className="aboutContainer">
              <div>
                  <p>
                      Hi! I am Kirtan Patel. I graduated from Georgia Tech in 2018 with a Bachelors in Computer Science. I have been messing around with technology for over half my life. Health and Wellness, Education, and Technology are my main passions. I strive to find ways to share more about these topics in order to help make the world a little bit brighter.
                  </p>
                  <p>
                      I will also be adding some of my other passions and ventures to this site!
                  </p>
              </div>
              <img className="aboutImage" alt="Picture of myself" src={require('./profile_pic.jpg')} />
        </div>
      </div>
  );
}

export default About;
