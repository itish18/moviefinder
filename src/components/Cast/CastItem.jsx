import React from "react";

const CastItem = ({ id, name, char, profile }) => {
  return (
    <div className="flex flex-col   ">
      <img
        className="object-contain rounded-t-xl max-w-[8rem] min-w-[8rem] h-[192px]"
        src={`${
          profile
            ? `https://image.tmdb.org/t/p/original${profile}`
            : "/userImage.png"
        }`}
      />
      <div className="items-start ">
        <p className="font-semibold text-base">{name}</p>
        <p className="text-sm">{char}</p>
      </div>
    </div>
  );
};

export default CastItem;
