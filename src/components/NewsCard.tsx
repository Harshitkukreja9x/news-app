import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import type { RootState } from "../app/store";

import { translations } from "../translations";

interface Props {
  post: any;
  author: string;
}

const NewsCard = ({ post, author }: Props) => {

  const lang = useSelector(
    (state: RootState) => state.language.lang
  );

  const t = translations[lang as "en" | "ar"];

  return (
    <div className="rounded-2xl overflow-hidden shadow-lg bg-[var(--card)] transition-all duration-300 hover:scale-[1.02]">
      
      <img
        src={`https://picsum.photos/300/200?random=${post.id}`}
        alt={post.title}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.currentTarget.src =
            "https://via.placeholder.com/300x200";
        }}
      />

      <div className="p-5">

        <h2 className="font-bold text-lg mb-3 line-clamp-2">
          {post.title}
        </h2>

        <p className="text-sm opacity-80 mb-4">
          {post.body.slice(0, 90)}...
        </p>

        <p className="text-sm mb-4">
          <span className="font-semibold">
            {t.author}:
          </span>{" "}
          {author}
        </p>

        <Link
          to={`/post/${post.id}`}
          className="text-blue-500 font-medium"
        >
          {t.readMore}
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;