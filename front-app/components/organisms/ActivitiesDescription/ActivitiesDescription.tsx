interface ActivitiesDescriptionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dict: Record<string, any>;
}

export default function ActivitiesDescription({ dict }: ActivitiesDescriptionProps) {
  const activities = Array.from({ length: 9 }, (_, i) =>
    dict?.activities?.[`act${i + 1}`] ?? "",
  );

  return (
    <section
      className="py-12 px-6"
      aria-label={dict?.activities?.content ?? "Activities"}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-bold text-theme mb-4">
          <span className="text-theme/60">{dict?.activities?.prefix ?? ""}</span>{" "}
          {dict?.activities?.content ?? "Activities"}
        </h2>

        <ol className="flex flex-col gap-4" role="list">
          {activities.map((activity, index) => (
            <li key={index} className="flex gap-3 items-start">
              <span
                className="bg-theme text-on-primary w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <span className="text-sm text-theme pt-1">{activity}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
