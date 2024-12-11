import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({movie}) => {
    const style = {
        grid: {
            border: '1px solid black',
            padding: '20px',
            margin: '20px',
            justifyContent: 'center',
            borderRadius: '20px',
            backgroundColor: 'gainsboro'
        },
        navigator: {
          textDecoration: 'none',
          backgroundColor: "green",
          color: "white",
          padding: "11px",
          borderRadius: "20px"
        }

       
    }
  
  return (
    <div style={style.grid} > 
         <img src={movie.posterURL || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzMP_KMX-JYjb9tSoCTdzSNlC9BKI9rSBM7Q&s'} alt={movie.title} style={{ width: '200px', height: '300px' }} onError={(e) => e.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzMP_KMX-JYjb9tSoCTdzSNlC9BKI9rSBM7Q&s'} />
      <h3>{movie.title}</h3>
      <p>Rating: {movie.rating}</p>
      <Link to={`/movie/${movie.id}`} style={style.navigator}>View Details</Link>
    </div>
  )
}

export default MovieCard