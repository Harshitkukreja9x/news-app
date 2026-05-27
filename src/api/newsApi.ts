import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

export const newsApi = createApi({
  reducerPath: "newsApi",

  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://jsonplaceholder.typicode.com/",
  }),

  tagTypes: ["Posts", "Post", "Users"],

  endpoints: (builder) => ({
    // GET POSTS
    getPosts: builder.query({
      query: () => ({
        url: "posts",
        params: {
          _limit: 15,
        },
      }),

      providesTags: ["Posts"],

      keepUnusedDataFor: 300,
    }),

    // GET USERS
    getUsers: builder.query({
      query: () => "users",

      providesTags: ["Users"],

      keepUnusedDataFor: 600,
    }),

    // GET SINGLE POST
    getPostById: builder.query({
      query: (id) => `posts/${id}`,

      providesTags: (_result, _error, id) => [
        { type: "Post", id },
      ],

      keepUnusedDataFor: 300,
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetUsersQuery,
  useGetPostByIdQuery,
} = newsApi;