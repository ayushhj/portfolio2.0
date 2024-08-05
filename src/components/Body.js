import React from "react"
import mainphoto from "../assets/mainphoto.jpg"
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { FaArrowAltCircleDown } from "react-icons/fa";
const Body =()=>{
    return(
<>

<div className="Main-hero" > 

<div className="Section1"  >
    <div>
        <h2 className="greeting"  >Hey There !</h2>
        <h1 className="intro"  > I am Ayush</h1>
        <h3 className="tagline" >A Learner by the day & 
Developer by the night !
</h3>
<p className="description" > <RoughNotation type="underline" show = {true} color="#c92a3e"  animationDelay={500} iterations={3} multiline={true} > I am Frontend Developer passionate about creating stunning and user-friendly websites and web applications with JavaScript and some other cool libraries and frameworks.</RoughNotation>I build the bridge between design and functionality to create amazing user experiences.
</p>

<p className="endline" >
<RoughNotation type="highlight" show = {true} color="#F7D560"  nimationDelay={500} >
So, let’s work together and bring ideas to life on the web.🚀 
</RoughNotation>
</p>
    </div>
    <button className="connect"  >Let's Connect !</button>
    <button className=" knowmore"  >Know more about me  <FaArrowAltCircleDown className="circledown" />  </button>
    
</div>

<div className="Section2" >
    <img src={mainphoto} className="mainphoto"  ></img>
</div>

</div>
</>
    )
}

export default Body;