interface MainBiennaleDescriptionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dict: Record<string, any>;
}

export default function MainBiennaleDescription({ dict }: MainBiennaleDescriptionProps) {
  return (
    <section
      className="bg-surface p-8 desktop:p-16"
      aria-label={dict?.mainBiennale?.title ?? "Biennale description"}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center uppercase text-theme">
          {dict?.mainBiennale?.title ?? ""}
        </h2>
        <p className="text-sm text-theme mt-6 text-center">
          {dict?.mainBiennale?.description ?? ""}
        </p>
      </div>
    </section>
  );
}
