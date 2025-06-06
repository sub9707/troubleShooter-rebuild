"use client";
import React, { useEffect, useState } from 'react';

// 첨부파일 타입
type Attachment = {
    name: string;
    size: string;
    type: 'pdf' | 'image' | 'document' | string;
};

// 공지사항 타입
type Notice = {
    id: number;
    title: string;
    content: string;
    date: string;
    isImportant: boolean;
    attachments: Attachment[] | null;
};

// 더미 데이터 생성
const noticeData: Notice[] = Array.from({ length: 35 }, (_, i) => ({
    id: i + 1,
    title: `공지사항 제목 ${i + 1} - 중요한 업데이트 및 변경사항 안내`,
    content: `공지사항 ${i + 1}의 상세 내용입니다. 이 공지사항은 사용자들에게 중요한 정보를 전달하기 위해 작성되었습니다. 서비스 개선사항, 정책 변경, 새로운 기능 추가 등에 대한 내용이 포함되어 있습니다.\n\n추가적으로 이번 업데이트에서는 다음과 같은 사항들이 개선되었습니다:\n• 사용자 인터페이스 개선\n• 성능 최적화\n• 보안 강화\n• 새로운 기능 추가`,
    date: new Date(2024, 11, 25 - i).toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }),
    isImportant: i < 3,
    attachments:
        i % 4 === 0
            ? [
                { name: `공지사항_${i + 1}_첨부파일.pdf`, size: '2.5MB', type: 'pdf' },
                { name: `이미지_${i + 1}.jpg`, size: '1.2MB', type: 'image' },
            ]
            : i % 3 === 0
                ? [{ name: `문서_${i + 1}.docx`, size: '850KB', type: 'document' }]
                : null,
}));

function Page() {
    const itemsPerPage = 10;
    const totalPages = Math.ceil(noticeData.length / itemsPerPage);

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [displayedNotices, setDisplayedNotices] = useState<Notice[]>([]);
    const [expandedNotices, setExpandedNotices] = useState<Set<number>>(new Set());

    useEffect(() => {
        const initialNotices = noticeData.slice(0, itemsPerPage);
        setDisplayedNotices(initialNotices);
    }, []);

    const loadMore = () => {
        const nextPage = currentPage + 1;
        const nextNotices = noticeData.slice(0, nextPage * itemsPerPage);
        setDisplayedNotices(nextNotices);
        setCurrentPage(nextPage);
    };

    const toggleExpanded = (id: number) => {
        setExpandedNotices((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    const getFileIcon = (type: string) => {
        switch (type) {
            case 'pdf':
                return (
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            fillRule="evenodd"
                            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                            clipRule="evenodd"
                        />
                    </svg>
                );
            case 'image':
                return (
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            fillRule="evenodd"
                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                            clipRule="evenodd"
                        />
                    </svg>
                );
            case 'document':
                return (
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            fillRule="evenodd"
                            d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                            clipRule="evenodd"
                        />
                    </svg>
                );
            default:
                return (
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            fillRule="evenodd"
                            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                );
        }
    };

    return (
        <div className="h-screen min-h-screen overflow-y-scroll bg-gradient-to-br from-indigo-50 via-white to-indigo-100 p-8">
            <div className="max-w-4xl mx-auto">

                {/* 헤더 */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent mb-4">
                        공지사항
                    </h1>
                    <p className="text-xl text-indigo-700 font-medium">
                        트러블슈터의 최신 소식과 업데이트를 확인하세요
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-indigo-400 to-purple-500 mx-auto mt-4 rounded-full"></div>
                </div>

                {/* 통계 정보 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-indigo-100 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-indigo-600 font-semibold text-sm">전체 공지사항</p>
                                <p className="text-3xl font-bold text-indigo-900">{noticeData.length}</p>
                            </div>
                            <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-indigo-100 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-indigo-600 font-semibold text-sm">중요 공지</p>
                                <p className="text-3xl font-bold text-indigo-900">3</p>
                            </div>
                            <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-indigo-100 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-indigo-600 font-semibold text-sm">이번 달 공지</p>
                                <p className="text-3xl font-bold text-indigo-900">12</p>
                            </div>
                            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 공지사항 목록 */}
                <div className="space-y-4 mb-12">
                    {displayedNotices.map((notice) => (
                        <div
                            key={notice.id}
                            className={`bg-white rounded-2xl shadow-lg border transition-all duration-300 hover:shadow-xl overflow-hidden ${notice.isImportant
                                ? 'border-red-200 bg-gradient-to-r from-red-50 to-white'
                                : 'border-indigo-100 hover:border-indigo-200'
                                }`}
                        >
                            <div
                                className="p-6 cursor-pointer hover:bg-indigo-50/50 transition-colors duration-200"
                                onClick={() => toggleExpanded(notice.id)}
                            >
                                {/* 공지사항 제목 */}
                                <div className="flex items-center justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            {notice.isImportant && (
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800 border border-red-200">
                                                    중요
                                                </span>
                                            )}
                                            <span className="text-sm font-medium text-indigo-600">#{notice.id}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-indigo-900 mb-3">{notice.title}</h3>
                                        <div className="text-sm text-indigo-600">{notice.date}</div>
                                    </div>
                                    <div className="ml-4">
                                        <svg
                                            className={`w-6 h-6 text-indigo-600 transition-transform duration-300 ${expandedNotices.has(notice.id) ? 'rotate-180' : ''
                                                }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {expandedNotices.has(notice.id) && (
                                <div className="border-t border-indigo-100 bg-indigo-50/30 p-6">
                                    <div className="text-gray-700 leading-relaxed whitespace-pre-line mb-6">
                                        {notice.content}
                                    </div>
                                    {notice.attachments && (
                                        <div className="border-t pt-6">
                                            <h4 className="text-lg font-semibold text-indigo-900 mb-4">첨부파일</h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {notice.attachments.map((file, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-center gap-3 p-4 bg-white rounded-xl border hover:border-indigo-200 shadow-sm"
                                                    >
                                                        {getFileIcon(file.type)}
                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-sm font-medium text-indigo-900 truncate">{file.name}</p>
                                                            <p className="text-xs text-indigo-600">{file.size}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* 더보기 버튼 */}
                {currentPage < totalPages && (
                    <div className="flex justify-center">
                        <button
                            onClick={loadMore}
                            className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
                        >
                            더 많은 공지사항 보기
                        </button>
                    </div>
                )}

                {currentPage >= totalPages && (
                    <div className="text-center text-indigo-600 py-6 font-medium">
                        모든 공지사항을 확인했습니다.
                    </div>
                )}
            </div>
        </div>
    );
}

export default Page;
