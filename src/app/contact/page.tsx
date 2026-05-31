import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import Container from "@/components/layout/Container";
import { buttonStyles } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import type { IconType } from "react-icons";
import SpeakingForm from "@/components/ui/Form";

const socials: [string, string, IconType][] = [
  ["LinkedIn", "https://www.linkedin.com", FaLinkedin],
  ["Instagram", "https://www.instagram.com", FaInstagram],
  ["YouTube", "https://www.youtube.com", FaYoutube],
  ["Twitter / X", "https://x.com", FaXTwitter],
];

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact | John C. Shin",
    description:
      "Get in touch for speaking, media, book, film, or charity inquiries.",
  };
}

export default function ContactPage() {
  return (
    <div id="contact" className="bg-background text-on-surface scroll-mt-32">
      <section className="py-24 md:py-32">
        <Container>
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
              <div className="md:col-span-7">
                <p className="font-ui text-[12px] uppercase tracking-[0.3em] text-secondary mb-4">
                  Get In Touch
                </p>
                <h1 className="font-display text-[48px] md:text-[72px] text-on-surface leading-tight">
                  Let&apos;s Start a Conversation.
                </h1>
              </div>
              <div className="md:col-span-5">
                <p className="font-body text-[18px] text-on-surface-variant">
                  Whether you are looking to book a speaking engagement, inquire
                  about media opportunities, or discuss collaborative film
                  projects, we look forward to hearing from you.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-12 md:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <Reveal className="lg:col-span-7">
              <div className="bg-surface-container border border-divider p-8 md:p-12">
                <SpeakingForm
                  fields={["name", "email", "inquiryType", "details"]}
                />
              </div>
            </Reveal>
            <div className="lg:col-span-5 flex flex-col gap-8">
              <Reveal delayMs={100}>
                <div className="bg-surface-container-high border border-divider p-8">
                  <Mail className="h-8 w-8 text-secondary mb-6" />
                  <h3 className="font-display text-[24px] text-on-surface mb-3">
                    Press and Media
                  </h3>
                  <p className="font-body text-[16px] text-on-surface-variant mb-6">
                    For media inquiries, interview requests, and press kit
                    access, contact our dedicated PR team.
                  </p>
                  <Link
                    href="mailto:media@johncshin.com"
                    className="font-ui text-[12px] uppercase tracking-[0.2em] text-on-surface hover:text-secondary border-b border-divider pb-1"
                  >
                    media@johncshin.com
                  </Link>
                </div>
              </Reveal>
              <Reveal delayMs={200}>
                <div className="bg-surface-container-lowest border border-divider p-8">
                  <h3 className="font-ui text-[12px] uppercase tracking-[0.3em] text-secondary mb-6">
                    Connect on Socials
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {socials.map(([label, href, Icon]) => (
                      <Link
                        key={label}
                        href={href}
                        className="flex items-center gap-3 text-on-surface-variant hover:text-secondary"
                      >
                        <Icon className="h-4 w-4" />
                        <span className="font-ui text-[10px] uppercase tracking-[0.2em]">
                          {label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>
              <Reveal delayMs={300}>
                <div className="relative h-56 border border-divider overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJvGkH2CDnCIrPmXOk6CzowMpGK-0p4dhzXitF828hZ9hUAU2mS_T3CidnHDRjA2vI4bjXXTd7kn7hoXrvA9syF1JufScS0vNKZiDsJBz2WSWLrCKsumxQMMJMBY82871uP5D8xhQ2YStvMbfqL5Gh0kOpSUfQt6Uf2paZb_trDvAHGTvoFOKljgDr2ZyaHXU6e2cXx6Y7875tNeNFerznBFvK1lu3_5ue0enE-ZV-2MOH1wQ63dlLEsKHWSIGr6MWQI6cExOXMenC"
                    alt="Luxury corporate skyline"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover grayscale opacity-70"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-background/40">
                    <div className="text-center">
                      <p className="font-ui text-[10px] uppercase tracking-[0.3em] text-on-surface">
                        Global Presence
                      </p>
                      <p className="font-display text-[20px] text-secondary">
                        LA | NYC | SEOUL
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* <section className="py-20">
        <Container>
          <Reveal>
            <div className="border-t border-divider pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div>
                <h2 className="font-display text-[28px] text-on-surface mb-2">
                  Speaking Availability
                </h2>
                <p className="font-body text-[16px] text-on-surface-variant">
                  Currently accepting bookings for Q3 and Q4 2024.
                </p>
              </div>
              <div className="flex space-x-12">
                <div className="text-center">
                  <p className="font-display text-[32px] text-secondary">42</p>
                  <p className="font-ui text-[10px] uppercase tracking-[0.3em] text-on-surface-variant">
                    Countries Visited
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-display text-[32px] text-secondary">1M+</p>
                  <p className="font-ui text-[10px] uppercase tracking-[0.3em] text-on-surface-variant">
                    Lives Impacted
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section> */}
    </div>
  );
}
