import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Heart, School, Users } from "lucide-react";

import Container from "@/components/layout/Container";
import { buttonStyles } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { cloudinaryUrl } from "@/lib/cloudinary";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Giving Back | John C. Shin",
    description:
      "Learn about the All For One charity partnership and global impact initiatives led by Sir John C. Shin.",
  };
}

const impactStats = [
  {
    label: "Entrepreneurs Empowered",
    value: "12,500+",
    icon: <Users className="h-8 w-8" />,
  },
  {
    label: "Children Supported",
    value: "45,000+",
    icon: <Heart className="h-8 w-8" />,
  },
  { label: "Schools Built", value: "18", icon: <School className="h-8 w-8" /> },
];

export default function GivingPage() {
  return (
    <div id="giving" className="bg-background text-on-surface scroll-mt-32">
      <section className="py-24 md:py-32 text-center">
        <Container>
          <Reveal>
            <p className="font-ui text-[12px] uppercase tracking-[0.3em] text-secondary mb-4">
              Philanthropy
            </p>
            <h1 className="font-display text-[40px] md:text-[64px] text-on-surface mb-6">
              Empowering the Next Generation Through Radical Generosity.
            </h1>
            <p className="font-body text-[18px] text-on-surface-variant max-w-2xl mx-auto">
              Success is not measured by what we accumulate, but by the lives we
              transform. Through our partnership with{" "}
              <strong>All For One</strong>, we are building a legacy of hope and
              opportunity.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-24 md:py-32 bg-surface-container-low">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <Heart className="h-8 w-8 text-brand-red" />
                <h2 className="font-display text-[28px] md:text-[32px] text-on-surface">
                  All For One
                </h2>
              </div>
              <h3 className="font-display text-[24px] text-on-surface mb-4">
                Our Foundational Partner
              </h3>
              <p className="font-body text-[16px] text-on-surface-variant mb-8">
                All For One (allforone.org) is a non-profit dedicated to
                improving the lives of children and families worldwide. By
                providing essential healthcare, education, and safe
                environments, they create the foundation for sustainable
                community growth.
              </p>
              <Link
                href="https://allforone.org"
                target="_blank"
                rel="noreferrer"
                className={buttonStyles({ variant: "outline", size: "lg" })}
              >
                Visit allforone.org
              </Link>
            </Reveal>
            <Reveal delayMs={150}>
              <div className="relative aspect-square border border-divider overflow-hidden">
                <Image
                  src={cloudinaryUrl("giving/image1")}
                  alt="Children supported by All For One"
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
          <Reveal className="text-center mb-12">
            <p className="font-ui text-[12px] uppercase tracking-[0.3em] text-secondary mb-4">
              Global Impact
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => (
              <Reveal key={stat.label} delayMs={index * 150}>
                <div className="border border-divider bg-surface-container-lowest text-center p-10">
                  <div className="text-secondary mb-6 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="font-display text-[32px] md:text-[40px] text-on-surface mb-2">
                    {stat.value}
                  </div>
                  <div className="font-ui text-[12px] uppercase tracking-[0.3em] text-on-surface-variant">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32 border-t border-divider">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] border border-divider overflow-hidden">
                  <Image
                    src={cloudinaryUrl("giving/image1")}
                    alt="Nicaragua mission site"
                    fill
                    sizes="(max-width: 768px) 50vw, 30vw"
                    className="object-cover grayscale"
                  />
                </div>
                <div className="relative aspect-[3/4] border border-divider overflow-hidden mt-10">
                  <Image
                    src={cloudinaryUrl("giving/image1")}
                    alt="Community members in Nicaragua"
                    fill
                    sizes="(max-width: 768px) 50vw, 30vw"
                    className="object-cover grayscale"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal className="lg:col-span-5" delayMs={150}>
              <p className="font-ui text-[12px] uppercase tracking-[0.3em] text-secondary mb-4">
                Project Nicaragua
              </p>
              <h2 className="font-display text-[28px] md:text-[32px] text-on-surface mb-6">
                Breaking the Cycle of Poverty.
              </h2>
              <p className="font-body text-[16px] text-on-surface-variant mb-6">
                In the heart of Nicaragua, our initiative focuses on sustainable
                clean water and specialized pediatric care. Our team established
                foundations that will serve communities for decades to come.
              </p>
              <p className="font-body text-[16px] text-on-surface-variant mb-8">
                It is not just about financial aid; it is about physical
                presence. John C. Shin regularly leads missions to oversee
                development and connect with the families being served.
              </p>
              <blockquote className="border-l-2 border-secondary pl-6 italic font-body text-[18px] text-on-surface">
                &quot;Real leadership is service. We are building futures, not
                just structures.&quot;
              </blockquote>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <Reveal className="text-center">
            <div className="relative border border-divider bg-surface-container p-12 md:p-16">
              <h2 className="font-display text-[32px] md:text-[40px] text-on-surface mb-6">
                Join the Movement.
              </h2>
              <p className="font-body text-[18px] text-on-surface-variant mb-10 max-w-2xl mx-auto">
                Every contribution changes the trajectory of a life. One hundred
                percent of your donation goes directly to field operations and
                community projects.
              </p>
              <Link
                href="https://allforone.org/donate"
                target="_blank"
                rel="noreferrer"
                className={buttonStyles({ variant: "outline", size: "lg" })}
              >
                Donate Now
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
