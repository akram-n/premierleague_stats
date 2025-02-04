import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Player Stats",
  description:
    "Discover comprehensive statistics for players and teams. Analyze, compare, and stay ahead with insights from the world of football.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
