import './App.css';
import { useState } from "react";
import { MovieList } from './movies/MovieList';
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { MovieDetails } from './movies/MovieDetails';
import { NotFound } from './helper/NotFound';
import { Welcome } from './Welcome';
import { AddMovie } from './movies/AddMovie';
import { EditMovie } from './movies/EditMovie';
import { AddColor } from './color/AddColor';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { TicTacToe } from './tic-tac-toe/TicTacToe';
import { BasicForm } from './BasicForm';



export default function App() {
  const history = useHistory()
  // const INITIAL_MOVIES = [
  //   {
  //     name: "John Wick",
  //     poster: "https://www.themoviedb.org/t/p/original/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
  //     rating: 7.4,
  //     summary: "John Wick is an American neo-noir action-thriller franchise created by screenwriter Derek. An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him. ",
  //     trailer: "https://www.youtube.com/embed/C0BMx-qxsP4"
  //   },
  //   {
  //     name: "Avengers",
  //     poster: "https://www.themoviedb.org/t/p/original/5k6WG11oWrXipYD8BAkmMJU4Men.jpg",
  //     rating: 8.4,
  //     summary: "After the devastating events of Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
  //     trailer: "https://www.youtube.com/embed/TcMBFSGVi1c"
  //   },
  //   {
  //     name: "Justice League",
  //     poster: "https://www.themoviedb.org/t/p/original/yWmbO5tQNlIpIEt6nNKD72TpXtM.jpg",
  //     rating: 8.1,
  //     summary: "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from catastrophic proportions.",
  //     trailer: "https://www.youtube.com/embed/3cxixDgHUYw"
  //   },
  //   {
  //     name: "Don't Breathe",
  //     poster: "https://www.themoviedb.org/t/p/original/kkUMGON2uFRlxI3zIMFdjqARnbb.jpg",
  //     rating: 7.1,
  //     summary: "Three delinquents break into the house of Norman, a Gulf War veteran who is blind, to steal his money. However, much to their horror, they discover that Norman is not as defenceless as he seems. ",
  //     trailer: "https://www.youtube.com/embed/76yBTNDB6vU"
  //   },
  //   {
  //     name: "Ice Age",
  //     poster: "https://mypostercollection.com/wp-content/uploads/2018/08/Ice-Age-Poster-2006-MyPosterCollection.com-7-683x1024.jpg",
  //     rating: 7.5,
  //     summary: "The story revolves around a group of people, a baby boy and sub-zero heroes: a woolly mammoth, a saber-toothed tiger, a sloth and a prehistoric combination of a squirrel and rat, known as Scrat.",
  //     trailer: "https://www.youtube.com/embed/xz-KgMtU_BM"
  //   },
  //   {
  //     name: "Venom",
  //     poster: "https://www.themoviedb.org/t/p/original/gB7ThItFiRFw18SsE1gWHA92eri.jpg",
  //     rating: 6.7,
  //     summary: "A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. When serial killer Cletus Kasady also becomes host to an alien symbiote, Brock and Venom must stop his reign of terror.",
  //     trailer: "https://www.youtube.com/embed/u9Mv98Gr5pY"
  //   },
  //   {
  //     name: "The Lion King",
  //     poster: "https://cultureposters.com/wp-content/uploads/2020/10/lion-king-1.jpeg",
  //     rating: 8.5,
  //     summary: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself. Mufasa. Years later, a chance encounter with Nala, a lioness, causes him to return and take back what is rightfully his.",
  //     trailer: "https://www.youtube.com/embed/7TavVZMewpY"
  //   },
  //   {
  //     name: "Frozen",
  //     poster: "https://i.pinimg.com/originals/63/02/24/6302249542a1069a8a46850d2c4f3125.jpg",
  //     rating: 8.5,
  //     summary: "Newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a man, and a snowman to change the weather condition.",
  //     trailer: "https://www.youtube.com/embed/TbQm5doF_Uc"
  //   }
  // ]

  const [mode, setMode] = useState("dark")

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });



  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={4} style={{ borderRadius: "0px", height: "100vh" }}>
        <div className="App">
          <AppBar position="static" style={{ marginBottom: "24px" }}>
            <Toolbar variant="dense">
              <Button variant="text" color="inherit" onClick={() => history.push("/")}>
                Home
              </Button>
              <Button variant="text" color="inherit" onClick={() => history.push("/movies")}>
                Movies
              </Button>
              <Button variant="text" color="inherit" onClick={() => history.push("/add-movie")}>
                Add Movie
              </Button>
              <Button variant="text" color="inherit" onClick={() => history.push("/color-game")}>
                Color Game
              </Button>
              <Button variant="text" color="inherit" onClick={() => history.push("/tic-tac-toe")}>
                Tic-Tac-Toe
              </Button>
              <Button variant="text" color="inherit" onClick={() => history.push("/form")}>
                Basic Form
              </Button>
              <Button
                style={{ marginLeft: "auto" }}
                variant="text" color="inherit" onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                {mode === "light" ? "Dark" : "Light"} mode
              </Button>
            </Toolbar>
          </AppBar>
          {/* <nav>

        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/add-movie">Add Movies</Link>
        <Link to="/color-game">Color Game</Link>
      </nav> */}


          <Switch>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route path="/films">
              <Redirect to="/movies" />
            </Route>
            <Route path="/movies/edit/:id">
              <EditMovie />
            </Route>
            <Route path="/movies/:id">
              <MovieDetails />
            </Route>
            <Route path="/movies">
              <MovieList />
            </Route>
            <Route path="/add-movie">
              <AddMovie />
            </Route>
            <Route path="/color-game">
              <AddColor />
            </Route>
            <Route path="/tic-tac-toe">
              <TicTacToe />
            </Route>
            <Route path="/form">
              <BasicForm />
            </Route>
            <Route path="**">
              <NotFound />
            </Route>

          </Switch>

          {/* <AddMovie movies={movies} setMovies={setMovies}/> */}
          {/* <MovieList movies={movies} /> */}
          {/* <AddColor/> */}
        </div>
      </Paper>
    </ThemeProvider>

  );
}



