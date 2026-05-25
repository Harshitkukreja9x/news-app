import { useParams, Link } from "react-router-dom";

import {
  useGetPostByIdQuery,
  useGetUsersQuery,
} from "../api/newsApi";
import useTranslation from "../hooks/useTranslation";

const PostDetails = () => {
  const { id } = useParams();

  const { data, isLoading } =
    useGetPostByIdQuery(id);

  const { data: users } =
    useGetUsersQuery({});
    const t = useTranslation();

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto animate-pulse">

        <div className="h-[500px] rounded-3xl bg-gray-300 dark:bg-slate-800" />

        <div className="mt-8 h-10 w-3/4 rounded bg-gray-300 dark:bg-slate-800" />

        <div className="mt-6 space-y-4">
          <div className="h-4 rounded bg-gray-300 dark:bg-slate-800" />
          <div className="h-4 rounded bg-gray-300 dark:bg-slate-800" />
          <div className="h-4 w-2/3 rounded bg-gray-300 dark:bg-slate-800" />
        </div>
      </div>
    );
  }

  const author = users?.find(
    (user: any) => user.id === data?.userId
  );

  return (
    <div className="max-w-6xl mx-auto">

      {/* BACK BUTTON */}
      <Link
        to="/"
        className="
          inline-flex items-center gap-2
          mb-8
          px-5 py-3
          rounded-2xl
          bg-[var(--card)]
          shadow-md
          hover:scale-105
          transition-all duration-300
        "
      >
        ← {t.backToNews}
      </Link>

      {/* HERO IMAGE */}
      <div className="relative rounded-[32px] overflow-hidden">

        <img
          src={`https://picsum.photos/1400/700?random=${id}`}
          alt={data?.title}
          className="
            w-full
            h-[550px]
            object-cover
          "
          onError={(e) => {
            e.currentTarget.src =
              "https://via.placeholder.com/1400x700";
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        {/* CONTENT */}
        <div className="absolute bottom-0 p-10 text-white max-w-4xl">

          <span className="bg-red-500 px-5 py-2 rounded-full text-sm font-semibold">
            {t.featuredStory}
          </span>

          <h1
            className="
              mt-6
              text-4xl md:text-6xl
              font-black
              leading-tight
            "
          >
            {data?.title}
          </h1>

          {/* AUTHOR */}
          <div className="flex items-center gap-4 mt-8">

            <img
              src={`https://i.pravatar.cc/100?u=${author?.id}`}
              className="w-14 h-14 rounded-full border-2 border-white"
            />

            <div>
              <p className="font-semibold text-lg">
                {author?.name}
              </p>

              <p className="text-gray-300 text-sm">
                Senior Journalist
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ARTICLE CONTENT */}
      <article
        className="
          mt-12
          grid
          lg:grid-cols-12
          gap-10
        "
      >

        {/* MAIN CONTENT */}
        <div className="lg:col-span-8">

          <div
            className="
              bg-[var(--card)]
              rounded-[32px]
              p-8 md:p-12
              shadow-lg
            "
          >

            <div className="flex items-center gap-4 mb-8">

              <span className="px-4 py-2 rounded-full bg-red-100 text-red-500 dark:bg-red-500/10">
                Technology
              </span>

              <span className="opacity-60">
                5 min read
              </span>

              <span className="opacity-60">
                May 2026
              </span>
            </div>

            <p
              className="
                text-xl
                leading-10
                opacity-90
              "
            >
              {data?.body}
            </p>

            <p
              className="
                mt-8
                text-lg
                leading-9
                opacity-80
              "
            >
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quasi earum atque
              consequatur, illum minima sit
              laboriosam cumque numquam vero porro
              magni exercitationem expedita.
            </p>

            <p
              className="
                mt-8
                text-lg
                leading-9
                opacity-80
              "
            >
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ullam voluptas
              necessitatibus maxime molestias
              accusantium deserunt eveniet ducimus
              dolores.
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="lg:col-span-4 space-y-8">

          {/* AUTHOR CARD */}
          <div
            className="
              bg-[var(--card)]
              rounded-[32px]
              p-8
              shadow-lg
            "
          >

            <h2 className="text-2xl font-bold mb-6">
              {t.aboutAuthor}
            </h2>

            <div className="flex items-center gap-4">

              <img
                src={`https://i.pravatar.cc/100?u=${author?.id}`}
                className="w-16 h-16 rounded-full"
              />

              <div>
                <p className="font-bold text-lg">
                  {author?.name}
                </p>

                <p className="opacity-70">
                  News Correspondent
                </p>
              </div>
            </div>

            <p className="mt-6 opacity-70 leading-8">
              Passionate journalist covering
              technology, innovation, and global
              affairs.
            </p>
          </div>

          {/* SHARE CARD */}
          <div
            className="
              bg-gradient-to-br
              from-red-500
              to-orange-500
              rounded-[32px]
              p-8
              text-white
            "
          >

            <h2 className="text-2xl font-bold">
              {t.shareArticle}
            </h2>

            <p className="mt-4 text-white/80">
              Share this article with your friendss
              and colleagues.
            </p>

            <div className="flex gap-4 mt-6">

              <button className="w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 transition">
                𝕏
              </button>

              <button className="w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 transition">
                f
              </button>

              <button className="w-14 h-14 rounded-full bg-white/20 hover:bg-white/30 transition">
                in
              </button>
            </div>
          </div>
        </aside>
      </article>
    </div>
  );
};

export default PostDetails;