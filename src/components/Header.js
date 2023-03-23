import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
  // All functional components must have a return method that contains JSX.
  // We return all the JSX inside a parent element with a className of "container".
  return (
    <div className="header">
        <header class="header">
        <nav class="nav">
            <ul>
                <li>
                <Link to={{ pathname: `/`}}>Home</Link>
                </li>
                <li>
                <Link to={{ pathname: `/Portfolio`}}>Portfolio</Link>
                </li>
                {/* <li>
                    <Link to={{ pathname: `/Portfolio`}}>Resume</Link>
                </li> */}
                <li>
                <Link to={{ pathname: `/Social`}}>Social</Link>
                </li>
            </ul>
        </nav>
    </header>

    </div>
  );
}