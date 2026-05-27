import {
  lazy,
  memo,
  Suspense,
  useMemo,
} from "react";

import { Helmet } from "react-helmet-async";

import {
  useGetPostsQuery,
  useGetUsersQuery,
} from "../api/newsApi";

import SkeletonCard from "../components/SkeletonCard";
import useTranslation from "../hooks/useTranslation";

const NewsCard = lazy(
  () => import("../components/NewsCard")
);

/* REAL NEWS IMAGES */
const newsImages = [
  "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
  "https://images.unsplash.com/photo-1495020689067-958852a7765e",
  "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
  "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
];

const getNewsImage = (id: number) => {
  return `${
    newsImages[id % newsImages.length]
  }?auto=format&fit=crop&w=1200&q=80`;
};

const Home = () => {
  const {
    data: posts,
    isLoading,
    isError,
  } = useGetPostsQuery({});

  const { data: users } =
    useGetUsersQuery({});

  const t = useTranslation();

  const authorsMap = useMemo(() => {
    return users?.reduce(
      (
        acc: Record<number, string>,
        user: any
      ) => {
        acc[user.id] = user.name;
        return acc;
      },
      {}
    );
  }, [users]);

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {Array.from({ length: 9 }).map(
          (_, i) => (
            <SkeletonCard key={i} />
          )
        )}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            Failed to load news
          </h2>

          <p className="mt-3 opacity-70">
            Please try again later.
          </p>
        </div>
      </div>
    );
  }

  const featured = posts?.[0];

  const trending = posts?.slice(1, 5);

  const latest = posts?.slice(5, 15);

  return (
    <>
      <Helmet>
        <title>
          GlobalNews | Breaking News,
          Politics, Sports & Technology
        </title>

        <meta
          name="description"
          content="Read the latest breaking news, politics, sports, technology and world headlines on GlobalNews."
        />

        <meta
          name="keywords"
          content="news, breaking news, politics, sports, technology, world news"
        />

        <meta
          property="og:title"
          content="GlobalNews"
        />

        <meta
          property="og:description"
          content="Stay updated with latest headlines and world news."
        />

        <meta
          property="og:type"
          content="website"
        />
      </Helmet>

      <main className="space-y-12">
        {/* HERO SECTION */}
        <section className="grid lg:grid-cols-3 gap-8">
          {/* LEFT HERO */}
          <article className="lg:col-span-2 relative rounded-3xl overflow-hidden group cursor-pointer bg-[var(--card)] shadow-lg">
            <img
              src={getNewsImage(
                featured?.id || 1
              )}
              alt={featured?.title}
              width="1200"
              height="700"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full h-[820px] object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            <div className="absolute bottom-0 p-8 text-white">
              <span className="bg-red-500 px-4 py-1 rounded-full text-sm font-medium inline-block">
                {t.breakingNews}
              </span>

              <h1 className="text-4xl md:text-5xl font-black leading-tight mt-5 max-w-3xl line-clamp-3">
                {featured?.title}
              </h1>

              <p className="mt-4 text-gray-300 max-w-2xl line-clamp-3">
                {featured?.body}
              </p>

              <div className="mt-6 flex items-center gap-4">
                <img
                  src={`https://i.pravatar.cc/100?u=${featured?.userId}`}
                  alt={
                    authorsMap?.[
                      featured?.userId
                    ] || "Author"
                  }
                  width="48"
                  height="48"
                  loading="lazy"
                  decoding="async"
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <p className="font-semibold">
                    {
                      authorsMap?.[
                        featured?.userId
                      ]
                    }
                  </p>

                  <p className="text-sm text-gray-400">
                    Senior Journalist
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-6">
            {/* TRENDING */}
            <div className="bg-[var(--card)] rounded-3xl p-6 shadow-lg border border-black/5 dark:border-white/5">
              <h2 className="text-2xl font-bold mb-6">
                {t.trending}
              </h2>

              <div className="space-y-5">
                {trending?.map((item: any) => (
                  <article
                    key={item.id}
                    className="flex gap-4 group cursor-pointer"
                  >
                    <img
                      src={getNewsImage(
                        item.id
                      )}
                      alt={item.title}
                      width="96"
                      height="96"
                      loading="lazy"
                      decoding="async"
                      className="w-24 h-24 rounded-2xl object-cover shrink-0"
                    />

                    <div>
                      <h3 className="font-semibold line-clamp-2 group-hover:text-red-500 transition-colors duration-300">
                        {item.title}
                      </h3>

                      <p className="text-sm opacity-70 mt-2">
                        {
                          authorsMap?.[
                            item.userId
                          ]
                        }
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* NEWSLETTER */}
            <div className="rounded-3xl p-6 bg-gradient-to-br from-red-500 to-orange-500 text-white shadow-lg">
              <h2 className="text-2xl font-bold">
                {t.stayUpdated}
              </h2>

              <p className="mt-3 text-white/80 leading-relaxed">
                {t.latestHeadlines}
              </p>

              <form className="mt-5">
                <label
                  htmlFor="newsletter-email"
                  className="sr-only"
                >
                  Enter your email
                </label>

                <input
                  id="newsletter-email"
                  type="email"
                  placeholder={t.enterEmail}
                  className="w-full px-4 py-3 rounded-xl bg-white text-black outline-none"
                />

                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="w-full mt-4 bg-black text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity duration-300"
                >
                  {t.subscribe}
                </button>
              </form>
            </div>
          </aside>
        </section>

        {/* LATEST NEWS */}
        <section>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-8">
            <h2 className="text-4xl font-black">
              {t.latestNews}
            </h2>

            <div className="flex gap-3 flex-wrap">
              <button
                aria-label="All category"
                className="px-5 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black"
              >
                {t.all}
              </button>

              <button
                aria-label="Politics category"
                className="px-5 py-2 rounded-full bg-gray-300 dark:bg-slate-800 hover:bg-gray-400 transition-colors duration-300"
              >
                {t.politics}
              </button>

              <button
                aria-label="Sports category"
                className="px-5 py-2 rounded-full bg-gray-300 dark:bg-slate-800 hover:bg-gray-400 transition-colors duration-300"
              >
                {t.sports}
              </button>

              <button
                aria-label="Technology category"
                className="px-5 py-2 rounded-full bg-gray-300 dark:bg-slate-800 hover:bg-gray-400 transition-colors duration-300"
              >
                {t.technology}
              </button>
            </div>
          </div>

          <Suspense
            fallback={
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                {Array.from({ length: 6 }).map(
                  (_, i) => (
                    <SkeletonCard key={i} />
                  )
                )}
              </div>
            }
          >
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {latest?.map((post: any) => (
                <NewsCard
                  key={post.id}
                  post={{
                    ...post,
                    image: getNewsImage(
                      post.id
                    ),
                  }}
                  author={
                    authorsMap?.[
                      post.userId
                    ]
                  }
                />
              ))}
            </div>
          </Suspense>
        </section>
      </main>
    </>
  );
};

export default memo(Home);