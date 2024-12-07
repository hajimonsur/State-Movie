import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
 
    

  return (
    <div>
         {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
