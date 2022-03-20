import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import env from "./../utils/config";

// API Headers for Rapid API
const headers = {
  'x-bingapis-sdk': env.bingApiSDK,
  'x-rapidapi-host': env.bingApiHost,
  'x-rapidapi-key': env.bingApiKey
};

const params = {textFormat: 'Raw', safeSearch: 'Off'},

// create api url with HTTP headers
const createUrl = (url) => ({ url, headers });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: env.bingBaseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createUrl(`/news/search?q=${newsCategory}&safeSearch=off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
});


export const { useGetCryptoNewsQuery } = cryptoNewsApi;