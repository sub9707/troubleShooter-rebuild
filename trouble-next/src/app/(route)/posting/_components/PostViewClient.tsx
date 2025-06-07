"use client"

import { useState } from 'react';
import {
    ThumbsUp,
    MessageCircle,
    Share2,
    Tag,
    CheckCircle2,
    FileText,
    AlertCircle,
    Search,
    Lightbulb,
    Target,
    Calendar,
    User,
    Eye,
    Heart,
    Send,
    Download,
    Clock
} from 'lucide-react';

interface Comment {
    id: number;
    author: string;
    content: string;
    timestamp: string;
    likes: number;
    isLiked: boolean;
}

interface PostViewClientProps {
    slug: string;
}

export default function PostViewClient({ slug }: PostViewClientProps) {
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(142);
    const [commentText, setCommentText] = useState('');
    const [comments, setComments] = useState<Comment[]>([
        {
            id: 1,
            author: "개발자김철수",
            content: "정말 유용한 해결방법이네요! 저도 비슷한 문제를 겪고 있었는데 많은 도움이 되었습니다. 감사합니다!",
            timestamp: "2시간 전",
            likes: 8,
            isLiked: false
        },
        {
            id: 2,
            author: "코딩초보자",
            content: "문제 상황 설명이 너무 자세하고 명확해서 이해하기 쉬웠어요. 해결과정도 단계별로 잘 정리되어 있네요.",
            timestamp: "4시간 전",
            likes: 12,
            isLiked: true
        },
        {
            id: 3,
            author: "시니어개발자",
            content: "이런 문제는 보통 캐시 문제로 발생하는 경우가 많은데, 근본적인 원인 분석을 잘 하셨네요. 추가로 성능 최적화 방안도 고려해보시면 좋을 것 같습니다.",
            timestamp: "6시간 전",
            likes: 15,
            isLiked: false
        }
    ]);

    // 샘플 데이터 (실제로는 slug를 사용해서 API로부터 데이터를 가져와야 함)
    const postData = {
        id: slug,
        title: "React 상태 관리 오류 해결 및 성능 최적화 방법",
        author: "프론트엔드개발자",
        timestamp: "2024년 6월 4일 오후 2:30",
        views: 1247,
        tags: ["React", "상태관리", "성능최적화", "디버깅", "JavaScript"],
        isSolved: true,
        sections: {
            problem: {
                active: true,
                content: "React 애플리케이션에서 복잡한 상태 관리 로직을 구현하던 중, 컴포넌트 리렌더링이 과도하게 발생하여 성능 저하가 심각한 상황이었습니다. 특히 사용자 인터랙션 시 UI가 버벅거리는 현상이 지속적으로 발생했고, 개발자 도구에서 확인한 결과 불필요한 렌더링이 초당 수십 번씩 일어나고 있었습니다."
            },
            cause: {
                active: true,
                content: "문제의 근본 원인을 분석한 결과, useState 훅의 잘못된 사용과 useEffect 의존성 배열 설정 오류가 주요 원인이었습니다. 또한 부모 컴포넌트에서 자식 컴포넌트로 전달되는 props가 매번 새로운 객체로 생성되어 불필요한 리렌더링을 유발하고 있었습니다."
            },
            process: {
                active: true,
                content: "1. React DevTools Profiler를 사용하여 성능 병목 지점을 정확히 파악\n2. useMemo와 useCallback 훅을 활용하여 값과 함수를 메모이제이션\n3. React.memo를 사용하여 불필요한 컴포넌트 리렌더링 방지\n4. 상태 구조를 재설계하여 관련된 상태끼리 그룹화\n5. 컨텍스트 API를 활용하여 전역 상태 관리 최적화"
            },
            result: {
                active: true,
                content: "최적화 작업을 통해 렌더링 성능이 약 80% 향상되었습니다. 사용자 인터랙션 시 응답 시간이 평균 200ms에서 40ms로 단축되었고, 메모리 사용량도 30% 감소했습니다. 특히 복잡한 폼 입력 시나리오에서 부드러운 사용자 경험을 제공할 수 있게 되었습니다."
            }
        },
        attachedFiles: [
            { name: "성능_최적화_전후_비교.pdf", size: "2.3MB" },
            { name: "코드_리팩토링_가이드.md", size: "156KB" }
        ]
    };

    const sectionLabels = {
        problem: '문제상황',
        cause: '문제원인',
        process: '해결과정',
        result: '결과'
    };

    const sectionIcons = {
        problem: AlertCircle,
        cause: Search,
        process: Lightbulb,
        result: Target
    };

    const handleLike = () => {
        setIsLiked(!isLiked);
        setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
    };

    const handleCommentLike = (commentId: number) => {
        setComments(prevComments =>
            prevComments.map(comment =>
                comment.id === commentId
                    ? {
                        ...comment,
                        isLiked: !comment.isLiked,
                        likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1
                    }
                    : comment
            )
        );
    };

    const handleCommentSubmit = () => {
        if (commentText.trim()) {
            const newComment: Comment = {
                id: comments.length + 1,
                author: "현재사용자",
                content: commentText,
                timestamp: "방금 전",
                likes: 0,
                isLiked: false
            };
            setComments([newComment, ...comments]);
            setCommentText('');
        }
    };

    return (
        <div className="w-full h-screen overflow-y-scroll bg-gradient-to-br from-slate-50 to-blue-50">
            {/* 헤더 */}
            <div className="max-w-6xl mx-auto px-4 py-8 p-8 text-indigo-800">
                <div className="flex items-start justify-between">
                    <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-4">
                            {postData.isSolved && (
                                <div className="flex text-white items-center space-x-2 bg-green-500 px-3 py-1 rounded-full text-sm font-medium">
                                    <CheckCircle2 className="w-4 h-4" />
                                    <span>해결완료</span>
                                </div>
                            )}
                            <div className="flex items-center space-x-2 text-indigo-800">
                                <User className="w-4 h-4" />
                                <span className="text-sm">{postData.author}</span>
                            </div>
                        </div>
                        <h1 className="text-3xl font-bold mb-4 leading-tight">
                            {postData.title}
                        </h1>
                        <div className="flex items-center space-x-6 text-indigo-800">
                            <div className="flex items-center space-x-2">
                                <Calendar className="w-4 h-4" />
                                <span className="text-sm">{postData.timestamp}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Eye className="w-4 h-4" />
                                <span className="text-sm">조회 {postData.views.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4">
                {/* 태그 섹션 */}
                <div className="flex gap-4 items-center px-6 border-b border-gray-100">
                    <div className="flex items-center space-x-2">
                        <Tag className="w-5 h-5 text-indigo-600" />
                        <span className="font-semibold text-gray-800">태그</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {postData.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium rounded-full hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 cursor-pointer"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* 메인 콘텐츠 */}
                <div className="p-6">
                    <div className="space-y-8">
                        {(Object.entries(postData.sections) as [keyof typeof postData.sections, any][]).map(([key, section]) => {
                            const IconComponent = sectionIcons[key];
                            return (
                                <div key={key} className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                                    <div className="bg-gradient-to-r from-indigo-800 to-indigo-400 p-4">
                                        <div className="flex items-center space-x-3 text-white">
                                            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                                <IconComponent className="w-5 h-5" />
                                            </div>
                                            <h3 className="text-xl font-bold">{sectionLabels[key]}</h3>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
                                            {section.content}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* 첨부파일 */}
                    {postData.attachedFiles.length > 0 && (
                        <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200">
                            <div className="flex items-center space-x-2 mb-4">
                                <FileText className="w-5 h-5 text-orange-600" />
                                <h3 className="text-lg font-semibold text-gray-800">첨부파일</h3>
                            </div>
                            <div className="space-y-3">
                                {postData.attachedFiles.map((file, index) => (
                                    <div key={index} className="flex items-center justify-between bg-white p-4 rounded-xl border border-orange-200 hover:border-orange-300 transition-colors duration-200">
                                        <div className="flex items-center space-x-3">
                                            <div className="p-2 bg-orange-100 rounded-lg">
                                                <FileText className="w-5 h-5 text-orange-600" />
                                            </div>
                                            <div>
                                                <span className="font-medium text-gray-800">{file.name}</span>
                                                <span className="text-sm text-gray-500 ml-2">({file.size})</span>
                                            </div>
                                        </div>
                                        <button className="flex items-center space-x-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200">
                                            <Download className="w-4 h-4" />
                                            <span>다운로드</span>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* 추천 버튼 섹션 */}
                <div className="px-6 py-8 border-t border-gray-100 bg-gradient-to-r from-gray-50 to-blue-50">
                    <div className="flex items-center justify-center space-x-6">
                        <button
                            onClick={handleLike}
                            className={`flex items-center space-x-3 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl ${isLiked
                                ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white scale-105'
                                : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-500 hover:text-white border-2 border-gray-200'
                                }`}
                        >
                            <Heart className={`w-6 h-6 ${isLiked ? 'fill-current' : ''}`} />
                            <span>추천하기</span>
                            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                                {likeCount.toLocaleString()}
                            </span>
                        </button>

                        <button className="flex items-center space-x-3 px-8 py-4 bg-white text-gray-700 rounded-2xl font-semibold text-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-200">
                            <Share2 className="w-6 h-6" />
                            <span>공유하기</span>
                        </button>
                    </div>
                </div>

                {/* 댓글 섹션 */}
                <div className="p-6 border-t border-gray-100">
                    <div className="flex items-center space-x-3 mb-6">
                        <MessageCircle className="w-6 h-6 text-indigo-600" />
                        <h3 className="text-2xl font-bold text-gray-800">
                            댓글 <span className="text-indigo-600">({comments.length})</span>
                        </h3>
                    </div>

                    {/* 댓글 작성 */}
                    <div className="mb-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200">
                        <textarea
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                            className="w-full h-32 p-4 border-2 border-indigo-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 resize-none transition-all duration-200"
                            placeholder="댓글을 작성해주세요..."
                        />
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={handleCommentSubmit}
                                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                            >
                                <Send className="w-4 h-4" />
                                <span>댓글 등록</span>
                            </button>
                        </div>
                    </div>

                    {/* 댓글 목록 */}
                    <div className="space-y-6">
                        {comments.map((comment) => (
                            <div key={comment.id} className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                                            {comment.author[0]}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-800">{comment.author}</div>
                                            <div className="flex items-center space-x-2 text-sm text-gray-500">
                                                <Clock className="w-4 h-4" />
                                                <span>{comment.timestamp}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                                    {comment.content}
                                </p>

                                <div className="flex items-center justify-between">
                                    <button
                                        onClick={() => handleCommentLike(comment.id)}
                                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${comment.isLiked
                                            ? 'bg-pink-100 text-pink-600'
                                            : 'text-gray-500 hover:bg-gray-100'
                                            }`}
                                    >
                                        <ThumbsUp className={`w-4 h-4 ${comment.isLiked ? 'fill-current' : ''}`} />
                                        <span>좋아요</span>
                                        <span className="bg-gray-200 px-2 py-1 rounded-full text-xs">
                                            {comment.likes}
                                        </span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}