import { Container } from "@/components/Container"
import { mailto, ourTeam } from "@/components/data"
import { Heart, Target, Users, Award, MapPin, Calendar, Trophy, Lightbulb } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <Container className="pt-16 pb-12">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-5xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white mb-6">
            About Samvit Edge - Your Trusted Technology Partner in Australia
          </h1>
          <p className="text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300 mb-8">
            Samvit Edge is a forward-thinking IT consulting and software development company helping modern businesses
            evolve digitally across Australia and globally. With a strong foundation in software engineering, artificial
            intelligence, and cloud technologies, we deliver solutions that are not just smart but truly transformative
            for your business growth.
          </p>
          <p className="text-lg leading-normal text-gray-600 dark:text-gray-400 mb-12">
            {`Founded with the vision of bridging the gap between innovative technology and practical business solutions,
            we've grown from a passionate team of developers into a comprehensive digital transformation partner. Our
            expertise spans custom software development, AI automation, cloud infrastructure, and user experience
            design, serving clients from startups to Fortune 500 companies.`}
          </p>
        </div>
      </Container>

      {/* Company Stats */}
      <Container className="pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { number: "150+", label: "Projects Completed", icon: Trophy },
            { number: "50+", label: "Happy Clients", icon: Heart },
            { number: "5+", label: "Years Experience", icon: Calendar },
            { number: "15+", label: "Team Members", icon: Users },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-16">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
              <Target className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Mission & Vision</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              <strong>Mission:</strong> {`To empower businesses by engineering smart, scalable, and impactful digital
              solutions that solve real-world problems with clarity, speed, and precision. We believe technology should
              be an enabler, not a barrier, and we're committed to making complex solutions simple and accessible.`}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              <strong>Vision:</strong> {`To become Australia's leading digital transformation partner, recognized for our
              innovative approach, technical excellence, and unwavering commitment to client success. We envision a
              future where every business, regardless of size, can leverage cutting-edge technology to achieve their
              goals and create meaningful impact.`}
            </p>
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Our Core Values</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Innovation:</strong> Continuously exploring new technologies and methodologies
                </li>
                <li>
                  <strong>Quality:</strong> Delivering excellence in every project, no matter the size
                </li>
                <li>
                  <strong>Transparency:</strong> Open communication and honest partnerships
                </li>
                <li>
                  <strong>Growth:</strong> Helping our clients and team members achieve their full potential
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-16">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
              <Heart className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Story & Journey</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              {`What began as a small team of passionate developers in Sydney has evolved into a comprehensive digital
              solutions powerhouse serving clients across Australia, Asia, and beyond. Our journey started in 2019 when
              our founders recognized the growing gap between rapidly advancing technology and businesses' ability to
              effectively implement these innovations.`}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              {`Over the years, we've had the privilege of helping startups scale from concept to market leaders,
              assisting established enterprises in their digital transformation journeys, and supporting non-profits in
              leveraging technology for social impact. Each project has taught us valuable lessons and reinforced our
              commitment to staying ahead of the technology curve while maintaining our focus on practical,
              results-driven solutions.`}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              {`Today, Samvit Edge stands as a testament to the power of combining technical expertise with genuine care
              for our clients' success. We've expanded our services to include AI automation, cloud infrastructure, and
              advanced analytics, but our core philosophy remains unchanged: technology should serve people, not the
              other way around.`}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Milestones</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li>• 2019: Founded in Sydney, Australia</li>
                  <li>• 2020: First enterprise client partnership</li>
                  <li>• 2021: Expanded to AI and automation services</li>
                  <li>• 2022: Achieved AWS Partner status</li>
                  <li>• 2023: Launched cloud transformation practice</li>
                  <li>• 2024: Expanded internationally</li>
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Recognition & Certifications
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li>• AWS Certified Solutions Architect</li>
                  <li>• Microsoft Azure Partner</li>
                  <li>• Google Cloud Platform Partner</li>
                  <li>• ISO 27001 Security Certified</li>
                  <li>• Agile & Scrum Certified Team</li>
                  <li>• Top-rated on Clutch & GoodFirms</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-16">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
              <Award className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              What Sets Samvit Edge Apart
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              {`In a crowded marketplace of technology providers, we distinguish ourselves through our unique combination
              of technical depth, business acumen, and genuine partnership approach. Here's what makes us different:`}
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Lightbulb className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Human-Centered Design</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  We solve problems with empathy and clarity, always putting the end user at the center of our design
                  and development process. Our solutions are intuitive, accessible, and genuinely useful.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Technical Depth</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  We bring deep technical expertise across multiple domains - from AI and machine learning to cloud
                  architecture and cybersecurity. Our team stays current with emerging technologies and best practices.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Iterative Innovation</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Agile and adaptive processes ensure constant growth and improvement. We believe in continuous
                  learning, regular feedback, and iterative enhancement of our solutions.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Partnership Approach</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  We collaborate closely with clients for tailored success, treating every project as a partnership
                  rather than a transaction. Your success is our success.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-16">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
              <Users className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Expert Team</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Our diverse team brings together engineers, designers, AI specialists, cloud architects, and strategic
              consultants each dedicated to bringing your ideas to life through innovative technology solutions. We
              believe in continuous learning, collaboration, and maintaining the highest standards of technical
              excellence.
            </p>

            {/* Team Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8">
              {ourTeam.map((member, index) => (
                <div key={index} className="text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <div className="w-24 h-24 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{member.expertise}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">{member.experience}</p>
                </div>
              ))}
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Our Team Culture</h3>
              <p className="text-gray-700 dark:text-gray-300">
                {`We foster a culture of continuous learning, innovation, and collaboration. Our team regularly
                participates in industry conferences, contributes to open-source projects, and maintains certifications
                in the latest technologies to ensure we're always at the forefront of technological advancement.`}
              </p>
            </div>
          </div>
        </div>

        {/* Location & Global Reach */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 mb-16">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
              <MapPin className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Location & Global Reach
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Headquartered in the vibrant tech hub of Sydney, Australia, Samvit Edge serves clients across multiple
              continents. Our strategic location in the Asia-Pacific region allows us to provide excellent coverage for
              Australian businesses while also serving clients in Asia, Europe, and North America.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Sydney Headquarters</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  {`Located in Mumbai innovation district, our headquarters serves as the central hub for our
                  operations, housing our core development team and leadership.`}
                </p>
                {/* <p className="text-sm text-gray-600 dark:text-gray-400">
                  123 Innovation Drive, Sydney, NSW 2000, Australia
                </p> */}
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Global Client Base</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  We proudly serve clients across Australia, New Zealand, Singapore, Japan, United Kingdom, and the
                  United States, with 24/7 support capabilities.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Remote collaboration • Multiple time zones • 24/7 support
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <div className="text-center bg-gradient-to-r from-gray-50 to-indigo-50 dark:from-gray-800 dark:to-indigo-900/20 rounded-2xl p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            From innovative startups in Silicon Valley to established enterprises across Asia and Europe, Samvit Edge
            has consistently delivered transformative technology solutions that drive real business results. Our client
            retention rate of over 95% speaks to our commitment to long-term partnerships and exceptional service
            delivery.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">95%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Client Retention Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">4.9/5</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Average Client Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </Container>

      {/* CTA Section */}
      <Container className="py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            {`Ready to Work with Indias's Leading Tech Team?`}
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            {
              "Let's explore how our experienced team can help transform your business with innovative, scalable technology solutions tailored to your specific needs."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200" href={mailto}>
              Schedule a Free Consultation
            </a>
            <button className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Download Our Company Profile
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
}
