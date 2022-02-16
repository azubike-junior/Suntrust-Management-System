import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { configUrl } from "../../../utils/helper";

export const getRequestTypes = createApi({
  reducerPath: "requestsPath",
  baseQuery: fetchBaseQuery({
    baseUrl: configUrl,
    // prepareHeaders: (headers) => {
    //   const token = JSON.parse(localStorage.getItem("accessToken") || "");
    //   if (token) {
    //     headers.set(`authorization`, `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  endpoints: (build) => ({
    getRequestTypes: build.query({
      query: () => `/GetRequestTypes`,
    }),
  }),
});

export const { useGetRequestTypesQuery } = getRequestTypes;
