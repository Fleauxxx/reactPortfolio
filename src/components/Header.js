import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="header">
        <header class="header">
        <h1>Floyd Hudson Web Dev</h1>
        <nav>
            <ul>
              
                <li class="hover">
                    <a href="#About">About Me</a>
                </li>
                <li>
                    <Link to={{ pathname: `/portfolio`}} >
                    Portfolio
                    </Link>
                </li>
                <li>
                    <a href="#Contact">Contact Me</a>
                </li>
                <li>
                    <a href="../../public/favicon.ico" download>Resume</a>
                </li>
            </ul>
        </nav>
    </header>

    </div>
  );
}