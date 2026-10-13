import type { Metadata } from "next";
import "@fontsource-variable/geist";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(
    "https://relaygrid-operations-concept.lushshore129.chatgpt.site",
  ),
  title: {
    default: "RelayGrid — Operations that scale with you",
    template: "%s — RelayGrid",
  },
  description:
    "A self-initiated SaaS concept by Anthony Volatile. Explore workflows, approvals, automation, and operational visibility for growing teams.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "RelayGrid — Operations that scale with you",
    description: "A brand and product concept by Anthony Volatile.",
    type: "website",
    images: ["/brand/social.png"],
  },
  twitter: { card: "summary_large_image", images: ["/brand/social.png"] },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
