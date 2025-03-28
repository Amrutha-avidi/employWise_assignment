export default function Pagination({ page, totalPages, setPage }) {
    return (
        <div className="flex justify-center items-center gap-6 mt-10">
            <button
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg 
                           hover:bg-blue-600 transition disabled:opacity-50 
                           flex items-center space-x-2"
            >
                <span>Previous</span>
            </button>

            <div className="text-lg font-semibold text-[#2C3E50]">
                Page {page} of {totalPages}
            </div>

            <button
                onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={page === totalPages}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg 
                           hover:bg-blue-600 transition disabled:opacity-50 
                           flex items-center space-x-2"
            >
                <span>Next</span>
            </button>
        </div>
    );
}
