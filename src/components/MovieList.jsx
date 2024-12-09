import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
 
    const style = {
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            // margin: "20px auto",
            justifyContent: 'center',
        
        }
    }

  return (
    <div  style={style.grid} >
         {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
