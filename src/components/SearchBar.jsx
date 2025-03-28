export default function SearchBar({ searchQuery, setSearchQuery }) {
    return (
        <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search users by name or email..."
            className="w-full max-w-lg px-4 py-2 md:px-4 border border-gray-300 rounded-lg shadow-sm text-blue-600
                       focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
        />
    );
}
