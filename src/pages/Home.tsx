import {
  useGetPostsQuery,
  useGetUsersQuery,
} from "../api/newsApi";

import NewsCard from "../components/NewsCard";
import SkeletonCard from "../components/SkeletonCard";
import useTranslation from "../hooks/useTranslation";

const Home = () => {
  const { data: posts, isLoading } =
    useGetPostsQuery({});

  const { data: users } =
    useGetUsersQuery({});

    const t = useTranslation();
    

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-3 gap-6">
        {Array.from({ length: 9 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  const featured = posts?.[0];

  const trending = posts?.slice(1, 5);

  const latest = posts?.slice(5, 15);

  const getAuthor = (userId: number) => {
    return users?.find((u: any) => u.id === userId)
      ?.name;
  };

  return (
    <div className="space-y-12">

      {/* HERO SECTION */}
      <section className="grid lg:grid-cols-3 gap-8">

        {/* LEFT HERO */}
        <div className="lg:col-span-2 relative rounded-3xl overflow-hidden group cursor-pointer">

          <img
            src={`https://picsum.photos/1200/700?random=${featured?.id}`}
            className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

          <div className="absolute bottom-0 p-8 text-white">

            <span className="bg-red-500 px-4 py-1 rounded-full text-sm">
              {t.breakingNews}
            </span>

            <h1 className="text-4xl md:text-5xl font-black leading-tight mt-5 max-w-3xl">
              {featured?.title}
            </h1>

            <p className="mt-4 text-gray-300 max-w-2xl">
              {featured?.body}
            </p>

            <div className="mt-6 flex items-center gap-4">
              <img
                src={`https://i.pravatar.cc/100?u=${featured?.userId}`}
                className="w-12 h-12 rounded-full"
              />

              <div>
                <p className="font-semibold">
                  {getAuthor(featured?.userId)}
                </p>

                <p className="text-sm text-gray-400">
                  Senior Journalist
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">

          <div className="bg-[var(--card)] rounded-3xl p-6 shadow-lg">

            <h2 className="text-2xl font-bold mb-6">
              {t.trending}
            </h2>

            <div className="space-y-5">
              {trending?.map((item: any) => (
                <div
                  key={item.id}
                  className="flex gap-4 group cursor-pointer"
                >
                  <img
                    src={`https://picsum.photos/200/200?random=${item.id}`}
                    className="w-24 h-24 rounded-2xl object-cover"
                  />

                  <div>
                    <h3 className="font-semibold line-clamp-2 group-hover:text-red-500 transition">
                      {item.title}
                    </h3>

                    <p className="text-sm opacity-70 mt-2">
                      {getAuthor(item.userId)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* NEWSLETTER */}
          <div className="rounded-3xl p-6 bg-gradient-to-br from-red-500 to-orange-500 text-white">

            <h2 className="text-2xl font-bold">
              {t.stayUpdated}
            </h2>

            <p className="mt-3 text-white/80">
              {t.latestHeadlines}
            </p>

            <input
              placeholder={t.enterEmail}
              className="w-full mt-5 px-4 py-3 rounded-xl bg-white text-black outline-none"
            />

            <button className="w-full mt-4 bg-black text-white py-3 rounded-xl font-semibold hover:opacity-90">
              {t.subscribe}
            </button>
          </div>
        </div>
      </section>

      {/* LATEST NEWS */}
      <section>

        <div className="flex items-center justify-between mb-8">

          <h2 className="text-4xl font-black">
            {t.latestNews}
          </h2>

          <div className="flex gap-3 flex-wrap">

            <button className="px-5 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black">
              {t.all}
            </button>

            <button className="px-5 py-2 rounded-full bg-gray-400 dark:bg-slate-800">
              {t.politics}
            </button>

            <button className="px-5 py-2 rounded-full bg-gray-400 dark:bg-slate-800">
              {t.sports}
            </button>

            <button className="px-5 py-2 rounded-full bg-gray-400 dark:bg-slate-800">
              {t.technology}
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {latest?.map((post: any) => (
            <NewsCard
              key={post.id}
              post={post}
              author={getAuthor(post.userId)}
            />
          ))}
        </div>
        
      </section>
    </div>
  );
};

export default Home;