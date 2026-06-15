import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic", "normal"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ahmer Malik — Flutter Developer",
  description:
    "Flutter Developer crafting beautiful, high-performance cross-platform mobile experiences. 2+ years building enterprise and consumer apps.",
  keywords: ["Flutter", "Mobile Developer", "Dart", "Android", "iOS", "Software Engineer", "Ahmer Malik"],
  authors: [{ name: "Ahmer Malik" }],
  openGraph: {
    title: "Ahmer Malik — Flutter Developer",
    description:
      "Flutter Developer crafting beautiful, high-performance cross-platform mobile experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body
        className={`${inter.variable} ${instrumentSerif.variable} font-body bg-bg text-text-primary antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
