import { useEffect } from "react";
import { useState } from "react";
import useFetch from "../../hooks/use-Fetch";
import RecommendationItem from "./RecommendationItem";

const Recommendation = ({ id }) => {
  const [rec, setRec] = useState();
  const { getData } = useFetch();

  useEffect(() => {
    id &&
      getData(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=3bb216411421fdef32dab7fb43d28fa2&language=en-US&page=1`,
        setRec
      );
  }, [id]);

  return (
    <div className="flex flex-col items-left   justify-left gap-8">
      <p className="font-semibold text-xl">Recommendations</p>
      {rec?.results.length > 0 ? (
        <div className="flex pb-5 gap-4 overflow-x-scroll ">
          {rec?.results.map((r) => (
            <RecommendationItem key={r.id} recmd={r} />
          ))}
        </div>
      ) : (
        <p className="text-sm">None in our database.</p>
      )}
    </div>
  );
};

export default Recommendation;
