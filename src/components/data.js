import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/Clip path group.svg";
import benefitTwoImg from "../../public/img/Clip path group (1).svg";

const benefitOne = {
  title: "Why Choose Samvit Edge?",
  desc: "At Samvit Edge, we merge technology with creativity to deliver tailored, scalable, and future-ready digital solutions. Here's what sets us apart:",
  image: benefitOneImg,
  bullets: [
    {
      title: "Human-Centered Collaboration",
      desc: "We take time to deeply understand your business objectives, pain points, and vision. Our approach prioritizes transparency, clear communication, and empathy, ensuring a shared understanding between teams for truly aligned solutions.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Data-Driven Growth",
      desc: "We build data-first systems that go beyond surface-level metrics. From designing efficient database schemas and clean, scalable APIs to optimizing server performance and monitoring real-time analytics, we empower your business to grow intelligently.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Iterate & Innovate",
      desc: "We follow an agile and experimental mindset, rapidly deploying incremental improvements based on user feedback and market trends. This ensures your product remains relevant, competitive, and continuously evolving.",
      icon: <AdjustmentsHorizontalIcon />,
    },
  ],
};


const benefitTwo = {
  title: "What We Provide",
  desc: "From robust backend systems to cutting-edge AI integrations, Samvit Edge delivers full-spectrum digital solutions tailored for modern businesses.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Custom Software Development",
      desc: "We engineer robust digital systems tailored to your exact requirements. With scalable microservices, secure API integrations, and modular codebases, we ensure long-term maintainability, easy upgrades, and seamless performance across platforms.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Web & App Development",
      desc: "Our team crafts high-performance websites and mobile applications using modern tools like Next.js, React, and Flutter. With a mobile-first approach, we focus on speed, accessibility, responsiveness, and user engagement across all devices.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "AI-Powered Automation",
      desc: "We embed artificial intelligence into your workflows from predictive analytics and recommendation engines to intelligent chatbots and automated operations. Leverage the power of machine learning to drive efficiency and innovation.",
      icon: <ChartBarSquareIcon />,
    },
  ],
};


const mailto = "mailto:contact@samvitedge.com?subject=Free Consultation Request&body=Hi Samvit Edge Team,%0D%0A%0D%0AI'm interested in scheduling a free consultation to discuss how your tech solutions can help my business. Please let me know your availability.%0D%0A%0D%0AThanks,%0D%0A[Your Name]"


const ourTeam = [
  {
    name: "Kritika Vyas",
    role: "Growth Marketing Expert",
    expertise: "Digital marketing strategies, growth hacking, customer acquisition, and brand development",
    experience: "4+ Years",
  },
  {
    name: "Manish S.",
    role: "Data Analyst & AI Expert",
    expertise: "Data analysis, social media insights, and artificial intelligence",
    experience: "7+ Years",
  },
  {
    name: "Adarsh D.",
    role: "SQL & Database Administrator",
    expertise: "Relational databases, SQL optimization, and database administration",
    experience: "4+ Years",
  },
  {
    name: "Gauransh R.",
    role: "Python & Backend Expert",
    expertise: "Python development, backend architecture, and APIs",
    experience: "2+ Years",
  },
  {
    name: "Viren C.",
    role: "Software Engineer",
    expertise: "Full-stack development, real-time systems, backend architecture, and algorithmic trading platforms",
    experience: "3+ Years",
  },
  {
    name: "Bhavesh T.",
    role: "Python Backend Developer",
    expertise: "Backend systems, Python frameworks, and automation",
    experience: "3+ Years",
  },
];



export {benefitOne, benefitTwo, mailto, ourTeam};
