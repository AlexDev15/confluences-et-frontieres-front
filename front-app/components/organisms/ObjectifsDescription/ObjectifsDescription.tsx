interface ObjectifsDescriptionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dict: Record<string, any>;
}

export default function ObjectifsDescription({ dict }: ObjectifsDescriptionProps) {
  const objectives = [
    dict?.objectifs?.obj1 ?? "",
    dict?.objectifs?.obj2 ?? "",
    dict?.objectifs?.obj3 ?? "",
  ];

  return (
    <section
      className="py-12 px-6"
      aria-label={dict?.objectifs?.content ?? "Objectives"}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-bold text-theme mb-4">
          <span className="text-theme/60">{dict?.objectifs?.prefix ?? ""}</span>{" "}
          {dict?.objectifs?.content ?? "Objectives"}
        </h2>
        <p className="text-sm text-theme mb-8">
          {dict?.objectifs?.description ?? ""}
        </p>

        <ol className="flex flex-col gap-0" role="list">
          {objectives.map((objective, index) => (
            <li
              key={index}
              className="text-sm text-theme pl-4 border-l-4 border-theme mb-4"
            >
              {objective}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
