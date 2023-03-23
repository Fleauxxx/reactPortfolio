import React from 'react';
import horoscope from '../../src/assets/horoscope.png'
import movies from '../../src/assets/movies.png'


export default function Body() {
    // All functional components must have a return method that contains JSX.
    // We return all the JSX inside a parent element with a className of "container".
    return (
        <div class="body">
        <div class="container">
        <header>
          <h1>Here you will find a collection of some of my latest projects</h1>
        </header>
      <section >
          <h3>Horoscope API</h3>
          <img className="project" src={horoscope} alt="project pic"/>
      </section>
      <section>
          <h3>Movies that Move</h3>
          <img class="project" src={movies} alt="project pic"></img>
      </section>
      </div>
  </div>
  
    );
}