"use client"
import React from 'react';
import { 
  Home, 
  ChevronRight, 
  HelpCircle, 
  AlertTriangle, 
  MessageCircle, 
  Bug, 
  Users, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import Link from 'next/link';

const CommunityHub: React.FC = () => {
  return (
    <div className="h-screen overflow-y-scroll bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* 페이지 헤더 */}
        <div className="mb-12">
          {/* 브레드크럼 */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
            <Home className="w-4 h-4" />
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">커뮤니티</span>
          </nav>
          
          {/* 페이지 타이틀 */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-12 h-12 text-indigo-600 mr-4" />
              <h1 className="text-4xl font-bold text-gray-900">커뮤니티 허브</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              개발 커뮤니티에서 지식을 공유하고 문제를 해결해보세요
            </p>
          </div>
          
          {/* 헤더 하단 구분선 */}
          <div className="mt-8 h-px bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30"></div>
        </div>

        {/* 전체 통계 섹션 */}
        <div className="mb-12">
          <div className="grid grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <HelpCircle className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">1,847</div>
              <div className="text-sm text-gray-600">총 질문</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">523</div>
              <div className="text-sm text-gray-600">에러 노트</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">1,392</div>
              <div className="text-sm text-gray-600">해결된 문제</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">89%</div>
              <div className="text-sm text-gray-600">해결률</div>
            </div>
          </div>
        </div>

        {/* 메인 네비게이션 카드 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Q&A 카드 */}
          <div className="group relative bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
            {/* 배경 그라데이션 */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-50"></div>
            
            <div className="relative p-8">
              {/* 헤더 아이콘과 제목 */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <HelpCircle className="w-8 h-8 text-white" />
                  </div>
                  <div className="ml-4">
                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      질문과 답변
                    </h2>
                    <p className="text-sm text-blue-600 font-medium">Q&A Board</p>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
              </div>

              {/* 설명 */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                개발 중 궁금한 점이나 문제가 있나요? 전문가들과 동료 개발자들에게 질문하고 
                도움을 받을 수 있습니다. 함께 성장하는 개발 커뮤니티에 참여해보세요.
              </p>

              {/* 특징 리스트 */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>실시간 질문과 답변</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>카테고리별 분류 (프론트엔드, 백엔드, DB 등)</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span>해결된 질문 표시 및 추천 답변</span>
                </div>
              </div>

              {/* 통계 정보 */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">1,234</div>
                  <div className="text-xs text-gray-500">총 질문</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">956</div>
                  <div className="text-xs text-gray-500">해결됨</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-orange-600">278</div>
                  <div className="text-xs text-gray-500">답변 대기</div>
                </div>
              </div>

              {/* 액션 버튼 */}
              <div className="flex space-x-3">
                <Link href={'/posting/quest/write'} className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium group-hover:shadow-lg">
                  <HelpCircle className="w-4 h-4 inline mr-2" />
                  질문하러 가기
                </Link>
                <button className="px-4 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 하단 그라데이션 바 */}
            <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
          </div>

          {/* 에러 노트 카드 */}
          <div className="group relative bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
            {/* 배경 그라데이션 */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-100 opacity-50"></div>
            
            <div className="relative p-8">
              {/* 헤더 아이콘과 제목 */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <AlertTriangle className="w-8 h-8 text-white" />
                  </div>
                  <div className="ml-4">
                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                      에러 노트
                    </h2>
                    <p className="text-sm text-red-600 font-medium">Error Notes</p>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all duration-300" />
              </div>

              {/* 설명 */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                개발 중 만난 에러와 해결 방법을 기록하고 공유하세요. 
                같은 문제로 고민하는 다른 개발자들에게 도움이 될 수 있습니다.
              </p>

              {/* 특징 리스트 */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-700">
                  <Bug className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                  <span>에러 유형별 분류 및 검색</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Bug className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                  <span>상세한 해결 과정 기록</span>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <Bug className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                  <span>코드 스니펫과 스크린샷 첨부</span>
                </div>
              </div>

              {/* 통계 정보 */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-lg font-bold text-red-600">523</div>
                  <div className="text-xs text-gray-500">에러 기록</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">487</div>
                  <div className="text-xs text-gray-500">해결됨</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-orange-600">36</div>
                  <div className="text-xs text-gray-500">미해결</div>
                </div>
              </div>

              {/* 액션 버튼 */}
              <div className="flex space-x-3">
                <Link href={'/posting/board/write'}  className="flex-1 bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium group-hover:shadow-lg">
                  <AlertTriangle className="w-4 h-4 inline mr-2" />
                  에러 기록하기
                </Link>
                <button className="px-4 py-3 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition-colors duration-200">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 하단 그라데이션 바 */}
            <div className="h-2 bg-gradient-to-r from-red-500 to-orange-600"></div>
          </div>
        </div>

        {/* 최근 활동 섹션 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 text-indigo-600 mr-2" />
            최근 커뮤니티 활동
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 최근 질문 */}
            <div>
              <h4 className="font-medium text-gray-800 mb-3 flex items-center">
                <HelpCircle className="w-4 h-4 text-blue-600 mr-2" />
                최신 질문
              </h4>
              <div className="space-y-2">
                <div className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition-colors">
                  • React useState와 useEffect 차이점이 뭔가요?
                </div>
                <div className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition-colors">
                  • Next.js에서 SEO 최적화 방법
                </div>
                <div className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition-colors">
                  • TypeScript 제네릭 사용법 질문
                </div>
              </div>
            </div>
            
            {/* 최근 에러 */}
            <div>
              <h4 className="font-medium text-gray-800 mb-3 flex items-center">
                <AlertTriangle className="w-4 h-4 text-red-600 mr-2" />
                최신 에러 기록
              </h4>
              <div className="space-y-2">
                <div className="text-sm text-gray-600 hover:text-red-600 cursor-pointer transition-colors">
                  • Node.js 메모리 누수 해결 방법
                </div>
                <div className="text-sm text-gray-600 hover:text-red-600 cursor-pointer transition-colors">
                  • Docker Compose 환경변수 에러
                </div>
                <div className="text-sm text-gray-600 hover:text-red-600 cursor-pointer transition-colors">
                  • MongoDB 연결 실패 트러블슈팅
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 도움말 섹션 */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              처음 방문하시나요?
            </h3>
            <p className="text-gray-600 mb-4">
              커뮤니티 이용 가이드를 확인하고 더 나은 경험을 시작해보세요
            </p>
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200">
              가이드 보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityHub;