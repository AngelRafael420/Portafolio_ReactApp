import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Let me tell you something about me</h3>
        <p>
        I am a young Dominican boy, apprentice in software development, so I have been very interested in learning about what web development is and thanks to Ing. Raydelto Hernandez and my cousins I have been able to learn what web development means, at the beginning of 2020 I focus more on what is the basis of each programming language that I have used such as Javascript, C# and a bit of Python. And I get that I can still continue learning more and more if I put it into practice every day so I can get more knowledge of what software technology is.
        </p>
      </div>
      <div className="about-img">
        <img
          src="https://hireline.io/blog/wp-content/uploads/2020/10/tec-programador.jpg" width="400" height="360"
          alt="about"
        />
      </div>
    </div>
  );
};

export default About;
