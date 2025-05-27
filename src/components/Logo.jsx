"use client"; // if using App Router (Next.js 13+)

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LogoLink() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Prevent hydration mismatch

  const logoSrc = resolvedTheme === "dark" ? "/img/darklogo.png" : "/img/logoo.png";

  return (
    <Link href="/" className="flex items-center space-x-3 text-2xl font-medium text-indigo-500 dark:text-gray-100">
      <Image src={logoSrc} width={40} height={40} alt="Logo" />
      <img src="/img/name.PNG" width={200} alt="Logo Text" className="hidden md:block" />
    </Link>
  );
}
