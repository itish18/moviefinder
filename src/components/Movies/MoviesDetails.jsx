import { lazy, Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useFetch from "../../hooks/use-Fetch";

const Cast = lazy(() => import("../Cast/Cast"));
const ExtraDetails = lazy(() => import("../ExtraDetails"));
const MainDetails = lazy(() => import("./MainDetails"));
const Recommendation = lazy(() => import("../Recommendation/Recommendation"));

const MoviesDetails = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState();
  const { getData } = useFetch();

  useEffect(() => {
    id &&
      getData(
        `https://api.themoviedb.org/3/movie/${id}?api_key=3bb216411421fdef32dab7fb43d28fa2&language=en-US`,
        setMovieData
      );
  }, [id]);

  return (
    <>
      {movieData ? (
        <div className="overflow-x-hidden flex flex-col items-center justify-center">
          <MainDetails movieData={movieData} />

          <div className=" gap-10 flex items-start justify-start w-full">
            <div className="flex flex-col gap-7 max-w-[100vw] p-10">
              <ExtraDetails movieData={movieData} />
              <Cast id={id} />
              <Recommendation id={id} />
            </div>
          </div>
        </div>
      ) : (
        <div className="text-white font-bold text-center text-lg">Loading</div>
      )}
    </>
  );
};

export default MoviesDetails;
