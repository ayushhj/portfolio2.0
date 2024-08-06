import React, { useState } from "react";

import arrow from "../assets/jsinactivelogo.png";
import arrowHover from "../assets/jsactivelogo.png";
import reactactive from "../assets/reactlogo.png";
import reactinactive from "../assets/reactinactivelogo.png";

const Skills = () => {
  const [over, setOver] = useState(false);
  const [active, setActive] = useState(false);

  return (

<div className="company-logos">
      <h4 className="skillsheading" >Some of the technologies I code with!</h4>
      <div className="logos-container">
        <div className="logo">
        <img
             className="logoimg"
             onMouseOver={() => setOver(true)}
             onMouseOut={() => setOver(false)}
             src={over ? arrowHover : arrow}
          />

        </div>
        <div className="logo">
        <img
             className="logoimg"
             onMouseOver={() => setActive(true)}
             onMouseOut={() => setActive(false)}
             src={active ? reactactive : reactinactive}
          ></img>
        </div>
        <div className="logo"></div>
        <div className="logo"></div>
        <div className="logo"></div>
        <div className="logo"></div>
        <div className="logo"></div>
        <div className="logo"></div>
        <div className="logo"></div>
        <div className="logo"></div>

      </div>
    </div>

    // <div className="skillsmaincontainer">
    //   <div className="skillsheading">
    //     <h3>What I Code With !</h3>
    //   </div>

    //   <div className="skillscontainer">
    //     <div className="techlogos">
    //       <img
    //         className="logoimg"
    //         onMouseOver={() => setOver(true)}
    //         onMouseOut={() => setOver(false)}
    //         src={over ? arrowHover : arrow}
    //       ></img>
    //     </div>
    //     <div className="techlogos">
    //       <img
    //         className="logoimg"
    //         onMouseOver={() => setActive(true)}
    //         onMouseOut={() => setActive(false)}
    //         src={active ? reactactive : reactinactive}
    //       ></img>
    //     </div>
    //     s
    //   </div>
    // </div>
  );
};

export default Skills;
