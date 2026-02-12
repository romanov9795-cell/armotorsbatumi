import type { Metadata } from "next";
import { Inter, Oswald, Noto_Sans_Georgian, Noto_Sans_Armenian } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/LocaleContext";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin", "cyrillic"],
  variable: "--font-bebas", // Keeping variable name for compatibility but using Oswald
});

const georgian = Noto_Sans_Georgian({
  subsets: ["georgian"],
  variable: "--font-georgian",
});

const armenian = Noto_Sans_Armenian({
  subsets: ["armenian"],
  variable: "--font-armenian",
});

export const metadata: Metadata = {
  title: "AR MOTORS | BMW Specialist Batumi",
  description: "Professional BMW Service, Tuning & Repair in Batumi, Georgia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${oswald.variable} ${georgian.variable} ${armenian.variable} font-sans bg-black text-white antialiased`}>
        <LocaleProvider>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
