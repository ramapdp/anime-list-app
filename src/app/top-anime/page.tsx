"use client";
import CardAnime from "@/components/CardAnime";
import SectionTitle from "@/components/SectionTitle";
import Spinner from "@/app/loading";
import { useGetAllTopAnimeQuery } from "@/services/topAnime/topAnimeApiSlice";

export default function Page() {
  const { data: allTopAnime } = useGetAllTopAnimeQuery();

  return (
    <main>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:max-w-7xl lg:px-8">
          <SectionTitle title="Top Anime" total={allTopAnime?.data.length} />
          {!allTopAnime ? (
            <div className="py-6">
              <Spinner />
            </div>
          ) : (
            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-4 lg:gap-x-8">
              {allTopAnime?.data.map((anime) => (
                <CardAnime
                  key={anime.mal_id}
                  imgSrc={anime.images.jpg.image_url}
                  imgAlt={anime.title}
                  title={anime.title}
                  rating={anime.score}
                  link={anime.url}
                  genre={anime.genres[0].name}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
