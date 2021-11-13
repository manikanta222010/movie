import './App.css';
import { useState } from "react";
import { MovieList } from './MovieList';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export default function App() {

  const INITIAL_MOVIES = [
    {
      name: "John Wick",
      poster: "https://www.themoviedb.org/t/p/original/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
      rating: 7.4,
      summary: "John Wick is an American neo-noir action-thriller franchise created by screenwriter Derek. An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him. "
    },
    {
      name: "Avengers",
      poster: "https://www.themoviedb.org/t/p/original/5k6WG11oWrXipYD8BAkmMJU4Men.jpg",
      rating: 8.4,
      summary: "After the devastating events of Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe."
    },
    {
      name: "Justice League",
      poster: "https://www.themoviedb.org/t/p/original/yWmbO5tQNlIpIEt6nNKD72TpXtM.jpg",
      rating: 8.1,
      summary: "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from catastrophic proportions."
    },
    {
      name: "Don't Breathe",
      poster: "https://www.themoviedb.org/t/p/original/kkUMGON2uFRlxI3zIMFdjqARnbb.jpg",
      rating: 7.1,
      summary: "Three delinquents break into the house of Norman, a Gulf War veteran who is blind, to steal his money. However, much to their horror, they discover that Norman is not as defenceless as he seems. "
    },
    {
      name: "Ice Age",
      poster: "https://mypostercollection.com/wp-content/uploads/2018/08/Ice-Age-Poster-2006-MyPosterCollection.com-7-683x1024.jpg",
      rating: 7.5,
      summary: "The story revolves around a group of people, a baby boy and sub-zero heroes: a woolly mammoth, a saber-toothed tiger, a sloth and a prehistoric combination of a squirrel and rat, known as Scrat."
    },
    {
      name: "Venom",
      poster: "https://www.themoviedb.org/t/p/original/gB7ThItFiRFw18SsE1gWHA92eri.jpg",
      rating: 6.7,
      summary: "A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. When serial killer Cletus Kasady also becomes host to an alien symbiote, Brock and Venom must stop his reign of terror."
    },
    {
      name: "The Lion King",
      poster: "https://cultureposters.com/wp-content/uploads/2020/10/lion-king-1.jpeg",
      rating: 8.5,
      summary: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself. Mufasa. Years later, a chance encounter with Nala, a lioness, causes him to return and take back what is rightfully his."
    },
    {
      name: "Frozen",
      poster: "https://i.pinimg.com/originals/63/02/24/6302249542a1069a8a46850d2c4f3125.jpg",
      rating: 8.5,
      summary: "Newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a man, and a snowman to change the weather condition."
    }
  ]

  
  const [movies, setMovies] = useState(INITIAL_MOVIES)

  
  return (
    <div className="App">
      
      <AddMovie movies={movies} setMovies={setMovies}/>
      <MovieList movies={movies} />
      {/* <AddColor/> */}
    </div>
  );
}


function AddMovie({movies, setMovies}){
  
  const [name, setName] = useState("")
  const [poster, setPoster] = useState("")
  const [rating, setRating] = useState("")
  const [summary, setSummary] = useState("")

  const addMovie = () => {
    console.log("Adding movie...", name, poster, rating, summary)
    // const newMovie = {
    //   name: name,
    //   poster: poster,
    //   rating: rating,
    //   summary: summary
    // }
    const newMovie = {
      name,
      poster,
      rating,
      summary
    }

    setMovies([...movies, newMovie])
  }
  
  return (
    <div className="add-movie-form">
        <TextField value={name} onChange={(event) => setName(event.target.value)} label="Enter movie name" variant="standard" />
        <TextField value={poster} onChange={(event) => setPoster(event.target.value)} label="Enter movie poster" variant="standard" />
        <TextField value={rating} onChange={(event) => setRating(event.target.value)} label="Enter movie rating" variant="standard" />
        <TextField value={summary} onChange={(event) => setSummary(event.target.value)} label="Enter movie summary" variant="standard" />
        <Button onClick={addMovie} variant="outlined">Add</Button>
      </div>
  )
}


function AddColor() {
  const [color, setColor] = useState("red")
  const styles = { backgroundColor: color }
  //const colors = 
  const [colors, setColors] = useState(["teal", "orange", "lavender"])
  return (
    <div>
      <TextField onChange={(event) => setColor(event.target.value)}
        value={color}
        style={styles} id="standard-basic" label="Enter a color" variant="standard" />

      <Button onClick={() => setColors([...colors, color])} variant="outlined">Add Color</Button>

      {colors.map((clr) =>
        <ColorBox color={clr} />
      )}
    </div>
  )
}

function ColorBox({ color }) {
  const styles = { backgroundColor: color, height: "100px", width: "200px" }

  return <div style={styles}>

  </div>
}