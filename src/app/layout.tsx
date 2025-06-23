import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GoogleTagManager } from "@next/third-parties/google"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Samvit Edge | Smart, Scalable Digital Solutions & Custom Software",
  description:
    "Samvit Edge engineers scalable backends, intuitive frontends, and complete digital platforms. We help startups and enterprises grow with tailored IT solutions, AI automation, and user-focused experiences.",
  keywords: [
    "Custom Software Development",
    "Web App Development",
    "AI Integration",
    "Backend Development",
    "Frontend Development",
    "Digital Transformation",
    "Tech Partner for Startups",
    "IT Solutions for Enterprises",
    "Samvit Edge",
    "Scalable IT Services",
    "Smart Software Engineering",
    "Product Development",
    "Agile Development",
    "Data-Driven Growth"
  ],
  authors: [{ name: "Samvit Edge" }],
  openGraph: {
    type: "website",
    url: "https://www.samvitedge.com",
    title: "Samvit Edge | Building the Future of Digital Solutions",
    description:
      "Partner with Samvit Edge for high-performance software, scalable APIs, AI automation, and digital product innovation. Tailored IT services to help you grow faster.",
    images: [
      {
        url: "https://www.samvitedge.com/img/logo.png", 
        width: 1200,
        height: 630,
        alt: "Samvit Edge - Smart Digital Solutions"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Samvit Edge | Smart, Scalable Digital Solutions",
    description:
      "From startups to enterprises, Samvit Edge delivers intuitive, scalable, and AI-ready IT solutions that drive growth.",
    images: ["https://www.samvitedge.com/img/logo.png"]
  }
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Samvit Edge",
  "url": "https://www.samvitedge.com",
  "logo": "https://www.samvitedge.com/logo.png", 
  "sameAs": [
    "https://www.linkedin.com/company/samvitedge-solutions",
    "https://www.instagram.com/samvitedge"
  ],
  "description": "Samvit Edge offers smart, scalable digital solutions including backend architecture, frontend development, AI-powered automation, and custom software tailored for startups and enterprises.",
  "service": [
    {
      "@type": "Service",
      "name": "Custom Software Development",
      "description": "We engineer robust software systems tailored to your requirements using modular codebases, scalable microservices, and seamless performance across platforms."
    },
    {
      "@type": "Service",
      "name": "Web & App Development",
      "description": "We build fast, responsive, and accessible websites and mobile apps using React, Next.js, and Flutter, optimized for performance and cross-platform usability."
    },
    {
      "@type": "Service",
      "name": "AI-Powered Automation",
      "description": "We integrate AI to streamline operations with predictive analytics, intelligent chatbots, and recommendation engines, boosting efficiency and innovation."
    }
  ]
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(servicesSchema)}} ></script>
      </head>

      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          <div className="pt-6" >{children}</div>
          <Footer />
          {/* <PopupWidget /> */}
        </ThemeProvider>
        <GoogleTagManager gtmId="GTM-M27L7S68" />
      </body>
    </html>
  );
}
