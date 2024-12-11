import { useState } from "react";
import "../App.css";

const AddMovie = ({ onAddMovie }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState();
  const [trailerURL, setTrailerURL] = useState("");

  const handleAdd = () => {
    if (title && description && posterURL && rating && trailerURL) {
      onAddMovie({ title, description, posterURL, rating, trailerURL });
      setTitle("");
      setDescription("");
      setPosterURL("");
      setRating();
      trailerURL("");
    } else {
      alert("Please fill in all fields.");
    }
  };
  return (
    <div>
      <div className="addInput">
        <h2>Add Movie</h2>

        <div style={style.hold}>
          <label htmlFor="label"> Title:</label>
          <input
            style={style.input}
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div style={style.hold}>
          <label htmlFor="">Description:</label>
          <input
            style={style.input}
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div style={style.hold}>
          <label htmlFor="">Poster:</label>
          <input
            style={style.input}
            type="text"
            placeholder="Poster URL"
            value={posterURL}
            onChange={(e) => setPosterURL(e.target.value)}
          />
        </div>

        <div style={style.hold}>
          <label htmlFor="">Trailer:</label>
          <input
            style={style.input}
            type="text"
            placeholder="Trailer URL"
            value={trailerURL}
            onChange={(e) => setTrailerURL(e.target.value)}
          />
        </div>

        <div style={style.hold}>
          <label htmlFor=""> Rating:</label>
          <input
            style={style.input}
            type="number"
            placeholder="Rating"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          />
        </div>
        <button type="submit" onClick={handleAdd} style={style.btn}>
          Add Movie
        </button>
      </div>
    </div>
  );
};
const style = {
  hold: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  input: {
    height: "45px",
    width: "300px",
    margin: "10px 0px 10px 0px",
  },

  btn: {
    width: "130px",
    height: "40px",
    backgroundColor: "green",
    color: "white",
    border: "none",
    borderRadius: "20px",
    // cursor: "pointer",
    textAlign: "center",
    marginTop: "20px",
  },
};

export default AddMovie;
