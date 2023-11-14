import { apiSlice } from "@/store/api/apiSlice";
import { ResponseApi } from "@/types/ResponseApi.types";
import { Data, Pagination } from "@/types/TopAnime.types";

export const topAnimeApiSlice = apiSlice
  .enhanceEndpoints({
    addTagTypes: ["topAnime"],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getTopAnime: builder.query<ResponseApi<Data[], Pagination>, void>({
        query: () => "top/anime?limit=4",
        providesTags: ["topAnime"],
      }),
      getAllTopAnime: builder.query<ResponseApi<Data[], Pagination>, void>({
        query: () => "top/anime",
        providesTags: ["topAnime"],
      }),
    }),
  });

export const { useGetTopAnimeQuery, useGetAllTopAnimeQuery } = topAnimeApiSlice;
