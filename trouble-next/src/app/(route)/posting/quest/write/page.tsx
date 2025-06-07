"use client";
import React, { useState, useRef, ChangeEvent, KeyboardEvent, DragEvent, FormEvent } from 'react';
import { X, Upload, Image, AlertCircle, FileText, Tag, Save, ArrowLeft } from 'lucide-react';

interface FormData {
  title: string;
  isUrgent: boolean;
  tags: string[];
  image: File | null;
  content: string;
}

const Page: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [isUrgent, setIsUrgent] = useState<boolean>(false);
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [content, setContent] = useState<string>('');
  const [dragActive, setDragActive] = useState<boolean>(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleTagKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove: string): void => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleImageUpload = (file: File): void => {
    if (file && file.type.startsWith('image/')) {
      setImage(file);
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target?.result) {
          setImagePreview(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrag = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageUpload(e.dataTransfer.files[0]);
    }
  };

  const removeImage = (): void => {
    setImage(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const handleSubmit = (): void => {
    const formData: FormData = {
      title,
      isUrgent,
      tags,
      image,
      content
    };

    // 유효성 검사
    if (!title.trim()) {
      alert('제목을 입력해주세요.');
      return;
    }

    if (!content.trim()) {
      alert('에러 상황과 질문을 작성해주세요.');
      return;
    }

    // 등록 로직 구현
    console.log('제출된 데이터:', formData);
    alert('게시글이 등록되었습니다!');
  };

  const handleCancel = (): void => {
    if (confirm('작성 중인 내용이 삭제됩니다. 정말로 취소하시겠습니까?')) {
      // 취소 로직 - 이전 페이지로 이동
      window.history.back();
    }
  };

  return (
    <div className="h-screen min-h-screen overflow-y-scroll ">
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
              <h1 className="text-2xl font-bold text-indigo-900">에러 질문 작성</h1>
              <p className="text-indigo-600 mt-1">개발 중 발생한 에러에 대해 질문해보세요</p>
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
              onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
              placeholder="에러 상황을 간단히 요약해주세요"
              className="w-full px-4 py-3 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* 긴급 여부 체크박스 */}
          <div className="bg-white rounded-xl shadow-sm border border-indigo-100 p-6">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="urgent"
                checked={isUrgent}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setIsUrgent(e.target.checked)}
                className="w-5 h-5 text-indigo-600 border-indigo-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="urgent" className="flex items-center gap-2 text-lg font-semibold text-indigo-900 cursor-pointer">
                <AlertCircle className="w-5 h-5 text-orange-500" />
                긴급 질문 <span className="text-orange-600 font-medium">(50포인트 차감) [ 현재포인트 : 0 ]</span>
              </label>
            </div>
            <p className="text-sm text-indigo-600 mt-2 ml-8">
              긴급 질문으로 설정하면 우선적으로 답변을 받을 수 있습니다
            </p>
          </div>

          {/* 태그 입력 */}
          <div className="bg-white rounded-xl shadow-sm border border-indigo-100 p-6">
            <label className="flex items-center gap-2 text-lg font-semibold text-indigo-900 mb-4">
              <Tag className="w-5 h-5" />
              태그
            </label>
            <div className="space-y-4">
              <input
                type="text"
                value={tagInput}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setTagInput(e.target.value)}
                onKeyDown={handleTagKeyDown}
                placeholder="태그를 입력하고 Enter를 눌러주세요 (예: React, JavaScript, CSS)"
                className="w-full px-4 py-3 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
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

          {/* 이미지 업로드 */}
          <div className="bg-white rounded-xl shadow-sm border border-indigo-100 p-6">
            <label className="flex items-center gap-2 text-lg font-semibold text-indigo-900 mb-4">
              <Image className="w-5 h-5" />
              에러 이미지
            </label>
            
            {!imagePreview ? (
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-all cursor-pointer ${
                  dragActive 
                    ? 'border-indigo-500 bg-indigo-50' 
                    : 'border-indigo-300 hover:border-indigo-400 hover:bg-indigo-50'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                <p className="text-indigo-600 mb-2">
                  이미지를 드래그 앤 드롭하거나 클릭하여 업로드하세요
                </p>
                <p className="text-sm text-indigo-500 mb-4">
                  PNG, JPG, GIF 파일만 업로드 가능합니다
                </p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    fileInputRef.current?.click();
                  }}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  파일 선택
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileInputChange}
                  className="hidden"
                />
              </div>
            ) : (
              <div className="relative">
                <img
                  src={imagePreview}
                  alt="업로드된 이미지"
                  className="w-full max-w-md mx-auto rounded-lg shadow-md"
                />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* 에러 상황과 질문 에디터 */}
          <div className="bg-white rounded-xl shadow-sm border border-indigo-100 p-6">
            <label className="flex items-center gap-2 text-lg font-semibold text-indigo-900 mb-4">
              <FileText className="w-5 h-5" />
              에러 상황과 질문
            </label>
            <textarea
              value={content}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
              placeholder="에러가 발생한 상황을 자세히 설명해주세요.&#10;&#10;- 어떤 작업을 하다가 에러가 발생했나요?&#10;- 에러 메시지는 무엇인가요?&#10;- 시도해본 해결 방법이 있나요?&#10;- 어떤 도움이 필요한가요?"
              rows={12}
              className="w-full px-4 py-3 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
              required
            />
            <div className="mt-2 text-sm text-indigo-600">
              상세한 설명을 작성할수록 더 정확한 답변을 받을 수 있습니다
            </div>
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
};

export default Page;