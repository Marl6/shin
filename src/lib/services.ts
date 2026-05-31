import { YoutubeEpisode } from "@/app/shims";
import he from "he";

export async function getLatestYouTubeVideo() {
  try {
    const CHANNEL_ID = "UCkO9o7_Oa84J6zZ1QPFte3g";
    const API_KEY = process.env.YOUTUBE_API_KEY;

    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=1&type=video`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) return null;

    const data = await res.json();
    const item = data.items?.[0];

    if (!item) return null;

    return {
      title: he.decode(item.snippet?.title ?? "Latest Video"),
      thumbnail:
        item.snippet?.thumbnails?.maxres?.url ??
        item.snippet?.thumbnails?.high?.url ??
        item.snippet?.thumbnails?.medium?.url ??
        null,
      videoId: item.id?.videoId ?? null,
    };
  } catch {
    return null;
  }
}

export async function get3RecentYouTubeEpisodes(): Promise<YoutubeEpisode[]> {
  try {
    const CHANNEL_ID = "UCkO9o7_Oa84J6zZ1QPFte3g";
    const API_KEY = process.env.YOUTUBE_API_KEY;

    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=3&type=video`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) return [];

    const data = await res.json();

    return (
      data.items?.map((item: any) => ({
        videoId: item.id?.videoId ?? null,
        title: he.decode(item.snippet?.title ?? ""),
        description: he.decode(item.snippet?.description ?? ""),
        thumbnail:
          item.snippet?.thumbnails?.maxres?.url ??
          item.snippet?.thumbnails?.high?.url ??
          item.snippet?.thumbnails?.medium?.url ??
          null,
      })) ?? []
    );
  } catch {
    return [];
  }
}