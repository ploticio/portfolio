import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Providers } from "./lib/providers";

const roboto = Roboto({ weight: "300", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Darren's Portfolio",
  description: "Darren's Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
