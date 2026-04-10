interface MainActivityProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dict: Record<string, any>;
}

export default function MainActivity({ dict }: MainActivityProps) {
  return (
    <section
      className="bg-primary text-on-primary min-h-screen flex items-center justify-center"
      aria-label={dict?.mainActivity?.title ?? "Main activity"}
    >
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold uppercase">
          {dict?.mainActivity?.title ?? ""}
        </h2>
        <p className="text-base mt-6">
          {dict?.mainActivity?.description ?? ""}
        </p>
      </div>
    </section>
  );
}
