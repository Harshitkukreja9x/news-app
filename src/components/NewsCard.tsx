import { Link } from "react-router-dom";

interface Props {
  post: any;
  author: string;
}

const NewsCard = ({ post, author }: Props) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-[var(--card)]">
      <img
        src={`https://picsum.photos/300/200?random=${post.id}`}
        alt={post.title}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.currentTarget.src =
            "https://via.placeholder.com/300x200";
        }}
      />

      <div className="p-4">
        <h2 className="font-bold text-lg mb-2">
          {post.title}
        </h2>

        <p className="text-sm mb-3">
          {post.body.slice(0, 80)}...
        </p>

        <p className="text-xs mb-4">
          Author: {author}
        </p>

        <Link
          to={`/post/${post.id}`}
          className="text-blue-500"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;