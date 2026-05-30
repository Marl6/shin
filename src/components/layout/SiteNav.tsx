"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonStyles } from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import { navItems } from "@/components/layout/navItems";

export default function SiteNav() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const isHome = pathname === "/";
  const activeSectionRef = useRef<string | null>(null);

  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    if (!isHome) return;

    const sectionIds = navItems
      .map((item) => item.sectionId)
      .filter((id): id is string => Boolean(id));

    if (sectionIds.length === 0) return;

    // How far from the top of the viewport a section must be to be "active".
    // Using 40% of the viewport height feels natural — the section is well
    // past the nav but hasn't fully left the screen yet.
    const ACTIVATION_THRESHOLD = () => window.innerHeight * 0.4;

    const updateActiveSection = () => {
      let current: string | null = sectionIds[0] ?? null;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        // getBoundingClientRect().top is relative to the viewport
        if (el.getBoundingClientRect().top <= ACTIVATION_THRESHOLD()) {
          current = id;
        }
      }

      if (current !== activeSectionRef.current) {
        setActiveSection(current);
      }
    };

    // Honour a hash in the URL on first load
    const hash = window.location.hash.replace("#", "");
    if (hash && sectionIds.includes(hash)) {
      setActiveSection(hash);
    } else {
      updateActiveSection();
    }

    window.addEventListener("scroll", updateActiveSection, { passive: true });

    const onHashChange = () => {
      const nextHash = window.location.hash.replace("#", "");
      if (nextHash && sectionIds.includes(nextHash)) {
        setActiveSection(nextHash);
      }
    };
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [isHome]);

  const getNavHref = (href: string, pageHref?: string) =>
    isHome ? href : (pageHref ?? href);

  const bookHref = isHome ? "/#book" : "/book";

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 border-b border-divider bg-background/80 backdrop-blur-2xl transition-all duration-300",
        isScrolled ? "py-4" : "py-6 md:py-8",
      )}
    >
      <Container className="flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-[22px] md:text-[28px] tracking-tight text-on-surface"
        >
          John C. Shin
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = isHome
              ? item.sectionId === activeSection
              : item.pageHref === pathname;
            return (
              <Link
                key={item.href}
                href={getNavHref(item.href, item.pageHref)}
                className={cn(
                  "font-ui text-[12px] uppercase tracking-[0.2em] text-on-surface-variant transition-colors",
                  isActive
                    ? "text-secondary border-b border-secondary pb-1"
                    : "hover:text-on-surface",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="hidden xl:flex">
          <Link
            href={bookHref}
            className={buttonStyles({ variant: "outline" })}
          >
            Buy the Book
          </Link>
        </div>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button
              type="button"
              className="xl:hidden text-secondary"
              aria-label="Open navigation"
            >
              <Menu className="h-6 w-6" />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/70" />
            <Dialog.Content className="fixed right-0 top-0 h-full w-full max-w-sm bg-background border-l border-divider p-8 flex flex-col gap-8">
              <div className="flex items-center justify-between">
                <span className="font-display text-[22px] text-on-surface">
                  Navigation
                </span>
                <Dialog.Close asChild>
                  <button type="button" aria-label="Close navigation">
                    <X className="h-6 w-6 text-on-surface" />
                  </button>
                </Dialog.Close>
              </div>
              <div className="flex flex-col gap-6">
                {navItems.map((item) => {
                  const isActive = isHome
                    ? item.sectionId === activeSection
                    : item.pageHref === pathname;
                  return (
                    <Dialog.Close asChild key={item.href}>
                      <Link
                        href={getNavHref(item.href, item.pageHref)}
                        className={cn(
                          "font-ui text-[12px] uppercase tracking-[0.2em] text-on-surface-variant transition-colors",
                          isActive ? "text-secondary" : "hover:text-on-surface",
                        )}
                      >
                        {item.label}
                      </Link>
                    </Dialog.Close>
                  );
                })}
              </div>
              <Dialog.Close asChild>
                <Link
                  href={bookHref}
                  className={buttonStyles({ variant: "primary" })}
                >
                  Buy the Book
                </Link>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </Container>
    </nav>
  );
}
