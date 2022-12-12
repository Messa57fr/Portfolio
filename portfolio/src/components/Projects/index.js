import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import Pizza from "../../assets/images/pizza-next.png";

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 2500);
  }, []);

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={["P", "r", "o", "j", "e", "c", "t", "s"]}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>Here is some of my projects.</p>
          <p>
            Some have been done during my bootcamp at Le Wagon while others are
            just personnal training.
          </p>
        </div>
        <div className="projects-cont">
          <div className="projects-links">
            <img src={Pizza} alt="pizza-project" />
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;
