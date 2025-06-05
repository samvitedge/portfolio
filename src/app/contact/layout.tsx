import { generateFAQSchema } from "@/lib/getFaqSchema";
import { faqs } from "./data";

export const metadata = {
  title: "contact | Samvit Edge",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: generateFAQSchema(faqs) }}
        />
      {children}
    </>
  );
}
