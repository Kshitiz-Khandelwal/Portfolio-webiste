import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0F121A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Kshitiz Khandelwal — Systems, AI & Backend Engineer",
  description:
    "Portfolio of Kshitiz Khandelwal — Backend & Systems Engineer, AI/ML Researcher. Intern @ Zarthi (Java & Spring Boot) & Research Fellow @ IIIT Trichy (Split Federated Learning on IoMT).",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kshitiz Khandelwal",
    jobTitle: "Systems, AI & Backend Engineer",
    affiliation: [
      {
        "@type": "Organization",
        name: "Zarthi",
        jobTitle: "Backend Developer Intern",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "BMS Institute of Technology & Management",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Indian Institute of Information Technology, Tiruchirappalli",
      },
    ],
    url: "https://kshitiz-khandelwal.vercel.app",
    sameAs: [
      "https://github.com/Kshitiz-Khandelwal",
      "https://linkedin.com/in/kshitiz-khandelwal-94917b32a",
    ],
    knowsAbout: [
      "Java & Spring Boot",
      "Machine Learning",
      "Split Federated Learning",
      "Cybersecurity",
      "Zephyr RTOS",
      "System Design",
      "Full Stack Development",
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0F121A] text-[#F8FAFC]`}>
        {children}
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
