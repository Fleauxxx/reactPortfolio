import React from "react";
import fleaux from '../../src/assets/fleaux.JPG'

export default function Default() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
 <div class="default">
    <div>
        <h1> Hello my name is Floyd and I am a junior web developer</h1>
    </div>
    <div>
        <img className="fleaux" src={fleaux} alt="pic of myself"/>
    </div>

    <div>
        <h1>Welcome to my Portfolio</h1>
    </div>
    </div>

    
    

  );
}