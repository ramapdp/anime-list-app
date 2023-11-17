import Image from "next/image";

interface CardAnimeProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  rating?: number;
  link: string;
  genre?: string;
}

export default function CardAnime({
  imgSrc,
  imgAlt,
  title,
  rating,
  link,
  genre,
}: CardAnimeProps) {
  return (
    <div className="group relative">
      <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-75 lg:h-72 xl:h-80">
        <Image
          src={imgSrc}
          alt={imgAlt}
          className="h-full w-full object-cover object-center"
          width={125}
          height={175}
          priority
        />
      </div>
      <h3 className="mt-4 truncate text-sm font-semibold text-gray-700">
        <a href={link}>
          <span className="absolute inset-0" />
          {title}
        </a>
      </h3>
      {genre && <p className="mt-1 text-sm text-gray-500">{genre}</p>}
      {rating && (
        <p className="text-sm font-medium text-gray-900">
          <span className="text-lg text-yellow-400">&#9733;</span> {rating}
        </p>
      )}
    </div>
  );
}
