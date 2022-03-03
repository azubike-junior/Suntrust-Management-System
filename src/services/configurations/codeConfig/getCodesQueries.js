import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { codeConfigUrl, configUrl } from "../../../utils/helper";

export const getCodesQueries = createApi({
  reducerPath: "getDropDown",
  baseQuery: fetchBaseQuery({
    baseUrl: `${configUrl}/`,
  }),
  endpoints: (build) => ({
    getRegions: build.query({
      query: () => `GetAllRegions`,
    }),
    getBranchByRegion: build.query({
      query: (id) => `GetBranchByRegion/id?id=${id}`,
    }),
    getDepartmentByBranchId: build.query({
      query: (id) => `GetDepartmentByBranchId/id?id=${id}`,
    }),
    getUnitByDepartmentId: build.query({
      query: (id) => `GetUnitByDepartmentId/id?id=${id}`,
    }),
    getStaffByBranch: build.query({
      query: (id) => `GetStaffByBranch/${id}`,
    }),
    getStaffByStaffId: build.query({
      query: (id) => `GetStaffByStaffId/id?id=${id}`,
    }),
    getBranches: build.query({
      query: () => `GetAllBranch`,
    }),
    getDepartments: build.query({
      query: () => `GetAllDepartment`,
    }),
    getUnits: build.query({
      query: () => `GetAllUnit`,
    }),
  }),
});

export const getCodeConfigQuery = createApi({
  reducerPath: "getCodeConfigQuery",
  baseQuery: fetchBaseQuery({
    baseUrl: `${codeConfigUrl}/`,
  }),
  endpoints: (build) => ({
    getBranches: build.query({
      query: () => `GetAllBranch`,
    }),
    getDepartments: build.query({
      query: () => `GetAllDepartment`,
    }),
    getUnits: build.query({
      query: () => `GetAllUnit`,
    }),
    getDivisions: build.query({
      query: () => `GetAllDivision`,
    }),
  }),
});

export const {
  useGetRegionsQuery,
  useGetBranchByRegionQuery,
  useGetDepartmentByBranchIdQuery,
  useGetStaffByBranchQuery,
  useGetStaffByStaffIdQuery,
  useGetUnitByDepartmentIdQuery,
} = getCodesQueries;

export const {
  useGetBranchesQuery,
  useGetDepartmentsQuery,
  useGetUnitsQuery,
  useGetDivisionsQuery,
} = getCodeConfigQuery;
