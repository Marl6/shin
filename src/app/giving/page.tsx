import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Heart, School, Users } from "lucide-react";

import Container from "@/components/layout/Container";
import { buttonStyles } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Giving Back | John C. Shin",
    description:
      "Learn about the All For One charity partnership and global impact initiatives led by Sir John C. Shin.",
  };
}

const impactStats = [
  {
    label: "Women Empowered",
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
              transform. Through our partnership with All For One, we are
              building a legacy of hope and opportunity.
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAbQfD10edeR8XurkHlz9iQ8O25W0eHaL5OVaHRpsRdP7vW581X01r0UhH-Hl3jyGkrAPHmxqjsClf3vDdDs__UP2XTTYSvzKGz1PuPngsWh-twJaGN_W5xknf3ipNdH0KiNk8-azZApeP2BIIworp7JnDMTIzZPv9aJv8UzBR3eFb9-NmjL8eZETzk4QpUZvb6VCrvDuTvw5yCdDRJA5If-pWmbtrXostGm8yDt2ms3kl2K7ocgpIHQ6rFkj7RXUjQOXxhQHcWreD"
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
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKwr8uE9BGhDpvJ7uL0KTZ0IfQqSnQ_yN_Fk_3yQ17OtDW1nVaSueOuow9PNzcZdlUyQknHRelwbn5xlCC_Gk8w-ICzr0decKLVcQ8PHSF3n9Bcf5yp6EP1yeE6SBgspnjuAiZL2d3GW9s3s6fCIB0ln72f2w5KG0BhbaiyodyYZX9yBPB1pR-JTdf_r4prUkS2cWlR2opcOzwFZQ8lXthu8mXcUAMRYghxOVcCUrjWbMX4Ft9JAJZYXl2jzc6OGT8CTJL7LmTSOYp"
                    alt="Nicaragua mission site"
                    fill
                    sizes="(max-width: 768px) 50vw, 30vw"
                    className="object-cover grayscale"
                  />
                </div>
                <div className="relative aspect-[3/4] border border-divider overflow-hidden mt-10">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmer6GX3o0zCPp9CXyYOHJ_Y1Np-8S77n_sdS3HNLaLgqgRZ_PLN8y131_j8cN6KY5gJhpX8cW3m5JOxFlHizw9f3s3l_f1eCJ6ymCQp_X8TDQ2L4hRRYnblS-HfQr9d0u4DBAXOJS0r98AlGXYPuYkbmMSsyC4h1bM5RQvioUbVKS5L4dR_xO9SUahYDdDJehOFELtpayshV2XwUOjh7t5TFpzHZDKl3bXHXMW4Ep1Dl9W5-8igkZv0snEsMmaEU3lGlChZDbCal4"
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
                "Real leadership is service. We are building futures, not just
                structures."
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
                className={buttonStyles({ variant: "primary", size: "lg" })}
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
