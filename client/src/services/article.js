import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'http://localhost:3000/api';

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
      baseUrl,
    }),
    endpoints: (builder) => ({
      getSummary: builder.query({
        query: (params) => `summary?articleUrl=${encodeURIComponent(params.articleUrl)}`,
      }),
    }),
  });
export const { useLazyGetSummaryQuery } = articleApi