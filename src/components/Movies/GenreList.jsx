import useFetch from "../../hooks/use-Fetch";
import { useEffect, useState } from "react";

const GenreList = ({ list, setMovies, currPage, setCurrPage }) => {
  const [selectedGenre, setSelectedGenre] = useState(1);
  const { getData } = useFetch();
  const fetchMoviesURL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${currPage}`;
  const filterByGenreURL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currPage}&with_genres=${selectedGenre}&with_watch_monetization_types=flatrate`;

  useEffect(() => {
    getData(selectedGenre === 1 ? fetchMoviesURL : filterByGenreURL, setMovies);
  }, [selectedGenre, currPage]);

  return (
    <div className="flex flex-row item-center w-full justify-center flex-wrap gap-5 px-1 mt-5 lg:gap-10 lg:mt-10 ">
      {list?.slice(0, 11).map((l) => (
        <button
          className={`${selectedGenre === l.id && "border-b-4"}`}
          key={l.id}
          onClick={() => {
            setSelectedGenre(l.id);
            setCurrPage(1);
          }}
        >
          {l.name}
        </button>
      ))}
    </div>
  );
};

export default GenreList;
