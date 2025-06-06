function SearchBar() {
  return (
    <div className="w-full mt-12 flex justify-center px-4">
      <div className="w-full max-w-2xl relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>

        <div className="relative bg-white rounded-full shadow-xl border border-indigo-100">
          <div className="absolute top-1/2 left-6 transform -translate-y-1/2 text-indigo-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <input
            type="text"
            placeholder="문제나 키워드를 검색해보세요..."
            className="w-full h-16 pl-16 pr-24 text-lg rounded-full border-none focus:outline-none focus:ring-4 focus:ring-indigo-200 text-indigo-900 placeholder-indigo-400 bg-transparent"
          />

          <button className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            검색
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;