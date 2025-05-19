function SearchBar() {
  return (
    <div className="w-full mt-20 flex justify-center">
      <div className="w-full max-w-250 relative">
        <input
          type="text"
          placeholder="Search Google or type a URL"
          className="w-full h-16 pl-14 pr-6 text-lg rounded-full shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="absolute top-1/2 right-5 transform -translate-y-1/2 text-gray-400 cursor-pointer">
          검색
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
