import Link from "next/link";
import Image from "next/image";


function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

interface FooterProps {
  lang: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dict: Record<string, any>;
}

export default function Footer({ lang, dict }: FooterProps) {
  const footer = dict?.footer ?? {};
  const association = footer.association ?? {};
  const social = footer.socialNetworks ?? {};
  const contacts = footer.contacts ?? {};
  const links = footer.links ?? {};

  return (
    <footer className="relative mt-[250px] tablet:mt-[100px] phone:mt-[100px]" role="contentinfo">
      {/* Wave SVG */}
      <div
        className="w-full h-[250px] tablet:h-[100px] phone:h-[100px] absolute top-0 left-0 -translate-y-[99%] overflow-hidden"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            style={{ fill: "var(--theme-color)" }}
            d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,165.3C672,171,768,213,864,218.7C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Footer content */}
      <div className="bg-theme text-on-primary px-[100px] tablet:px-[50px] phone:px-[50px] py-2.5 relative">
        {/* Informations section */}
        <div className="flex justify-between max-[1168px]:flex-col max-[1168px]:items-center gap-8 py-8">
          {/* Association */}
          <section className="max-[1168px]:w-full max-[1168px]:flex max-[1168px]:flex-col max-[1168px]:items-center">
            <h3 className="text-xl font-bold">INTER+VALUE</h3>
            <p className="text-sm font-light mt-2">
              {association.description ?? "Association culturelle internationale"}
            </p>
            <p className="text-xs font-light mt-1">
              {association.ong ?? "ONG reconnue d'utilité publique"}
            </p>
            <Link
              href="https://interplusvalue.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-primary"
              aria-label="INTER+VALUE - interplusvalue.org"
            >
              <Image
                src="/I+V_LogoWithDesc.png"
                alt="INTER+VALUE logo"
                width={200}
                height={200}
                className="object-contain"
              />
            </Link>
          </section>

          {/* Social Networks */}
          <section className="max-[1168px]:w-full max-[1168px]:flex max-[1168px]:flex-col max-[1168px]:items-center">
            <h3 className="text-base font-bold">
              {social.title ?? "Social Networks"}
            </h3>
            <div className="flex gap-4 mt-4">
              <Link
                href={social.facebookUrl ?? "https://facebook.com"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-primary"
              >
                <FacebookIcon
                  className="w-[60px] h-[60px] hover:scale-110 transition-transform"
                />
              </Link>
              <Link
                href={social.youtubeUrl ?? "https://youtube.com"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-primary"
              >
                <YoutubeIcon
                  className="w-[60px] h-[60px] hover:scale-110 transition-transform"
                />
              </Link>
              <Link
                href={social.linkedinUrl ?? "https://linkedin.com"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-primary"
              >
                <LinkedinIcon
                  className="w-[60px] h-[60px] hover:scale-110 transition-transform"
                />
              </Link>
            </div>
          </section>

          {/* Contacts */}
          <section>
            <h3 className="text-base font-bold">
              {contacts.title ?? "Contacts"}
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="text-base font-light">
                {contacts.headquarters ?? "Siège social: 123 Rue Example, Paris"}
              </li>
              <li className="text-base font-light">
                {contacts.annex ?? "Annexe: 456 Rue Example, Lisbonne"}
              </li>
              <li className="text-base font-light">
                <a
                  href={`mailto:${contacts.email ?? "contact@interplusvalue.org"}`}
                  className="underline hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-primary"
                >
                  {contacts.email ?? "contact@interplusvalue.org"}
                </a>
              </li>
            </ul>
          </section>
        </div>

        {/* Links */}
        <div className="border-t-2 border-on-primary pt-4 pb-4 flex justify-between max-[1168px]:flex-col max-[1168px]:items-center max-[1168px]:gap-2">
          <Link
            href={`/${lang}/sitemap`}
            className="text-xs font-light text-on-primary underline hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-primary"
          >
            {links.sitemap ?? "Sitemap"}
          </Link>
          <Link
            href={`/${lang}/licenses`}
            className="text-xs font-light text-on-primary underline hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-primary"
          >
            {links.licenses ?? "Licenses"}
          </Link>
          <Link
            href={`/${lang}/legal`}
            className="text-xs font-light text-on-primary underline hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-primary"
          >
            {links.legal ?? "Legal"}
          </Link>
          <p className="text-xs font-light">
            {links.copyright ?? "\u00a9 2025 INTER+VALUE. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
}
