import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Kshitiz Khandelwal — Systems & AI Engineer | Portfolio",
  description:
    "Portfolio of Kshitiz Khandelwal — Systems, AI/ML, and Cybersecurity Engineer. Specializing in DNS threat defense pipelines, privacy-preserving federated healthcare ML, and real-time embedded RTOS.",
  keywords: [
    "Kshitiz Khandelwal",
    "Systems Engineer",
    "Machine Learning Engineer",
    "DNS Shield",
    "SplitFed Healthcare",
    "Zephyr RTOS",
    "BMSIT",
    "Cybersecurity AI",
  ],
  authors: [{ name: "Kshitiz Khandelwal" }],
  openGraph: {
    title: "Kshitiz Khandelwal — Systems & AI Engineer",
    description:
      "AI-powered defense pipelines, federated healthcare machine learning, and real-time embedded systems architectures.",
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
    jobTitle: "Systems & AI Engineer",
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "BMS Institute of Technology & Management",
    },
    url: "https://kshitiz-khandelwal.vercel.app",
    sameAs: [
      "https://github.com/Kshitiz-Khandelwal",
      "https://linkedin.com/in/kshitiz-khandelwal-94917b32a",
    ],
    knowsAbout: [
      "Machine Learning",
      "Cybersecurity",
      "Federated Learning",
      "Zephyr RTOS",
      "System Design",
      "Full Stack Development",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F8FAFC] text-[#0F172A]`}>
        {children}
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
