


"use client";
import Link from "next/link";
// import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "lucide-react";
import Logo from "./Logo"
import ThemeChanger from "./DarkSwitch";

export const Navbar = () => {
  const navigation = [
    { text: "Services", href: "/services" },
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact" },
  ];


  return (
    <Disclosure as="nav" className="bg-white dark:bg-gray-900 fixed w-full z-50 shadow">
      {({ open, close }) => (
        <>
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            {/* Logo */}
            <Logo/>

            {/* Desktop nav */}
            <div className="hidden lg:flex space-x-8 items-center">
              {navigation.map((item) => (
                <Link key={item.text} href={item.href} className="text-gray-700 dark:text-gray-200 hover:text-indigo-500 transition">
                  {item.text}
                </Link>
              ))}
              <ThemeChanger />
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              {/* <ThemeChanger /> */}
              <Disclosure.Button className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                {open ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </Disclosure.Button>
            </div>
          </div>

          {/* Mobile menu panel (absolute positioned) */}
          <Transition
            enter="transition duration-200 ease-out"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition duration-100 ease-in"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Disclosure.Panel className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md">
              <div className="px-4 pt-4 pb-6 space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.text}
                    href={item.href}
                    onClick={() => close()}
                    className="block text-gray-700 dark:text-gray-200 hover:text-indigo-500 transition"
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};
