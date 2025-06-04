import Image from 'next/image';
import Link from 'next/link';

import CardLayout from '../_components/CardLayout';

import Setting from 'assets/icons/setting.svg';
import Checked from 'assets/icons/checked.svg';
import Answer from 'assets/icons/answer.svg';
import PostIcon from 'assets/icons/posts.svg';
import FollowerIcon from 'assets/icons/follower.svg';
import FollowingIcon from 'assets/icons/following.svg';
import GithubIcon from 'assets/icons/github.svg';
import YoutubeIcon from 'assets/icons/youtube.svg';
import LinkedInIcon from 'assets/icons/linkedIn.svg';
import FacebookIcon from 'assets/icons/facebook.svg';
import Location from 'assets/icons/location.svg';
import School from 'assets/icons/school.svg';
import Work from 'assets/icons/work.svg';
import Follow from 'assets/icons/add-friend.svg';
import Write from 'assets/icons/add-friend.svg';

export default async function Page({ params, }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const posts = [
    {
      id: 1,
      title: "React 18의 새로운 기능들에 대해 알아보자",
      author: "개발자김씨",
      date: "2024-06-01",
      views: 245,
      comments: 12,
      category: "개발",
      solved: true
    },
    {
      id: 2,
      title: "Tailwind CSS로 반응형 웹사이트 만들기",
      author: "디자이너박씨",
      date: "2024-06-01",
      views: 189,
      comments: 8,
      category: "디자인",
      solved: false
    },
    {
      id: 3,
      title: "JavaScript ES2024 새로운 문법 정리",
      author: "코딩왕",
      date: "2024-05-31",
      views: 321,
      comments: 15,
      category: "개발",
      solved: true
    },
    {
      id: 4,
      title: "웹 접근성을 고려한 UI/UX 디자인 가이드",
      author: "UX전문가",
      date: "2024-05-31",
      views: 156,
      comments: 6,
      category: "디자인",
      solved: false
    },
    {
      id: 5,
      title: "Next.js 14로 풀스택 애플리케이션 개발하기",
      author: "풀스택개발자",
      date: "2024-05-30",
      views: 278,
      comments: 23,
      category: "개발",
      solved: false
    },
    {
      id: 6,
      title: "모바일 퍼스트 디자인 원칙과 실무 적용",
      author: "모바일디자이너",
      date: "2024-05-30",
      views: 134,
      comments: 4,
      category: "디자인",
      solved: true
    },
    {
      id: 7,
      title: "TypeScript 5.0 마이그레이션 가이드",
      author: "타입스크립터",
      date: "2024-05-29",
      views: 203,
      comments: 11,
      category: "개발",
      solved: false
    },
    {
      id: 8,
      title: "CSS Grid와 Flexbox 완벽 활용법",
      author: "CSS마스터",
      date: "2024-05-29",
      views: 167,
      comments: 9,
      category: "디자인",
      solved: true
    },
    {
      id: 9,
      title: "Vue.js 3 Composition API 완전 정복",
      author: "Vue마스터",
      date: "2024-05-28",
      views: 234,
      comments: 18,
      category: "개발",
      solved: true
    },
    {
      id: 10,
      title: "모던 웹 디자인 트렌드 2024",
      author: "트렌드세터",
      date: "2024-05-28",
      views: 189,
      comments: 7,
      category: "디자인",
      solved: false
    },
    {
      id: 11,
      title: "Node.js 성능 최적화 실전 가이드",
      author: "백엔드개발자",
      date: "2024-05-27",
      views: 312,
      comments: 25,
      category: "개발",
      solved: true
    },
    {
      id: 12,
      title: "사용자 경험을 높이는 마이크로 인터랙션",
      author: "UX디자이너",
      date: "2024-05-27",
      views: 156,
      comments: 12,
      category: "디자인",
      solved: false
    },
    {
      id: 13,
      title: "GraphQL과 REST API 비교 분석",
      author: "API개발자",
      date: "2024-05-26",
      views: 278,
      comments: 16,
      category: "개발",
      solved: true
    },
    {
      id: 14,
      title: "반응형 타이포그래피 설계 원칙",
      author: "타이포그래퍼",
      date: "2024-05-26",
      views: 143,
      comments: 8,
      category: "디자인",
      solved: false
    },
    {
      id: 15,
      title: "Docker와 Kubernetes 실무 적용",
      author: "데브옵스엔지니어",
      date: "2024-05-25",
      views: 389,
      comments: 32,
      category: "개발",
      solved: true
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case '개발':
        return 'bg-blue-100 text-blue-800';
      case '디자인':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="w-full h-screen overflow-y-auto bg-slate-100">
      {/** 상단 프로필 사진 및 배경 사진 영역 */}
      <div className="w-full h-100 border-b-2 border-gray-300">
        {/** 배경사진 */}
        <div className="w-full h-60 bg-amber-700 rounded-b-3xl relative z-20">
          <Image src={'https://cdn.pixabay.com/photo/2025/05/14/16/21/city-9599967_1280.jpg'} alt='' className='object-cover rounded-b-3xl' fill />
          {/** 프로필 사진 */}
          <div className="w-30 h-30 rounded-full bg-blue-300 border-6 shadow-lg border-white absolute -bottom-15 left-1/2 -translate-x-1/2">
            {/** 수정버튼 */}
            <div className="w-full h-full relative">
              <Link href={'/'} className="absolute -right-2 -bottom-1 rounded-full w-10 h-10 bg-white shadow-md transition-transform duration-300 hover:rotate-90 z-10">
                <Image src={Setting} alt="setting" />
              </Link>
            </div>
          </div>
        </div>
        {/** 아래 흰 배경 */}
        <div className='relative h-40 z-10 flex justify-between items-center px-10'>
          {/** 프로필 정보 */}
          <div className='absolute bottom-5 left-1/2 -translate-x-1/2 text-center'>
            <p className='text-4xl my-1'>@ Kim Test</p>
            <p className='text-gray-400'>web developer</p>
          </div>
          {/** 활동 정보 */}
          <div className='flex justify-start items-center gap-4'>
            <div className='w-15 h-30 flex flex-col justify-center items-center'>
              <Image src={PostIcon} className='w-6' alt="게시글 정보" />
              <span className='text-2xl mt-2 font-bold text-gray-500'>123</span>
              <p className='text-sm'>게시글</p>
            </div>
            <div className='w-15 h-30 flex flex-col justify-center items-center'>
              <Image src={Answer} className='w-6' alt="답변 정보" />
              <span className='text-2xl mt-2 font-bold text-gray-500'>123</span>
              <p className='text-sm'>답변</p>
            </div>
            <div className='w-15 h-30 flex flex-col justify-center items-center'>
              <Image src={Checked} className='w-6' alt="채택 정보" />
              <span className='text-2xl mt-2 font-bold text-gray-500'>123</span>
              <p className='text-sm'>채택</p>
            </div>
            <div className='w-15 h-30 flex flex-col justify-center items-center'>
              <Image src={FollowerIcon} className='w-6' alt="팔로워 정보" />
              <span className='text-2xl mt-2 font-bold text-gray-500'>123</span>
              <p className='text-sm'>팔로워</p>
            </div>
            <div className='w-15 h-30 flex flex-col justify-center items-center'>
              <Image src={FollowingIcon} className='w-6' alt="팔로잉 정보" />
              <span className='text-2xl mt-2 font-bold text-gray-500'>123</span>
              <p className='text-sm'>팔로잉</p>
            </div>
          </div>
          {/** 링크 정보 */}
          <div className='flex flex-col justify-end items-end gap-6'>
            <button className='flex justify-center items-center text-white bg-indigo-700 hover:bg-indigo-800 font-medium rounded-lg text-sm px-4 py-2 cursor-pointer gap-2'>
              <Image src={Follow} alt="follow-icon" className='invert w-5' />
              팔로우
            </button>
            <div className='h-full flex justify-center items-end gap-4'>
              <Link href={'/'}><Image src={GithubIcon} alt='' className='w-6' /></Link>
              <Link href={'/'}><Image src={YoutubeIcon} alt='' className='w-6' /></Link>
              <Link href={'/'}><Image src={LinkedInIcon} alt='' className='w-6' /></Link>
              <Link href={'/'}><Image src={FacebookIcon} alt='' className='w-6' /></Link>
            </div>
          </div>

        </div>
      </div>

      {/** 하단 영역 */}
      <div className='w-full flex gap-8 my-5 pb-8 relative'>
        {/** 좌측 프로필 정보 */}
        <div className='w-90'>
          <CardLayout heightMode='auto' position='sticky'>
            <div className='flex flex-col justify-start items-center'>
              <div className='w-full mb-4'>
                <h2 className='mb-4 text-2xl font-bold'>소개말</h2>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nulla maiores consequuntur omnis magnam?</p>
              </div>
              <div className='w-full h-10 flex justify-start items-center gap-2'>
                <Image src={Location} alt="거주지 정보" className='w-5 h-5' />
                <span className='text-md font-bold text-gray-600'>서울특별시, 대한민국 거주</span>
              </div>
              <div className='w-full h-10 flex justify-start items-center gap-2'>
                <Image src={School} alt="학력 정보" className='w-5 h-5' />
                <span className='text-md font-bold text-gray-600'>대한대학교 졸업</span>
              </div>
              <div className='w-full h-10 flex justify-start items-center gap-2'>
                <Image src={Work} alt="근무지 정보" className='w-5 h-5' />
                <span className='text-md font-bold text-gray-600'>대한회사 재직 중</span>
              </div>
            </div>
          </CardLayout>
        </div>

        {/** 우측 게시글 정보 */}
        <div className='flex-1'>
          <CardLayout heightMode='auto' position='auto'>
            <div className='flex justify-between items-center mb-5'>
              <form className="max-w-md w-120">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-3 ps-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
                    placeholder="게시글 검색"
                    required
                  />
                  <button type="submit" className="text-white absolute end-2.5 top-1/2 -translate-y-1/2 bg-indigo-700 hover:bg-indigo-800 font-medium rounded-lg text-sm px-4 py-2 cursor-pointer">검색</button>
                </div>
              </form>
              <div>
                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                  className="focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center cursor-pointer" type="button">
                  구분
                  <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                  className="focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center cursor-pointer" type="button">
                  정렬 필터
                  <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                  className="focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center cursor-pointer" type="button">
                  10개씩 보기
                  <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>

                <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">최신순</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200 cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1 flex items-center space-x-4">
                      {/* 카테고리 태그 - 고정 너비 */}
                      <span className={`w-16 px-2 py-1 rounded-full text-xs font-medium text-center ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </span>
                      {/* 제목 */}
                      <div className="flex items-center flex-1">
                        {/* 해결 상태 체크 아이콘 */}
                        {post.solved && (
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                        <h2 className="text-base font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200 truncate">
                          {post.title}
                        </h2>
                      </div>

                      {/* 메타 정보 */}
                      <div className="flex items-center text-sm text-gray-500 space-x-3">
                        <span className="flex items-center">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                          </svg>
                          {post.views}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                          </svg>
                          {post.comments}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          {post.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing
                  <span className="font-medium"> 1 </span>
                  results
                </p>
              </div>
              <div>
                <nav className="isolate inline-flex -space-x-px rounded-md shadow-xs" aria-label="Pagination">
                  <a href="#" className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                    <span className="sr-only">Previous</span>
                    <svg className="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" aria-current="page" className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
                  <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
                  <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
                  <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset focus:outline-offset-0">...</span>
                  <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
                  <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
                  <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a>
                  <a href="#" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                    <span className="sr-only">Next</span>
                    <svg className="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </a>
                </nav>
              </div>
              <Link href={'/posting'} className='flex justify-center items-center text-white bg-indigo-700 hover:bg-indigo-800 font-medium rounded-lg text-sm px-4 py-2 cursor-pointer gap-2'>
                <Image src={Write} alt="follow-icon" className='invert w-5' />
                글 추가
              </Link>
            </div>
          </CardLayout>
        </div>
      </div>
    </div>
  )
}