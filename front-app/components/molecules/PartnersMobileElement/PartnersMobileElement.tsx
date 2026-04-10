import Image from "next/image";

interface PartnersMobileElementProps {
  image: string;
  name: string;
  description: string;
  location: string;
}

export default function PartnersMobileElement({
  image,
  name,
  description,
  location,
}: PartnersMobileElementProps) {
  return (
    <article className="bg-surface rounded-lg shadow-md overflow-hidden">
      <div className="relative aspect-video">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-t-lg"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-base font-bold text-theme">{name}</h3>
        <p className="text-xs text-theme/70 mt-1">{location}</p>
        <p className="text-sm text-theme mt-2 line-clamp-2">{description}</p>
      </div>
    </article>
  );
}
