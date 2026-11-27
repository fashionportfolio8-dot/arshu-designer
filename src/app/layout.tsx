import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "ARSHU DESIGNER — Where Indian Craft Meets Contemporary Fashion",
  description: "An immersive Indo-Western fashion portfolio celebrating Indian craftsmanship and contemporary silhouettes."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SmoothScroll />{children}</body></html>;
}