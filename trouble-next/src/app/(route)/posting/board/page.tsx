"use client"
import React, { useState } from 'react';
import { Search, Eye, MessageCircle, Calendar, CheckCircle, Home, ChevronRight } from 'lucide-react';

// 타입 정의
interface PopularPost {
  id: number;
  title: string;
}

interface Post {
  id: number;
  title: string;
  category: '질문' | '정보' | '자유' | '공지' | '후기';
  views: number;
  comments: number;
  date: string;
  solved: boolean;
  author: string;
}

type TabType = 'daily' | 'weekly' | 'monthly';

const Page: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('daily');
  const [currentPage, setCurrentPage] = useState<number>(1);

  // 카테고리 색상 함수
  const getCategoryColor = (category: Post['category']): string => {
    const colors: Record<Post['category'], string> = {
      '질문': 'bg-blue-100 text-blue-800',
      '정보': 'bg-green-100 text-green-800',
      '자유': 'bg-purple-100 text-purple-800',
      '공지': 'bg-red-100 text-red-800',
      '후기': 'bg-yellow-100 text-yellow-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  // 인기 게시글 더미 데이터
  const popularPosts: Record<TabType, PopularPost[]> = {
    daily: [
      { id: 1, title: 'React 18의 새로운 기능들' },
      { id: 2, title: 'Next.js 13 업데이트 내용' },
      { id: 3, title: 'TypeScript 실무 활용법' },
      { id: 4, title: 'CSS Grid vs Flexbox 비교' },
      { id: 5, title: '웹 성능 최적화 방법' },
      { id: 6, title: 'JavaScript ES2023 새 기능' },
      { id: 7, title: 'Node.js 보안 베스트 프랙티스' },
      { id: 8, title: 'GraphQL vs REST API' },
      { id: 9, title: '프론트엔드 테스팅 전략' },
      { id: 10, title: 'Docker 컨테이너 최적화' }
    ],
    weekly: [
      { id: 1, title: 'Vue 3 Composition API 가이드' },
      { id: 2, title: 'AWS 클라우드 아키텍처' },
      { id: 3, title: 'Python 머신러닝 입문' },
      { id: 4, title: 'Git 워크플로우 전략' },
      { id: 5, title: 'MongoDB 데이터 모델링' },
      { id: 6, title: 'Redis 캐싱 전략' },
      { id: 7, title: 'Kubernetes 배포 가이드' },
      { id: 8, title: 'API 문서화 도구 비교' },
      { id: 9, title: '마이크로서비스 아키텍처' },
      { id: 10, title: '웹 접근성 가이드라인' }
    ],
    monthly: [
      { id: 1, title: '개발자 커리어 로드맵 2024' },
      { id: 2, title: '프로그래밍 언어 트렌드' },
      { id: 3, title: '클린 코드 작성 원칙' },
      { id: 4, title: '알고리즘 문제 해결 전략' },
      { id: 5, title: '데이터베이스 설계 패턴' },
      { id: 6, title: '오픈소스 기여 가이드' },
      { id: 7, title: '개발팀 협업 도구 추천' },
      { id: 8, title: 'DevOps 도입 사례' },
      { id: 9, title: '스타트업 기술 스택 선택' },
      { id: 10, title: '개발자 생산성 향상 팁' }
    ]
  };

  // 게시글 더미 데이터 (2x4 = 8개)
  const posts: Post[] = [
    {
      id: 1,
      title: 'React Hook 사용법에 대한 질문입니다',
      category: '질문',
      views: 156,
      comments: 12,
      date: '2024-06-05',
      solved: true,
      author: '개발자A'
    },
    {
      id: 2,
      title: 'Next.js 13 새로운 기능 정리',
      category: '정보',
      views: 284,
      comments: 8,
      date: '2024-06-04',
      solved: false,
      author: '개발자B'
    },
    {
      id: 3,
      title: '오늘 점심 뭐 드셨나요?',
      category: '자유',
      views: 89,
      comments: 24,
      date: '2024-06-04',
      solved: false,
      author: '개발자C'
    },
    {
      id: 4,
      title: '시스템 점검 안내 (6월 7일)',
      category: '공지',
      views: 421,
      comments: 3,
      date: '2024-06-02',
      solved: false,
      author: '관리자'
    },
    {
      id: 5,
      title: 'TypeScript 마이그레이션 후기',
      category: '후기',
      views: 198,
      comments: 15,
      date: '2024-06-01',
      solved: false,
      author: '개발자D'
    },
    {
      id: 6,
      title: 'CSS Grid 레이아웃 질문',
      category: '질문',
      views: 134,
      comments: 9,
      date: '2024-05-31',
      solved: true,
      author: '개발자E'
    },
    {
      id: 7,
      title: '웹 성능 최적화 팁 공유',
      category: '정보',
      views: 312,
      comments: 18,
      date: '2024-05-30',
      solved: false,
      author: '개발자F'
    },
    {
      id: 8,
      title: '개발환경 세팅 도움 요청',
      category: '질문',
      views: 76,
      comments: 6,
      date: '2024-05-29',
      solved: false,
      author: '개발자G'
    }
  ];

  const totalPages: number = 5;

  // 탭 변경 핸들러
  const handleTabChange = (tab: TabType): void => {
    setActiveTab(tab);
  };

  // 페이지 변경 핸들러
  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  // 탭 라벨 가져오기
  const getTabLabel = (tab: TabType): string => {
    const labels: Record<TabType, string> = {
      daily: '일간',
      weekly: '주간',
      monthly: '월간'
    };
    return labels[tab];
  };

  // 순위별 스타일 가져오기
  const getRankStyle = (index: number): string => {
    if (index === 0) return 'bg-yellow-500 text-white';
    if (index === 1) return 'bg-gray-400 text-white';
    if (index === 2) return 'bg-amber-600 text-white';
    return 'bg-indigo-100 text-indigo-600';
  };

  return (
    <div className="h-screen overflow-y-scroll bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* 페이지 헤더 */}
        <div className="mb-8">
          {/* 브레드크럼 */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
            <Home className="w-4 h-4" />
            <ChevronRight className="w-4 h-4" />
            <span className="hover:text-indigo-600 cursor-pointer transition-colors duration-200">커뮤니티</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">게시글 목록</span>
          </nav>
          
          {/* 페이지 타이틀 */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">게시글 목록</h1>
              <p className="text-gray-600">다양한 주제의 게시글을 확인하고 소통해보세요</p>
            </div>
            
            {/* 헤더 액션 버튼들 */}
            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors duration-200">
                필터
              </button>
              <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-sm">
                글쓰기
              </button>
            </div>
          </div>
          
          {/* 헤더 하단 구분선 */}
          <div className="mt-6 h-px bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20"></div>
        </div>
        
        {/* 인기 게시글 섹션 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">🔥 인기 게시글</h2>
            
            {/* 탭 네비게이션 */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              {(['daily', 'weekly', 'monthly'] as TabType[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === tab
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {getTabLabel(tab)}
                </button>
              ))}
            </div>
          </div>

          {/* 인기 게시글 목록 (2x5 형태) */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-3">
              {popularPosts[activeTab].slice(0, 5).map((post, index) => (
                <div key={post.id} className="flex items-center group cursor-pointer">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 ${getRankStyle(index)}`}>
                    {index + 1}
                  </span>
                  <span className="text-gray-800 group-hover:text-indigo-600 transition-colors duration-200 truncate">
                    {post.title}
                  </span>
                </div>
              ))}
            </div>
            
            {/* 구분선 */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200"></div>
              <div className="pl-6 space-y-3">
                {popularPosts[activeTab].slice(5, 10).map((post, index) => (
                  <div key={post.id} className="flex items-center group cursor-pointer">
                    <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold mr-3">
                      {index + 6}
                    </span>
                    <span className="text-gray-800 group-hover:text-indigo-600 transition-colors duration-200 truncate">
                      {post.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 검색 섹션 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6 p-6">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              총 <span className="font-semibold text-indigo-600">1,234</span>개의 게시글
            </div>
            
            <div className="relative">
              <input
                type="text"
                placeholder="게시글 검색..."
                className="w-80 pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* 게시글 카드 목록 (2x4 형태 - 2열 4행) */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 overflow-hidden group">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                  {post.solved && (
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  )}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h3>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      <span>{post.views}</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      <span>{post.comments}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <span className="font-medium text-gray-700">{post.author}</span>
                </div>
              </div>
              
              <div className="h-1 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </div>
          ))}
        </div>

        {/* 페이지네이션 */}
        <div className="flex justify-center">
          <nav className="flex items-center space-x-2">
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-2 rounded-lg text-sm font-medium text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              이전
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  currentPage === page
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-2 rounded-lg text-sm font-medium text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              다음
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Page;