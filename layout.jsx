import "./globals.css";

export const metadata = {
  title: "Liquid Ocean® — The Strategy of Continuous Reinvention",
  description:
    "Liquid Ocean® is a way of thinking about building lasting businesses — the strategy of continuous reinvention. By Studio NAVAKA.",
  metadataBase: new URL("https://liquidocean.studionavaka.com"),
  openGraph: {
    title: "Liquid Ocean® — The Strategy of Continuous Reinvention",
    description:
      "A way of thinking about building lasting businesses. Every competitive advantage eventually expires. Reinvention is a capability.",
    url: "https://liquidocean.studionavaka.com",
    siteName: "Liquid Ocean® by Studio NAVAKA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liquid Ocean® — The Strategy of Continuous Reinvention",
    description: "A way of thinking about building lasting businesses. By Studio NAVAKA.",
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
