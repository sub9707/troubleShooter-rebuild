import PostViewClient from "../_components/PostViewClient";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // 여기서 실제로는 slug를 사용해서 데이터베이스나 API에서 게시글 데이터를 가져와야 합니다.
  // 예: const postData = await getPostBySlug(slug);
  
  return <PostViewClient slug={slug} />;
}