import React from 'react';
import fleaux from '../../src/assets/fleaux.JPG'

export default function Body() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <main class="main">

        <div class="container1">
            <div id="About" class="about">
            </div>

            <div>
        <img className='fleaux' src={fleaux} alt="pic of me" />
                  
              </div>
        </div>

        {/* <div class="container2">
            <div id="Work" class="work">
                <h3>Work</h3>
            </div>

            <div class="itemTwo">
                <h3>🚧 Under construction 🚧</h3>
            </div>

        </div> */}
{/* 
        <div class="container3">
            <div id="Contact" class="contact">
                <h3>Contact</h3>
            </div>
            <div class="itemThree">
                <ul>
                    <li>
                        <a href="https://github.com/Fleauxxx?tab=repositories">Git Hub</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/floyd-hudson-b146ba96/">LinkedIn</a>
                    </li>
                    <li>
                        <a href="469-818-9677">Phone</a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="container4">
            <div id="Resume" class="resume">
                <h3>Resume</h3>
            </div>
            <div class="itemFour">
                <h3>Email me for an updated copy.</h3>
            </div>
        </div> */}


    </main>
  );
}