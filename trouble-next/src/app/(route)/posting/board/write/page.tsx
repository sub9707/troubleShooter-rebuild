"use client"
import { useState } from 'react';
import { ChevronDown, ChevronRight, Upload, X, Edit3, Tag, CheckCircle2, FileText, Search, AlertCircle, Lightbulb, Target } from 'lucide-react';

interface Section {
  active: boolean;
  content: string;
}

interface Sections {
  problem: Section;
  cause: Section;
  process: Section;
  result: Section;
}

type SectionKey = keyof Sections;

function PostCreationPage() {
  const [title, setTitle] = useState<string>('');
  const [tagInput, setTagInput] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);
  const [isSolved, setIsSolved] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
  
  // 아코디언 섹션 상태 관리
  const [sections, setSections] = useState<Sections>({
    problem: { active: false, content: '' },
    cause: { active: false, content: '' },
    process: { active: false, content: '' },
    result: { active: false, content: '' }
  });

  const sectionLabels: Record<SectionKey, string> = {
    problem: '문제상황',
    cause: '문제원인',
    process: '해결과정',
    result: '결과'
  };

  const sectionIcons: Record<SectionKey, any> = {
    problem: AlertCircle,
    cause: Search,
    process: Lightbulb,
    result: Target
  };

  const handleTagKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput('');
    }
  };

  const removeTag = (indexToRemove: number) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  const toggleSection = (sectionKey: SectionKey) => {
    setSections(prev => ({
      ...prev,
      [sectionKey]: {
        ...prev[sectionKey],
        active: !prev[sectionKey].active
      }
    }));
  };

  const updateSectionContent = (sectionKey: SectionKey, content: string) => {
    setSections(prev => ({
      ...prev,
      [sectionKey]: {
        ...prev[sectionKey],
        content: content
      }
    }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setAttachedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setAttachedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    console.log('게시글 등록:', {
      title,
      tags,
      isSolved,
      isHidden,
      sections,
      attachedFiles
    });
  };

  const handleCancel = () => {
    console.log('작성 취소');
  };

  return (
    <div className="w-full h-screen overflow-y-scroll bg-slate-50">
      <div className="max-w-full mx-auto">
        <div className="overflow-hidden">
          {/* 헤더 */}
          <div className="bg-indigo-600 p-8 text-white">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Edit3 className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">게시글 작성</h1>
                <p className="text-indigo-100 mt-1">새로운 게시글을 작성해보세요</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* 제목 입력 */}
            <div className="mb-8">
              <label className="flex items-center space-x-2 text-lg font-semibold text-gray-800 mb-3">
                <FileText className="w-5 h-5 text-indigo-600" />
                <span>제목</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 text-lg"
                placeholder="게시글 제목을 입력하세요"
              />
            </div>

            {/* 태그 설정 */}
            <div className="mb-8">
              <label className="flex items-center space-x-2 text-lg font-semibold text-gray-800 mb-3">
                <Tag className="w-5 h-5 text-indigo-600" />
                <span>태그 설정</span>
              </label>
              <div className="relative">
                <div className="min-h-[3rem] w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus-within:ring-4 focus-within:ring-indigo-500/20 focus-within:border-indigo-500 transition-all duration-200 flex flex-wrap items-center gap-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full"
                    >
                      {tag}
                      <button
                        onClick={() => removeTag(index)}
                        className="ml-2 hover:bg-indigo-700 rounded-full p-0.5 transition-colors duration-200"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyPress={handleTagKeyPress}
                    className="flex-1 min-w-32 outline-none bg-transparent"
                    placeholder={tags.length === 0 ? "태그를 입력하고 엔터를 눌러주세요" : ""}
                  />
                </div>
              </div>
            </div>

            {/* 해결 여부 */}
            <div className="mb-10">
              <label className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl border-2 border-green-200 cursor-pointer hover:bg-green-100 transition-colors duration-200">
                <input
                  type="checkbox"
                  checked={isSolved}
                  onChange={(e) => setIsSolved(e.target.checked)}
                  className="w-5 h-5 text-green-600 border-2 border-green-300 rounded focus:ring-green-500"
                />
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span className="text-lg font-medium text-green-800">해결 완료</span>
              </label>
            </div>

            {/* 아코디언 섹션들 */}
            <div className="space-y-6 mb-10">
              <h2 className="text-xl font-bold text-gray-800 mb-4">상세 내용</h2>
              {(Object.entries(sections) as [SectionKey, Section][]).map(([key, section]) => {
                const IconComponent = sectionIcons[key];
                return (
                  <div key={key} className="overflow-hidden rounded-xl border-2 border-gray-200 shadow-sm hover:shadow-md transition-all duration-200">
                    <div className={`p-5 border-b-2 border-gray-200 transition-all duration-200 ${section.active ? 'bg-yellow-50' : 'bg-gray-50'}`}>
                      <label className="flex items-center space-x-4 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={section.active}
                          onChange={() => toggleSection(key)}
                          className="w-5 h-5 text-indigo-600 border-2 border-gray-300 rounded focus:ring-indigo-500 transition-all duration-200"
                        />
                        <IconComponent className="w-6 h-6 text-gray-700" />
                        <span className="text-lg font-semibold flex-1 text-gray-800">
                          {sectionLabels[key]}
                        </span>
                      </label>
                    </div>
                    
                    <div className={`transition-all duration-300 ease-in-out ${section.active ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                      <div className="p-5 bg-white">
                        <textarea
                          value={section.content}
                          onChange={(e) => updateSectionContent(key, e.target.value)}
                          className="w-full h-32 px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 resize-vertical transition-all duration-200"
                          placeholder={`${sectionLabels[key]}을 자세히 작성해주세요...`}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 첨부파일 */}
            <div className="mb-10">
              <label className="flex items-center space-x-2 text-lg font-semibold text-gray-800 mb-4">
                <Upload className="w-5 h-5 text-indigo-600" />
                <span>첨부파일</span>
              </label>
              
              {/* 파일 목록 */}
              {attachedFiles.length > 0 && (
                <div className="mb-4 space-y-3">
                  {attachedFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border-2 border-gray-200 hover:border-indigo-300 transition-colors duration-200">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-indigo-100 rounded-lg">
                          <FileText className="w-4 h-4 text-indigo-600" />
                        </div>
                        <span className="text-gray-700 font-medium truncate">{file.name}</span>
                      </div>
                      <button
                        onClick={() => removeFile(index)}
                        className="p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors duration-200"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              
              {/* 파일 첨부 버튼 */}
              <div className="relative">
                <input
                  type="file"
                  multiple
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="inline-flex items-center px-6 py-3 border-2 border-dashed border-indigo-300 rounded-xl text-indigo-600 bg-indigo-50 hover:bg-indigo-100 hover:border-indigo-400 cursor-pointer transition-all duration-200 font-medium"
                >
                  <Upload className="w-5 h-5 mr-2" />
                  파일 첨부하기
                </label>
              </div>
            </div>

            {/* 게시글 숨김 옵션 */}
            <div className="mb-10 text-center">
              <label className="inline-flex items-center space-x-3 p-4 bg-yellow-50 rounded-xl border-2 border-yellow-200 cursor-pointer hover:bg-yellow-100 transition-colors duration-200">
                <input
                  type="checkbox"
                  checked={isHidden}
                  onChange={(e) => setIsHidden(e.target.checked)}
                  className="w-5 h-5 text-yellow-600 border-2 border-yellow-300 rounded focus:ring-yellow-500"
                />
                <span className="text-lg font-medium text-yellow-800">해당 게시글을 숨깁니다</span>
              </label>
            </div>

            {/* 등록/취소 버튼 */}
            <div className="flex justify-center space-x-4 pt-8 border-t-2 border-gray-100">
              <button
                onClick={handleSubmit}
                className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold text-lg hover:bg-indigo-700 focus:outline-none transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                게시글 등록
              </button>
              <button
                onClick={handleCancel}
                className="px-8 py-4 bg-gray-100 text-gray-700 rounded-xl font-semibold text-lg hover:bg-gray-200 focus:outline-none transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                작성 취소
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCreationPage;