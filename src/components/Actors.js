import React from "react";
import { actors } from "../data";

function Actors() {

  const actorData = actors.map(actor => {
    return (
      <div key={actor}>
        <h3>{actor.name}</h3>
        <ul>
          {actor.movies.map(movie => {
            return (
              <li key={movie.id}>{movie}</li>
            )
          })}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {actorData}
    </div>
  )
}

export default Actors;
