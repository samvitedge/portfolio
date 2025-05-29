"use client"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

type FAQData = FAQItem[]

export const Faq = ({ faqdata }: { faqdata: FAQData }) => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="space-y-4">
        {faqdata.map((item, index) => (
          <div
            key={item.question}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-subtle hover:shadow-card transition-shadow duration-300"
          >
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-6 py-5 text-left text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700/50 focus:outline-none focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-opacity-50 rounded-xl transition-colors duration-200">
                    <span className="text-lg font-medium pr-4">{item.question}</span>
                    <ChevronDown
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 transition-transform duration-200`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-6 pb-5 text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </div>
  )
}
