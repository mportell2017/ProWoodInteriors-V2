import type { Metadata } from "next";
import { Fraunces, Open_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/components/ConvexClientProvider";
import Footer from "@/components/Footer";

const sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Fraunces has a classic, slightly calligraphic feel (with italics),
// great for craftsmanship-driven headings without becoming “trendy.”
const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

// Cormorant Garamond - elegant serif with graceful styling for headings
const elegant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-elegant",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Professional Wood Interiors | Custom Cabinetry & Built-Ins St. Louis",
    template: "%s | Professional Wood Interiors",
  },
  description: "Custom cabinetry and built-in interiors designed and built for your home. Serving St. Louis, Missouri since 1985.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://professionalwoodinteriors.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${elegant.variable}`}>
      <body className={sans.className}>
        <ConvexClientProvider>
          <main>{children}</main>
          <Footer />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
