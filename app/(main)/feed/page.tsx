import { fetchPosts } from "@/app/actions/feed/actions";

export default async function Page() {
  const posts = await fetchPosts();
  // TODO: Implement the feed UI to display the posts. For now, we just log them.
  return (
    <div>
      {posts.map(
        (
          post: { id: string; title: string; content: string },
          index: number,
        ) => (
          <div key={index}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ),
      )}
    </div>
  );
}
