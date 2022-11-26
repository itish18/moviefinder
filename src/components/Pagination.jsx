const Pagination = ({ currPage, setCurrPage }) => {
  return (
    <div className="flex flex-row items-center justify-center w-full mb-6">
      <button
        className={`border-2  p-1  ${
          currPage === 1
            ? "text-gray-500 cursor-not-allowed"
            : "text-blue-500 cursor-pointer"
        } px-1.5`}
        disabled={currPage === 1 ? true : false}
        onClick={() => setCurrPage((curr) => curr - 1)}
      >
        Previous
      </button>
      <p className="border-2 p-1 text-blue-500 ">
        {currPage < 1 ? 1 : currPage}
      </p>
      <button
        className="border-2 p-1 cursor-pointer text-blue-500 px-1.5"
        onClick={() => setCurrPage((curr) => curr + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
