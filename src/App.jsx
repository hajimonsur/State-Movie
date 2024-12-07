import AddMovie from "./components/AddMovie"
import { useState } from "react"
import MovieList from "./components/MovieList"



const App = () => {

  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description:
        "A thief who steals corporate secrets through dream-sharing technology is given a task of inception.",
      posterURL: "https://example.com/inception.jpg",
      rating: 4.8,
    },
    {
      title: "The Dark Knight",
      description:
        "Batman faces the Joker, a criminal mastermind who brings chaos to Gotham City.",
      posterURL: "https://example.com/darkknight.jpg",
      rating: 4.9,
    },
  ]);
  const handleAddMovie = (newMovie) => setMovies([...movies, newMovie]);
  

  return (
  
      <div>
      <h1>Movie App</h1>
      
      <MovieList movies={movies} />
      <AddMovie onAddMovie={handleAddMovie} />
    </div>
   
  )
}

export default App