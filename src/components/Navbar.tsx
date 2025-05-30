"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Disclosure, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "lucide-react"
import Logo from "./Logo"
import ThemeChanger from "./DarkSwitch"

export const Navbar = () => {
  const pathname = usePathname()

  const navigation = [
    { text: "Services", href: "/services" },
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact" },
  ]

  const isActive = (path: string) => pathname === path

  return (
    <Disclosure
      as="nav"
      className="bg-white dark:bg-gray-900 fixed w-full z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-800"
    >
      {({ open, close }) => (
        <>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo />
            </div>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center space-x-1">
              <div className="flex space-x-1">
                {navigation.map((item) => (
                  <Link
                    key={item.text}
                    href={item.href}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30"
                        : "text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    {item.text}
                  </Link>
                ))}
              </div>

              <div className="flex items-center pl-4 ml-4 border-l border-gray-200 dark:border-gray-700">
                <ThemeChanger />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <ThemeChanger />
              <Disclosure.Button className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-300 hover:text-indigo-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-all duration-200">
                <span className="sr-only">Open main menu</span>
                {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
              </Disclosure.Button>
            </div>
          </div>

          {/* Mobile menu panel */}
          <Transition
            enter="transition duration-200 ease-out"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition duration-150 ease-in"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Disclosure.Panel className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-800">
              <div className="px-4 pt-2 pb-4 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.text}
                    href={item.href}
                    onClick={() => close()}
                    className={`block px-4 py-3 rounded-md text-base font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30"
                        : "text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
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
  )
}
