import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsApi = createApi({
  reducerPath: "newsApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),

  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "posts",
    }),

    getUsers: builder.query({
      query: () => "users",
    }),

    getPostById: builder.query({
      query: (id) => `posts/${id}`,
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetUsersQuery,
  useGetPostByIdQuery,
} = newsApi;