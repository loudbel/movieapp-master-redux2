import { useSelector } from "react-redux";
import { useState } from 'react';
import Filter from "./Filter";
function MovieList3() {
  const movielist = useSelector((state) => state.movie.movies);
  console.log(movielist);
  const [FiltredList, setFiltredListe] = useState(movielist);

  const handlefilter = (title) => {
    console.log("handlefilterdlist:::::",title);
    setFiltredListe(
      movielist.filter((movie) => {
        return movie.title.includes(title);
      })
    );
  };

  return (
    <div>
      <Filter filtred={handlefilter}></Filter>
      <ul>
        {FiltredList.map((m, i) => (
          <li key={i}>{m.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList3;
