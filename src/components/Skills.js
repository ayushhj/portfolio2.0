import React, { useState } from "react";

import arrow from "../assets/jsinactivelogo.png";
import arrowHover from "../assets/jsactivelogo.png";
import reactactive from "../assets/reactlogo.png";
import reactinactive from "../assets/reactinactivelogo.png";
import tslogo from "../assets/typescriptlogo.png";
import tsinactivelogo from "../assets/typescriptinactivelogo.png";
import tailwindlogo from "../assets/tailwindcsslogo.png";
import tailwindinactivelogo from "../assets/tailwindcssinactivelogo.png";
import reduxlogo from "../assets/reduxlogo.png";
import reduxinactivelogo from "../assets/reduxinactivelogo.png";
import nodelogo from "../assets/nodelogo.png";
import nodeinactivelogo from "../assets/nodeinactivelogo.png";
import graphqllogo from "../assets/graphqllogo.png";
import graphqlinactivelogo from "../assets/graphqlinactivelogo.png";
import htmllogo from "../assets/htmllogo.png";
import htmlinactivelogo from "../assets/htmlinactive.png";
import csslogo from "../assets/csslogo.png";
import cssinactivelogo from "../assets/cssinactivelogo.png";
import awslogo from "../assets/awslogo.png";
import awsinactivelogo from "../assets/awsinactivelogo.png";

const Skills = () => {
  const [over, setOver] = useState(false);
  const [active, setActive] = useState(false);
  const [tsactive, setTsActive] = useState(false);
  const [tailwind, setTailwind] = useState(false);
  const [redux, setRedux] = useState(false);
  const [node, setNode] = useState(false);
  const [graphql, setGraphql] = useState(false);
  const [html, setHtml] = useState(false);
  const [css, setCss] = useState(false);
  const[aws,setAws] = useState(false);

  return (
    <div className="company-logos">
      <h4 className="skillsheading">Some of the technologies I code with!</h4>
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
        <div className="logo">
          <img
            className="logoimg"
            onMouseOver={() => setTsActive(true)}
            onMouseOut={() => setTsActive(false)}
            src={tsactive ? tslogo : tsinactivelogo}
          ></img>
        </div>
        <div className="logo">
          <img
            className="logoimg"
            onMouseOver={() => setRedux(true)}
            onMouseOut={() => setRedux(false)}
            src={redux ? reduxlogo : reduxinactivelogo}
          ></img>
        </div>
        <div className="logo">
          <img
            className="logoimg"
            onMouseOver={() => setNode(true)}
            onMouseOut={() => setNode(false)}
            src={node ? nodelogo : nodeinactivelogo}
          ></img>
        </div>
        <div className="logo">
          <img
            className="logoimg"
            onMouseOver={() => setGraphql(true)}
            onMouseOut={() => setGraphql(false)}
            src={graphql ? graphqllogo : graphqlinactivelogo}
          ></img>
        </div>
        <div className="logo">
          <img
            className="logoimg"
            onMouseOver={() => setHtml(true)}
            onMouseOut={() => setHtml(false)}
            src={html ? htmllogo : htmlinactivelogo}
          ></img>
        </div>
        <div className="logo">
          <img
            className="logoimg"
            onMouseOver={() => setTailwind(true)}
            onMouseOut={() => setTailwind(false)}
            src={tailwind ? tailwindlogo : tailwindinactivelogo}
          ></img>
        </div>
        <div className="logo">
          <img
            className="logoimg"
            onMouseOver={() => setCss(true)}
            onMouseOut={() => setCss(false)}
            src={css ? csslogo : cssinactivelogo}
          ></img>
        </div>
        <div className="logo">
          <img
            className="logoimg"
            onMouseOver={() => setAws(true)}
            onMouseOut={() => setAws(false)}
            src={aws ? awslogo : awsinactivelogo}
          ></img>
        </div>
      </div>
    </div>


  );
};

export default Skills;
