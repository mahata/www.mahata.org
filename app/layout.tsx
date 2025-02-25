import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_Mono } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans",
});

const notoSansMono = Noto_Sans_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans-mono",
});

export const metadata: Metadata = {
  title: "ソフトウェアエンジニア: Yasunori MAHATA の個人サイト",
  description: "Yasunori MAHATA の個人サイトです。利用しているウェブサービスへのリンク集を公開しています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} ${notoSansMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
