import React from "react";
import './about.css';
import { Helmet } from 'react-helmet';


const About = () => {
  return (
      <div className="body">
          <Helmet>
              <title>About Me</title>
              <meta name="description" content="About Me" />
          </Helmet>
          <h2>About</h2>
          <div className="aboutContainer">
              <div>
                  <p>
                      Hi! I am Kirtan Patel. I graduated from Georgia Tech in 2018 with a Bachelors in Computer Science. I have worked at Peloton and am currently working at Bolt. Technology and fitness are my main two passions and I strive to share topics that I find are important to make the world a little better through technology and education.
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
