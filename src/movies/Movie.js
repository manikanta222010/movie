import { useState } from "react";
import { Counter } from "../helper/Counter.js";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from "react-router-dom";



export function Movie({ name, rating, summary, poster, id, deleteButton, editButton }) {
  const [show, setShow] = useState(true);

  const history = useHistory()
  // Conditional styling
  const styles = {
    color: rating < 8 ? "crimson" : "green",
    fontWeight: "bold"
  };
  // Conditional styling
  // const summaryStyles = {
  //   display: show ? "block" : "none"
  // };
  return (
    <Card className="movie-container">
      <CardContent>
        <img src={poster} alt={name} className="movie-poster" />
        <div className="movie-specs">
          <h3 className="movie-name">{name}</h3>

          <IconButton onClick={() => {
            console.log(id);
            history.push("/movies/" + id)
          }}
            className="movie-show-button"
            color="primary"
            aria-label="more info"
          >
            <InfoIcon />
          </IconButton>
          <IconButton onClick={() => setShow(!show)}
            className="movie-show-button"
            color="primary"
            aria-label="hide"
          >
            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
          <p className="movie-rating" style={styles}>
            ⭐{rating}
          </p>
        </div>


        {/* Conditional rendering*/}
        {show ? <p className="movie-summary">{summary}</p> : ""}
        <CardActions>
          <Counter /> {editButton} {deleteButton}
        </CardActions>
      </CardContent>
    </Card>
  );
}
