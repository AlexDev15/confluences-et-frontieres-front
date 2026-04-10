"use client";

import DownButton from "@/components/atoms/DownButton";
import MotionDiv from "@/components/atoms/MotionDiv";

interface ProjectDescriptionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dict: Record<string, any>;
  lang: string;
}

export default function ProjectDescription({
  dict,
}: ProjectDescriptionProps) {
  const home = dict?.home ?? {};

  return (
    <section
      className="h-dvh relative overflow-hidden"
      aria-label={home.heroLabel ?? "Project presentation"}
    >
      {/* Video background / placeholder */}
      <div className="absolute inset-0 bg-primary" aria-hidden="true">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 object-cover w-full h-full"
        >
          <source src="/images/home/presentation_video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-on-primary p-8">
        <MotionDiv>
          <h1 className="text-4xl font-bold tracking-wide">
            {home.title ?? "Confluences et Fronti\u00e8res"}
          </h1>
          <p className="text-base max-w-3xl mt-4">
            {home.description ?? "A cultural project bridging borders and communities."}
          </p>
        </MotionDiv>

        <DownButton
          divToScroll="next-section"
          text={home.scrollDown ?? ""}
        />
      </div>
    </section>
  );
}
