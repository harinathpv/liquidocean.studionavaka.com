import "./globals.css";

export const metadata = {
  title: "The Liquid Ocean Compass — The Living Companion",
  description:
    "The living companion to The Liquid Ocean Compass by Harinath Pudipeddi. The methodology, the frameworks, and the assessments that keep evolving between editions.",
  metadataBase: new URL("https://liquidocean.studionavaka.com"),
  openGraph: {
    title: "The Liquid Ocean Compass — The Living Companion",
    description:
      "Build lasting products. Build lasting businesses. Build lasting leaders. The living companion to the book.",
    url: "https://liquidocean.studionavaka.com",
    siteName: "The Liquid Ocean Compass",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Liquid Ocean Compass — The Living Companion",
    description: "Build lasting products, businesses, and leaders. The living companion to the book.",
  },
};

export const viewport = { themeColor: "#FAF9F6" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,300;1,9..144,400&family=Spectral:ital,wght@0,300;0,400;1,300;1,400&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
