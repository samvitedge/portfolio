import { Container } from "@/components/Container"
import { mailto } from "@/components/data"
import { Faq } from "@/components/Faq";
import PageHeader from "@/components/PageHeader";
import { SectionTitle } from "@/components/SectionTitle";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  MessageSquare,
  Calendar,
  Globe,
  Shield,
  CheckCircle,
} from "lucide-react"


// Contact information data
const contactInfo = [
  {
    icon: Phone,
    title: "Phone & WhatsApp",
    content: [
      { type: "text", text: "+91 98933 69449" },
      { type: "note", text: "Available for urgent inquiries and project discussions" },
    ],
  },
  {
    icon: Mail,
    title: "Email Contacts",
    content: [
      { type: "text", text: "General Inquiries: info@samvitedge.com" },
      { type: "note", text: "We respond to all inquiries within 24 hours" },
    ],
  },
  {
    icon: Globe,
    title: "Global Service Coverage",
    content: [
      { type: "note", text: "Remote collaboration with clients worldwide" },
    ],
  },
];

// Business hours data
const businessHours = [
  { label: "Monday – Friday:", value: "9:00 AM – 6:00 PM (AEST)" },
  { label: "Saturday:", value: "10:00 AM – 2:00 PM (Project support)" },
  { label: "Sunday:", value: "Closed" },
];

// Social links data
const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", handle: "@samvitedge", href: "#" },
  { icon: Instagram, label: "Instagram", handle: "@samvitedge", href: "#" },
];

// Form field configuration
const formFields = [
  {
    id: "name",
    label: "Full Name",
    type: "text",
    required: true,
    placeholder: "Your full name",
    colSpan: "md:col-span-1",
  },
  {
    id: "email",
    label: "Email Address",
    type: "email",
    required: true,
    placeholder: "your.email@company.com",
    colSpan: "md:col-span-1",
  },
  {
    id: "company",
    label: "Company/Organization",
    type: "text",
    required: false,
    placeholder: "Your company name",
    colSpan: "md:col-span-1",
  },
  {
    id: "phone",
    label: "Phone Number",
    type: "tel",
    required: false,
    placeholder: "+91 xxx xxx xxx",
    colSpan: "md:col-span-1",
  },
  {
    id: "projectType",
    label: "Project Type",
    type: "select",
    required: true,
    options: [
      { value: "", label: "Select project type" },
      { value: "web-development", label: "Web Application Development" },
      { value: "mobile-development", label: "Mobile App Development" },
      { value: "custom-software", label: "Custom Software Development" },
      { value: "ai-automation", label: "AI & Automation Solutions" },
      { value: "cloud-devops", label: "Cloud & DevOps Services" },
      { value: "consultation", label: "Technology Consultation" },
      { value: "other", label: "Other" },
    ],
    colSpan: "col-span-full",
  },
  {
    id: "budget",
    label: "Project Budget (AUD)",
    type: "select",
    required: false,
    options: [
      { value: "", label: "Select budget range" },
      { value: "under-25k", label: "Under $25,000" },
      { value: "25k-50k", label: "$25,000 - $50,000" },
      { value: "50k-100k", label: "$50,000 - $100,000" },
      { value: "100k-250k", label: "$100,000 - $250,000" },
      { value: "over-250k", label: "Over $250,000" },
      { value: "discuss", label: "Prefer to discuss" },
    ],
    colSpan: "md:col-span-1",
  },
  {
    id: "timeline",
    label: "Project Timeline",
    type: "select",
    required: false,
    options: [
      { value: "", label: "Select timeline" },
      { value: "asap", label: "ASAP (Rush project)" },
      { value: "1-3-months", label: "1-3 months" },
      { value: "3-6-months", label: "3-6 months" },
      { value: "6-12-months", label: "6-12 months" },
      { value: "over-12-months", label: "Over 12 months" },
      { value: "flexible", label: "Flexible timeline" },
    ],
    colSpan: "md:col-span-1",
  },
  {
    id: "subject",
    label: "Subject",
    type: "text",
    required: true,
    placeholder: "Brief description of your project",
    colSpan: "col-span-full",
  },
  {
    id: "message",
    label: "Project Details",
    type: "textarea",
    required: true,
    placeholder: "Please provide detailed information about your project requirements, goals, target audience, and any specific features or functionality you need. The more details you provide, the better we can understand your needs and provide an accurate proposal.",
    rows: 6,
    colSpan: "col-span-full",
  },
];

// FAQ data
export const faqs = [
  {
    question: "How quickly can you start my project?",
    answer: "We typically begin new projects within 1-2 weeks of contract signing. For urgent projects, we can often accommodate faster start times depending on our current workload and project complexity.",
  },
  {
    question: "Do you offer fixed-price or hourly billing?",
    answer: "We offer both models depending on project scope. Fixed-price works well for clearly defined projects, while hourly billing is ideal for ongoing development or projects with evolving requirements.",
  },
  {
    question: "Can you work with our existing development team?",
    answer: "Absolutely! We frequently collaborate with in-house teams, providing additional expertise, handling specific components, or offering technical leadership and mentoring.",
  },
  {
    question: "What happens after project completion?",
    answer: "We provide comprehensive documentation, training, and ongoing support options. Many clients choose our maintenance packages for continued updates, security patches, and feature enhancements.",
  },
  {
    question: "Do you sign NDAs and confidentiality agreements?",
    answer: "Yes, we're happy to sign NDAs and confidentiality agreements before discussing your project. We understand the importance of protecting your intellectual property and business ideas.",
  },
  {
    question: "Can you help with project planning and requirements?",
    answer: "Definitely! Our business analysts and project managers excel at helping clients refine their ideas, define requirements, and create detailed project roadmaps for successful execution.",
  },
];

// Render form field based on type
const renderFormField = (field) => {
  const commonProps = {
    id: field.id,
    name: field.id,
    required: field.required,
    className: "w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white",
    placeholder: field.placeholder,
  };

  switch (field.type) {
    case "select":
      return (
        <select {...commonProps}>
          {field.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
    case "textarea":
      return <textarea {...commonProps} rows={field.rows} />;
    default:
      return <input type={field.type} {...commonProps} />;
  }
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
        <PageHeader
          title="Let's Build Something Amazing Together"
          highlightWord="Amazing"
          tip="Get in touch with our team"
          descs={[
            "Whether you have a groundbreaking project idea, need expert technology consultation, or want to explore partnership opportunities — our team of experienced developers, designers, and strategists is ready to collaborate and bring your vision to life."
          ]}
          tags={[
            "Software Development",
            "AI Automation",
            "Cloud Solutions",
            "Digital Transformation"
          ]}
        />

      {/* Contact Section */}
      <Container className="pb-20">
        <div className="grid gap-12 lg:grid-cols-2 max-w-screen-xl mx-auto">
          {/* Contact Form Column */}
          <div className=" dark:bg-gray-800 rounded-2xl shadow-card p-3 order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Start Your Project Today
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              {`Tell us about your project and we'll get back to you with a detailed proposal and timeline. All
              consultations are completely free with no obligations.`}
            </p>

            <form action="/api/contact" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {formFields.map((field) => (
                  <div key={field.id} className={field.colSpan}>
                    <label
                      htmlFor={field.id}
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      {field.label} {field.required && <span className="text-red-500">*</span>}
                    </label>
                    {renderFormField(field)}
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Privacy & Security</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Your information is secure and will only be used to respond to your inquiry. We never share client
                      information with third parties and all communications are confidential.
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-5 h-5" />
                Send Project Inquiry
              </button>

              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Expect a detailed response within 24 hours including project timeline and cost estimate
              </p>
            </form>
          </div>

          {/* Contact Info Column */}
          <div className="space-y-8 order-1 lg:order-2">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Get in Touch with Our Mumbai Team
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-5 p-5 dark:bg-gray-800 rounded-xl  hover:shadow-subtle transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                      {item.content.map((line, idx) => (
                        <p
                          key={idx}
                          className={`${
                            line.type === "note"
                              ? "text-sm text-gray-500 dark:text-gray-400 mt-2"
                              : "text-gray-700 dark:text-gray-300"
                          }`}
                        >
                          {line.text}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="p-5  dark:bg-gray-800 rounded-xl hover:shadow-subtle transition-shadow duration-300">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Business Hours & Availability</h2>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="space-y-2">
                  {businessHours.map((b, i) => (
                    <p key={i} className="text-gray-700 dark:text-gray-300">
                      <span className="font-semibold">{b.label}</span> {b.value}
                    </p>
                  ))}
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 p-2 bg-gray-50 dark:bg-gray-700/50 rounded-md">
                    <strong>Emergency Support:</strong> 24/7 available for critical production issues
                  </p>
                </div>
              </div>
            </section>

            <section className="p-5  dark:bg-gray-800 rounded-xl hover:shadow-subtle transition-shadow duration-300">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Connect with Us Online</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Follow us on social media for the latest updates, tech insights, and behind-the-scenes content from our
                development team.
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-primary-50 dark:bg-primary-900/30 rounded-lg flex items-center justify-center hover:bg-primary-100 dark:hover:bg-primary-800/50 transition-colors duration-200 group"
                    aria-label={social.label}
                    title={`${social.label} - ${social.handle}`}
                  >
                    <social.icon className="w-5 h-5 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-200" />
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </Container>

      {/* FAQ Section */}
      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">

      </SectionTitle>           
      <Faq faqdata={faqs} />

      {/* CTA Section */}
      <Container className="py-20">
        <div className="text-center bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/20 rounded-2xl p-12 shadow-elevated">
          <div className="inline-block mb-6 px-4 py-1.5 bg-white dark:bg-gray-800 rounded-full shadow-sm">
            <span className="text-primary-600 dark:text-primary-400 font-medium text-sm">Ready when you are</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Start Your Digital Transformation?
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who have transformed their businesses with our innovative technology
            solutions. Get a free consultation and detailed project proposal with no obligations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={mailto}
              className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-sm"
            >
              <Calendar className="w-5 h-5" />
              Schedule Free Consultation
            </a>
            <a
              href="#"
              className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-6 flex items-center justify-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span> Free consultation • No obligations
            • Response within 24 hours
          </p>
        </div>
      </Container>
    </div>
  )
}