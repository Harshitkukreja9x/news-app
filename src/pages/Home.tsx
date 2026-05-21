import NewsCard from "../components/NewsCard";
import SkeletonCard from "../components/SkeletonCard";
import {
  useGetPostsQuery,
  useGetUsersQuery,
} from "../api/newsApi";

const Home = () => {
  const { data: posts, isLoading } =
    useGetPostsQuery({});

  const { data: users } =
    useGetUsersQuery({});

  if (isLoading) {
    return (
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {posts?.slice(0, 12).map((post: any) => {
        const user = users?.find(
          (u: any) => u.id === post.userId
        );

        return (
          <NewsCard
            key={post.id}
            post={post}
            author={user?.name}
          />
        );
      })}
    </div>
  );
};

export default Home;