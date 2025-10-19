import type { Metadata } from "next";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import "./globals.css";

const fontHeading = Bebas_Neue({
  variable: "--font-heading",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const fontSans = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Probell Nutrition",
  description: "Redefining fitness supplements with bold design and clarity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontHeading.variable} ${fontSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
