import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, Download, Film, Heart, Quote } from "lucide-react";

import Container from "@/components/layout/Container";
import { buttonStyles } from "@/components/ui/Button";
import IconCard from "@/components/ui/IconCard";
import QuoteRotator from "@/components/ui/QuoteRotator";
import Reveal from "@/components/ui/Reveal";

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
                Executive Philosophy
              </p>
              <h1 className="font-display text-[40px] md:text-[64px] leading-tight text-on-surface mb-6">
                Architect of Modern Legacies.
              </h1>
              <p className="font-body text-[18px] text-on-surface-variant max-w-xl">
                Sir John C. Shin is a visionary entrepreneur, philanthropist,
                and strategic advisor empowering leaders through intellectual
                capital and human empathy.
              </p>
            </Reveal>
            <Reveal className="md:col-span-5" delayMs={150}>
              <div className="relative aspect-[4/5] border border-divider overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjXOmjKDHhuxnk2s5E5RnkdhtSRMkA6tMOA0TxS1G6cFJz63ccriPUXlRduQA1PVgxMwDE7h9QAp_Kh9RuUlr7ucZRQj71lCcPAt7n2qrYN8lQ_mUIcTlv6YftSKvepO-3Xyhb_Z_1sdJohxy8_qRZSZZifpBjfUnWav_qVpsyyED4EYMj00qCvb8eNU0508wLi57Q4Nnszz3tgT9JwE1m01xYbT-4ElAavFefFHz0Af-rNQVVRkloljM4r6AtNjG6q7KBiF_j7MmJ"
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
                  Educated at the University of Southern California, John built
                  his foundation in business and law before reshaping the
                  financial world. As founder of AXIANTA Financial Partners, he
                  scaled a national organization with a culture of discipline
                  and ethical rigor.
                </p>
                <p>
                  His contributions have been recognized by Forbes and other
                  premier publications. Beyond the boardroom, his passion for
                  storytelling led him to executive produce cinematic projects
                  and author best-selling works that translate complex success
                  principles into timeless wisdom.
                </p>
                <p>
                  His most enduring legacy is service. Through All For One, John
                  has led global initiatives to improve education and healthcare
                  for women and children worldwide.
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
                Editorial Perspectives
              </h3>
              <p className="font-ui text-[12px] uppercase tracking-[0.3em] text-on-surface-variant">
                A Vignette of Leadership
              </p>
            </Reveal>
            <Reveal delayMs={150}>
              <Link
                href="/contact"
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkb4hvhoDd02hWKGSST9UT5JSVlKotjoTXUqgqh7HXKjt7A-tR24B4QcODcaxmV-ZsInejmvVgKMsJSGmCLqCw_9dzvq42Kyk_JUQ2UMMcYUzV48A8kmmGtrHdgoMvIDp4_Zm_Xg4eNZgyBhM8_JSfP-yMz4UBtwNWlaV6hIdwjP5MGp1UaLDGbUV8c3P4IqwVI6dkaZmcYFmMQHNzQ_JMaR4kAXXRmF7wNuOPvvPKhpGpL66u4-tAStUPA6nz0ZXujyIYdfoOqKkB"
                  alt="Corporate boardroom interior"
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover grayscale"
                />
              </div>
            </Reveal>
            <div className="md:col-span-4 grid grid-rows-2 gap-8">
              <Reveal>
                <div className="relative h-[245px] border border-divider overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB78cnzBZwavjRMTAWLT9EyYiiQfwcGKRuh_-J650I3Q4iZxvXKK0E7WL2F4s7wdTTlGgMoZvZx26vPSkhIGv31y3HbIjPJMO7837AS-7aWBdSJQaPq5sHkBBVcFsVMxqy0jX3v_GQlIkkBWvqtaRRz-NbaJ3wjl2dM561nyuIvTaAosU1Eim4gp7SdHBDWZY0b-1Vqp0hugZr79_DW8OkRu-IMJgy3-vYp4RJ1p4EC3hUi-4weUV32rNPK3LByik60baNbo4j3gSZ0"
                    alt="Executive hands reviewing strategy documents"
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover grayscale"
                  />
                </div>
              </Reveal>
              <Reveal delayMs={150}>
                <div className="relative h-[245px] border border-divider overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTKTlMBNDeIcgaULiJhfyHoZI5BL8Go4nb3AURED7OcZpuw3Xg0KYjXDFzSWsNGvCfyyUJDw4OlVq2xpkpL_Zgs6yb0qUh9TWEq_yW0T-ZljLuA8okPwTCybVD57Yr8UCv3KTurTBOqd62Yf4pqPv8r9CMjg2l9s2wlEQB_lQKgrtHeP0sy5YgC-0IqEIvncfIyOEu9kYOhlZrB6a_xOd3SZUopsoO4OuNf9cAm1rr3ZQwKaI3FEkaGzuqHwJhG_zboOam9CLxKyd4"
                    alt="Modern high-rise architecture"
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover grayscale"
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
                title="Forbes Council"
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
                description="Executive producer of socially impactful documentary storytelling."
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
