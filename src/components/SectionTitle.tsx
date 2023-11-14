interface SectionTitleProps {
  title: string;
  link?: string;
  textLink?: string;
  total?: number;
}

export default function SectionTitle({
  title,
  link,
  textLink,
  total,
}: SectionTitleProps) {
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="truncate text-2xl font-bold tracking-tight text-gray-900 md:w-full">
          {title}
        </h2>
        {link && textLink && (
          <a
            href={link}
            className="w-1/2 text-end text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            {textLink}
            <span aria-hidden="true"> &rarr;</span>
          </a>
        )}
      </div>
      {total && (
        <div className="mt-1.5">
          <p className="text-sm font-normal text-gray-500">
            {total ? total : 0} results
          </p>
        </div>
      )}
    </>
  );
}
