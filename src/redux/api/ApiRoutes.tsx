import { Task } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ReduxApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http:localhost:3001/api/v1",
  }),
  keepUnusedDataFor: 600,
  endpoints: (builder) => ({
    getTasks: builder.query<Task[], string>({
      query: (token) => ({
        url: "/",
        method: "GET",
        headers: {
          Authorization: `${token}`,
        },
      }),
    }),
  }),
});

export const getTasks = ReduxApi;
