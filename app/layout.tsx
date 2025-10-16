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
  title: "Software Engineer: Yasunori MAHATA's Personal Site",
  description: "Personal site of Yasunori MAHATA. I list up links to web services that I use.",
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
