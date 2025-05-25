import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";


const faqdata = [
  {
    question: "What services does Samvit Edge offer?",
    answer:
      "We specialize in full-stack software development, responsive web/app design, and AI-powered automation solutions tailored to your business needs.",
  },
  {
    question: "Can you build AI features into our existing systems?",
    answer:
      "Absolutely! We can integrate AI/ML models into your existing workflows to improve automation, insights, and performance.",
  },
  {
    question: "Do you work with startups or only large companies?",
    answer:
      "We work with businesses of all sizes from early-stage startups to established enterprises offering scalable solutions for every phase.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern tools like React, Next.js, Node.js, Django, Python, MongoDB, and integrate AI models using frameworks like TensorFlow, PyTorch, and OpenAI APIs.",
  },
  {
    question: "How does the development process work?",
    answer:
      "Our agile process includes discovery, planning, iterative development, feedback loops, and post-deployment support to ensure your vision becomes reality.",
  },
  {
    question: "What's your pricing model?",
    answer:
      "We offer flexible pricing hourly, milestone-based, or fixed depending on the project scope and complexity. Let's discuss what fits your goals best.",
  },
]

export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Samvit Edge"
        title="Why Partner with Samvit Edge?"
      >
        {"At Samvit Edge, we don’t just deliver IT solutions we solve real problems with smart design, clean architecture, and rapid execution. Our team blends technical depth with product sense to help businesses move fast and build right."}
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      {/* <SectionTitle
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle> */}

      {/* <Video videoId="fZ0D0cnR88E" /> */}

      {/* <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle> */}

      {/* <Testimonials /> */}

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq faqdata={faqdata} />
      <Cta />
    </Container>
  );
}
