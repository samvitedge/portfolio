"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${open ? "transform rotate-180" : ""
                        } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "What services does Samvit Edge offer?",
    answer:
      "We specialize in full-stack software development, responsive web/app design, and AI-powered automation solutions tailored to your business needs.",
  },
  {
    question: "Can you build AI features into our existing systems?",
    answer:
      "Absolutely! We can integrate AI/ML models into your existing workflows to improve automation, insights, and performance.",
  },
  {
    question: "Do you work with startups or only large companies?",
    answer:
      "We work with businesses of all sizes—from early-stage startups to established enterprises—offering scalable solutions for every phase.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern tools like React, Next.js, Node.js, Django, Python, MongoDB, and integrate AI models using frameworks like TensorFlow, PyTorch, and OpenAI APIs.",
  },
  {
    question: "How does the development process work?",
    answer:
      "Our agile process includes discovery, planning, iterative development, feedback loops, and post-deployment support to ensure your vision becomes reality.",
  },
  {
    question: "What's your pricing model?",
    answer:
      "We offer flexible pricing hourly, milestone-based, or fixed—depending on the project scope and complexity. Let's discuss what fits your goals best.",
  },
]