import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/store/Providers";
import Navbar from "@/components/Navbar/Index";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime List",
  description: "A list of anime",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <nav>
            <Navbar />
          </nav>
          <body>{children}</body>
        </Providers>
      </body>
    </html>
  );
}
