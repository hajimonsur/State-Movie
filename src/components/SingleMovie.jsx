import { Container } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
const SingleMovie = ({movies}) => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  const style = {
   grid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid black",
    padding: "20px",
    width: "600px",
    backgroundColor: "gainsboro",
   },
container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px auto",

   },
   anchor: {
    textDecoration: "none",
    color: "green",
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
   <div style={style.container}>
     <div style={style.grid}>
       <img src={movie.posterURL} alt={movie.title} style={{ width: "300px" }} onError={(e) => e.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzMP_KMX-JYjb9tSoCTdzSNlC9BKI9rSBM7Q&s'} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>
      <a href={movie.trailerURL} target="_blank" rel="noopener noreferrer" style={style.anchor}>
        Watch Trailer
      </a>
      <br />
      <Link to="/" style={style.navigator}>Back to Movies</Link>
    </div>
   </div>
  )
}

export default SingleMovie