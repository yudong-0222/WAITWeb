import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://waitmc.vercel.app"
      : "https://localhost:3000"
  ),
  verification: {
    google: "mxF9LMrgIKvrUOCO11NjcI6Tk-qQ5dB1Hqrd7dGRao8",
  },
  applicationName: "WAIT Network",
  icons: {
    icon: "/favicon.ico",
    apple: "/aicon.png",
  },
  title: {
    default: "WAIT Network | 槍戰伺服器",
    template: "%s | WAIT Network",
  },
  description:
    "在 Minecraft 體驗如 COD 般的槍戰。包含經典爆破、單挑對決與寫實等多種模式。",
  keywords: [
    "minecraft",
    "wait",
    "wait network",
    "waitmc",
    "waitmc.top",
    "pvp server",
    "pvp 伺服器",
    "競技伺服器",
    "snd",
    "search and destroy",
    "snd wiki",
    "遊戲 wiki",
    "槍戰伺服器",
    "槍械伺服器",
    "minecrat 伺服器",
    "minecraft 槍戰伺服器",
    "cod minecraft",
    "經典爆破",
    "爆破模式",
    "決勝時刻",
    "決勝時刻M",
    "決勝時刻Mc",
    "決勝時刻 minecraft",
  ],
  openGraph: {
    title: "WAIT Network",
    description: "加入 WAIT，體驗極致戰術競技。",
    url: "https://waitmc.vercel.app",
    siteName: "WAIT Network",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "zh_TW",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
