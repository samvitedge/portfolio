import { Container } from "@/components/Container"
import { mailto } from "@/components/data"
import { Faq } from "@/components/Faq"
import { SectionTitle } from "@/components/SectionTitle"
import { CheckCircle, Code, Smartphone, Brain, Cloud, Palette, ArrowRight } from "lucide-react"

const faqdata = [
    {
        question: "How long does a typical software development project take?",
        answer:
        "Project timelines vary based on complexity and scope. Simple web applications typically take 8-12 weeks, while complex enterprise solutions may require 6-12 months. We provide detailed project timelines during our initial consultation.",
    },
    {
        question: "Do you provide ongoing support and maintenance?",
        answer:
        "Yes, we offer comprehensive support and maintenance packages including bug fixes, security updates, performance optimization, and feature enhancements to ensure your software continues to perform optimally.",
    },
    {
        question: "Can you work with our existing technology stack?",
        answer:
        "Absolutely! Our team has experience with a wide range of technologies and can integrate with your existing systems. We also provide recommendations for technology upgrades when beneficial.",
    },
    {
        question: "What industries do you specialize in?",
        answer:
        "We serve various industries including healthcare, fintech, e-commerce, education, manufacturing, and professional services. Our team adapts our solutions to meet industry-specific requirements and compliance standards.",
    },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <Container className="pt-16 pb-12">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-5xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white mb-6">
            Professional Software Development Services in India
          </h1>
          <p className="text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300 mb-8">
            {`At Samvit Edge, we specialize in building smart, scalable, and future-ready technology solutions that solve
            real business challenges. Whether you're a startup looking to disrupt the market or an enterprise seeking
            digital transformation, our tailored services are designed to meet you where you are and take you where you
            need to go.`}
          </p>
          <p className="text-lg leading-normal text-gray-600 dark:text-gray-400 mb-12">
            Based in Mumbai, India, we serve clients globally with cutting-edge software development, AI automation,
            cloud solutions, and digital transformation services. Our team of expert developers, designers, and
            strategists work collaboratively to deliver solutions that drive measurable business growth.
          </p>
        </div>
      </Container>

      {/* Services Grid */}
      <Container className="pb-16">
        <div className="grid gap-16 lg:gap-20">
          {/* Custom Software Development */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                <Code className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Custom Software Development Solutions
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Our custom software development services are meticulously crafted to align with your unique business
                requirements and industry challenges. From initial concept and architecture design to deployment and
                ongoing maintenance, we build scalable, secure, and efficient applications that not only meet your
                current needs but also adapt to future growth.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                We understand that every business is different, which is why we take a consultative approach to
                understand your workflows, pain points, and objectives. Our development process follows industry best
                practices including agile methodologies, continuous integration, and comprehensive testing to ensure
                your software is reliable, performant, and user-friendly.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Features & Benefits:</h3>
                <ul className="space-y-3">
                  {[
                    "Scalable microservices architecture for enterprise-grade performance",
                    "Seamless API integrations and modular design for flexibility",
                    "Enterprise-level security with data encryption and compliance standards",
                    "Comprehensive maintenance and support with regular updates",
                    "Cross-platform compatibility and responsive design",
                    "Performance optimization and load balancing capabilities",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                      <span className="text-lg text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Industries We Serve:</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Healthcare, FinTech, E-commerce, Education, Manufacturing, Real Estate, and Professional Services
                </p>
              </div>
            </div>
          </div>

          {/* Web App Development */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                <Smartphone className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Web App Development Services
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                We develop high-performance web applicationsusing cutting-edge technologies like React,
                Next.js, Flutter, and Node.js. Our user-first design philosophy ensures that every application we build
                delivers exceptional user experiences while maintaining optimal performance across all devices and
                platforms.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                From progressive web apps (PWAs) to native mobile applications, we create digital experiences that
                engage users and drive business results. Our development process includes thorough user research,
                wireframing, prototyping, and extensive testing to ensure your app not only looks great but performs
                flawlessly.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Web Development Technologies:
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "React.js & Next.js for modern web apps",
                      "TypeScript for type-safe development",
                      "Tailwind CSS for responsive design",
                      "Node.js & Express for backend services",
                    ].map((tech, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Why Choose Our App Development Services?
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  We focus on creating apps that not only look stunning but also deliver measurable business value
                  through improved user engagement, increased conversions, and streamlined operations.
                </p>
              </div>
            </div>
          </div>

          {/* AI-Powered Automation */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                <Brain className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                AI-Powered Automation & Machine Learning Solutions
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Transform your business operations with our comprehensive AI and machine learning solutions. From
                predictive analytics that help you make data-driven decisions to intelligent automation that streamlines
                repetitive tasks, we help businesses harness the power of artificial intelligence to gain competitive
                advantages and improve operational efficiency.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Our AI specialists work closely with your team to identify automation opportunities, develop custom
                machine learning models, and implement intelligent systems that learn and adapt to your business needs.
                Whether you need customer service chatbots, recommendation engines, or complex data analysis tools, we
                deliver AI solutions that provide real business value.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">AI Capabilities:</h3>
                  <ul className="space-y-3">
                    {[
                      "Predictive analytics & business intelligence",
                      "Natural Language Processing (NLP) solutions",
                      "Computer vision and image recognition",
                      "Recommendation systems and personalization",
                    ].map((capability, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Automation Solutions:</h3>
                  <ul className="space-y-3">
                    {[
                      "Intelligent process automation (IPA)",
                      "AI-powered chatbots and virtual assistants",
                      "Document processing and data extraction",
                      "Workflow optimization and task automation",
                    ].map((solution, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  ROI-Focused AI Implementation
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Our AI solutions are designed with clear ROI metrics in mind. We help businesses reduce operational
                  costs by up to 40%, improve decision-making accuracy, and enhance customer satisfaction through
                  intelligent automation.
                </p>
              </div>
            </div>
          </div>

          {/* Cloud & DevOps Services */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                <Cloud className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Cloud Infrastructure & DevOps Services
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Accelerate your digital transformation with our comprehensive cloud and DevOps services. We help
                businesses migrate to the cloud, optimize their infrastructure, and implement robust DevOps practices
                that enable faster deployment cycles, improved reliability, and reduced operational costs. Our
                cloud-first approach ensures your applications are scalable, secure, and cost-effective.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                From initial cloud strategy and migration planning to ongoing infrastructure management and
                optimization, we provide end-to-end cloud solutions. Our certified cloud architects and DevOps engineers
                work with leading platforms including AWS, Microsoft Azure, and Google Cloud Platform to deliver
                solutions that meet your specific requirements and budget.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Cloud Services:</h3>
                  <ul className="space-y-3">
                    {[
                      "Cloud migration and modernization",
                      "Multi-cloud and hybrid cloud solutions",
                      "Cloud security and compliance",
                      "Cost optimization and monitoring",
                    ].map((service, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">DevOps Solutions:</h3>
                  <ul className="space-y-3">
                    {[
                      "CI/CD pipeline setup and optimization",
                      "Containerization with Docker & Kubernetes",
                      "Infrastructure as Code (IaC) implementation",
                      "Monitoring, logging, and alerting systems",
                    ].map((solution, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Cloud Transformation Benefits
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Our cloud solutions help businesses reduce infrastructure costs by up to 30%, improve deployment speed
                  by 10x, and achieve 99.9% uptime through robust architecture and monitoring.
                </p>
              </div>
            </div>
          </div>

          {/* UI/UX Design & Prototyping */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                <Palette className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                UI/UX Design & Digital Experience Services
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Create exceptional digital experiences that captivate users and drive business results with our
                comprehensive UI/UX design services. Our design team combines creativity with data-driven insights to
                craft intuitive, accessible, and visually stunning interfaces that align perfectly with your brand
                identity and business objectives.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                From initial user research and wireframing to high-fidelity prototypes and design systems, we follow a
                human-centered design approach that puts your users at the heart of every decision. Our designs not only
                look beautiful but also improve user engagement, reduce bounce rates, and increase conversion rates.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Design Services:</h3>
                  <ul className="space-y-3">
                    {[
                      "User experience (UX) research and strategy",
                      "User interface (UI) design and prototyping",
                      "Design systems and component libraries",
                      "Accessibility and inclusive design",
                    ].map((service, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Design Process:</h3>
                  <ul className="space-y-3">
                    {[
                      "User journey mapping and persona development",
                      "Wireframing and interactive prototyping",
                      "Visual design and brand integration",
                      "Usability testing and iteration",
                    ].map((process, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{process}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Design Impact</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Our design-first approach has helped clients achieve up to 200% improvement in user engagement, 150%
                  increase in conversion rates, and significant reduction in user support requests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* FAQ Section */}

    <SectionTitle preTitle="FAQ" title="Frequently Asked Questions About Our Services">
    </SectionTitle>
    <Faq faqdata={faqdata} />

      {/* CTA Section */}
      <Container className="py-16">
        <div className="text-center bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Transform Your Business with Technology?
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            {
              "Join hundreds of satisfied clients who have transformed their businesses with our innovative software solutions. Let's discuss how we can help you achieve your goals with "
            }
            <span className="text-indigo-600 font-semibold">clarity</span>,
            <span className="text-indigo-600 font-semibold"> speed</span>, and
            <span className="text-indigo-600 font-semibold"> precision</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={mailto} className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
              Get Free Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
            {/* <button className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              View Our Portfolio
            </button> */}
          </div>
        </div>
      </Container>
    </div>
  )
}
