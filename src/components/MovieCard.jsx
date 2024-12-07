import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div>
         <img src={movie.posterURL} alt={movie.title} style={{ width: '200px' }} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  )
}

export default MovieCard