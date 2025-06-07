"use client";
import React, { useState } from 'react';
import { 
  ArrowLeft, 
  AlertCircle, 
  Tag, 
  Clock, 
  User, 
  MessageCircle, 
  CheckCircle, 
  Heart, 
  Share2,
  MoreVertical,
  Send,
  Award
} from 'lucide-react';

interface Comment {
  id: string;
  author: string;
  avatar: string;
  content: string;
  createdAt: string;
  likes: number;
}

interface Answer {
  id: string;
  author: string;
  avatar: string;
  content: string;
  createdAt: string;
  likes: number;
  isAccepted: boolean;
  comments: Comment[];
}

interface Question {
  id: string;
  title: string;
  content: string;
  author: string;
  avatar: string;
  createdAt: string;
  isUrgent: boolean;
  tags: string[];
  image?: string;
  views: number;
  likes: number;
  comments: Comment[];
}

// 모킹 데이터
const mockQuestion: Question = {
  id: '1',
  title: 'React useState가 비동기적으로 업데이트되지 않는 문제',
  content: `안녕하세요, React 개발 중에 useState 관련해서 문제가 생겼습니다.

상태를 업데이트한 직후에 console.log로 확인해보면 이전 값이 출력되는 현상이 발생합니다.

\`\`\`javascript
const [count, setCount] = useState(0);

const handleClick = () => {
  setCount(count + 1);
  console.log(count); // 여전히 0이 출력됨
};
\`\`\`

useState는 비동기적으로 작동한다고 알고 있는데, 이 경우 어떻게 해결해야 할까요?
상태 업데이트 후 즉시 새로운 값을 사용해야 하는 상황입니다.

시도해본 방법:
- useEffect를 사용해봤지만 불필요한 렌더링이 발생
- setTimeout을 사용했지만 근본적인 해결책이 아닌 것 같음

어떤 방법이 가장 적절한지 조언 부탁드립니다.`,
  author: '개발초보자',
  avatar: '/api/placeholder/40/40',
  createdAt: '2024-12-07 14:30',
  isUrgent: true,
  tags: ['React', 'JavaScript', 'useState', 'Hook'],
  image: '/api/placeholder/600/300',
  views: 127,
  likes: 8,
  comments: [
    {
      id: 'c1',
      author: 'React전문가',
      avatar: '/api/placeholder/32/32',
      content: 'useState의 특성을 정확히 파악하신 것 같네요. 추가 질문이 있으시면 언제든 말씀해주세요!',
      createdAt: '2024-12-07 15:45',
      likes: 3
    }
  ]
};

const mockAnswers: Answer[] = [
  {
    id: '1',
    author: 'React마스터',
    avatar: '/api/placeholder/40/40',
    content: `좋은 질문입니다! useState의 상태 업데이트가 비동기적으로 작동하는 것은 맞습니다.

**해결 방법들:**

1. **함수형 업데이트 사용**
\`\`\`javascript
const handleClick = () => {
  setCount(prevCount => {
    const newCount = prevCount + 1;
    console.log(newCount); // 새로운 값 출력
    return newCount;
  });
};
\`\`\`

2. **useEffect 활용**
\`\`\`javascript
useEffect(() => {
  console.log(count); // 상태 변경 후 실행
}, [count]);
\`\`\`

3. **지역 변수 사용**
\`\`\`javascript
const handleClick = () => {
  const newCount = count + 1;
  setCount(newCount);
  console.log(newCount); // 새로운 값 사용
};
\`\`\`

가장 권장하는 방법은 **함수형 업데이트**입니다. 이 방법이 가장 React답고 안전합니다.`,
    createdAt: '2024-12-07 14:45',
    likes: 15,
    isAccepted: true,
    comments: [
      {
        id: 'a1c1',
        author: '개발초보자',
        avatar: '/api/placeholder/32/32',
        content: '와! 함수형 업데이트 방법이 정말 깔끔하네요. 바로 적용해보겠습니다. 감사합니다!',
        createdAt: '2024-12-07 15:00',
        likes: 2
      },
      {
        id: 'a1c2',
        author: 'JS개발자',
        avatar: '/api/placeholder/32/32',
        content: '저도 같은 문제로 고민했었는데 덕분에 해결됐어요. 좋은 답변 감사합니다!',
        createdAt: '2024-12-07 15:30',
        likes: 1
      }
    ]
  },
  {
    id: '2',
    author: '프론트엔드개발자',
    avatar: '/api/placeholder/40/40',
    content: `추가로 설명드리자면, React의 배치 업데이트(Batch Update) 때문에 이런 현상이 발생합니다.

React 18부터는 자동 배치가 더욱 강화되어서 이런 상황이 더 자주 발생할 수 있어요.

**참고할 만한 내용:**
- 상태 업데이트는 다음 렌더링에서 반영됩니다
- 여러 개의 setState가 하나로 배치됩니다
- flushSync를 사용하면 즉시 업데이트할 수 있지만 권장하지 않습니다

위 답변의 함수형 업데이트가 정답입니다!`,
    createdAt: '2024-12-07 15:20',
    likes: 7,
    isAccepted: false,
    comments: []
  }
];

interface AnswerViewClientProps {
    slug: string;
}


export default function AnswerViewClient({ slug }:AnswerViewClientProps) {
  const [question] = useState<Question>(mockQuestion);
  const [answers] = useState<Answer[]>(mockAnswers);
  const [newComments, setNewComments] = useState<Record<string, string>>({});
  const [showComments, setShowComments] = useState<Record<string, boolean>>({});

  // 채택된 답변을 맨 위로, 나머지는 좋아요 순으로 정렬
  const sortedAnswers = [...answers].sort((a, b) => {
    if (a.isAccepted && !b.isAccepted) return -1;
    if (!a.isAccepted && b.isAccepted) return 1;
    return b.likes - a.likes;
  });

  const handleCommentSubmit = (targetId: string, type: 'question' | 'answer') => {
    const comment = newComments[targetId];
    if (!comment?.trim()) return;

    // 실제로는 API 호출하여 댓글 추가
    console.log(`Adding comment to ${type} ${targetId}:`, comment);
    
    // 댓글 입력창 초기화
    setNewComments(prev => ({ ...prev, [targetId]: '' }));
    alert('댓글이 등록되었습니다!');
  };

  const toggleComments = (id: string) => {
    setShowComments(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const CommentSection: React.FC<{
    comments: Comment[];
    targetId: string;
    type: 'question' | 'answer';
  }> = ({ comments, targetId, type }) => (
    <div className="mt-4 pt-4 border-t border-indigo-100">
      {/* 댓글 작성 */}
      <div className="flex gap-3 mb-4">
        <img 
          src="/assets/images/avatar.png" 
          alt="내 프로필" 
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1 flex gap-2">
          <input
            type="text"
            value={newComments[targetId] || ''}
            onChange={(e) => setNewComments(prev => ({ ...prev, [targetId]: e.target.value }))}
            placeholder="댓글을 작성해주세요..."
            className="flex-1 px-3 py-2 text-sm border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            onKeyDown={(e) => e.key === 'Enter' && handleCommentSubmit(targetId, type)}
          />
          <button
            onClick={() => handleCommentSubmit(targetId, type)}
            className="px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 댓글 목록 */}
      {comments.length > 0 && (
        <div className="space-y-3">
          {comments.map((comment) => (
            <div key={comment.id} className="flex gap-3">
              <img 
                src="/assets/images/avatar.png" 
                alt={comment.author} 
                className="w-8 h-8 rounded-full"
              />
              <div className="flex-1">
                <div className="bg-gray-50 rounded-lg px-3 py-2">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium text-gray-900">{comment.author}</span>
                    <span className="text-xs text-gray-500">{comment.createdAt}</span>
                  </div>
                  <p className="text-sm text-gray-700">{comment.content}</p>
                </div>
                <div className="flex items-center gap-4 mt-1 ml-3">
                  <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-indigo-600">
                    <Heart className="w-3 h-3" />
                    {comment.likes}
                  </button>
                  <button className="text-xs text-gray-500 hover:text-indigo-600">
                    답글
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="h-screen min-h-screen overflow-y-scroll bg-gradient-to-br from-indigo-50 via-white to-indigo-100">
      {/* 헤더 */}
      <header className="bg-white shadow-sm border-b border-indigo-100">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => window.history.back()}
              className="p-2 hover:bg-indigo-50 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-indigo-600" />
            </button>
            <div>
              <h1 className="text-xl font-bold text-indigo-900">에러 질문</h1>
              <p className="text-sm text-indigo-600">질문 ID: {slug}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6">
        {/* 질문 섹션 */}
        <article className="bg-white rounded-xl shadow-sm border border-indigo-100 p-6 mb-6">
          {/* 질문 헤더 */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                {question.isUrgent && (
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                    <AlertCircle className="w-3 h-3" />
                    긴급
                  </span>
                )}
                <div className="flex flex-wrap gap-1">
                  {question.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-3">{question.title}</h1>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <MoreVertical className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* 질문 메타 정보 */}
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <img src="/assets/images/avatar.png"  alt={question.author} className="w-8 h-8 rounded-full" />
              <span className="font-medium">{question.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {question.createdAt}
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              조회 {question.views}
            </div>
          </div>

          {/* 질문 내용 */}
          <div className="prose max-w-none mb-4">
            <pre className="whitespace-pre-wrap text-gray-800 font-sans leading-relaxed">
              {question.content}
            </pre>
          </div>

          {/* 질문 이미지 */}
          {question.image && (
            <div className="mb-4">
              <img 
                src={question.image} 
                alt="에러 스크린샷" 
                className="max-w-full h-auto rounded-lg border border-gray-200"
              />
            </div>
          )}

          {/* 질문 액션 버튼 */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                <Heart className="w-4 h-4" />
                좋아요 {question.likes}
              </button>
              <button 
                onClick={() => toggleComments('question')}
                className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                댓글 {question.comments.length}
              </button>
              <button className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                <Share2 className="w-4 h-4" />
                공유
              </button>
            </div>
          </div>

          {/* 질문 댓글 */}
          {showComments['question'] && (
            <CommentSection 
              comments={question.comments} 
              targetId="question" 
              type="question" 
            />
          )}
        </article>

        {/* 답변 섹션 */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-lg font-semibold text-gray-900">
            <MessageCircle className="w-5 h-5 text-indigo-600" />
            답변 {answers.length}개
          </div>

          {sortedAnswers.map((answer) => (
            <article key={answer.id} className={`bg-white rounded-xl shadow-sm border p-6 ${
              answer.isAccepted ? 'border-green-200 bg-green-50' : 'border-indigo-100'
            }`}>
              {/* 답변 헤더 */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img src="/assets/images/avatar.png"  alt={answer.author} className="w-10 h-10 rounded-full" />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-900">{answer.author}</span>
                      {answer.isAccepted && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                          <Award className="w-3 h-3" />
                          채택된 답변
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock className="w-3 h-3" />
                      {answer.createdAt}
                    </div>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <MoreVertical className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* 답변 내용 */}
              <div className="prose max-w-none mb-4">
                <pre className="whitespace-pre-wrap text-gray-800 font-sans leading-relaxed">
                  {answer.content}
                </pre>
              </div>

              {/* 답변 액션 버튼 */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                    <Heart className="w-4 h-4" />
                    좋아요 {answer.likes}
                  </button>
                  <button 
                    onClick={() => toggleComments(answer.id)}
                    className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    댓글 {answer.comments.length}
                  </button>
                  {!answer.isAccepted && (
                    <button className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white hover:bg-green-700 rounded-lg transition-colors">
                      <CheckCircle className="w-4 h-4" />
                      채택하기
                    </button>
                  )}
                </div>
              </div>

              {/* 답변 댓글 */}
              {showComments[answer.id] && (
                <CommentSection 
                  comments={answer.comments} 
                  targetId={answer.id} 
                  type="answer" 
                />
              )}
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};