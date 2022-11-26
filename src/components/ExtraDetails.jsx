import React from "react";

const ExtraDetails = ({ movieData }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="flex items-center justify-between  m-auto gap-10  w-full">
      <div className="flex items-center justify-between w-full lg:w-[50%]">
        <div>
          <p className="font-semibold text-xl">Status</p>
          <p>{movieData?.status}</p>
        </div>
        <div>
          <p className="font-semibold text-xl">Budget</p>
          <p>{movieData?.revenue ? formatter.format(movieData.budget) : "-"}</p>
        </div>
        <div>
          <p className="font-semibold text-xl">Revenue</p>
          <p>
            {movieData?.revenue ? formatter.format(movieData.revenue) : "-"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExtraDetails;
