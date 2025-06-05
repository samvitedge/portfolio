import { Container } from "@/components/Container";
import { mailto } from "@/components/data";
import { Faq } from "@/components/Faq";
import PageHeader from "@/components/PageHeader";
import { SectionTitle } from "@/components/SectionTitle";
import { CheckCircle,  ArrowRight } from "lucide-react";
import { services, faqdata  } from "./data.js"



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
        <PageHeader
          title="Software Development Services Tailored for Your Business Growth"
          highlightWord="Tailored"
          tip="Our Services"
          descs={[
            "Elevate your business with our expert software solutions designed to deliver scalability, security, and superior user experience across industries."
          ]}
        />

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
