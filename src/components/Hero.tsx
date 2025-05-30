import { CheckCircle, ArrowRight, Sparkles, Zap, Target } from "lucide-react"
import { Container } from "./Container"
import { ContainerTextFlip } from "./ui/TextFlips"
import { GlareCard } from "./ui/GloareCard"

export const Hero = () => {
  return (
    <div className="relative overflow-hidden pt-32">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        {/* <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl .animate-pulse delay-1000"></div> */}

        {/* Geometric Shapes */}
        <div className="absolute top-40 right-20 w-4 h-4 bg-primary-500 rotate-45 animate-bounce delay-300"></div>
        <div className="absolute top-60 left-1/4 w-3 h-3 bg-primary-400 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-40 left-20 w-6 h-6 border-2 border-primary-500 rotate-12 animate-spin duration-[3s]"></div>
      </div>

      <Container className="relative pt-32 pb-20">
        <div className="text-center max-w-screen-xl  mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-6 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-primary-200/50 dark:border-primary-800/50 shadow-lg">
            <Sparkles className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <span className="text-primary-600 dark:text-primary-400 font-medium text-sm">
              Digital Innovation Partner
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl/tight font-bold tracking-tight text-gray-900 lg:text-6xl/tight xl:text-7xl/tight dark:text-white mb-8">
            Building the Future of Digital{" "}<br/>
            <span className="relative">
              <ContainerTextFlip words={["Strategy", "Engagement", "Architecture", "Solutions", "Innovation"]} />
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"></div>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl leading-relaxed text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto">
            At Samvit Edge, we don't just build software — we engineer smart, scalable, and future-ready tech solutions
            that drive real impact for your business.
          </p>

          {/* Feature Cards */}
          <div className="flex flex-wrap gap-4 items-center my-6">
            {[
              {
                icon: Zap,
                title: "Robust Backends",
                description: "Develop scalable, high-performance server architectures",
              },
              {
                icon: Sparkles,
                title: "Beautiful Frontends",
                description: "Craft intuitive, responsive user experiences",
              },
              {
                icon: Target,
                title: "Complete Platforms",
                description: "Deliver end-to-end digital solutions",
              },
            ].map((feature, index) => (
              <GlareCard key={index} className="mx-auto" >
                <div  className="group relative mx-auto">
                  <div className="absolute inset-0  rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative  backdrop-blur-sm p-8 rounded-2xl  transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className=" w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <feature.icon className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </GlareCard>
            ))}
          </div>

          {/* Value Proposition Card */}
          <div className="relative mb-12">
            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 lg:p-12 rounded-3xl border border-primary-200/30 dark:border-primary-800/30 shadow-2xl">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Whether you're a startup or scaling enterprise, we're here to:
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  "Develop robust, scalable backends",
                  "Craft beautiful, intuitive frontends",
                  "Deliver complete digital platforms",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-primary-50/50 dark:bg-primary-900/20 rounded-xl"
                  >
                    <div className="bg-primary-500 p-2 rounded-lg shadow-lg">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-medium text-gray-800 dark:text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action Quote */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-8 lg:p-12 rounded-3xl mb-12 shadow-2xl">
            <p className="text-2xl lg:text-3xl font-bold text-white leading-relaxed">
              Let's bring your ideas to life with <span className="text-primary-200">clarity</span>,{" "}
              <span className="text-primary-200">speed</span>, and <span className="text-primary-200">precision</span>.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:contact@samvitedge.com"
              className="group relative inline-flex items-center justify-center gap-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 text-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <span className="relative">Start Your Project</span>
              <ArrowRight className="w-6 h-6 relative group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:-translate-y-1 text-lg"
            >
              View Our Services
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}
