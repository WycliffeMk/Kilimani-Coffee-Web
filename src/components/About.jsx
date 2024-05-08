import React from "react";
import img from "../assets/img/about.jpg";
import { Button } from "react-scroll";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>

      <div>
        <div>
          <img src={img} alt="img" />
        </div>
        <div>
          <h2>What Makes Our Coffee Unique?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            repellat?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            labore fugiat assumenda praesentium? Quaerat, dolorem.
          </p>

          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
