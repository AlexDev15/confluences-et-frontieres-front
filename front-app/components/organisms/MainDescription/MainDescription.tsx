interface MainDescriptionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dict: Record<string, any>;
}

export default function MainDescription({ dict }: MainDescriptionProps) {
  return (
    <section
      className="bg-theme-light p-8 desktop:p-16"
      aria-label={dict?.project?._projectComponents?.mainDescription?.title ?? "Project overview"}
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-base text-theme">
          {dict?.project?._projectComponents?.mainDescription?.description ?? ""}
        </p>
      </div>
    </section>
  );
}
