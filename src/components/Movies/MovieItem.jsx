import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MovieItem = ({ m, genresList }) => {
  const nav = useNavigate();
  const {
    id,
    title,
    vote_average: rate,
    poster_path: image,
    genre_ids: type,
  } = m;

  return (
    <div
      id={id}
      className="flex flex-col max-w-[15rem] justify-start rounded-xl cursor-pointer transition-all 1s ease"
      onClick={() => nav(`/${id}`)}
    >
      <img
        src={
          image
            ? `https://image.tmdb.org/t/p/original/${image}`
            : "./movieImage.jpg"
        }
        className={`rounded-xl object-cover transition-all 1s ease m-0 min-w-[15rem] min-h-[360px] hover:-translate-y-2`}
      />

      <div className="flex flex-col gap-2 p-1 pb-2">
        <div className="flex flex-row align-center justify-between text-sm text-gray-400">
          <div className="flex flex-row align-center justify-start">
            {type
              .slice(0, 1)
              .map((t) =>
                genresList.map((g) =>
                  g.id === t ? <p key={t + g.id}>{g.name}</p> : ""
                )
              )}
          </div>
          <p>{rate}</p>
        </div>
        <p className="text-base">{title}</p>
      </div>
    </div>
  );
};

export default MovieItem;
