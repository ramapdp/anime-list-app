import { apiSlice } from "@/store/api/apiSlice";
import { ResponseApi } from "@/types/ResponseApi.types";
import { Data, Pagination } from "@/types/RecomAnime";

export const recomAnimeApiSlice = apiSlice
  .enhanceEndpoints({
    addTagTypes: ["recomAnime"],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getRecommedationAnime: builder.query<ResponseApi<Data[], Pagination>, void>({
        query: () => "recommendations/anime",
        providesTags: ["recomAnime"],
      }),
      getAllRecommendationsAnime: builder.query<ResponseApi<Data[], Pagination>, void>({
        query: () => "recommendations/anime",
        providesTags: ["recomAnime"],
      }),
    }),
  });

export const {
  useGetRecommedationAnimeQuery,
  useGetAllRecommendationsAnimeQuery,
} = recomAnimeApiSlice;
