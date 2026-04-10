import Image from "next/image";

interface LinkedElementProps {
  title: string;
  image: string;
  className?: string;
}

export default function LinkedElement({ title, image, className }: LinkedElementProps) {
  return (
    <div
      className={`flex flex-row gap-3 items-center p-2 rounded-lg border border-theme${className ? ` ${className}` : ""}`}
    >
      <Image
        src={image}
        alt=""
        width={48}
        height={48}
        className="w-12 h-12 rounded object-cover"
      />
      <span className="text-sm text-theme">{title}</span>
    </div>
  );
}
