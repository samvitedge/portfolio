"use client"
import { Container } from "@/components/Container"
import { mailto } from "@/components/data"
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
} from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You would typically send this to your backend or email service
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <Container className="pt-16 pb-12">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-5xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white mb-6">
            {"Contact Samvit Edge - Let's Build Something Amazing Together"}
          </h1>
          <p className="text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300 mb-8">
            {`Whether you have a groundbreaking project idea, need expert technology consultation, or want to explore
            partnership opportunities we're here to help. Our team of experienced developers, designers, and strategists
            is always excited to collaborate and explore new possibilities with forward-thinking businesses.`}
          </p>
          <p className="text-lg leading-normal text-gray-600 dark:text-gray-400 mb-12">
            Based in Sydney, Australia, we serve clients globally with comprehensive software development, AI
            automation, cloud solutions, and digital transformation services. Get in touch today for a free consultation
            and discover how we can help accelerate your business growth through innovative technology.
          </p>
        </div>
      </Container>

      {/* Contact Methods Overview */}
      <Container className="pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: MessageSquare,
              title: "Free Consultation",
              description: "Schedule a 30-minute strategy call",
              action: "Book Now",
            },
            {
              icon: Mail,
              title: "Email Us",
              description: "Get a response within 24 hours",
              action: "Send Email",
            },
            {
              icon: Phone,
              title: "Call Us",
              description: "Speak directly with our team",
              action: "Call Now",
            },
            {
              icon: Calendar,
              title: "Project Planning",
              description: "Detailed project discussion",
              action: "Schedule",
            },
          ].map((method, index) => (
            <div
              key={index}
              className="text-center bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <method.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{method.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{method.description}</p>
              <button className="text-indigo-600 dark:text-indigo-400 font-medium text-sm hover:underline">
                {method.action}
              </button>
            </div>
          ))}
        </div>
      </Container>

      {/* Main Contact Content */}
      <Container className="pb-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Get in Touch with Our Sydney Team
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Sydney Headquarters</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      123 Innovation Drive
                      <br />
                      Sydney, NSW 2000
                      <br />
                      Australia
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                     {` Located in India's premier tech district, easily accessible by public transport`}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Phone & WhatsApp</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">+61 123 456 789</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Available for urgent inquiries and project discussions
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Email Contacts</h3>
                    <div className="space-y-1 text-gray-700 dark:text-gray-300">
                      <p>
                        <strong>General Inquiries:</strong> hello@samvitedge.com
                      </p>
                      <p>
                        <strong>New Projects:</strong> projects@samvitedge.com
                      </p>
                      <p>
                        <strong>Support:</strong> support@samvitedge.com
                      </p>
                      <p>
                        <strong>Partnerships:</strong> partners@samvitedge.com
                      </p>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      We respond to all inquiries within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Global Service Coverage</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Australia • New Zealand • Singapore • Japan • UK • USA
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Remote collaboration with clients worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Business Hours & Availability
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <div className="space-y-2">
                      <p className="text-lg text-gray-700 dark:text-gray-300">
                        <span className="font-semibold">Monday – Friday:</span> 9:00 AM – 6:00 PM (AEST)
                      </p>
                      <p className="text-lg text-gray-700 dark:text-gray-300">
                        <span className="font-semibold">Saturday:</span> 10:00 AM – 2:00 PM (Project support)
                      </p>
                      <p className="text-lg text-gray-700 dark:text-gray-300">
                        <span className="font-semibold">Sunday:</span> Closed
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                        <strong>Emergency Support:</strong> 24/7 available for critical production issues
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media & Professional Networks */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Connect with Us Online
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  Follow us on social media for the latest updates, tech insights, and behind-the-scenes content from
                  our development team.
                </p>
                <div className="flex gap-4">
                  {[
                    { icon: Linkedin, label: "LinkedIn", handle: "@samvitedge" },
                    { icon: Twitter, label: "Twitter", handle: "@samvitedge" },
                    { icon: Github, label: "GitHub", handle: "samvitedge" },
                    { icon: Instagram, label: "Instagram", handle: "@samvitedge" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center hover:bg-indigo-200 dark:hover:bg-indigo-800 transition-colors duration-200 group"
                      aria-label={social.label}
                      title={`${social.label} - ${social.handle}`}
                    >
                      <social.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-200" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Start Your Project Today
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {`Tell us about your project and we'll get back to you with a detailed proposal and timeline. All
              consultations are completely free with no obligations.`}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    placeholder="+61 xxx xxx xxx"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="projectType" className="block text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                >
                  <option value="">Select project type</option>
                  <option value="web-development">Web Application Development</option>
                  <option value="mobile-development">Mobile App Development</option>
                  <option value="custom-software">Custom Software Development</option>
                  <option value="ai-automation">AI & Automation Solutions</option>
                  <option value="cloud-devops">Cloud & DevOps Services</option>
                  <option value="ui-ux-design">UI/UX Design Services</option>
                  <option value="consultation">Technology Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="budget" className="block text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Project Budget (AUD)
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-25k">Under $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-250k">$100,000 - $250,000</option>
                    <option value="over-250k">Over $250,000</option>
                    <option value="discuss">Prefer to discuss</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP (Rush project)</option>
                    <option value="1-3-months">1-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-12-months">6-12 months</option>
                    <option value="over-12-months">Over 12 months</option>
                    <option value="flexible">Flexible timeline</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="Brief description of your project"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                  placeholder="Please provide detailed information about your project requirements, goals, target audience, and any specific features or functionality you need. The more details you provide, the better we can understand your needs and provide an accurate proposal."
                />
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
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
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                Send Project Inquiry
              </button>

              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                Expect a detailed response within 24 hours including project timeline and cost estimate
              </p>
            </form>
          </div>
        </div>
      </Container>

      {/* FAQ Section */}
      <Container className="py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Frequently Asked Questions About Working with Us
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                question: "How quickly can you start my project?",
                answer:
                  "We typically begin new projects within 1-2 weeks of contract signing. For urgent projects, we can often accommodate faster start times depending on our current workload and project complexity.",
              },
              {
                question: "Do you offer fixed-price or hourly billing?",
                answer:
                  "We offer both models depending on project scope. Fixed-price works well for clearly defined projects, while hourly billing is ideal for ongoing development or projects with evolving requirements.",
              },
              {
                question: "Can you work with our existing development team?",
                answer:
                  "Absolutely! We frequently collaborate with in-house teams, providing additional expertise, handling specific components, or offering technical leadership and mentoring.",
              },
              {
                question: "What happens after project completion?",
                answer:
                  "We provide comprehensive documentation, training, and ongoing support options. Many clients choose our maintenance packages for continued updates, security patches, and feature enhancements.",
              },
              {
                question: "Do you sign NDAs and confidentiality agreements?",
                answer:
                  "Yes, we're happy to sign NDAs and confidentiality agreements before discussing your project. We understand the importance of protecting your intellectual property and business ideas.",
              },
              {
                question: "Can you help with project planning and requirements?",
                answer:
                  "Definitely! Our business analysts and project managers excel at helping clients refine their ideas, define requirements, and create detailed project roadmaps for successful execution.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{faq.question}</h3>
                <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* CTA Section */}
      <Container className="py-16">
        <div className="text-center bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Start Your Digital Transformation?
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            {
              "Join hundreds of satisfied clients who have transformed their businesses with our innovative technology solutions. Get a free consultation and detailed project proposal with no obligations."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={mailto} className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" />
              Schedule Free Consultation
            </a>
            {/* <button className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              Call Us Now
            </button> */}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-6">
            Free consultation • No obligations • Response within 24 hours
          </p>
        </div>
      </Container>
    </div>
  )
}
