import React, { useState } from "react";

import arrow from "../assets/jslogoinactive.png"
import arrowHover from "../assets/jslogoactive.png"

const Skills = ()=>{

const[over,setOver] = useState(false)



    return (
       
<div className="skillscontainer"  >
 
    <h3>What I Code With !</h3>

<div onMouseOver={() => setOver(true)}
      onMouseOut={() => setOver(false)}   >


<img src={over ? arrowHover : arrow}
          alt="arrow"
          width="400"
          height="400"
></img>

</div>
</div>

    )
}

export default Skills