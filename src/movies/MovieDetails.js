import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";



export function MovieDetails() {
  const history = useHistory()
  const { id } = useParams();
  // const movie = movies[id];

  const [movie, setMovies] = useState({})
  useEffect(() => {
    fetch(`https://61932a72d3ae6d0017da83c8.mockapi.io/movies/${id}`, {method: "GET"})
    .then((data) => data.json())
    .then((mv) => setMovies(mv))
  }, [id])


  return (
    <div>
      <iframe width="100%" height="800"
        src={movie.trailer}
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>

      <div className="movie-detail-container">
        <div className="movie-specs">
          <h3 className="movie-name">{movie.name}</h3>
          <p className="movie-rating" style={movie.styles}>
            ⭐{movie.rating}
          </p>
        </div>
        <p className="movie-summary">{movie.summary}</p>
        <Button onClick={() => history.goBack()} 
        variant="oulined" 
        startIcon={<ArrowBackIcon/>}
        >
          Back
        </Button>
      </div>
    </div>

  );
}
