import { hasLocale, getDictionary, type Locale } from "../../dictionaries";
import { notFound } from "next/navigation";
import { Heart, Star, Zap, Globe, Camera, Music, BookOpen, Users, MapPin, Calendar, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Search, Menu, X, Download, ExternalLink } from "lucide-react";
import Icon from "@/components/atoms/Icon";
import ActivityElement from "@/components/atoms/ActivityElement";
import LinkedElement from "@/components/atoms/LinkedElement";
import AtomsShowcase from "./AtomsShowcase";

export default async function AtomsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);

  const colors = [
    { name: "Primary", value: "#1f559c", cssVar: "--color-primary", className: "bg-primary" },
    { name: "Accent", value: "#B12316", cssVar: "--color-accent", className: "bg-accent" },
    { name: "Primary BG", value: "rgba(31,85,156,0.1)", cssVar: "--color-primary-bg", className: "bg-primary-bg" },
    { name: "Accent BG", value: "rgba(177,35,22,0.1)", cssVar: "--color-accent-bg", className: "bg-accent-bg" },
    { name: "Surface", value: "#ffffff", cssVar: "--color-surface", className: "bg-surface border border-gray-200" },
    { name: "On Surface", value: "#000000", cssVar: "--color-on-surface", className: "bg-on-surface" },
    { name: "On Primary", value: "#ffffff", cssVar: "--color-on-primary", className: "bg-on-primary border border-gray-200" },
  ];

  const steps = [
    { name: "xs", class: "text-xs" },
    { name: "sm", class: "text-sm" },
    { name: "base", class: "text-base" },
    { name: "lg", class: "text-lg" },
    { name: "xl", class: "text-xl" },
    { name: "2xl", class: "text-2xl" },
    { name: "3xl", class: "text-3xl" },
    { name: "4xl", class: "text-4xl" },
    { name: "5xl", class: "text-5xl" },
  ];

  const icons = [
    { name: "Heart", icon: Heart },
    { name: "Star", icon: Star },
    { name: "Zap", icon: Zap },
    { name: "Globe", icon: Globe },
    { name: "Camera", icon: Camera },
    { name: "Music", icon: Music },
    { name: "BookOpen", icon: BookOpen },
    { name: "Users", icon: Users },
    { name: "MapPin", icon: MapPin },
    { name: "Calendar", icon: Calendar },
    { name: "ChevronDown", icon: ChevronDown },
    { name: "ChevronUp", icon: ChevronUp },
    { name: "ChevronLeft", icon: ChevronLeft },
    { name: "ChevronRight", icon: ChevronRight },
    { name: "Search", icon: Search },
    { name: "Menu", icon: Menu },
    { name: "X", icon: X },
    { name: "Download", icon: Download },
    { name: "ExternalLink", icon: ExternalLink },
  ];

  return (
    <div className="space-y-16">
      <h1 className="text-2xl font-bold text-theme">{dict.uiKit.atoms}</h1>

      {/* Color palette */}
      <section>
        <h2 className="text-xl font-bold text-theme mb-4">{dict.uiKit.colors}</h2>
        <div className="grid grid-cols-2 tablet:grid-cols-4 gap-4">
          {colors.map((c) => (
            <div key={c.name} className="text-center">
              <div className={`w-full h-20 rounded-lg ${c.className} mb-2`} />
              <p className="text-sm font-bold">{c.name}</p>
              <p className="text-xs text-on-surface/60">{c.value}</p>
            </div>
          ))}
          <div className="text-center">
            <div className="w-full h-20 rounded-lg bg-theme mb-2" />
            <p className="text-sm font-bold">Theme (dynamic)</p>
            <p className="text-xs text-on-surface/60">var(--theme-color)</p>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section>
        <h2 className="text-xl font-bold text-theme mb-4">{dict.uiKit.typography}</h2>
        <div className="space-y-4">
          {steps.map((s) => (
            <div key={s.name} className="flex items-baseline gap-4 border-b border-theme/10 pb-2">
              <span className="text-xs text-on-surface/40 w-20 shrink-0">{s.name}</span>
              <span className={s.class}>{dict.uiKit.demoText}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Icons */}
      <section>
        <h2 className="text-xl font-bold text-theme mb-4">{dict.uiKit.icons}</h2>
        <div className="grid grid-cols-4 tablet:grid-cols-6 desktop:grid-cols-8 gap-4">
          {icons.map((i) => (
            <div key={i.name} className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-theme-light transition-colors">
              <Icon icon={i.icon} size={24} className="text-theme" />
              <span className="text-xs text-on-surface/60">{i.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Buttons + interactive demos */}
      <AtomsShowcase dict={dict} />

      {/* Activity Element */}
      <section>
        <h2 className="text-xl font-bold text-theme mb-4">ActivityElement</h2>
        <div className="flex flex-wrap gap-4">
          <ActivityElement title="Music" icon={Music} />
          <ActivityElement title="Photography" icon={Camera} />
          <ActivityElement title="Literature" icon={BookOpen} />
        </div>
      </section>

      {/* Linked Element */}
      <section>
        <h2 className="text-xl font-bold text-theme mb-4">LinkedElement</h2>
        <div className="flex flex-wrap gap-4">
          <LinkedElement title="La Premiere Biennale" image="/C&F_Logo.gif" />
          <LinkedElement title="Fresques murales" image="/C&F_Logo.gif" />
        </div>
      </section>
    </div>
  );
}
