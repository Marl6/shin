import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, Download, Film, Heart, Quote } from "lucide-react";

import Container from "@/components/layout/Container";
import { buttonStyles } from "@/components/ui/Button";
import IconCard from "@/components/ui/IconCard";
import QuoteRotator from "@/components/ui/QuoteRotator";
import Reveal from "@/components/ui/Reveal";
import { cloudinaryUrl } from "@/lib/cloudinary";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About | John C. Shin",
    description:
      "The story of Sir John C. Shin - entrepreneur, author, executive producer, and philanthropist.",
  };
}

const timelineItems = [
  {
    year: "1998",
    title: "Academic Foundation",
    description:
      "Graduation from USC Marshall School of Business, setting the stage for leadership in finance and law.",
  },
  {
    year: "2005",
    title: "The AXIANTA Era",
    description:
      "Founded AXIANTA, scaling a national platform for leadership development and entrepreneurship.",
  },
  {
    year: "2012",
    title: "Forbes Recognition",
    description:
      "Recognized by Forbes and global publications for executive strategy and cultural impact.",
  },
  {
    year: "2018",
    title: "Film and Literature",
    description:
      "Executive produced a global documentary film and authored bestselling leadership works.",
  },
  {
    year: "2020",
    title: "Author and Educator",
    description:
      "Published the book “How Rich Asians Think” on January 6, 2020, a contemporary interpretation of Hill's philosophies tailored to the Asian community. The book combines modern insights with actionable steps, aiming to inspire readers to achieve their personal and financial goals.",
  },
  {
    year: "2021",
    title: "Philanthropy and Recognition",
    description:
      "Co-Founded the non-profit organization 'ALL FOR ONE', which has established nine orphanages in countries including Uganda, the Philippines, Nicaragua, Vietnam, China, and India, supporting over 1,000 children.",
  },
  {
    year: "2024",
    title: "Featured Thought Leader",
    description:
      "Featured in Entrepreneur Magazine for promoting purpose-driven success in a distracted, noisy world. Advocates for combining wealth-building with impact, encouraging entrepreneurs to pursue goals aligned with their purpose and values.",
  },
];

const quotes = [
  "True power is not measured by what you possess, but by the legacy you leave in the lives of others.",
  "Leadership is the art of giving people a platform for their own excellence.",
  "Success without contribution is merely an accumulation of things.",
  "The most valuable currency in the modern executive world is trust and depth.",
];

export default function AboutPage() {
  return (
    <div id="about" className="bg-background text-on-surface scroll-mt-32">
      <section className="pt-20 md:pt-28 pb-24 md:pb-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <Reveal className="md:col-span-7">
              <p className="font-ui text-[12px] uppercase tracking-[0.3em] text-secondary mb-4">
                A Brief Journey of a Visionary Philanthropist
              </p>
              <h1 className="font-display text-[40px] md:text-[64px] leading-tight text-on-surface mb-6">
                Who&apos;s John C. Shin?
              </h1>
              <p className="font-body text-[18px] text-on-surface-variant max-w-xl">
                <strong>John Shin</strong> is a serial entrepreneur,
                philanthropist, movie producer, author, motivational speaker and
                critically acclaimed business coach. He has started over 26
                different companies from scratch which have all become multi-
                million-dollar enterprises and is the Co-Founder of the ALL FOR
                ONE Foundation and sits on over 6 different boards of charities.
              </p>
            </Reveal>
            <Reveal className="md:col-span-5" delayMs={150}>
              <div className="relative aspect-[4/5] border border-divider overflow-hidden">
                <Image
                  src={cloudinaryUrl(
                    "self-portrait/portrait",
                    "h_1600,q_auto,f_auto",
                  )}
                  alt="Portrait of Sir John C. Shin"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover grayscale"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32 bg-surface-container-lowest border-y border-divider">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12">
            <Reveal className="md:col-start-3 md:col-span-8">
              <h2 className="font-display text-[28px] md:text-[32px] text-on-surface mb-10">
                The Journey from USC to Global Impact
              </h2>
              <div className="space-y-6 font-body text-[16px] text-on-surface-variant leading-relaxed">
                <p>
                  Educated at the University of Southern California, John Shin
                  earned degrees in Business Administration and Law, laying the
                  foundation for a diverse career spanning entrepreneurship,
                  finance, and leadership. Early in his journey, he explored
                  business through ventures in valet services and real estate,
                  followed by a brief corporate role at Coca-Cola before
                  transitioning into financial services.
                </p>

                <p>
                  In 1994, together with his wife Arlene, he entered the
                  financial services industry and went on to build a nationwide
                  organization with over 128 offices across 42 states. Through
                  mentorship and training, he has helped develop hundreds of
                  thousands of entrepreneurs, with a strong focus on financial
                  literacy and leadership development.
                </p>

                <p>
                  Beyond business, John is an executive producer of{" "}
                  <em>Think and Grow Rich: The Legacy</em> and an author
                  connected to works inspired by the classic success philosophy
                  of Napoleon Hill. He continues to speak globally, inspiring
                  audiences with a message centered on mentorship, mindset, and
                  personal growth.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-28 md:py-40">
        <Container>
          <Reveal>
            <p className="font-ui text-[12px] uppercase tracking-[0.3em] text-secondary text-center mb-16">
              Chronology of Excellence
            </p>
          </Reveal>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-divider -translate-x-1/2" />
            <div className="space-y-20">
              {timelineItems.map((item, index) => (
                <Reveal key={item.year} delayMs={index * 150}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div
                      className={
                        index % 2 === 0 ? "md:text-right" : "md:col-start-2"
                      }
                    >
                      <span className="font-display text-[28px] text-secondary block mb-2">
                        {item.year}
                      </span>
                      <h3 className="font-ui text-[12px] uppercase tracking-[0.3em] text-on-surface mb-3">
                        {item.title}
                      </h3>
                      <p className="font-body text-[16px] text-on-surface-variant">
                        {item.description}
                      </p>
                    </div>
                    <div className="hidden md:block relative">
                      <div
                        className={
                          index % 2 === 0
                            ? "absolute -left-[9px] top-1/2 -translate-y-1/2"
                            : "absolute -right-[9px] top-1/2 -translate-y-1/2"
                        }
                      >
                        <div className="w-4 h-4 border border-secondary bg-background" />
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-28 md:py-40 bg-surface-container border-y border-divider relative overflow-hidden">
        <Container className="relative z-10 text-center">
          <Reveal>
            <Quote className="h-12 w-12 text-secondary mx-auto mb-6" />
            <QuoteRotator quotes={quotes} />
            <p className="mt-6 font-ui text-[12px] uppercase tracking-[0.3em] text-secondary">
              John C. Shin
            </p>
          </Reveal>
        </Container>
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <span className="font-display text-[180px] md:text-[260px] text-on-surface-variant">
            JCS
          </span>
        </div>
      </section>

      <section className="py-28 md:py-40">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-14">
            <Reveal>
              <h3 className="font-display text-[28px] md:text-[32px] text-on-surface">
                Rooted in Family
              </h3>
              <p className="font-ui text-[12px] uppercase tracking-[0.3em] text-on-surface-variant">
                Where Every Legacy Begins
              </p>
            </Reveal>
            <Reveal delayMs={150}>
              <Link
                href="/#about"
                className={buttonStyles({ variant: "outline" })}
              >
                View Full Archive
              </Link>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <Reveal className="md:col-span-8">
              <div className="relative h-[520px] border border-divider overflow-hidden">
                <Image
                  src={cloudinaryUrl("family/img1")}
                  alt="fp1"
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <div className="md:col-span-4 grid grid-rows-2 gap-8">
              <Reveal>
                <div className="relative h-[245px] border border-divider overflow-hidden">
                  <Image
                    src={cloudinaryUrl("family/img2")}
                    alt="fp2"
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delayMs={150}>
                <div className="relative h-[245px] border border-divider overflow-hidden">
                  <Image
                    src={cloudinaryUrl("family/img2")}
                    alt="fp2"
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-28 md:py-40 bg-surface-container-lowest border-t border-divider">
        <Container>
          <Reveal className="text-center mb-16">
            <h3 className="font-display text-[28px] md:text-[32px] text-on-surface">
              Accolades and Impact
            </h3>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal>
              <IconCard
                icon={<Award className="h-8 w-8" />}
                title="Forbes Magazine"
                description="Recognized for outstanding contributions to global business leadership."
              />
            </Reveal>
            <Reveal delayMs={150}>
              <IconCard
                icon={<Heart className="h-8 w-8" />}
                title="All For One"
                description="Global philanthropy honoring transformational work in education and care."
              />
            </Reveal>
            <Reveal delayMs={300}>
              <IconCard
                icon={<Film className="h-8 w-8" />}
                title="Film Excellence"
                description="Executive producer of socially impactful documentary storytelling and something."
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <Reveal>
            <div className="border border-divider p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
              <div>
                <h2 className="font-display text-[28px] md:text-[32px] text-on-surface mb-3">
                  Professional Media Assets
                </h2>
                <p className="font-body text-[16px] text-on-surface-variant max-w-lg">
                  Download authorized photography, official biographies, and
                  brand guidelines for press inquiries.
                </p>
              </div>
              <Link
                href="/contact"
                className={buttonStyles({ variant: "outline", size: "lg" })}
              >
                <Download className="h-4 w-4" />
                Download Media Kit
              </Link>
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/5 blur-[120px]" />
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
