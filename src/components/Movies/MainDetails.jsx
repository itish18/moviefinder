const MainDetails = ({ movieData }) => {
  const fun = (x) => {
    return Number.parseFloat(x).toFixed(1);
  };

  const getYear = (date) => {
    return new Date(date).getFullYear();
  };

  const date = (date) => {
    const today = new Date(date).getDate();
    const month = new Date(date).getMonth();
    const year = new Date(date).getFullYear();
    return `${today}/${month + 1}/${year}`;
  };

  return (
    <div className="bg-black bg-opacity-90 w-full flex items-start justify-start">
      <div className="md:flex items-center justify-start gap-10 p-10 w-[100vw]">
        <img
          className="min-w-[18rem] h-[432px] rounded-xl max-[768px]:mb-5 "
          src={`https://image.tmdb.org/t/p/original${movieData?.poster_path}`}
        />

        <div className="flex flex-col items-start justify-start text-white gap-3 text-xl">
          <p className="text-4xl font-bold">{`${movieData?.title} (${getYear(
            movieData?.release_date
          )})`}</p>

          <div className="text-base flex items-center justify-start gap-2">
            <p>{date(movieData?.release_date)}</p>
            <div className="flex items-center justify-center gap-1 max-sm:w-[50%] ">
              &#x2022;
              {movieData?.genres.map((g) => (
                <p
                  key={g.id}
                  className="max-sm:truncate after:content-[','] last:after:content-[''] "
                >
                  {g.name}
                </p>
              ))}
            </div>

            <p>&#x2022; {(movieData?.runtime / 60).toFixed(2)}h</p>
          </div>

          <p className="font-semibold">
            Score: {fun(movieData?.vote_average)}/10
          </p>
          <p className="text-gray-400 italic text-base">{movieData?.tagline}</p>
          <p className="font-semibold">Overview</p>
          <p className="text-base font-medium">{movieData?.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MainDetails;
