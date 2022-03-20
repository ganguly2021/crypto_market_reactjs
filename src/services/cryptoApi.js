import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import env from "./../utils/config";

// API Headers for Rapid API
const headers = {
  "x-rapidapi-host": env.host,
  "x-rapidapi-key": env.apiKey,
};

// create api url with HTTP headers
const createUrl = (url) => ({ url, headers });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl: env.apiBaseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createUrl(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createUrl(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createUrl(`/coin/${coinId}/history?timeperiod=${timePeriod}`),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
