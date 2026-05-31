import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Download, ShoppingCart, Star } from "lucide-react";

import Container from "@/components/layout/Container";
import { buttonStyles } from "@/components/ui/Button";
import ChapterAccordion from "@/components/ui/ChapterAccordion";
import Reveal from "@/components/ui/Reveal";
import Stars from "@/components/ui/Stars";
import { cloudinaryUrl } from "@/lib/cloudinary";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "How Rich Asians Think | John C. Shin",
    description:
      "Purchase How Rich Asians Think, the definitive guide to modern wealth philosophy by Sir John C. Shin.",
  };
}

const chapterItems = [
  {
    id: "01",
    title: "The Foundation of Legacy",
    description:
      "Exploring the historical roots of economic philosophy and how early principles shape modern dynasties.",
  },
  {
    id: "02",
    title: "Strategic Silence",
    description:
      "Why the most powerful moves are often the quietest, and how discretion builds leverage.",
  },
  {
    id: "03",
    title: "The Compound Network",
    description:
      "Redefining networking as a long-term asset class with exponential returns.",
  },
  {
    id: "04",
    title: "Generational Compounding",
    description:
      "Building structures that ensure intellectual and financial capital serves generations.",
  },
];

const reviewCards = [
  {
    quote:
      "I couldn't put this book down! It's filled with amazing tips about success and mindset.",
    name: "Vicky V.",
    title: "Amazon reviewer",
  },
  {
    quote:
      "There is one risk in reading this book: your mind might never be the same. You just might find yourself thinking and growing rich.",
    name: "Calen P.",
    title: "Amazon reviewer",
  },
  {
    quote:
      "Really helps bring out the practical advice by using interviews of real people who have become successful in modern times.",
    name: "Reginald H.",
    title: "Amazon reviewer",
  },
];

export default function BookPage() {
  return (
    <div id="book" className="bg-background text-on-surface scroll-mt-32">
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-6">
              <div className="flex items-center gap-4 mb-6">
                <Stars rating={5} />
                <span className="font-ui text-[12px] uppercase tracking-[0.2em] text-on-surface-variant">
                  4.8 / 5 Rating on Amazon
                </span>
              </div>
              <h1 className="font-display text-[40px] md:text-[64px] leading-tight text-on-surface mb-8">
                How Rich Asians Think
              </h1>
              <p className="font-body text-[18px] text-on-surface-variant max-w-xl mb-10">
                A definitive guide to the philosophy of wealth, heritage, and
                executive precision. Unlock the cultural secrets that drive
                global economic power and generational legacy.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href="#purchase"
                  className={buttonStyles({ variant: "primary", size: "lg" })}
                >
                  Get Your Copy
                </Link>
                <Link
                  href="#chapters"
                  className={buttonStyles({ variant: "outline", size: "lg" })}
                >
                  Browse Chapters
                </Link>
              </div>
            </Reveal>
            <Reveal className="lg:col-span-6 flex justify-center" delayMs={150}>
              <div className="relative w-72 md:w-96 aspect-[2/3] border border-divider overflow-hidden">
                <Image
                  src={cloudinaryUrl("book/portrait")}
                  alt="How Rich Asians Think book cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                {/*
                <div className="absolute -bottom-2 -right-2 bg-surface-container-high border border-divider p-4">
                  <p className="font-ui text-[12px] uppercase tracking-[0.2em] text-secondary mb-1">
                    Bestselling Book
                  </p>
                  <p className="font-display text-[22px] text-on-surface">
                    #1 Global
                  </p>
                </div>
                */}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <Reveal className="text-center mb-16">
            <p className="font-ui text-[12px] uppercase tracking-[0.3em] text-secondary mb-4">
              Special Thanks To
            </p>
          </Reveal>
          <div className="grid grid-cols-3 md:grid-cols-3 gap-10 text-center">
            {[
              ["Book Contributor", "The Rock"],
              ["Book Contributor", "Vera Wang"],
              ["Book Contributor", "Steve Aoki"],
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

      <section
        id="purchase"
        className="py-24 md:py-32 bg-surface-container-lowest border-y border-divider"
      >
        <Container>
          <Reveal className="text-center mb-16">
            <h2 className="font-display text-[28px] md:text-[32px] text-on-surface mb-3">
              Secure Your Legacy
            </h2>
            <p className="font-body text-[16px] text-on-surface-variant">
              Choose your preferred way to read.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {/* <Reveal>
              <div className="bg-surface-container-low border border-secondary p-10 text-center">
                <Star className="h-8 w-8 text-secondary mx-auto mb-6" />
                <h3 className="font-display text-[24px] text-on-surface mb-2">
                  Order from JohnShin.com
                </h3>
                <p className="font-ui text-[12px] uppercase tracking-[0.3em] text-secondary mb-8">
                  Exclusive Autographed Copy
                </p>
                <div className="mb-8">
                  <span className="text-on-surface-variant line-through mr-3">
                    $39.99
                  </span>
                  <span className="font-display text-[24px] text-on-surface">
                    $29.95
                  </span>
                </div>
                <ul className="text-left font-body text-[16px] text-on-surface-variant mb-8 space-y-3">
                  {[
                    "Hand-signed by John C. Shin",
                    "Exclusive digital workbook",
                    "Free US shipping",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  className={buttonStyles({
                    variant: "primary",
                    size: "lg",
                    className: "w-full",
                  })}
                >
                  Order Now - Get Autographed Copy
                </button>
              </div>
            </Reveal> */}
            <Reveal delayMs={150}>
              <div className="bg-surface-container-low border border-divider p-10 text-center">
                <ShoppingCart className="h-8 w-8 text-on-surface-variant mx-auto mb-6" />
                <h3 className="font-display text-[24px] text-on-surface mb-2">
                  Order on Amazon
                </h3>
                <p className="font-ui text-[12px] uppercase tracking-[0.3em] text-on-surface-variant mb-8">
                  Standard Edition
                </p>
                <div className="mb-8">
                  <span className="font-display text-[24px] text-on-surface">
                    $27.95
                  </span>
                </div>
                <ul className="text-left font-body text-[16px] text-on-surface-variant mb-8 space-y-3">
                  {[
                    "Refund/Replacement policy",
                    "Kindle and Audible options",
                    "Hardcover",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-on-surface-variant" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="https://www.amazon.com/How-Rich-Asians-Think-Publication/dp/1640951237"
                  target="_blank"
                  rel="noreferrer"
                  className={buttonStyles({
                    variant: "ghost",
                    size: "lg",
                    className: "w-full",
                  })}
                >
                  Buy on Amazon
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-5">
              <h2 className="font-display text-[28px] md:text-[32px] text-on-surface mb-6">
                Napoleon Hill&apos;s Timeless Principles Re-envisioned
              </h2>
              <p className="font-body text-[18px] text-on-surface-variant mb-10">
                More than a business book, this is an architectural blueprint
                for the modern mind.
              </p>
              <div className="space-y-8">
                {[
                  {
                    title: "The Heritage Mindset",
                    description:
                      "How discipline and long-term vision create unstoppable momentum.",
                  },
                  {
                    title: "Generational Architecting",
                    description:
                      "Strategies for building systems that protect wealth across centuries.",
                  },
                  {
                    title: "The Value of Exclusivity",
                    description:
                      "Cultivating networks that create enduring influence and leverage.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-6">
                    <div className="w-10 h-8 border border-divider flex items-center justify-center text-secondary">
                      <Check className="h-5 w-5 text-secondary absolute" />
                    </div>
                    <div>
                      <h4 className="font-ui text-[12px] uppercase tracking-[0.2em] text-on-surface mb-2">
                        {item.title}
                      </h4>
                      <p className="font-body text-[16px] text-on-surface-variant">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal className="lg:col-span-7" delayMs={150}>
              <div className="relative h-[420px] border border-divider overflow-hidden">
                <Image
                  src={cloudinaryUrl("napoleonhill/logo")}
                  alt="Executive skyline at golden hour"
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover grayscale"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section
        id="chapters"
        className="py-24 md:py-32 bg-surface-container-low border-y border-divider"
      >
        <Container>
          <Reveal className="text-center mb-12">
            <p className="font-ui text-[12px] uppercase tracking-[0.3em] text-secondary mb-4">
              The Curriculum
            </p>
            <h2 className="font-display text-[28px] md:text-[32px] text-on-surface">
              Chapter Breakdown
            </h2>
          </Reveal>
          <ChapterAccordion items={chapterItems} />
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <Reveal className="text-center mb-16">
            <h2 className="font-display text-[28px] md:text-[32px] text-on-surface">
              Voice of the Readers
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviewCards.map((review, index) => (
              <Reveal key={review.name} delayMs={index * 150}>
                <div className="bg-surface-container-low border border-divider p-8 h-full">
                  <Stars rating={5} className="mb-6" />
                  <p className="font-body text-[16px] italic text-on-surface mb-8">
                    &quot;{review.quote}&quot;
                  </p>
                  <p className="font-ui text-[12px] uppercase tracking-[0.2em] text-on-surface">
                    {review.name}
                  </p>
                  <p className="font-body text-[14px] text-on-surface-variant">
                    {review.title}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/*
      <section className="py-24 md:py-32 bg-secondary text-on-secondary">
        <Container>
          <Reveal className="text-center">
            <h2 className="font-display text-[40px] md:text-[56px] text-background mb-6">
              Start Your Metamorphosis
            </h2>
            <p className="font-body text-[18px] text-on-secondary mb-10 max-w-2xl mx-auto">
              Join thousands of leaders who have already unlocked the power of
              modern executive philosophy.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/book"
                className={buttonStyles({ variant: "ghost", size: "lg" })}
              >
                Buy on JohnShin.com
              </Link>
              <Link
                href="https://amazon.com"
                target="_blank"
                rel="noreferrer"
                className={buttonStyles({ variant: "outline", size: "lg" })}
              >
                Get it on Amazon
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
      */}
    </div>
  );
}
