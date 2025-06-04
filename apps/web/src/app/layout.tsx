import { Bricolage_Grotesque } from "next/font/google";

import "@/styles/globals.css";

import Script from "next/script";
import Loader from "@/app/loader";
import Providers from "@/app/providers";

import { Toaster } from "@repo/ui/sonner";

// https://iamsteve.me/blog/the-best-ink-trap-typefaces-for-websites
const bricolage_grotesque = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata = {
  title: "Paul Rouviere",
  description: "Paul Rouviere's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        <Providers>
          <Loader />
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
