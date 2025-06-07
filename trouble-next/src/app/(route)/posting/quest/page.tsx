"use client"
import React, { useState } from 'react';
import { Search, Eye, MessageCircle, Calendar, CheckCircle, Home, ChevronRight, HelpCircle, Award, Users, TrendingUp } from 'lucide-react';

// 타입 정의
interface PopularQuestion {
  id: number;
  title: string;
  answered: boolean;
}

interface Question {
  id: number;
  title: string;
  category: '프론트엔드' | '백엔드' | '데이터베이스' | '알고리즘' | '개발도구' | '기타';
  views: number;
  answers: number;
  date: string;
  solved: boolean;
  author: string;
  urgent: boolean;
  tags: string[];
}

type TabType = 'daily' | 'weekly' | 'monthly';

const QABoard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('daily');
  const [currentPage, setCurrentPage] = useState<number>(1);

  // 카테고리 색상 함수
  const getCategoryColor = (category: Question['category']): string => {
    const colors: Record<Question['category'], string> = {
      '프론트엔드': 'bg-blue-100 text-blue-800',
      '백엔드': 'bg-green-100 text-green-800',
      '데이터베이스': 'bg-purple-100 text-purple-800',
      '알고리즘': 'bg-red-100 text-red-800',
      '개발도구': 'bg-yellow-100 text-yellow-800',
      '기타': 'bg-gray-100 text-gray-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };



  // 인기 질문 더미 데이터
  const popularQuestions: Record<TabType, PopularQuestion[]> = {
    daily: [
      { id: 1, title: 'React useState와 useEffect 차이점이 뭔가요?', answered: true },
      { id: 2, title: 'Next.js에서 SEO 최적화 방법', answered: true },
      { id: 3, title: 'TypeScript 제네릭 사용법 질문', answered: false },
      { id: 4, title: 'CSS Flexbox vs Grid 언제 사용하나요?', answered: true },
      { id: 5, title: '자바스크립트 비동기 처리 방법', answered: true },
      { id: 6, title: 'Node.js Express 미들웨어 구현', answered: false },
      { id: 7, title: 'MongoDB 인덱스 최적화 질문', answered: true },
      { id: 8, title: 'Git 브랜치 전략 추천', answered: true },
      { id: 9, title: 'Docker 컨테이너 메모리 에러', answered: false },
      { id: 10, title: 'JWT 토큰 보안 관련 질문', answered: true }
    ],
    weekly: [
      { id: 1, title: 'Vue 3 Composition API 마이그레이션', answered: true },
      { id: 2, title: 'AWS Lambda 함수 최적화', answered: true },
      { id: 3, title: 'Python Django ORM 성능 개선', answered: false },
      { id: 4, title: 'Redis 캐싱 전략 질문', answered: true },
      { id: 5, title: 'Kubernetes Pod 네트워킹 이슈', answered: false },
      { id: 6, title: 'GraphQL vs REST API 선택 기준', answered: true },
      { id: 7, title: 'Spring Boot JPA 연관관계 매핑', answered: true },
      { id: 8, title: 'PostgreSQL 쿼리 성능 튜닝', answered: false },
      { id: 9, title: 'React Native 앱 성능 최적화', answered: true },
      { id: 10, title: 'Webpack 번들 크기 최적화', answered: true }
    ],
    monthly: [
      { id: 1, title: '마이크로서비스 아키텍처 설계 질문', answered: true },
      { id: 2, title: '대용량 데이터 처리 방법', answered: true },
      { id: 3, title: '클린 아키텍처 구현 방법', answered: false },
      { id: 4, title: 'DevOps CI/CD 파이프라인 구축', answered: true },
      { id: 5, title: '분산 시스템 데이터 일관성', answered: false },
      { id: 6, title: '머신러닝 모델 배포 전략', answered: true },
      { id: 7, title: '블록체인 개발 시작 가이드', answered: false },
      { id: 8, title: '고성능 웹 애플리케이션 설계', answered: true },
      { id: 9, title: '보안 취약점 점검 방법', answered: true },
      { id: 10, title: '개발팀 코드 리뷰 문화 구축', answered: false }
    ]
  };

  // 질문 더미 데이터
  const questions: Question[] = [
    {
      id: 1,
      title: 'React Hook useState 초기값이 함수일 때 주의사항',
      category: '프론트엔드',
      views: 245,
      answers: 8,
      date: '2024-06-07',
      solved: true,
      author: '프론트개발자',
      urgent: false,
      tags: ['React', 'Hook', 'useState']
    },
    {
      id: 2,
      title: '프로덕션 서버 다운! Node.js 메모리 누수 긴급 도움!',
      category: '백엔드',
      views: 189,
      answers: 12,
      date: '2024-06-06',
      solved: false,
      author: '백엔드개발자',
      urgent: true,
      tags: ['Node.js', '메모리', '디버깅', '긴급']
    },
    {
      id: 3,
      title: 'MySQL 인덱스 설계 질문 드립니다',
      category: '데이터베이스',
      views: 156,
      answers: 5,
      date: '2024-06-06',
      solved: true,
      author: 'DB관리자',
      urgent: false,
      tags: ['MySQL', '인덱스', '성능']
    },
    {
      id: 4,
      title: '알고리즘 시간복잡도 계산이 어려워요',
      category: '알고리즘',
      views: 324,
      answers: 15,
      date: '2024-06-05',
      solved: true,
      author: '알고초보',
      urgent: false,
      tags: ['시간복잡도', '빅오', '알고리즘']
    },
    {
      id: 5,
      title: '배포 막힌 상황! Docker Compose 환경변수 에러',
      category: '개발도구',
      views: 198,
      answers: 7,
      date: '2024-06-04',
      solved: false,
      author: 'DevOps엔지니어',
      urgent: true,
      tags: ['Docker', 'Docker-compose', '환경변수', '배포']
    },
    {
      id: 6,
      title: 'TypeScript 제네릭 타입 추론 질문',
      category: '프론트엔드',
      views: 134,
      answers: 9,
      date: '2024-06-03',
      solved: true,
      author: 'TS개발자',
      urgent: false,
      tags: ['TypeScript', '제네릭', '타입추론']
    },
    {
      id: 7,
      title: 'JWT 토큰 갱신 로직 구현 방법',
      category: '백엔드',
      views: 267,
      answers: 11,
      date: '2024-06-02',
      solved: false,
      author: '보안개발자',
      urgent: false,
      tags: ['JWT', '인증', '보안']
    },
    {
      id: 8,
      title: 'Git 커밋 히스토리 정리하는 방법',
      category: '개발도구',
      views: 89,
      answers: 4,
      date: '2024-06-01',
      solved: true,
      author: 'Git초보',
      urgent: false,
      tags: ['Git', '커밋', '히스토리']
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
            <span className="text-gray-900 font-medium">Q&A</span>
          </nav>
          
          {/* 페이지 타이틀 */}
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center mb-2">
                <HelpCircle className="w-8 h-8 text-indigo-600 mr-3" />
                <h1 className="text-3xl font-bold text-gray-900">질문과 답변</h1>
              </div>
              <p className="text-gray-600">개발 관련 질문을 하고 전문가들의 답변을 받아보세요</p>
            </div>
            
            {/* 헤더 액션 버튼들 */}
            <div className="flex items-center space-x-3">
              <button className="px-6 py-2 bg-white text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors duration-200 shadow-sm">
                <HelpCircle className="w-4 h-4 inline mr-2" />
                질문하기
              </button>
              <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-sm">
                <Award className="w-4 h-4 inline mr-2" />
                답변하기
              </button>
            </div>
          </div>
          
          {/* 통계 정보 */}
          <div className="mt-6 grid grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center">
                <HelpCircle className="w-5 h-5 text-blue-600 mr-2" />
                <div>
                  <div className="text-xl font-bold text-gray-900">1,234</div>
                  <div className="text-sm text-gray-600">총 질문</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <div>
                  <div className="text-xl font-bold text-gray-900">956</div>
                  <div className="text-sm text-gray-600">해결된 질문</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center">
                <Users className="w-5 h-5 text-purple-600 mr-2" />
                <div>
                  <div className="text-xl font-bold text-gray-900">2,847</div>
                  <div className="text-sm text-gray-600">총 답변</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 text-orange-600 mr-2" />
                <div>
                  <div className="text-xl font-bold text-gray-900">77%</div>
                  <div className="text-sm text-gray-600">해결률</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 헤더 하단 구분선 */}
          <div className="mt-6 h-px bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20"></div>
        </div>
        
        {/* 인기 질문 섹션 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">🔥 인기 질문</h2>
            
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

          {/* 인기 질문 목록 (2x5 형태) */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-3">
              {popularQuestions[activeTab].slice(0, 5).map((question, index) => (
                <div key={question.id} className="flex items-center group cursor-pointer">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 ${getRankStyle(index)}`}>
                    {index + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <span className="text-gray-800 group-hover:text-indigo-600 transition-colors duration-200 truncate block">
                      {question.title}
                    </span>
                  </div>
                  {question.answered && (
                    <CheckCircle className="w-4 h-4 text-green-500 ml-2 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
            
            {/* 구분선 */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200"></div>
              <div className="pl-6 space-y-3">
                {popularQuestions[activeTab].slice(5, 10).map((question, index) => (
                  <div key={question.id} className="flex items-center group cursor-pointer">
                    <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold mr-3">
                      {index + 6}
                    </span>
                    <div className="flex-1 min-w-0">
                      <span className="text-gray-800 group-hover:text-indigo-600 transition-colors duration-200 truncate block">
                        {question.title}
                      </span>
                    </div>
                    {question.answered && (
                      <CheckCircle className="w-4 h-4 text-green-500 ml-2 flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 검색 및 필터 섹션 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                총 <span className="font-semibold text-indigo-600">1,234</span>개의 질문
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 text-xs bg-green-100 text-green-800 rounded-full hover:bg-green-200 transition-colors">
                  해결됨
                </button>
                <button className="px-3 py-1 text-xs bg-red-100 text-red-800 rounded-full hover:bg-red-200 transition-colors">
                  미해결
                </button>
                <button className="px-3 py-1 text-xs bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition-colors">
                  전체
                </button>
              </div>
            </div>
            
            <div className="relative">
              <input
                type="text"
                placeholder="질문 검색..."
                className="w-80 pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* 질문 카드 목록 (2x4 형태 - 2열 4행) */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {questions.map((question) => (
            <div key={question.id} className={`bg-white rounded-xl shadow-sm border transition-all duration-200 overflow-hidden group ${
              question.urgent 
                ? 'border-red-300 shadow-red-100 hover:shadow-red-200 animate-pulse' 
                : 'border-gray-200 hover:shadow-md'
            }`}>
              {/* 긴급 질문 상단 배너 */}
              {question.urgent && (
                <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 text-sm font-medium flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  🚨 긴급 질문 - 빠른 답변 필요!
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(question.category)}`}>
                      {question.category}
                    </span>
                    {question.urgent && (
                      <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full border border-red-200 animate-bounce">
                        긴급
                      </span>
                    )}
                  </div>
                  {question.solved ? (
                    <div className="flex items-center text-green-600">
                      <CheckCircle className="w-5 h-5 mr-1" />
                      <span className="text-xs font-medium">해결됨</span>
                    </div>
                  ) : (
                    <div className={`flex items-center ${question.urgent ? 'text-red-600' : 'text-orange-600'}`}>
                      <HelpCircle className="w-5 h-5 mr-1" />
                      <span className="text-xs font-medium">답변 대기</span>
                    </div>
                  )}
                </div>
                
                <h3 className={`text-lg font-semibold mb-3 group-hover:text-indigo-600 transition-colors duration-200 line-clamp-2 ${
                  question.urgent ? 'text-red-900' : 'text-gray-900'
                }`}>
                  {question.title}
                </h3>
                
                {/* 태그 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {question.tags.map((tag, index) => (
                    <span key={index} className={`px-2 py-1 text-xs rounded-md cursor-pointer transition-colors ${
                      question.urgent 
                        ? 'bg-red-100 text-red-700 hover:bg-red-200'
                        : 'bg-gray-100 text-gray-600 hover:bg-indigo-100 hover:text-indigo-700'
                    }`}>
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      <span>{question.views}</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className={`w-4 h-4 mr-1 ${question.answers > 0 ? 'text-green-500' : 'text-gray-400'}`} />
                      <span className={question.answers > 0 ? 'text-green-600 font-medium' : ''}>{question.answers}개 답변</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{question.date}</span>
                    </div>
                  </div>
                  <span className="font-medium text-gray-700">{question.author}</span>
                </div>
              </div>
              
              <div className={`h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                question.urgent 
                  ? 'from-red-500 to-red-600 opacity-100' 
                  : question.solved 
                    ? 'from-green-500 to-emerald-600' 
                    : 'from-orange-500 to-red-600'
              }`}></div>
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

export default QABoard;