"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonStyles } from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import { navItems } from "@/components/layout/navItems";

export default function SiteNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const [isHome] = useState(pathname === "/");

  const activeSectionRef = useRef<string | null>(null);

  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const sectionIds = navItems
      .map((item) => item.sectionId)
      .filter((id): id is string => Boolean(id));

    if (sectionIds.length === 0) return;

    const ACTIVATION_THRESHOLD = () => window.innerHeight * 0.4;

    const updateActiveSection = () => {
      let current: string | null = sectionIds[0] ?? null;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= ACTIVATION_THRESHOLD()) {
          current = id;
        }
      }

      if (current !== activeSectionRef.current) {
        setActiveSection(current);
        activeSectionRef.current = current; // sync ref immediately
        const cleanPath = current === "home" ? "/" : `/${current}`;
        window.history.replaceState(null, "", cleanPath);
      }
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [isHome]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId?: string,
  ) => {
    if (!isHome || !sectionId) return;

    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      const cleanPath = sectionId === "home" ? "/" : `/${sectionId}`;
      window.history.pushState(null, "", cleanPath);
      setActiveSection(sectionId);
      activeSectionRef.current = sectionId;
    } else {
      const cleanPath = sectionId === "home" ? "/" : `/${sectionId}`;
      router.push(cleanPath);
    }
  };

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
          onClick={(e) => handleNavClick(e, "home")}
          className="font-display text-[22px] md:text-[28px] tracking-tight text-on-surface"
        >
          John Shin
        </Link>

        {/* Desktop */}
        <div className="hidden xl:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = isHome
              ? item.sectionId === activeSection
              : item.pageHref === pathname;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.sectionId)}
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
            href="/book"
            onClick={(e) => handleNavClick(e, "book")}
            className={buttonStyles({ variant: "outline" })}
          >
            Buy the Book
          </Link>
        </div>

        {/* Mobile */}
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
                <Dialog.Title className="font-display text-[22px] text-on-surface">
                  Navigation
                </Dialog.Title>
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
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.sectionId)}
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
                  href="/book"
                  onClick={(e) => handleNavClick(e, "book")}
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
