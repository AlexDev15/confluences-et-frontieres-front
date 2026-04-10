interface ProjectDescriptionSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dict: Record<string, any>;
}

export default function ProjectDescriptionSection({ dict }: ProjectDescriptionSectionProps) {
  return (
    <section
      className="py-12 px-6"
      aria-label={dict?.projectDescription?.content ?? "Project description"}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-bold text-theme mb-4">
          <span className="text-theme/60">{dict?.projectDescription?.prefix ?? ""}</span>{" "}
          {dict?.projectDescription?.content ?? "Project description"}
        </h2>
        <p className="text-sm text-theme">
          {dict?.projectDescription?.description ?? ""}
        </p>
      </div>
    </section>
  );
}
