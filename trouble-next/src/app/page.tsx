import Link from "next/link";
import RecentPosts from "./_components/RecentPosts";
import SearchBar from "./_components/SearchBar";

export default function Page() {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center relative">

      {/* 타이틀 */}
      <div className="text-center mb-8 z-10">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent drop-shadow-sm">
          Welcome to Trouble Shooter!
        </h1>
        <p className="text-xl mt-6 text-indigo-700 font-medium tracking-wide">
          트러블슈터에서 실수를 기록하고 경험으로 만드세요
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* 검색창 */}
      <SearchBar />

      {/* 메인 메뉴 */}
      <div className="relative w-full">
        <RecentPosts />

        {/* 게시글 목록 버튼 */}
        <div className="flex justify-end px-20 mt-6">
          <Link
            href="/posting"
            className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-out"
          >
            <span>전체 게시글 확인</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </Link>
        </div>
      </div>

      {/* 바로가기 메뉴 */}
      <div className="mt-8 z-10">
        <Link
          href="/about"
          className="text-indigo-600 hover:text-indigo-800 font-medium hover:underline decoration-indigo-400 underline-offset-4 transition-colors duration-200"
        >
          트러블슈터가 무엇인가요?
        </Link>
      </div>
    </main>
  );
}