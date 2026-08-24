import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const viewport: Viewport = {
  themeColor: "#1F1D1B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Kshitiz Khandelwal — Systems, AI & Backend Engineer",
  description:
    "Handcrafted portfolio of Kshitiz Khandelwal — Backend & Systems Engineer, AI/ML Researcher. Intern @ Zarthi (Java & Spring Boot) & Research Fellow @ IIIT Trichy (Split Federated Learning on IoMT).",
  keywords: [
    "Kshitiz Khandelwal",
    "Systems Engineer",
    "Backend Developer",
    "Java Spring Boot",
    "Zarthi Intern",
    "IIIT Trichy Research",
    "Split Federated Learning",
    "DNS Shield",
    "Zephyr RTOS",
    "BMSIT",
  ],
  authors: [{ name: "Kshitiz Khandelwal" }],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Kshitiz Khandelwal — Systems, AI & Backend Engineer",
    description:
      "High-throughput backend services in Java & Spring Boot, privacy-preserving split federated learning, and deterministic embedded IoT firmware.",
    url: "https://kshitiz-khandelwal.vercel.app",
    siteName: "Kshitiz Khandelwal Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className="antialiased bg-[#1F1D1B] text-[#F5E1CD] font-sans selection:bg-[#E25543] selection:text-white">
        {children}
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
