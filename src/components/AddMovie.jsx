import { useState} from 'react'

const AddMovie = ({onAddMovie}) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [posterURL, setPosterURL] = useState('');
    const [rating, setRating] = useState();

    const handleAdd = () => {
        if (title && description && posterURL && rating) {
          onAddMovie({ title, description, posterURL, rating });
          setTitle('');
          setDescription('');
          setPosterURL('');
          setRating(0);
        } else {
          alert('Please fill in all fields.');
        }
      };
  return (
    <div>
         
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      />
      <button type='submit'  onClick={handleAdd}>Add Movie</button>
   

    </div>
  )
}

export default AddMovie