import { Container } from "@/components/Container"
import { mailto, ourTeam } from "@/components/data"
import PageHeader from "@/components/PageHeader"
import { Heart, Target, Users, Award, MapPin, Calendar, Trophy, Lightbulb, Globe, CheckCircle, Coffee } from "lucide-react"

const companyStats = [
  { number: "150+", label: "Projects Completed", icon: Trophy },
  { number: "50+", label: "Happy Clients", icon: Heart },
  { number: "1+", label: "Years Experience", icon: Calendar },
  { number: "15+", label: "Team Members", icon: Users },
]

// Data for features section
const features = [
  {
    icon: Lightbulb,
    title: "Human-Centered Design",
    description: "We solve problems with empathy and clarity, always putting the end user at the center of our design and development process."
  },
  {
    icon: Target,
    title: "Technical Depth",
    description: "We bring deep technical expertise across multiple domains from AI and machine learning to cloud architecture and cybersecurity."
  },
  {
    icon: Users,
    title: "Iterative Innovation",
    description: "Agile and adaptive processes ensure constant growth and improvement through continuous learning and feedback."
  },
  {
    icon: Heart,
    title: "Partnership Approach",
    description: "We collaborate closely with clients for tailored success, treating every project as a partnership."
  }
]

const trustStats = [
  { value: "95%", label: "Client Retention Rate" },
  { value: "4.9/5", label: "Average Client Rating" },
  { value: "100%", label: "On-Time Delivery" }
]


const Section = ({ icon: Icon, title, children, className = "" }) => (
  <div className={`mb-16 ${className}`}>
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-card p-8 hover:shadow-elevated transition-shadow duration-300">
      <div className="flex flex-col lg:flex-row lg:items-start gap-8">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-primary-50 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
            <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">{title}</h2>
          {children}
        </div>
      </div>
    </div>
  </div>
)

// Reusable Stats Component with improved styling
const Stats = ({ stats }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
    {stats.map((stat, index) => (
      <div
        key={index}
        className="text-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-subtle hover:shadow-card transition-shadow duration-300"
      >
        <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
          <stat.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
        </div>
        <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">{stat.number}</div>
        <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
      </div>
    ))}
  </div>
)

// Reusable Feature Cards Component with improved styling
const FeatureCards = ({ features }) => (
  <div className="grid gap-6 md:grid-cols-2">
    {features.map((feature, index) => (
      <div
        key={index}
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-subtle hover:shadow-card transition-shadow duration-300 group"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-primary-50 dark:bg-primary-900/30 p-2 rounded-md group-hover:bg-primary-100 dark:group-hover:bg-primary-800/50 transition-colors duration-200">
            <feature.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
      </div>
    ))}
  </div>
)
export default function AboutPage() {
  // Data for stats section
 
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
    <PageHeader
      title="Your Trusted Technology Partner in India"
      highlightWord="Technology Partner"
      tip="About Us"
      subtitle="Samvit Edge is a forward-thinking IT consulting and software development company helping modern businesses evolve digitally across India and globally."
      descs={[
        "Founded with the vision of bridging the gap between innovative technology and practical business solutions, we've grown from a passionate team of developers into a comprehensive digital transformation partner."
      ]}
    />

      {/* Company Stats */}
      <Container className="pb-16">
        <Stats stats={companyStats} />

        {/* Mission Section */}
        <Section icon={Target} title="Our Mission & Vision">
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-l-4 border-primary-500 shadow-subtle">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Mission</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                To empower businesses by engineering smart, scalable, and impactful digital solutions that solve
                real-world problems with clarity, speed, and precision.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-l-4 border-primary-500 shadow-subtle">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Vision</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {`To become India's leading digital transformation partner, recognized for our innovative approach,
                technical excellence, and unwavering commitment to client success.`}
              </p>
            </div>

            <div className="bg-primary-50 dark:bg-primary-900/30 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h3>
              <ul className="space-y-3">
                {[
                  { value: "Innovation", desc: "Continuously exploring new technologies and methodologies" },
                  { value: "Quality", desc: "Delivering excellence in every project, no matter the size" },
                  { value: "Transparency", desc: "Open communication and honest partnerships" },
                  { value: "Growth", desc: "Helping our clients and team members achieve their full potential" },
                ].map((value, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="bg-white dark:bg-gray-800 p-1.5 rounded-md mt-0.5">
                      <CheckCircle className="w-4 h-4 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-white">{value.value}:</span>{" "}
                      <span className="text-gray-600 dark:text-gray-300">{value.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Story Section */}
        <Section icon={Heart} title="Our Story & Journey">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {`What began as a small team of passionate developers in Mumbai has evolved into a comprehensive digital
              solutions powerhouse serving clients across India, Asia, and beyond.`}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {`Over the years, we've had the privilege of helping startups scale from concept to market leaders,
              assisting established enterprises in their digital transformation journeys.`}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              {`Today, Samvit Edge stands as a testament to the power of combining technical expertise with genuine care
              for our clients' success.`}
            </p>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-subtle">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Recognition & Certifications</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "AWS Certified Solutions Architect",
                  "Microsoft Azure Partner",
                  "Google Cloud Platform Partner",
                  "ISO 27001 Security Certified",
                  "Agile & Scrum Certified Team",
                  "Top-rated on Clutch & GoodFirms",
                ].map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-gray-50 dark:bg-gray-700 p-3 rounded-lg text-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* What Sets Us Apart */}
        <Section icon={Award} title="What Sets Samvit Edge Apart">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            {`In a crowded marketplace of technology providers, we distinguish ourselves through our unique combination
            of technical depth, business acumen, and genuine partnership approach.`}
          </p>
          <FeatureCards features={features} />
        </Section>

        {/* Team Section */}
        <Section icon={Users} title="Meet Our Expert Team">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Our diverse team brings together engineers, designers, AI specialists, cloud architects, and strategic
            consultants each dedicated to bringing your ideas to life through innovative technology solutions.
          </p>

          {/* Team Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
            {ourTeam.map((member, index) => (
              <div
                key={index}
                className="text-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-subtle hover:shadow-card transition-shadow duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{member.expertise}</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">{member.experience}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary-50 dark:bg-primary-900/30 p-6 rounded-xl">
            <div className="flex items-start gap-3">
              <Coffee className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Our Team Culture</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {`We foster a culture of continuous learning, innovation, and collaboration. Our team regularly
                  participates in industry conferences and maintains certifications in the latest technologies.`}
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Location & Global Reach */}
        <Section icon={MapPin} title="Our Location & Global Reach">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Headquartered in the vibrant tech hub of Mumbai, India, Samvit Edge serves clients across multiple
            continents with excellent coverage for Indian businesses while also serving clients globally.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-subtle">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <div className="bg-primary-50 dark:bg-primary-900/30 p-1.5 rounded-md">
                  <MapPin className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                </div>
                Mumbai Headquarters
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                {`Located in Mumbai innovation district, our headquarters serves as the central hub for our
                operations, housing our core development team and leadership.`}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-subtle">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <div className="bg-primary-50 dark:bg-primary-900/30 p-1.5 rounded-md">
                  <Globe className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                </div>
                Global Client Base
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                We proudly serve clients across India, New Zealand, Singapore, Japan, United Kingdom, and the United
                States, with 24/7 support capabilities.
              </p>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-gray-700 dark:text-gray-300">
                  Remote collaboration
                </span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-gray-700 dark:text-gray-300">
                  Multiple time zones
                </span>
                <span className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-gray-700 dark:text-gray-300">
                  24/7 support
                </span>
              </div>
            </div>
          </div>
        </Section>

        {/* Trust Section */}
        <div className="text-center bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/20 rounded-2xl p-12 shadow-elevated mb-16">
          <div className="inline-block mb-6 px-4 py-1.5 bg-white dark:bg-gray-800 rounded-full shadow-sm">
            <span className="text-primary-600 dark:text-primary-400 font-medium text-sm">Client Success</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Trusted by Businesses Worldwide</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            From innovative startups in Silicon Valley to established enterprises across Asia and Europe, Samvit Edge
            has consistently delivered transformative technology solutions that drive real business results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {trustStats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-subtle hover:shadow-card transition-shadow duration-300"
              >
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* CTA Section */}
      <Container className="py-16">
        <div className="text-center bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-card max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            {`Ready to Work with India's Leading Tech Team?`}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Get in touch today and start your digital transformation journey with Samvit Edge.
          </p>
          <a
            href="mailto:info@samvitedge.com?subject=Project%20Inquiry"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-8 py-3 text-lg font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900 shadow-sm transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </Container>
    </div>

  )
}