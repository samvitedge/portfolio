import { generateFAQSchema } from "@/lib/getFaqSchema";

export const metadata = {
  title: "About | Samvit Edge",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
