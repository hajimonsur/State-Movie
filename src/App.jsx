import AddMovie from "./components/AddMovie"
import { useState } from "react"
import MovieList from "./components/MovieList"



const App = () => {

  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description:
        "A thief who steals corporate secrets through dream-sharing technology is given a task of inception.",
      posterURL: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQm6Oc0hLmhoWK0eGcrR61ZIOSoefPqQ6UVdMYe_1MvEyDVOYwyKvy0m2Yr-oWCnvR-bTiI1fxIyR5D7jguCwGMqYJJrP4bdYXUyyBgXz4",
      rating: 4.8,
    },
    {
      title: "The Dark Knight",
      description:
        "Batman faces the Joker, a criminal mastermind who brings chaos to Gotham City.",
      posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgWZuXwmDZijvlxY7ZTc-0OhvieitNY6DJB0_bX_vL6kGMDXFBT27BaGGlbo3903MCF8H8vRCO7w_I5sLXEkRR6-vHQZSTCJ7qcLQhfg",
      rating: 4.9,
    },
  ]);
  const handleAddMovie = (newMovie) => setMovies([...movies, newMovie]);
  

  return (
  
      <div>
       <AddMovie onAddMovie={handleAddMovie} />

       
      <h1>Movie List</h1>
      <MovieList movies={movies} />
     
    </div>
   
  )
}

export default App