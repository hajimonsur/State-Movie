import React from 'react'

const MovieCard = ({movie}) => {
    const style = {
        grid: {
            border: '1px solid black',
            padding: '20px',
            margin: '20px',
            justifyContent: 'center',
            borderRadius: '20px',
            backgroundColor: 'gainsboro'
        }
    }
  
  return (
    <div style={style.grid}> 
         <img src={movie.posterURL || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzMP_KMX-JYjb9tSoCTdzSNlC9BKI9rSBM7Q&s'} alt={movie.title} style={{ width: '200px', height: '300px' }} onError={(e) => e.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzMP_KMX-JYjb9tSoCTdzSNlC9BKI9rSBM7Q&s'} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  )
}

export default MovieCard