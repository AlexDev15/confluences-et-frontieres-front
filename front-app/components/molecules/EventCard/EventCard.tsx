import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
  name: string;
  date: string;
  image: string;
  description: string;
  url: string;
  location?: string;
}

export default function EventCard({
  name,
  date,
  image,
  description,
  url,
  location,
}: EventCardProps) {
  return (
    <article className="rounded-lg overflow-hidden shadow-md bg-surface hover:shadow-lg transition-shadow">
      <div className="relative aspect-video">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <time className="text-xs text-theme font-medium">{date}</time>
        {location && (
          <p className="text-xs text-theme/70 mt-1">{location}</p>
        )}
        <h3 className="text-base font-bold text-theme mt-2">{name}</h3>
        <p className="text-sm text-theme mt-2 line-clamp-3">{description}</p>
        <Link
          href={url}
          className="inline-block mt-3 text-sm text-theme underline underline-offset-4 hover:text-theme/80 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme"
        >
          Learn more
        </Link>
      </div>
    </article>
  );
}
