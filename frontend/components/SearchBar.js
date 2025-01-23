export default function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Search for a player"
      className="w-full max-w-md px-4 py-2 border rounded shadow bg-gray-700 text-white placeholder-gray-400"
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
}
