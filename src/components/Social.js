import React from "react";
import GitHub from '../../src/assets/GitHub-logo.png'
import linkedin from '../../src/assets/linkedin.png'

export default function Social() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div>
        <h1>Click an image to navigate to my personal pages and find more information about me</h1>
    

    
      <section>
        <a href="https://github.com/Fleauxxx"
          ><img className="github" src={GitHub} alt=""
        /></a>
      </section>
      <section>
        <a href="https://www.linkedin.com/in/floyd-hudson-b146ba96/"
          ><img className="linkedin" src={linkedin} alt=""
        /></a>
      </section>
   

      
        <a href=""download>Resume</a>
      </div>


 
  );
}