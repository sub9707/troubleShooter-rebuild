import type { Metadata } from "next";
import "@/styles/globals.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const metadata: Metadata = {
  title: "Trouble Shooter",
  description: "트러블슈터에서 실수를 기록하고 경험으로 만드세요",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 relative overflow-hidden">
          {/* 배경 장식 요소들 */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-20 w-32 h-32 bg-indigo-400 rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute bottom-32 left-32 w-24 h-24 bg-purple-400 rounded-full opacity-15 animate-pulse delay-1000"></div>
            <div className="absolute top-40 right-40 w-28 h-28 bg-indigo-300 rounded-full opacity-10 animate-pulse delay-500"></div>
            <div className="absolute bottom-20 right-20 w-20 h-20 bg-purple-300 rounded-full opacity-20 animate-pulse delay-700"></div>
          </div>
          
          {/* 종이 겹침 배경 */}
          <div className="absolute top-1/2 left-1/2 w-[calc(100%-2rem)] max-w-[1440px] h-[110%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="absolute inset-0 bg-white shadow-2xl shadow-indigo-900/30 rotate-[-1deg] -z-10 border border-indigo-100" />
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white shadow-2xl shadow-indigo-900/20 rotate-[-1.8deg] -z-20 border border-indigo-50" />
            <div className="absolute inset-0 bg-white shadow-2xl shadow-indigo-900/25 rotate-[1deg] -z-20 border border-indigo-100" />
            <div className="absolute inset-0 bg-gradient-to-tl from-indigo-50 to-white shadow-2xl shadow-indigo-900/15 rotate-[1.8deg] -z-30 border border-indigo-50" />
          </div>

          {/* 메인 콘텐츠 */}
          <div className="w-full h-screen max-w-[1440px] px-4 bg-gradient-to-br from-indigo-50 via-white to-indigo-50 shadow-2xl shadow-indigo-900/40 relative z-10 border border-indigo-100">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}