import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../../utils/helper";

export const getPerformanceConfigQuery = createApi({
  reducerPath: "getCodeConfigQuery",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/`,
  }),
  endpoints: (build) => ({
    getCategories: build.query({
      query: () => `categoryTypes`,
    }),
    getOrganizationalGoals: build.query({
      query: () => `organizationalGoals`,
    }),
    getTeamGoals: build.query({
      query: () => `teamGoals`,
    }),
    getIndividualKpis: build.query({
      query: () => `individualKpis`,
    }),
    postCategoryType: build.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: (category) => ({
        url: `categoryTypes`,
        method: "POST",
        body: category,
      }),
      // Pick out data and prevent nested properties in a hook or selector
      transformResponse: (response, meta, arg) => response.data,
      invalidatesTags: ["Post"],
    }),
    deleteCategoryType: build.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: (id) => ({
        url: `categoryTypes/${id}`,
        method: "DELETE",
      }),
      // Pick out data and prevent nested properties in a hook or selector
      transformResponse: (response, meta, arg) => response.data,
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetIndividualKpisQuery,
  useGetOrganizationalGoalsQuery,
  useGetTeamGoalsQuery,
  usePostCategoryTypeMutation,
  useDeleteCategoryTypeMutation
} = getPerformanceConfigQuery;
