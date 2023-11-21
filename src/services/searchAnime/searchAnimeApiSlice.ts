import { apiSlice } from "@/store/api/apiSlice";
import { ResponseApi } from "@/types/ResponseApi.types";
import { Data, Pagination } from "@/types/SearchAnime.types";

export const searchAnimeApiSlice = apiSlice
  .enhanceEndpoints({
    addTagTypes: ["searchAnime"],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getSearchAnime: builder.query<ResponseApi<Data[], Pagination>, string>({
        query: (keywords) => `anime?q=${keywords}`,
        providesTags: ["searchAnime"],
      }),
    }),
  });

export const { useGetSearchAnimeQuery } = searchAnimeApiSlice;
