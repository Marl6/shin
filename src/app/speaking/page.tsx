import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Layers,
  Mail,
  MapPin,
  Phone,
  Play,
  Quote,
  Video,
  ChevronDown,
  Check,
} from "lucide-react";
import * as Select from "@radix-ui/react-select";
import Container from "@/components/layout/Container";
import { buttonStyles } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SpeakingForm from "@/components/ui/Form";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Speaking | John C. Shin",
    description:
      "Book Sir John C. Shin for world-class keynotes on leadership, mindset, and legacy.",
  };
}

export default function SpeakingPage() {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const currentQuarter = Math.floor(currentMonth / 3) + 1;
  const remainingQuarters = Array.from(
    { length: 4 - currentQuarter + 1 },
    (_, i) => `Q${currentQuarter + i}`,
  );
  return (
    <div id="speaking" className="bg-background text-on-surface scroll-mt-32">
      <section className="py-24 md:py-32">
        <Container>
          <Reveal className="text-center max-w-4xl mx-auto mb-16">
            <p className="font-ui text-[12px] uppercase tracking-[0.3em] text-secondary mb-4">
              World Class Speaker
            </p>
            <h1 className="font-display text-[40px] md:text-[64px] text-on-surface mb-6">
              Talk to Inspire.
            </h1>
            <p className="font-body text-[18px] text-on-surface-variant">
              John Shin delivers high-impact narratives on leadership, executive
              mindset, and the mechanics of modern empire building.
            </p>
          </Reveal>
          <Reveal>
            <div className="relative aspect-video border border-divider overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/l2KsV61qn8s"
                title="Official Speaking Reel 2024"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-background to-transparent">
                <p className="font-ui text-[12px] uppercase tracking-[0.3em] text-on-surface">
                  John Shin at the MGM Grand Arena Convention 2015
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-divider bg-surface-container-lowest py-10">
        <Container>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="flex items-center gap-4">
              <span className="w-3 h-3 border border-secondary" />
              <p className="font-ui text-[12px] uppercase tracking-[0.3em]">
                Now Booking for {remainingQuarters.join(", ")} of {currentYear}
              </p>
              <span className="w-3 h-3 border border-secondary" />
            </div>
            {/* <div className="flex gap-8">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="font-body text-[16px] text-on-surface-variant">
                  In-Person Keynotes
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="h-4 w-4 text-secondary" />
                <span className="font-body text-[16px] text-on-surface-variant">
                  Virtual Summits
                </span>
              </div>
            </div> */}
          </div>
        </Container>
      </section>

      {/* <section className="py-24 md:py-32">
        <Container>
          <Reveal className="mb-12">
            <h2 className="font-display text-[28px] md:text-[32px] text-on-surface border-l-4 border-secondary pl-4">
              Core Keynote Themes
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <Reveal className="md:col-span-8">
              <div className="bg-surface-container border border-divider p-10 md:p-12 min-h-[420px] relative">
                <div className="relative z-10">
                  <p className="font-ui text-[12px] uppercase tracking-[0.3em] text-secondary mb-4">
                    Signature Series
                  </p>
                  <h3 className="font-display text-[32px] md:text-[40px] text-on-surface mb-4">
                    The Executive Void: Leading Where Rules Fade
                  </h3>
                  <p className="font-body text-[18px] text-on-surface-variant max-w-xl">
                    An exploration into decision-making at the highest levels of
                    industry, where data ends and intuition begins.
                  </p>
                </div>
                <div className="relative z-10 mt-10">
                  <Link
                    href="#booking"
                    className="font-ui text-[12px] uppercase tracking-[0.3em] text-secondary flex items-center gap-2"
                  >
                    Request This Topic <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none flex items-center justify-center">
                  <Layers className="h-32 w-32 text-secondary" />
                </div>
              </div>
            </Reveal>
            <Reveal className="md:col-span-4" delayMs={150}>
              <div className="bg-surface-container border border-divider p-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-[22px] text-on-surface mb-4">
                    Empire Mechanics
                  </h3>
                  <p className="font-body text-[16px] text-on-surface-variant">
                    Scaling from individual excellence to global institutional
                    influence.
                  </p>
                </div>
                <Layers className="h-10 w-10 text-secondary mt-8" />
              </div>
            </Reveal>
            <Reveal className="md:col-span-4" delayMs={300}>
              <div className="bg-surface-container border border-divider p-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-[22px] text-on-surface mb-4">
                    The Philanthropy Pivot
                  </h3>
                  <p className="font-body text-[16px] text-on-surface-variant">
                    Translating corporate power into sustainable social legacy.
                  </p>
                </div>
                <Quote className="h-10 w-10 text-secondary mt-8" />
              </div>
            </Reveal>
            <Reveal className="md:col-span-8" delayMs={450}>
              <div className="bg-surface-container-high border border-divider p-10 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-10">
                  <div className="relative w-full md:w-1/3 aspect-square border border-divider overflow-hidden">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4HFUhN6m0Gr2PvyDo55GbN3-IUOaFokFEPOEh0SZb6_ZvPtcuEbSAw-36TRyrCYvPLU6wZrmNRsg-3XEs1ZxdQKwMTtmvf8xdb0kqdSLhq4RTJJOq2U0wzoE8DYJAnDNiMhj_vbzFfN--N_2W6lpD_H_KdQedPRJgFaftFOXk1LD5yn5b6S1yAMYHMZ5YaQQYJh3ywRdPFj2lI4iNmQTK7Pco8uQpIrYOgWfIQ1di2Ypz7pFva2H22LjSAGz84n28x_etQRIHxBr3"
                      alt="John Shin portrait"
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover grayscale"
                    />
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="font-display text-[24px] text-on-surface mb-4">
                      Custom Briefings
                    </h3>
                    <p className="font-body text-[16px] text-on-surface-variant mb-6">
                      John works directly with board-level committees to develop
                      bespoke narratives aligned to event objectives.
                    </p>
                    <Link
                      href="#booking"
                      className="font-ui text-[12px] uppercase tracking-[0.3em] text-secondary"
                    >
                      Inquire about custom topics
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section> */}

      {/*<section className="py-24 md:py-32 bg-surface-container-lowest">
        <Container>
          <Reveal className="text-center mb-16">
            <p className="font-ui text-[12px] uppercase tracking-[0.3em] text-secondary mb-4">
              Reputation
            </p>
            <h2 className="font-display text-[32px] md:text-[40px] text-on-surface">
              Impact Observed.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                quote: "Lorem Ipsum Dolor.1",
                name: "John Doe",
                position: "Executive Director",
              },
              {
                quote: "Lorem Ipsum Dolor.2",
                name: "Jane Smith",
                position: "Chief Marketing Officer",
              },
              {
                quote: "Lorem Ipsum Dolor.3",
                name: "Bob Johnson",
                position: "Chief Financial Officer",
              },
            ].map((item, index) => (
              <Reveal key={item.quote} delayMs={index * 150}>
                <div className="flex flex-col gap-6">
                  <Quote className="h-10 w-10 text-secondary" />
                  <p className="font-body text-[18px] italic text-on-surface">
                    &quot;{item.quote}&quot;
                  </p>
                  <div>
                    <p className="font-ui text-[12px] uppercase tracking-[0.3em] text-on-surface">
                      {item.name}
                    </p>
                    <p className="font-body text-[14px] text-on-surface-variant">
                      {item.position}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section> */}

      {/* <section className="py-16">
        <Container>
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-on-surface-variant text-[10px] uppercase tracking-[0.3em]">
            {["Forbes", "TEDx", "Goldman", "Harvard", "Bloomberg"].map(
              (label) => (
                <div
                  key={label}
                  className="h-10 w-32 border border-on-surface-variant flex items-center justify-center"
                >
                  {label}
                </div>
              ),
            )}
          </div>
        </Container>
      </section> */}

      <section id="booking" className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <Reveal className="md:col-span-5">
              <p className="font-ui text-[12px] uppercase tracking-[0.3em] text-secondary mb-4">
                Secure an Engagement
              </p>
              <h2 className="font-display text-[40px] md:text-[56px] text-on-surface mb-6">
                Bring the Vision to Your Stage.
              </h2>
              <p className="font-body text-[18px] text-on-surface-variant mb-8">
                Please provide event details below. Our executive team reviews
                all inquiries within 48 business hours.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-secondary" />
                  <span className="font-body text-[16px] text-on-surface">
                    johnshin@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-secondary" />
                  <span className="font-body text-[16px] text-on-surface">
                    +11111
                  </span>
                </div>
              </div>
            </Reveal>
            <Reveal className="md:col-span-7" delayMs={150}>
              <div className="bg-surface-container border border-divider p-8 md:p-12">
                <SpeakingForm />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </div>
  );
}
