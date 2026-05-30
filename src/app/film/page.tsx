import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Download, ExternalLink, Film, Play, PlayCircle } from "lucide-react";

import Container from "@/components/layout/Container";
import { buttonStyles } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Stars from "@/components/ui/Stars";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Think and Grow Rich: The Legacy | John C. Shin",
    description:
      "Discover the film Think and Grow Rich: The Legacy, executive produced by Sir John C. Shin.",
  };
}

const accessOptions = [
  {
    title: "Watch Online",
    description:
      "Access the full cinematic experience instantly. Includes bonus executive interviews.",
    price: "$14.99",
    note: "Lifetime access",
    cta: "Rent or Stream",
    highlight: "Best Value",
    icon: <Film className="h-8 w-8" />,
    variant: "outline" as const,
  },
  {
    title: "Download to Own",
    description:
      "Keep the legacy forever. High-resolution digital master with bonus content.",
    price: "$24.99",
    note: "Digital master",
    cta: "Download Now",
    icon: <Download className="h-8 w-8" />,
    variant: "primary" as const,
  },
  {
    title: "External Platforms",
    description:
      "Available on leading streaming services globally for your convenience.",
    price: "",
    note: "",
    cta: "",
    icon: <ExternalLink className="h-8 w-8" />,
    variant: "ghost" as const,
  },
];

export default function FilmPage() {
  return (
    <div id="film" className="bg-background text-on-surface scroll-mt-32">
      <header className="relative min-h-[90vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFRMfeKTeUGh7oEGFQo3yyeKms-3k_L4n2KLSZsqXR9R7J04R84SP8goDQ8xtYUtYY2r7al9h1sQayogVWVIFaQXN0unXkxOzYAnzzjoLwsmaYFWWl9m9WRiYUbuVQWjt466r68m_Fj8NKQv6aW0KmXrLZkObl8zicmlVBVBAjIe0KJOGtXdkAqMoArplWfHxfSTMxp4Jb1p1TK9C60F5K1T6BAOXR4fU20H43UvaJFxHoksp-c4EuC_39flI8zN3v_GWQIWnSlxln"
            alt="Cinematic library scene from the film"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <Container className="relative z-10">
          <Reveal>
            <p className="font-ui text-[12px] uppercase tracking-[0.3em] text-secondary mb-4">
              Executive Producer: Sir John Shin
            </p>
            <h1 className="font-display text-[40px] md:text-[64px] leading-tight text-on-surface max-w-4xl mb-8">
              Think and Grow Rich: The Legacy
            </h1>
            <div className="flex flex-wrap gap-4">
              <button
                className={buttonStyles({ variant: "primary", size: "lg" })}
              >
                <Play className="h-4 w-4" />
                Watch Trailer
              </button>
              <button
                className={buttonStyles({ variant: "outline", size: "lg" })}
              >
                View Showtimes
              </button>
            </div>
          </Reveal>
        </Container>
      </header>

      <section className="py-24 md:py-32 bg-surface-container-lowest">
        <Container>
          <Reveal>
            <div className="relative aspect-video w-full border border-divider overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3dCqHFWtdeMyv5fIbSpY2OqXs_hqNlKkVFcc3cDNkitaY9X1Wz15Qt2ljnXjw03zPpUZTpta6sbLUmpoiTFEcqknBbwDsnsTfiqnvJGxDyma3EDa5krmcMFvBqy4RU1YgTXGQrdQL9Kz7wVPWIQ4KK4OJs3RVcZOq_KWASSFJbjtV-ZEvvP6DGkPq-un03BHm1hP8MlmqimkBVdIlKKMkywgrcF9BBzgWkYr_dW8dpVFb7dG__nu-YY34eSr9xx-ltRfW25W-lNLJ"
                alt="Trailer thumbnail"
                fill
                sizes="100vw"
                className="object-cover opacity-70"
              />
              <button
                type="button"
                aria-label="Play trailer"
                className="absolute inset-0 m-auto w-20 h-20 border border-secondary flex items-center justify-center text-secondary bg-background/40"
              >
                <PlayCircle className="h-10 w-10" />
              </button>
            </div>
          </Reveal>
          <Reveal delayMs={150}>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4 border-l border-secondary pl-6">
                <h3 className="font-ui text-[12px] uppercase tracking-[0.3em] text-secondary mb-2">
                  The Mission
                </h3>
                <p className="font-body text-[16px] text-on-surface-variant">
                  Unlocking the secrets of the world's most successful minds
                  through a narrative that bridges timeless principles with
                  modern ambition.
                </p>
              </div>
              <div className="md:col-span-8">
                <p className="font-body text-[18px] italic text-on-surface">
                  "This film is not just a documentary; it is a movement. We are
                  here to prove that the mind, when directed with purpose, can
                  achieve the impossible."
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <Reveal className="text-center mb-16">
            <p className="font-ui text-[12px] uppercase tracking-[0.3em] text-secondary mb-4">
              Acquisition
            </p>
            <h2 className="font-display text-[28px] md:text-[32px] text-on-surface">
              Experience the Legacy
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accessOptions.map((option, index) => (
              <Reveal key={option.title} delayMs={index * 150}>
                <div className="bg-surface-container border border-divider p-10 h-full flex flex-col gap-6">
                  <div className="text-secondary">{option.icon}</div>
                  <h3 className="font-display text-[24px] text-on-surface">
                    {option.title}
                  </h3>
                  <p className="font-body text-[16px] text-on-surface-variant">
                    {option.description}
                  </p>
                  {option.price ? (
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-[24px] text-secondary">
                        {option.price}
                      </span>
                      <span className="font-ui text-[10px] uppercase tracking-[0.3em] text-on-surface-variant">
                        {option.note}
                      </span>
                    </div>
                  ) : null}
                  {option.cta ? (
                    <button
                      className={buttonStyles({
                        variant: option.variant,
                        size: "md",
                        className: "w-full",
                      })}
                    >
                      {option.cta}
                    </button>
                  ) : (
                    <div className="space-y-4 mt-6">
                      {["Apple TV+", "Amazon Prime", "Google Play"].map(
                        (platform) => (
                          <Link
                            key={platform}
                            href="#"
                            className="flex items-center justify-between text-on-surface-variant hover:text-secondary"
                          >
                            <span className="font-ui text-[12px] uppercase tracking-[0.2em]">
                              {platform}
                            </span>
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        ),
                      )}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32 bg-surface-container-lowest border-y border-divider">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <h2 className="font-display text-[28px] md:text-[32px] text-on-surface mb-6">
                Production Story
              </h2>
              <p className="font-body text-[18px] text-on-surface-variant mb-6">
                Under the executive production of Sir John Shin, the production
                spanned three continents, interviewing titans of industry to
                distill the essence of Napoleon Hill's masterpiece.
              </p>
              <p className="font-body text-[16px] text-on-surface-variant">
                Every frame was designed to evoke the intellectual intensity of
                the original text, presenting a narrative that is historically
                grounded and forward-looking.
              </p>
              <div className="mt-10 flex items-center gap-8">
                <div>
                  <span className="font-display text-[24px] text-secondary">
                    3
                  </span>
                  <p className="font-ui text-[10px] uppercase tracking-[0.3em] text-on-surface-variant">
                    Years in Production
                  </p>
                </div>
                <div className="w-px h-12 bg-divider" />
                <div>
                  <span className="font-display text-[24px] text-secondary">
                    24
                  </span>
                  <p className="font-ui text-[10px] uppercase tracking-[0.3em] text-on-surface-variant">
                    Global Visionaries
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delayMs={150}>
              <div className="relative border border-divider overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6hq2LSroJgJ38kbSRFCuzXHe9oB0EK558IJV0MB_Tkj046ybH23_v1oZClwBihIe-8FOOdOWpBVbWzLhMRSuz_eK9m-6LPGrnz6E8aIpyCav5N9L1wBZf1_UpAuwuD_PsKRKo87F1mvsspO8sqbBPz-9Njqm2fjwBBdM5WXbrGssOmc2N32PWSd60MX1g5-2ro62IZoTK6XUvlvIM-_tuXIvt8xGUI97NhapqmaitHbrPrqxnh2IDq0FRcTQIN-ATkczjo2R3v6dT"
                  alt="On set production still"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <Reveal className="text-center mb-16">
            <p className="font-ui text-[12px] uppercase tracking-[0.3em] text-secondary mb-4">
              Principal Credits
            </p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              ["Executive Producer", "John C. Shin"],
              ["Director", "Scott Robertson"],
              ["Cinematography", "Elias Martinez"],
              ["Composer", "Sarah Sterling"],
              ["Featuring", "Bob Proctor"],
              ["Featuring", "Barbara Corcoran"],
              ["Featuring", "Grant Cardone"],
              ["Featuring", "Rob Dyrdek"],
            ].map(([role, name]) => (
              <div key={name}>
                <p className="font-ui text-[10px] uppercase tracking-[0.3em] text-on-surface-variant mb-2">
                  {role}
                </p>
                <p className="font-display text-[18px] text-on-surface">
                  {name}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32 bg-surface-container-low">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "A visual masterpiece that translates Napoleon Hills philosophy into a breathtaking cinematic journey.",
                source: "Forbes Magazine",
                rating: 5,
              },
              {
                quote:
                  "Shin produced a landmark piece of media that should be required viewing for every aspiring leader.",
                source: "Entrepreneur",
                rating: 4,
              },
              {
                quote:
                  "The production value is staggering. It feels as much like art as it does documentary.",
                source: "Variety",
                rating: 5,
              },
            ].map((review, index) => (
              <Reveal key={review.source} delayMs={index * 150}>
                <div className="border border-divider p-8 h-full">
                  <Stars rating={review.rating} className="mb-6" />
                  <p className="font-body text-[16px] italic text-on-surface mb-6">
                    "{review.quote}"
                  </p>
                  <p className="font-ui text-[10px] uppercase tracking-[0.3em] text-on-surface-variant">
                    {review.source}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

    </div>
  );
}
