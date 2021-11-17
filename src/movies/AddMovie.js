import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom"
import { useFormik } from "formik"


export function AddMovie() {
  const history = useHistory()

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const addMovie = () => {
    console.log("Adding movie...", name, poster, rating, summary);

    const newMovie = {
      name,
      poster,
      rating,
      summary,
      trailer
    };

    // setMovies([...movies, newMovie]);


    fetch(`https://61932a72d3ae6d0017da83c8.mockapi.io/movies`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: { 'Content-Type': 'application/json' }
    }).then(() => history.push("/movies"))
  };


  const formik = useFormik({  // const {handleSubmit, values, handleChange, handleBlur, errors, touched } we can use destructuring like this
    initialValues: { name: "", poster: "", rating: "", summary: "", trailer: "" },
    validate: validateForm,  //after calling validateForm,if it doesnt return error then only onSubmit will be called
    onSubmit: (values) => {
      console.log("onSubmit", values)
      addMovie()
    }
  })

  return (
    <form className="add-movie-form" onSubmit={formik.handleSubmit}>
      <TextField
        id="name" name="name" value={formik.values.name} type="text"
        onChange={(event) => {
          formik.handleChange(event)
          setName(event.target.value)
        }}
        onBlur={formik.handleBlur}
        helperText={formik.errors.name && formik.touched.name && formik.errors.name}
        error={formik.errors.name && formik.touched.name && formik.errors.name !== ""}
        label="Enter movie name" variant="standard"
      />

      <TextField
        id="poster" name="poster" value={poster} type="url"
        onChange={(event) => {
          formik.handleChange(event)
          setPoster(event.target.value)
        }}
        onBlur={formik.handleBlur}
        helperText={formik.errors.poster && formik.touched.poster && formik.errors.poster}
        error={formik.errors.poster && formik.touched.poster && formik.errors.poster !== ""}
        label="Enter movie poster" variant="standard"
      />

      <TextField
        id="rating" name="rating" value={formik.values.rating} type="number"
        onChange={(event) => {
          formik.handleChange(event)
          setRating(event.target.value)
        }}
        onBlur={formik.handleBlur}
        helperText={formik.errors.rating && formik.touched.rating && formik.errors.rating}
        error={formik.errors.rating && formik.touched.rating && formik.errors.rating !== ""}
        label="Enter movie rating" variant="standard"
      />

      <TextField
        id="summary" name="summary" value={formik.values.summary} type="text"
        onChange={(event) => {
          formik.handleChange(event)
          setSummary(event.target.value)
        }}
        onBlur={formik.handleBlur}
        helperText={formik.errors.summary && formik.touched.summary && formik.errors.summary}
        error={formik.errors.summary && formik.touched.summary && formik.errors.summary !== ""}
        label="Enter movie summary" variant="standard"
      />

      <TextField
        id="trailer" name="trailer" value={formik.values.trailer} type="url"
        onChange={(event) => {
          formik.handleChange(event)
          setTrailer(event.target.value)
        }}
        onBlur={formik.handleBlur}
        helperText={formik.errors.trailer && formik.touched.trailer && formik.errors.trailer}
        error={formik.errors.trailer && formik.touched.trailer && formik.errors.trailer !== ""}
        label="Enter movie trailer" variant="standard"
      />

      <Button onClick={formik.errors === {} ? "" : formik.handleSubmit} variant="outlined">Add</Button>
    </form>
  );
}


const validateForm = (values) => {
  const errors = {}
  if (values.name.length === 0) {
    errors.name = 'Required';
  }

  if (values.poster.length < 4) {
    errors.poster = "Please provide a longer url"
  } else if (values.poster.length === 0) {
    errors.poster = 'Required';
  }

  if (values.rating < 0 || values.rating > 10) {
    errors.rating = "Rating should be between 0 - 10"
  } else if (values.rating.length === 0) {
    errors.rating = 'Required';
  }

  if (values.summary.length < 20) {
    errors.summary = "Summary should be atleast 20 characters"
  } else if (values.summary.length === 0) {
    errors.summary = 'Required';
  }

  if (values.trailer.length < 4) {
    errors.trailer = "Please provide a longer url"
  } else if (values.trailer.length === 0) {
    errors.trailer = 'Required';
  }
  return errors
}