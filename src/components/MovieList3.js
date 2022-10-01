import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import Filter from "./Filter";
import { fetchMovies } from "../redux/features/movieSlice";

function MovieList3() {
  const movielist = useSelector((state) => state.movie.movies);
  console.log(movielist);
  const [FiltredList, setFiltredListe] = useState(movielist);
  const dispatch = useDispatch();

  useEffect(()=>{
    setFiltredListe(movielist)
  },[movielist])

  const handlefilter = (title) => {
    console.log("handlefilterdlist:::::",title);
    setFiltredListe(
      movielist.filter((movie) => {
        return movie.title.includes(title);
      })
    );
  };
  const handleReloadClick = ()=>{
    console.log('get data')
    dispatch(fetchMovies())
  }

  return (
    <div>
      <Filter filtred={handlefilter}></Filter>
      <ul>
        {FiltredList.map((m, i) => (
          <li key={i}>{m.title}</li>
        ))}
      </ul>
      <button onClick={handleReloadClick}>GET DATA</button>
    </div>
  );
}

export default MovieList3;
