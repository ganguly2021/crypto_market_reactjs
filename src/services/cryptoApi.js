import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

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
      query: () => createUrl("/exchanges"),
    }),
  }),
});
