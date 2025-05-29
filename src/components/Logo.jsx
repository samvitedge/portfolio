"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LogoLink() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const logoSrc =
    resolvedTheme === "dark" ? "/img/darklogo.png" : "/img/logoo.png";

  return (
    <Link
      href="/"
      className="flex items-center gap-2 hover:opacity-90 transition-opacity"
    >
      <Image
        src={logoSrc}
        width={40}
        height={40}
        alt="SamvitEdge Logo"
        className="rounded-md shadow-subtle"
      />
      <span className="text-xl font-semibold font-display text-primary dark:text-foreground tracking-tight">
        SamvitEdge
      </span>
    </Link>
  );
}
