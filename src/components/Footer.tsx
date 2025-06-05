import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";
import LogoLink from "./Logo";

export function Footer() {
  const navigation = [
    { name: "Solutions", href: "/solutions" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <div className="relative">
      <Container>
        <div className="max-w-screen-xl mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 pt-10 flex flex-col md:flex-row justify-between gap-10">
          {/* Logo and Description */}
          <div className="flex flex-col items-start gap-4 max-w-md">
            <Link href="/" className="flex items-center space-x-2">
              <LogoLink/>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Samvit Edge is your trusted IT partner delivering smart, scalable, and innovative technology solutions designed to elevate your business to the next level.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Socials */}
          <div>
            <div className="mb-2 font-semibold text-gray-700 dark:text-gray-300">
              Follow us
            </div>
            <div className="flex mt-2 space-x-5 text-gray-400 dark:text-gray-500">
              <a
                href="https://instagram.com/samvitedge"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a
                href="https://linkedin.com/company/samvitedge"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Samvit Edge. All rights reserved.
        </div>
      </Container>
    </div>
  );
}


const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
  </svg>
);

