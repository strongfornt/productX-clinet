/* eslint-disable react/prop-types */

export default function Pagination({
  setCurrentPage,
  currentPage,
  totalPages,
}) {
  const paginationCount = [...Array(totalPages).keys()].map((c) => c + 1);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < paginationCount?.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className="mb-6 mt-6 flex items-center  justify-center">
        <nav
          aria-label="Pagination"
          className="inline-flex -space-x-px bg-gray-50  rounded-md shadow-sm"
        >
          <button
            onClick={handlePrev}
            type="button"
            className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-l-md dark:border-gray-300"
          >
            <span className="sr-only">Previous</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="w-5 h-5 text-black"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          {paginationCount?.map((c, i) => (
            <button
              key={i}
              type="button"
              aria-current="page"
              className={`inline-flex items-center px-4 py-2  text-sm font-semibold border ${
                currentPage === c ? "bg-[#1E99F5] text-white" : "text-black"
              } 
           dark:border-gray-300`}
              onClick={() => setCurrentPage(c)}
            >
              {c}
            </button>
          ))}

          <button
            onClick={handleNext}
            type="button"
            className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-r-md dark:border-gray-300"
          >
            <span className="sr-only">Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="w-5 h-5 text-black "
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </nav>
      </div>
    </>
  );
}
