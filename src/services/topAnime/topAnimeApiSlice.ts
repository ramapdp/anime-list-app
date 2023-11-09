import { apiSlice } from "@/store/api/apiSlice";
import { ResponseTopAnime } from "./topAnime.types";

export const topAnimeApiSlice = apiSlice
  .enhanceEndpoints({
    addTagTypes: ["topAnime"],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getTopAnime: builder.query<ResponseTopAnime, void>({
        query: () => "top/anime",
        providesTags: ["topAnime"],
      }),
    }),
  });

export const { useGetTopAnimeQuery } = topAnimeApiSlice;
