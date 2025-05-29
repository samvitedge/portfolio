import { Container } from "@/components/Container";
import { mailto } from "@/components/data";
import { Faq } from "@/components/Faq";
import { SectionTitle } from "@/components/SectionTitle";
import { CheckCircle, Code, Smartphone, Brain, Cloud, Palette, ArrowRight } from "lucide-react";

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
];

const services = [
  {
    icon: Code,
    title: "Custom Software Development Solutions",
    description: [
      "Our custom software development services are meticulously crafted to align with your unique business requirements and industry challenges. From initial concept and architecture design to deployment and ongoing maintenance, we build scalable, secure, and efficient applications that not only meet your current needs but also adapt to future growth.",
      "We understand that every business is different, which is why we take a consultative approach to understand your workflows, pain points, and objectives. Our development process follows industry best practices including agile methodologies, continuous integration, and comprehensive testing to ensure your software is reliable, performant, and user-friendly.",
    ],
    features: {
      title: "Key Features & Benefits:",
      items: [
        "Scalable microservices architecture for enterprise-grade performance",
        "Seamless API integrations and modular design for flexibility",
        "Enterprise-level security with data encryption and compliance standards",
        "Comprehensive maintenance and support with regular updates",
        "Cross-platform compatibility and responsive design",
        "Performance optimization and load balancing capabilities",
      ],
    },
    highlight: {
      title: "Industries We Serve:",
      content:
        "Healthcare, FinTech, E-commerce, Education, Manufacturing, Real Estate, and Professional Services",
    },
  },
  {
    icon: Smartphone,
    title: "Web App Development Services",
    description: [
      "We develop high-performance web applications using cutting-edge technologies like React, Next.js, Flutter, and Node.js. Our user-first design philosophy ensures that every application we build delivers exceptional user experiences while maintaining optimal performance across all devices and platforms.",
      "From progressive web apps (PWAs) to native mobile applications, we create digital experiences that engage users and drive business results. Our development process includes thorough user research, wireframing, prototyping, and extensive testing to ensure your app not only looks great but performs flawlessly.",
    ],
    features: {
      title: "Web Development Technologies:",
      items: [
        "React.js & Next.js for modern web apps",
        "TypeScript for type-safe development",
        "Tailwind CSS for responsive design",
        "Node.js & Express for backend services",
      ],
    },
    highlight: {
      title: "Why Choose Our App Development Services?",
      content:
        "We focus on creating apps that not only look stunning but also deliver measurable business value through improved user engagement, increased conversions, and streamlined operations.",
    },
  },
  {
    icon: Brain,
    title: "AI-Powered Automation & Machine Learning Solutions",
    description: [
      "Transform your business operations with our comprehensive AI and machine learning solutions. From predictive analytics that help you make data-driven decisions to intelligent automation that streamlines repetitive tasks, we help businesses harness the power of artificial intelligence to gain competitive advantages and improve operational efficiency.",
      "Our AI specialists work closely with your team to identify automation opportunities, develop custom machine learning models, and implement intelligent systems that learn and adapt to your business needs. Whether you need customer service chatbots, recommendation engines, or complex data analysis tools, we deliver AI solutions that provide real business value.",
    ],
    features: [
      {
        title: "AI Capabilities:",
        items: [
          "Predictive analytics & business intelligence",
          "Natural Language Processing (NLP) solutions",
          "Computer vision and image recognition",
          "Recommendation systems and personalization",
        ],
      },
      {
        title: "Automation Solutions:",
        items: [
          "Intelligent process automation (IPA)",
          "AI-powered chatbots and virtual assistants",
          "Document processing and data extraction",
          "Workflow optimization and task automation",
        ],
      },
    ],
    highlight: {
      title: "ROI-Focused AI Implementation",
      content:
        "Our AI solutions are designed with clear ROI metrics in mind. We help businesses reduce operational costs by up to 40%, improve decision-making accuracy, and enhance customer satisfaction through intelligent automation.",
    },
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure & DevOps Services",
    description: [
      "Accelerate your digital transformation with our comprehensive cloud and DevOps services. We help businesses migrate to the cloud, optimize their infrastructure, and implement robust DevOps practices that enable faster deployment cycles, improved reliability, and reduced operational costs. Our cloud-first approach ensures your applications are scalable, secure, and cost-effective.",
      "From initial cloud strategy and migration planning to ongoing infrastructure management and optimization, we provide end-to-end cloud solutions. Our certified cloud architects and DevOps engineers work with leading platforms including AWS, Microsoft Azure, and Google Cloud Platform to deliver solutions that meet your specific requirements and budget.",
    ],
    features: [
      {
        title: "Cloud Services:",
        items: [
          "Cloud migration and modernization",
          "Multi-cloud and hybrid cloud solutions",
          "Cloud security and compliance",
          "Cost optimization and monitoring",
        ],
      },
      {
        title: "DevOps Solutions:",
        items: [
          "CI/CD pipeline setup and optimization",
          "divization with Docker & Kubernetes",
          "Infrastructure as Code (IaC) implementation",
          "Monitoring, logging, and alerting systems",
        ],
      },
    ],
    highlight: {
      title: "Cloud Transformation Benefits",
      content:
        "Our cloud solutions help businesses reduce infrastructure costs by up to 30%, improve deployment speed by 10x, and achieve 99.9% uptime through robust architecture and monitoring.",
    },
  },
  {
    icon: Palette,
    title: "UI/UX Design & Digital Experience Services",
    description: [
      "Create exceptional digital experiences that captivate users and drive business results with our comprehensive UI/UX design services. Our design team combines creativity with data-driven insights to craft intuitive, accessible, and visually stunning interfaces that align perfectly with your brand identity and business objectives.",
      "From initial user research and wireframing to high-fidelity prototypes and design systems, we follow a human-centered design approach that puts your users at the heart of every decision. Our designs not only look beautiful but also improve user engagement, reduce bounce rates, and increase conversion rates.",
    ],
    features: [
      {
        title: "Design Services:",
        items: [
          "User experience (UX) research and strategy",
          "User interface (UI) design and prototyping",
          "Design systems and component libraries",
          "Accessibility and inclusive design",
        ],
      },
      {
        title: "Design Process:",
        items: [
          "User journey mapping and persona development",
          "Wireframing and interactive prototyping",
          "Visual design and brand integration",
          "Usability testing and iteration",
        ],
      },
    ],
    highlight: {
      title: "Design Impact",
      content:
        "Our design-first approach has helped clients achieve up to 200% improvement in user engagement, 150% increase in conversion rates, and significant reduction in user support requests.",
    },
  },
];

const FeatureList = ({ items }) => (
  <ul className="space-y-4">
    {items.map((item, index) => (
      <li key={index} className="flex items-start gap-3 group">
        <div className="bg-primary-50 dark:bg-primary-900/30 p-1.5 rounded-md mt-0.5 group-hover:bg-primary-100 dark:group-hover:bg-primary-800/50 transition-colors duration-200">
          <CheckCircle className="w-4 h-4 text-primary-600 dark:text-primary-400 flex-shrink-0" />
        </div>
        <span className="text-lg text-gray-700 dark:text-gray-300">{item}</span>
      </li>
    ))}
  </ul>
);

const ServiceCard = ({ service }) => {
  const IconComponent = service.icon;
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-card p-8 ">
      <div className="flex flex-col lg:flex-row lg:items-start gap-8">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-primary-50 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
            <IconComponent className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h2>

          {service.description.map((para, idx) => (
            <p key={idx} className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              {para}
            </p>
          ))}

          {service.features && Array.isArray(service.features) && (
            <div className="flex flex-wrap " style={{justifyContent: "space-around"}}>
              {service.features.map((featureGroup, i) => (
                <div key={i} className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                    {featureGroup.title}
                  </h3>
                  <FeatureList items={featureGroup.items} />
                </div>
              ))}
            </div>
          )}

          {service.features && !Array.isArray(service.features) && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                {service.features.title}
              </h3>
              <FeatureList items={service.features.items} />
            </div>
          )}

          {service.highlight && (
            <div className="p-6 bg-primary-50 dark:bg-primary-900/30 rounded-lg border border-primary-100 dark:border-primary-800/50 mt-8">
              <h3 className="text-xl font-semibold text-primary-700 dark:text-primary-300 mb-2">
                {service.highlight.title}
              </h3>
              <p className="text-primary-900 dark:text-primary-100">{service.highlight.content}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function ServicesPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        {/* Hero Section */}
        <Container className="pt-20 pb-16">
          <div className="w-full max-w-screen-xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-1.5 bg-primary-50 dark:bg-primary-900/30 rounded-full">
              <span className="text-primary-600 dark:text-primary-400 font-medium text-sm">Our Services</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-6">
              Software Development Services <span className="text-primary-600 dark:text-primary-400">Tailored</span> for
              Your Business Growth
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Elevate your business with our expert software solutions designed to deliver scalability, security, and
              superior user experience across industries.
            </p>
          </div>
        </Container>

        {/* Services Section */}
        <div className="pb-20">
          <div className="space-y-12 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <Container className="py-16 bg-gray-50 dark:bg-gray-900/50">
          <div className="w-full max-w-screen-xl mx-auto">
            <SectionTitle>Frequently Asked Questions</SectionTitle>
            <Faq faqdata={faqdata} />
          </div>
        </Container>

        {/* CTA Section */}
        <Container className="py-20">
          <div className="w-full max-w-screen-xl mx-auto text-center bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/20 rounded-2xl p-12 shadow-elevated">
            <div className="inline-block mb-6 px-4 py-1.5 bg-white dark:bg-gray-800 rounded-full shadow-sm">
              <span className="text-primary-600 dark:text-primary-400 font-medium text-sm">Ready when you are</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Ready to discuss your project?</h2>
            <p className="mb-8 text-xl text-gray-700 dark:text-gray-300">
              Contact us today to get a free consultation and see how we can help your business thrive with our software
              development expertise.
            </p>
            <a
              href={mailto}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-lg font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900 shadow-sm transition-colors duration-200"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-6 flex items-center justify-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span> Free consultation • No obligations
              • Response within 24 hours
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}
