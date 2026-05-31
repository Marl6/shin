import Link from "next/link";

import BackToTopButton from "@/components/ui/BackToTopButton";
import Container from "@/components/layout/Container";
import FooterShell from "@/components/layout/FooterShell";
import { navItems } from "@/components/layout/navItems";

const legalItems = [
  { label: "Privacy Policy", href: "/contact" },
  { label: "Terms of Service", href: "/contact" },
  { label: "Media Kit", href: "/contact" },
  { label: "Press Inquiry", href: "/contact" },
];

const socialItems = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "YouTube", href: "https://www.youtube.com" },
  { label: "Instagram", href: "https://www.instagram.com" },
  { label: "Twitter / X", href: "https://x.com" },
];

export default function SiteFooter() {
  return (
    <FooterShell className="mt-auto">
      <Container className="py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-3">
          <Link
            href="/"
            className="font-display text-[28px] text-on-surface mb-4 block"
          >
            John C. Shin
          </Link>
          <p className="font-body text-[16px] text-on-surface-variant max-w-sm"></p>
        </div>
        <div className="md:col-span-3">
          <p className="font-ui text-[12px] uppercase tracking-[0.3em] text-secondary mb-4">
            Navigation
          </p>
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-body text-[14px] text-on-surface-variant hover:text-secondary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="font-ui text-[12px] uppercase tracking-[0.3em] text-secondary mb-4">
            Legal
          </p>
          <ul className="space-y-3">
            {legalItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="font-body text-[14px] text-on-surface-variant hover:text-secondary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="font-ui text-[12px] uppercase tracking-[0.3em] text-secondary mb-4">
            Connect
          </p>
          <div className="flex flex-col gap-3">
            {socialItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-body text-[14px] text-on-surface-variant hover:text-secondary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="md:col-span-12 mt-10 pt-6 border-t border-divider flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-ui text-[10px] uppercase tracking-[0.3em] text-on-surface-variant opacity-70">
            Ⓒ {new Date().getFullYear()} John C. Shin. All rights reserved.
          </p>
          <BackToTopButton className="font-ui text-[10px] uppercase tracking-[0.3em] text-on-surface-variant hover:text-secondary">
            Back to Top
          </BackToTopButton>
        </div>
      </Container>
    </FooterShell>
  );
}
