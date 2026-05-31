import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, BookOpen, Film, Mic2 } from "lucide-react";

import AboutPage from "@/app/about/page";
import BookPage from "@/app/book/page";
import ContactPage from "@/app/contact/page";
import FilmPage from "@/app/film/page";
import GivingPage from "@/app/giving/page";
import PodcastPage from "@/app/podcast/page";
import SpeakingPage from "@/app/speaking/page";
import Container from "@/components/layout/Container";
import { buttonStyles } from "@/components/ui/Button";
import IconCard from "@/components/ui/IconCard";
import Reveal from "@/components/ui/Reveal";
import Ticker from "@/components/ui/Ticker";
import { cloudinaryUrl } from "@/lib/cloudinary";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "John Shin",
    description:
      "Sir John C. Shin - author, entrepreneur, executive producer, and philanthropist inspiring the next generation of leaders.",
  };
}

export default function HomePage() {
  return (
    <>
      <div id="home" className="bg-background text-on-surface scroll-mt-32">
        <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={cloudinaryUrl("shin/seat.png", "h_1600,q_auto,f_auto")}
              alt="John Shin - Seat"
              fill
              sizes="100vw"
              className="object-cover grayscale opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/70" />
          </div>
          <Container className="relative z-10 text-center">
            <Reveal>
              <p className="font-ui text-[12px] uppercase tracking-[0.3em] text-secondary mb-4">
                John C. Shin
              </p>
              <h1 className="font-display text-[40px] md:text-[64px] leading-tight text-on-surface max-w-4xl mx-auto">
                From Hustle to Legacy, Inspiring Millions to Think and Grow Rich
              </h1>
            </Reveal>
            <Reveal delayMs={200}>
              <p className="font-body text-[18px] md:text-[20px] text-on-surface-variant max-w-2xl mx-auto mt-6">
                Author / Entrepreneur / Executive Producer / Philanthropist
              </p>
            </Reveal>
            <Reveal delayMs={400}>
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-10">
                <Link
                  href="/#book"
                  className={buttonStyles({ variant: "primary", size: "lg" })}
                >
                  Get the Book
                </Link>
                <Link
                  href="/#film"
                  className={buttonStyles({ variant: "outline", size: "lg" })}
                >
                  Watch the Film
                </Link>
              </div>
            </Reveal>
          </Container>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-60 animate-bounce">
            <ArrowDown className="h-6 w-6 text-on-surface" />
          </div>
        </section>

        <section className="py-12 bg-surface-container-low border-y border-divider">
          <Container>
            <Ticker
              items={[
                "Forbes",
                "Napoleon Hill Foundation",
                "100K Agents Network",
                "Global Film Release",
                "Bestselling Author",
                "Executive Producer",
              ]}
            />
          </Container>
        </section>

        <section className="py-32 md:py-40">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <Reveal className="md:col-span-4">
                <IconCard
                  icon={<BookOpen className="h-8 w-8" />}
                  title="Think and Grow Rich"
                  description="The definitive guide to modern wealth creation and executive discipline."
                  href="/#book"
                  linkLabel="Explore the Book"
                />
              </Reveal>
              <Reveal className="md:col-span-4 md:mt-16" delayMs={150}>
                <IconCard
                  icon={<Film className="h-8 w-8" />}
                  title="The Legacy Film"
                  description="A cinematic journey through the mindset required to build an empire."
                  href="/#film"
                  linkLabel="Stream Now"
                />
              </Reveal>
              <Reveal className="md:col-span-4 md:mt-8" delayMs={300}>
                <IconCard
                  icon={<Mic2 className="h-8 w-8" />}
                  title="The Podcast"
                  description="Weekly insights and interviews with global executives and visionaries."
                  href="/#podcast"
                  linkLabel="Listen Weekly"
                />
              </Reveal>
            </div>
          </Container>
        </section>

        <section className="py-32 md:py-40 bg-surface-container-lowest">
          <Container className="text-center">
            <Reveal>
              <div className="flex justify-center mb-8">
                <span className="text-secondary text-[48px]">&quot;</span>
              </div>
              <blockquote className="font-display text-[28px] md:text-[32px] italic text-on-surface max-w-4xl mx-auto">
                Success is not a destination, but a state of mind. To build a
                lasting legacy, you must first master the art of thinking - not
                just working.
              </blockquote>
              <cite className="block mt-8 font-ui text-[12px] uppercase tracking-[0.3em] text-secondary not-italic">
                John C. Shin
              </cite>
            </Reveal>
          </Container>
        </section>

        <section className="py-32 md:py-40">
          <Container>
            <Reveal className="text-center">
              <div className="border-t border-divider pt-16 max-w-2xl mx-auto">
                <h2 className="font-display text-[28px] md:text-[32px] text-on-surface mb-4">
                  Join the Inner Circle
                </h2>
                <p className="font-body text-[16px] text-on-surface-variant mb-10">
                  Receive executive insights on wealth, mindset, and leadership
                  directly from John.
                </p>
                <form className="flex flex-col md:flex-row gap-4 items-end">
                  <div className="flex-1 w-full text-left">
                    <label
                      htmlFor="home-email"
                      className="font-ui text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-2 block"
                    >
                      Email Address
                    </label>
                    <input
                      id="home-email"
                      type="email"
                      placeholder="executive@legacy.com"
                      className="w-full bg-transparent border-0 border-b border-divider py-3 text-on-surface focus:border-secondary focus:ring-0"
                    />
                  </div>
                  <button
                    className={buttonStyles({ variant: "primary", size: "lg" })}
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </Reveal>
          </Container>
        </section>
      </div>
      <AboutPage />
      <BookPage />
      <FilmPage />
      <PodcastPage />
      <SpeakingPage />
      <GivingPage />
      <ContactPage />
    </>
  );
}
