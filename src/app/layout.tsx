import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const inter = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Symbiosis World School",
  description:
    "Achieve Academic Excellence at Symbiosis World School, acknowledged as the top CBSE School in Badlapur.            With top-notch facilities and dedicated faculty, we nurture well-rounded individuals ready to thrive in today's world.             we've been dedicated to shaping young minds, providing quality education, and fostering all-round development. At Symbiosis World School, we believe in empowering students for success, both academically and personally. Come, be a part of our vibrant learning community!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
