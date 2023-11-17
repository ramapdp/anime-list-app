"use client";
import CardAnime from "@/components/CardAnime";
import SectionTitle from "@/components/SectionTitle";
import Spinner from "@/components/Spinner";
import { useGetRecommedationAnimeQuery } from "@/services/recomAnime/recomAnimeApiSlice";
import { useGetTopAnimeQuery } from "@/services/topAnime/topAnimeApiSlice";
import Slider from "react-slick";

export default function Home() {
  const { data: topAnime } = useGetTopAnimeQuery();
  const { data: recomAnime } = useGetRecommedationAnimeQuery();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <main>
      <div className="bg-white">
        {/* List Top Anime */}
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:max-w-7xl lg:px-8 lg:py-16">
          <SectionTitle
            title="Top Anime"
            link="/top-anime"
            textLink="View all"
          />
          {!topAnime ? (
            <Spinner />
          ) : (     
            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-4 lg:gap-x-8">
              {/* <Slider {...settings}> */}
              {topAnime?.data.map((anime) => (
                <CardAnime
                  key={anime.mal_id}
                  imgSrc={anime.images.webp.image_url}
                  imgAlt={anime.title}
                  title={anime.title}
                  rating={anime.score}
                  link={anime.url}
                  genre={anime.genres[0].name}
                />
              ))}
              {/* </Slider> */}
            </div>
          )}
        </div>

        {/* List Recommendation Anime */}
        <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8">
          <SectionTitle title="Recommendations For You" />
          {!recomAnime ? (
            <Spinner />
          ) : (
            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-4 lg:gap-x-8">
              {/* <Slider {...settings}> */}
              {recomAnime?.data.map((recom) => (
                <CardAnime
                  key={recom.entry[0].mal_id}
                  imgSrc={recom.entry[0].images.webp.image_url}
                  imgAlt={recom.entry[0].title}
                  title={recom.entry[0].title}
                  link={recom.entry[0].url}
                />
              ))}
              {/* </Slider> */}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
