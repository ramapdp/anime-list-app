"use client";
import { useGetTopAnimeQuery } from "@/services/topAnime/topAnimeApiSlice";

export default function Home() {
  const { data } = useGetTopAnimeQuery();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello world</h1>
    </main>
  );
}
