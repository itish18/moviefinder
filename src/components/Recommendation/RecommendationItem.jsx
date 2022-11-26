import { useNavigate } from "react-router-dom";

const RecommendationItem = ({ recmd }) => {
  const nav = useNavigate();
  const { backdrop_path: poster, title, id } = recmd;

  return (
    <div
      className="flex flex-col items-start justify-start gap-2 cursor-pointer"
      onClick={() => nav(`/${id}`)}
    >
      <img
        className="rounded-xl max-w-[15rem] min-w-[15rem] max-h-[135px]"
        src={`${
          poster
            ? `https://image.tmdb.org/t/p/original${poster}`
            : "/movieImage.jpg"
        }`}
      />
      <p className="text-sm">{title}</p>
    </div>
  );
};

export default RecommendationItem;
