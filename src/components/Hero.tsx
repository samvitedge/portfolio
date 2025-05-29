import Image from "next/image"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Container } from "./Container"

export const Hero = () => {
  return (
    <Container className="pt-20 pb-16">
      <div className="flex flex-wrap items-center lg:gap-16 lg:flex-nowrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8 lg:mb-0">
            <div className="inline-block mb-6 px-4 py-1.5 bg-primary-50 dark:bg-primary-900/30 rounded-full">
              <span className="text-primary-600 dark:text-primary-400 font-medium text-sm">
                Digital Innovation Partner
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 lg:text-5xl xl:text-6xl dark:text-white mb-6">
              Empowering Digital <span className="text-primary-600 dark:text-primary-400">Evolution</span> for Modern
              Businesses
            </h1>

            <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300 mb-8">
              {
                "At Samvit Edge, we don't just build software — we engineer smart, scalable, and future-ready tech solutions that drive real impact for your business."
              }
            </p>

            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {"Whether you're a startup or scaling enterprise, we're here to:"}
              </h2>
              <ul className="space-y-3">
                {[
                  "Develop robust, scalable backends",
                  "Craft beautiful, intuitive frontends",
                  "Deliver complete digital platforms",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="bg-primary-50 dark:bg-primary-900/30 p-1.5 rounded-md">
                      <CheckCircle className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                    </div>
                    <span className="text-lg text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-subtle mb-8">
              <p className="text-lg text-gray-800 dark:text-white">
                {"Let's bring your ideas to life with "}
                <span className="text-primary-600 dark:text-primary-400 font-semibold">clarity</span>
                {", "}
                <span className="text-primary-600 dark:text-primary-400 font-semibold">speed</span>
                {", and "}
                <span className="text-primary-600 dark:text-primary-400 font-semibold">precision</span>
                {"."}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:contact@samvitedge.com"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 shadow-sm"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full lg:w-1/2 mt-8 lg:mt-0">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-2xl blur-3xl opacity-20"></div>
            <Image
              src="/img/benefit-two.png"
              width={616}
              height={617}
              className="object-cover rounded-2xl relative z-10"
              alt="Hero Illustration - Digital Innovation"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </Container>
  )
}
