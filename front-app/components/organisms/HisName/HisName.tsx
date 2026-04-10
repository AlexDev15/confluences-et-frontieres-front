import Image from "next/image";

interface HisNameProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dict: Record<string, any>;
}

export default function HisName({ dict }: HisNameProps) {
  return (
    <section
      className="py-12 px-6"
      aria-label={dict?.hisName?.content ?? "Name origin"}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-bold text-theme mb-4">
          <span className="text-theme/60">{dict?.hisName?.prefix ?? ""}</span>{" "}
          {dict?.hisName?.content ?? ""}
        </h2>
        <p className="text-sm text-theme">
          {dict?.hisName?.description ?? ""}
        </p>

        <Image
          src="/C&F_Logo.gif"
          alt={dict?.hisName?.logoAlt ?? "Confluences & Frontieres logo"}
          width={300}
          height={300}
          className="w-[300px] mx-auto my-8"
        />
      </div>
    </section>
  );
}
