import { useState, lazy, Suspense } from "react";

import useFetch from "../../hooks/use-Fetch";

const SearchBar = lazy(() => import("../SearchBar"));
const GenreList = lazy(() => import("./GenreList"));
const MoviesList = lazy(() => import("./MoviesList"));
const Pagination = lazy(() => import("../Pagination"));

const Movies = () => {
  const [movies, setMovies] = useState();
  const [currPage, setCurrPage] = useState(1);
  const { isLoading } = useFetch();

  const genresList = [
    { id: 1, name: "Popular" },
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 27, name: "Horror" },
    { id: 36, name: "History" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[100vh] text-[3rem] font-bold">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center ">
      <Suspense fallback={<div>Loading...</div>}>
        <SearchBar setMovies={setMovies} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <GenreList
          list={genresList}
          setMovies={setMovies}
          currPage={currPage}
          setCurrPage={setCurrPage}
        />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <MoviesList movies={movies} genresList={genresList} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Pagination setCurrPage={setCurrPage} currPage={currPage} />
      </Suspense>
    </div>
  );
};

export default Movies;
