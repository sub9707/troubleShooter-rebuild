import Link from "next/link";
import RecentPosts from "./_components/RecentPosts";
import SearchBar from "./_components/SearchBar";

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center">
      {/* 타이틀 */}
      <div className="text-center">
        <h1 className="text-6xl font-bold">Welcome to Trouble Shooter!</h1>
        <p className="text-xl mt-5">트러블슈터에서 실수를 기록하고 경험으로 만드세요</p>
      </div>
      {/* 검색창 */}
      <SearchBar/>
      {/* 메인 메뉴 */}
      <RecentPosts/>
      
      {/* 바로가기 메뉴 */}
      <div className="mt-5">
        <Link href={'/about'}>트러블슈터가 무엇인가요?</Link>
      </div>
    </main>
  );
}

