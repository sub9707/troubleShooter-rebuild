"use client"
import { useState } from 'react';
import { ChevronDown, ChevronRight, Upload, X, Edit3, Tag, CheckCircle2, FileText, Search, AlertCircle, Lightbulb, Target, ArrowLeft, Save } from 'lucide-react';

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
    // 유효성 검사
    if (!title.trim()) {
      alert('제목을 입력해주세요.');
      return;
    }

    console.log('게시글 등록:', {
      title,
      tags,
      isSolved,
      isHidden,
      sections,
      attachedFiles
    });
    
    alert('게시글이 등록되었습니다!');
  };

  const handleCancel = () => {
    if (confirm('작성 중인 내용이 삭제됩니다. 정말로 취소하시겠습니까?')) {
      window.history.back();
    }
  };

  return (
    <div className="h-screen min-h-screen overflow-y-scroll">
      {/* 헤더 */}
      <header className="bg-white shadow-sm border-b border-indigo-100">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <button
              onClick={handleCancel}
              className="p-2 hover:bg-indigo-50 rounded-lg transition-colors"
              type="button"
            >
              <ArrowLeft className="w-5 h-5 text-indigo-600" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-indigo-900">개발 질문 작성</h1>
              <p className="text-indigo-600 mt-1">개발 중 발생한 문제에 대해 질문해보세요</p>
            </div>
          </div>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* 제목 입력 */}
          <div className="bg-white rounded-xl shadow-sm border border-indigo-100 p-6">
            <label className="flex items-center gap-2 text-lg font-semibold text-indigo-900 mb-4">
              <FileText className="w-5 h-5" />
              제목
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="게시글 제목을 입력하세요"
              className="w-full px-4 py-3 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* 태그 설정 */}
          <div className="bg-white rounded-xl shadow-sm border border-indigo-100 p-6">
            <label className="flex items-center gap-2 text-lg font-semibold text-indigo-900 mb-4">
              <Tag className="w-5 h-5" />
              태그 설정
            </label>
            <div className="space-y-4">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={handleTagKeyPress}
                placeholder="태그를 입력하고 Enter를 눌러주세요 (예: React, JavaScript, CSS)"
                className="w-full px-4 py-3 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(index)}
                        className="hover:bg-indigo-200 rounded-full p-1 transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* 해결 여부 */}
          <div className="bg-white rounded-xl shadow-sm border border-indigo-100 p-6">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="solved"
                checked={isSolved}
                onChange={(e) => setIsSolved(e.target.checked)}
                className="w-5 h-5 text-green-600 border-indigo-300 rounded focus:ring-green-500"
              />
              <label htmlFor="solved" className="flex items-center gap-2 text-lg font-semibold text-indigo-900 cursor-pointer">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                해결 완료
              </label>
            </div>
            <p className="text-sm text-indigo-600 mt-2 ml-8">
              문제가 해결된 경우 체크해주세요
            </p>
          </div>

          {/* 상세 내용 섹션들 */}
          <div className="bg-white rounded-xl shadow-sm border border-indigo-100 p-6">
            <h2 className="text-lg font-semibold text-indigo-900 mb-6">상세 내용</h2>
            <div className="space-y-4">
              {(Object.entries(sections) as [SectionKey, Section][]).map(([key, section]) => {
                const IconComponent = sectionIcons[key];
                return (
                  <div key={key} className="border border-indigo-200 rounded-lg overflow-hidden">
                    <div className="p-4 bg-indigo-50 border-b border-indigo-200">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={section.active}
                          onChange={() => toggleSection(key)}
                          className="w-5 h-5 text-indigo-600 border-indigo-300 rounded focus:ring-indigo-500"
                        />
                        <IconComponent className="w-5 h-5 text-indigo-700" />
                        <span className="text-base font-medium text-indigo-900 flex-1">
                          {sectionLabels[key]}
                        </span>
                        {section.active ? (
                          <ChevronDown className="w-4 h-4 text-indigo-600" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-indigo-600" />
                        )}
                      </label>
                    </div>

                    {section.active && (
                      <div className="p-4 bg-white">
                        <textarea
                          value={section.content}
                          onChange={(e) => updateSectionContent(key, e.target.value)}
                          className="w-full px-4 py-3 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none transition-all"
                          rows={6}
                          placeholder={`${sectionLabels[key]}을 자세히 작성해주세요...`}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 첨부파일 */}
          <div className="bg-white rounded-xl shadow-sm border border-indigo-100 p-6">
            <label className="flex items-center gap-2 text-lg font-semibold text-indigo-900 mb-4">
              <Upload className="w-5 h-5" />
              첨부파일
            </label>

            {/* 파일 목록 */}
            {attachedFiles.length > 0 && (
              <div className="mb-4 space-y-3">
                {attachedFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-indigo-100 rounded-lg">
                        <FileText className="w-4 h-4 text-indigo-600" />
                      </div>
                      <span className="text-indigo-900 font-medium truncate">{file.name}</span>
                    </div>
                    <button
                      onClick={() => removeFile(index)}
                      className="p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
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
                className="inline-flex items-center px-6 py-3 border-2 border-dashed border-indigo-300 rounded-lg text-indigo-600 bg-indigo-50 hover:bg-indigo-100 hover:border-indigo-400 cursor-pointer transition-all font-medium"
              >
                <Upload className="w-5 h-5 mr-2" />
                파일 첨부하기
              </label>
              <p className="text-sm text-indigo-600 mt-2">
                이미지, 코드 파일 등을 첨부할 수 있습니다
              </p>
            </div>
          </div>

          {/* 게시글 숨김 옵션 */}
          <div className="bg-white rounded-xl shadow-sm border border-indigo-100 p-6">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="hidden"
                checked={isHidden}
                onChange={(e) => setIsHidden(e.target.checked)}
                className="w-5 h-5 text-yellow-600 border-indigo-300 rounded focus:ring-yellow-500"
              />
              <label htmlFor="hidden" className="flex items-center gap-2 text-lg font-semibold text-indigo-900 cursor-pointer">
                <Edit3 className="w-5 h-5 text-yellow-500" />
                해당 게시글을 숨깁니다
              </label>
            </div>
            <p className="text-sm text-indigo-600 mt-2 ml-8">
              체크하면 다른 사용자에게 게시글이 보이지 않습니다
            </p>
          </div>

          {/* 버튼 그룹 */}
          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-3 border border-indigo-300 text-indigo-700 rounded-lg hover:bg-indigo-50 transition-colors font-medium"
            >
              취소
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              등록
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PostCreationPage;