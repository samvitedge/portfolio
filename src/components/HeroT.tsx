import Image from "next/image"
import { CheckCircle, ArrowRight } from "lucide-react"
import { ContainerTextFlip } from "./ui/TextFlips"
import { HeroGeometric } from "./ui/ShapeHero"

const HeroTwo = () => {
  return (
    <HeroGeometric
      badge="Digital Innovation Partner"
      title1="Building the Future of Digital"
      title2={
        <ContainerTextFlip
          words={[
            "Strategy",
            "Engagement",
            "Architecture",
            "Solutions",
            "Innovation",
          ]}
        />
      }
    >
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
              <span className="text-lg text-gray-700 dark:text-gray-300">
                {item}
              </span>
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
    </HeroGeometric>
  )
}


export default HeroTwo