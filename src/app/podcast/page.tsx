import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PlayCircle } from "lucide-react";
import {
  getLatestYouTubeVideo,
  get3RecentYouTubeEpisodes,
} from "@/lib/services";
import Container from "@/components/layout/Container";
import { buttonStyles } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import YoutubePlayerModal from "@/components/ui/YoutubePlayerModal";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Podcast | John C. Shin",
    description:
      "Listen to The John Shin Show - real conversations on wealth, mindset, and legacy.",
  };
}

const episodes = [
  {
    id: "141",
    duration: "54 min",
    title: "The Art of Negotiation with Chris Voss",
    description:
      "Learning tactical empathy required to win in business and life from a former FBI negotiator.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuALxeV-cxs1RqC6nZu_AoegtIERK2ifOw5vckomcVwdLB4BJjwzETauMc_21wBszqTWXiTO5xUoMOVRcIZdgVIe3EEYD3Dd7y1BAZctOx7LjYyV_1wNjdMqYi5PvbRpWNVneGQTPy6eDUsd-cATl2-uEw5wKAtSjTbJ1taS8EfPE8FclQQglNBz6EDxXxL5Xv5LWjiMIzyAFnWbQ4H1g1uKJ5VVuchEBhPoZtTVO-FNMF2oVaCTG_pr2bgEmmBaTXaGVbnec3gXeOCi",
  },
  {
    id: "140",
    duration: "62 min",
    title: "Generational Wealth Engineering",
    description:
      "How the world's most successful families preserve and grow assets across generations.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAE7A6ruusxmmA6tLQ7-VvmxATNKw7XW7qgiWGySj652ZqY7BfxyJtjEGvNC-Hr-3LJR0UVM9JTnsqdbVF9jalCh6kcf7xhRdZJ95DQW-C8ja4wG5hhyHZB9itqHjhHvZh4D2DB-ra1PWBztS6vymGoLgulTGZje_7f7npwXf6pwfGbXwLAtit9Gqf20tKWMdF_UDPjjCvn-o3x7hzFU7ZwpawJyDE057OTFH-hluOEB76V80n0u0xf63iYBlpEMqWR7_By3aUn8mHx",
  },
  {
    id: "139",
    duration: "48 min",
    title: "The Blueprint for Modern Leadership",
    description:
      "Navigating the complexities of leading a global organization in the digital-first era.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBir6jK86eVPw95lUzp5F0lzfnfeWfYxo8CWc3f5n7RPxG1ANUeeBq1dRTs3pEAwXyYqU7t8HrBZDiFwfgpEjDoxxSEVnPuuNdeEWRndx9jBa57yepdJIhLrM3FtTN_0xhGlfUjbjL2Q4xooagmDt0KBdUdJgCTXU3DZD057w5HVVUn5sUUPHfTaRQLLPoWek6lelIraNWN2T-z9gycyc6GdubzzApzzTpGFYsK_ssyZnmFTdPqm9ufFWT3HFIlIgZz2ChEI6kdFl1f",
  },
];

export default async function PodcastPage() {
  const [latestVideo, recentEpisodes] = await Promise.all([
    getLatestYouTubeVideo(),
    get3RecentYouTubeEpisodes(),
  ]);

  const latestVideoTitle = latestVideo?.title ?? "Latest Video";
  const latestVideoThumbnail = latestVideo?.thumbnail ?? null;
  const latestVideoId = latestVideo?.videoId ?? null;
  const recent3Episode = recentEpisodes;
  return (
    <div id="podcast" className="bg-background text-on-surface scroll-mt-32">
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <Reveal className="md:col-span-6">
              <p className="font-ui text-[12px] uppercase tracking-[0.3em] text-secondary mb-6">
                Featured Episode
              </p>
              <h1 className="font-display text-[40px] md:text-[64px] text-on-surface mb-8">
                The John Shin TV
              </h1>
              <p className="font-body text-[18px] text-on-surface-variant mb-10 max-w-lg">
                Real conversations on wealth, mindset, and legacy. Dive into the
                psychology of success with world-class leaders.
              </p>
              <div className="flex flex-wrap gap-8 items-center">
                <div className="flex items-center gap-4">
                  {latestVideoId && (
                    <YoutubePlayerModal videoId={latestVideoId} />
                  )}
                  <div>
                    <p className="font-ui text-[10px] uppercase tracking-[0.3em] text-on-surface-variant">
                      Recent Episode
                    </p>
                    <p className="font-display text-[20px] text-on-surface">
                      {latestVideoTitle}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal className="md:col-span-6" delayMs={150}>
              <div className="relative aspect-square border border-divider overflow-hidden">
                <Image
                  src={
                    latestVideoThumbnail ??
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuDoF-M5IrBdisyHwrM2dlS9CKKky4rMXLODTR7eELbjCUJrfjKOCd9OPfQYgeZRvhK4Y1L0ALLKyXQ_qnP7jGIUKwH8G3FiLYCyNCkWkrfERqskgZzuLzekYAd3om0l7Kq-KLgdp4aiNsVm4iD64ae1TPqZTiBAltvzprPYN6OaiEeRqtpU9So1LUimOgKB26ccRtqguiC3ZXb2vr3iIYNOlTbj01cjDVjmMaErD1wpqr-WOTY6ze5LgKWIJwkt0gLA-wW3H4fqHVPD"
                  }
                  alt="Executive podcast studio"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 border border-secondary/20 m-6" />
                <div className="absolute bottom-8 right-8 bg-surface/90 border border-divider p-3">
                  <p className="font-ui text-[18px] uppercase tracking-[0.3em] text-secondary mb-1">
                    Weekly new episode!
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-12 border-y border-divider bg-surface-container-lowest">
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-center gap-8 justify-between opacity-70">
              <span className="font-ui text-[12px] uppercase tracking-[0.3em] text-on-surface-variant">
                Listen On
              </span>
              <div className="flex flex-wrap gap-8">
                {["Youtube"].map((platform) => (
                  <Link
                    key={platform}
                    href="https://youtube.com/@johnshinofficial?si=sMHmG27GFC3FYasI"
                    target="_blank"
                    className="font-ui text-[12px] uppercase tracking-[0.2em] text-on-surface-variant hover:text-on-surface"
                  >
                    {platform}
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <Reveal>
              <p className="font-ui text-[12px] uppercase tracking-[0.3em] text-secondary mb-3">
                Archive
              </p>
              <h2 className="font-display text-[28px] md:text-[32px] text-on-surface">
                Recent Episodes
              </h2>
            </Reveal>
            <Reveal delayMs={150}>
              <Link
                href="https://youtube.com/@johnshinofficial?si=sMHmG27GFC3FYasI"
                target="_blank"
                className="font-ui text-[12px] uppercase tracking-[0.2em] text-on-surface-variant hover:text-secondary"
              >
                View All Episodes
              </Link>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {recent3Episode.map((episode, index: number) => (
              <Reveal key={episode.videoId} delayMs={index * 150}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-video border border-divider overflow-hidden mb-6">
                    <Image
                      src={episode.thumbnail ?? ""}
                      alt={episode.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors" />
                  </div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-ui text-[10px] uppercase tracking-[0.3em] text-secondary">
                      {episode.title}
                    </span>
                    {episode.videoId && (
                      <YoutubePlayerModal videoId={episode.videoId} />
                    )}
                  </div>
                  <h3 className="font-display text-[20px] text-on-surface group-hover:text-secondary mb-3">
                    {episode.title}
                  </h3>
                  <p className="font-body text-[16px] text-on-surface-variant line-clamp-2">
                    {episode.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32 bg-surface-container-low">
        <Container>
          <Reveal className="text-center max-w-3xl mx-auto">
            <span className="font-ui text-[12px] uppercase tracking-[0.3em] text-secondary mb-6 block">
              Podcast Highlight
            </span>
            <blockquote className="font-display text-[28px] md:text-[32px] italic text-on-surface mb-10">
              &quot;Lorem Ipsum Dolor Sit Amet.&quot;
            </blockquote>
            <div className="flex flex-col items-center">
              <div className="relative w-20 h-20 border border-divider overflow-hidden mb-4">
                <Image
                  src="/images/avatar-placeholder.svg"
                  alt="Guest portrait"
                  fill
                  sizes="80px"
                  className="object-cover grayscale"
                />
              </div>
              <p className="font-ui text-[12px] uppercase tracking-[0.3em] text-on-surface">
                Dr. Anon Anon
              </p>
              <p className="font-ui text-[10px] uppercase tracking-[0.3em] text-on-surface-variant mt-1">
                Episode 142 Guest
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* <section className="py-24 md:py-32">
        <Container>
          <Reveal>
            <div className="border border-divider bg-surface p-10 md:p-16 relative overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                <div>
                  <h2 className="font-display text-[28px] md:text-[32px] text-on-surface mb-4">
                    Join the Inner Circle
                  </h2>
                  <p className="font-body text-[18px] text-on-surface-variant">
                    Get exclusive episode notes, early access to live
                    recordings, and curated resources delivered weekly.
                  </p>
                </div>
                <form className="space-y-8">
                  <div className="space-y-6">
                    <div>
                      <label
                        htmlFor="podcast-name"
                        className="font-ui text-[10px] uppercase tracking-[0.2em] text-on-surface-variant block mb-2"
                      >
                        Name
                      </label>
                      <input
                        id="podcast-name"
                        className="w-full bg-transparent border-0 border-b border-divider focus:border-secondary focus:ring-0 py-3 text-on-surface"
                        placeholder="Your full name"
                        type="text"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="podcast-email"
                        className="font-ui text-[10px] uppercase tracking-[0.2em] text-on-surface-variant block mb-2"
                      >
                        Email
                      </label>
                      <input
                        id="podcast-email"
                        className="w-full bg-transparent border-0 border-b border-divider focus:border-secondary focus:ring-0 py-3 text-on-surface"
                        placeholder="email@example.com"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="font-ui text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
                      Notifications
                    </p>
                    <div className="flex items-center gap-3">
                      <input
                        id="podcast-episodes"
                        type="checkbox"
                        className="h-4 w-4 border-divider text-secondary focus:ring-secondary"
                      />
                      <label
                        htmlFor="podcast-episodes"
                        className="font-body text-[16px] text-on-surface"
                      >
                        New Episodes
                      </label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        id="podcast-newsletter"
                        type="checkbox"
                        className="h-4 w-4 border-divider text-secondary focus:ring-secondary"
                      />
                      <label
                        htmlFor="podcast-newsletter"
                        className="font-body text-[16px] text-on-surface"
                      >
                        Weekly Mindset Brief
                      </label>
                    </div>
                  </div>
                  <button
                    className={buttonStyles({
                      variant: "outline",
                      size: "lg",
                      className: "w-full",
                    })}
                  >
                    Subscribe Now
                  </button>
                </form>
              </div>
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/5 blur-[120px]" />
            </div>
          </Reveal>
        </Container>
      </section> */}
    </div>
  );
}
