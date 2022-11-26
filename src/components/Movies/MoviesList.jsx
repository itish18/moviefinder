import MovieItem from "./MovieItem";

const MoviesList = ({ movies, genresList }) => {
  return (
    <div className="flex flex-row items-start justify-center m-10 flex-wrap gap-10 ">
      {movies?.results.slice(0, 18).map((m) => (
        <MovieItem key={m.id} m={m} genresList={genresList} />
      ))}
    </div>
  );
};

export default MoviesList;
