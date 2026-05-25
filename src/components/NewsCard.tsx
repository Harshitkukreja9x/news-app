import { Link } from "react-router-dom";

import useTranslation from "../hooks/useTranslation";

interface Props {
  post: any;
  author: string;
}

const NewsCard = ({ post, author }: Props) => {

  const t = useTranslation();

  return (
    <Link to={`/post/${post.id}`}>
      <article
        className="
          bg-[var(--card)]
          rounded-3xl
          overflow-hidden
          shadow-lg
          hover:-translate-y-2
          hover:shadow-2xl
          transition-all duration-500
          group
        "
      >
        <div className="overflow-hidden">

          <img
            src={`https://picsum.photos/600/400?random=${post.id}`}
            alt={post.title}
            className="
              w-full
              h-64
              object-cover
              group-hover:scale-110
              transition duration-700
            "
            onError={(e) => {
              e.currentTarget.src =
                "https://via.placeholder.com/600x400";
            }}
          />
        </div>

        <div className="p-6">

          <span className="text-sm text-red-500 font-semibold">
            Technology
          </span>

          <h2
            className="
              text-2xl
              font-bold
              leading-tight
              mt-3
              line-clamp-2
              group-hover:text-red-500
              transition
            "
          >
            {post.title}
          </h2>

          <p className="mt-4 opacity-70 line-clamp-3">
            {post.body}
          </p>

          <div className="mt-6 flex items-center justify-between">

            <div className="flex items-center gap-3">

              <img
                src={`https://i.pravatar.cc/100?u=${post.userId}`}
                alt={author}
                className="w-10 h-10 rounded-full"
              />

              <div>
                <p className="font-medium">
                  {author}
                </p>

                <p className="text-sm opacity-60">
                  {t.author}
                </p>
              </div>
            </div>

            <button
              className="
                w-12 h-12
                rounded-full
                bg-black
                text-white
                dark:bg-white
                dark:text-black
                text-xl
              "
            >
              →
            </button>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default NewsCard;