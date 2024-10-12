import { CARS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const carApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCar: builder.query({
      query: () => ({
        url: `${CARS_URL}`,
        method: "GET",
      }),
    }),
    getCarById: builder.query({
      query: (id) => ({
        url: `${CARS_URL}/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCarQuery, useGetCarByIdQuery } = carApiSlice;
