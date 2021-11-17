import { Movie } from "./Movie";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";


export function MovieList() {
  const [movies, setMovies] = useState([])

  const getMovies = () => {
    fetch("https://61932a72d3ae6d0017da83c8.mockapi.io/movies")
      .then((data) => data.json())
      .then((mvs) => setMovies(mvs))
  }
  useEffect(getMovies, [])

  //after delete -> refresh
  const deleteMovie = (id) => {
    fetch(`https://61932a72d3ae6d0017da83c8.mockapi.io/movies/${id}`, {
      method: "DELETE",
    }).then(() => getMovies())
  }

  const history = useHistory()

  return (
    <section className="movie-list">
      {movies.map(({ name, rating, summary, poster, id }) => (
        <Movie
          name={name}
          rating={rating}
          summary={summary}
          poster={poster}
          id={id}

          deleteButton={
            <IconButton
              onClick={() => {
                deleteMovie(id)
                // console.log("delte", index)
                // const deleteIdx = id
                // const remainingMovies = movies.filter((mv, idx) => idx !== deleteIdx)
                // console.log("remainign", remainingMovies)
                // setMovies(remainingMovies)
              }}
              className="movie-show-button"
              color="error"
              aria-label="more info"
            >
              <DeleteIcon />
            </IconButton>
          }

          editButton={
            <IconButton
              style={{ marginLeft: "auto" }}
              onClick={() => history.push("/movies/edit/" + id)}
              className="movie-show-button"
              color="primary"
              aria-label="more info"
            >
              <EditIcon />
            </IconButton>
          }

        />
      ))}
    </section>
  );
}
