"use client";
import Spinner from "@/app/loading";
import CardAnime from "@/components/CardAnime";
import SectionTitle from "@/components/SectionTitle";
import { useGetSearchAnimeQuery } from "@/services/searchAnime/searchAnimeApiSlice";

type SearchProps = {
  params: {
    keywords: string;
  };
};

export default function Page({ params }: SearchProps) {
  const { keywords } = params;

  const { data: searchResult } = useGetSearchAnimeQuery(keywords);

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:max-w-7xl lg:px-8 lg:py-16">
      <SectionTitle
        title={`Search result for "${keywords}"`}
        total={searchResult?.data.length}
      />
      {!searchResult ? (
        <div className="py-6">
          <Spinner />
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-4 lg:gap-x-8">
          {searchResult?.data.map((anime) => (
            <CardAnime
              key={anime.mal_id}
              imgSrc={anime.images.webp.image_url}
              imgAlt={anime.title}
              title={anime.title}
              rating={
                anime.score ?? (
                  <span className="text-xs font-medium italic">
                    (No Rating)
                  </span>
                )
              }
              link={anime.url}
              genre={
                anime.genres.length !== 0
                  ? anime.genres.map((genre) => genre.name).join(", ")
                  : "-"
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
