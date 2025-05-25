export interface PageProps {
  params: {
    slug: string;
  };
  searchParams: {};
}



export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQData = FAQItem[];