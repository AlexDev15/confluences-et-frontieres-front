import Image from "next/image";

interface PartnersElementProps {
  image: string;
  name: string;
  description: string;
  location: string;
  main?: boolean;
}

export default function PartnersElement({
  image,
  name,
  location,
}: PartnersElementProps) {
  return (
    <article className="w-full h-[300px] relative overflow-hidden rounded-lg group">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div
        className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-black/70 text-on-primary p-4"
        aria-hidden="false"
      >
        <h3 className="text-base font-bold">{name}</h3>
        <p className="text-sm">{location}</p>
      </div>
    </article>
  );
}
