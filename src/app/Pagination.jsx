export default function Pagination({ currentPage, setCurrentPage }) {
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="flex justify-center mt-8">
      <button
        className="mr-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleNextPage}
      >
        Next
      </button>
    </div>
  );
}
