import { generateFAQSchema } from "@/lib/getFaqSchema";
import { faqdata } from "./data";

export const metadata = {
  title: "Services | Samvit Edge",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: generateFAQSchema(faqdata) }}
        />
      {children}
    </>
  );
}
