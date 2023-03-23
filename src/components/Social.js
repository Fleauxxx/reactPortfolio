import React from "react";
import GitHub from '../../src/assets/GitHub-logo.png';
import linkedin from '../../src/assets/linkedin.png';
import resume from '../../src/assets/resume.docx';

export default function Social() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div class="social">
        <h1>Click an image to navigate to my personal pages and find more information about me</h1>

      <section>
        <a href="https://github.com/Fleauxxx"
          ><img className="img" src={GitHub} alt="github icon"
          /></a>
      </section>
      <section>
        <a href="https://www.linkedin.com/in/floyd-hudson-b146ba96/"
          ><img className="img" src={linkedin} alt="linkedin icon"
          /></a>
      </section>
   

      
        <a href="../../src/assets/resume.docx" src={resume} download>Resume</a>
      </div>


 
  );
}