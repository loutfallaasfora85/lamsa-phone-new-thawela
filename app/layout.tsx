import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Providers from "./components/Providers";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const siteUrl = "https://lamsastorre.com/";
const siteName = "بائع أثاث ومفروشات منزلية - شريحة الأعمال";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "بائع أثاث ومفروشات منزلية - شريحة الأعمال | سهلناها",
    template: "%s | سهلناها",
  },
  description:
    "بائع أثاث ومفروشات منزلية - شريحة الأعمال. وجهتكم الأولى لأفخم المفروشات والأثاث المنزلي. نوفر لكم تصاميم راقية تناسب كل ذوق بأفضل الأسعار مع ضمان الجودة.",
  keywords: [
    "مفروشات منزلية",
    "أثاث",
    "غرفة معيشة",
    "غرفة نوم",
    "سهلناها",
    "تسوق إلكتروني",
    "ديكور منزلي",
    "شريحة الأعمال",
    "بائع أثاث",
  ],
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: siteUrl,
    siteName: siteName,
    title: "بائع أثاث ومفروشات منزلية - شريحة الأعمال | سهلناها",
    description:
      "بائع أثاث ومفروشات منزلية - شريحة الأعمال. وجهتكم الأولى لأفخم المفروشات والأثاث المنزلي.",
    images: [
      {
        url: "https://lamsastorre.com/logo.webp",
        alt: "بائع أثاث ومفروشات منزلية - شريحة الأعمال | سهلناها",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "بائع أثاث ومفروشات منزلية - شريحة الأعمال | سهلناها",
    description:
      "بائع أثاث ومفروشات منزلية - شريحة الأعمال. وجهتكم الأولى لأفخم المفروشات والأثاث المنزلي.",
    images: ["https://lamsastorre.com/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "msapplication-TileImage": "/android-chrome-192x192.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#1a237e" />
        <script src="https://eauthenticate.saudibusiness.gov.sa/EAuthSealApi/seal.js" async />
      </head>
      <body className="bg-surface text-on-surface">
        <Providers>{children}</Providers>
        <div className="sbc-verify-seal" data-token="TE8yM3VLNml4aXVtWnVIaGxaVzBpZz09" data-position="bottom-left"></div>
      </body>
    </html>
  );
}