import { CheckCircle } from "lucide-react";
import { Container } from "./Container";
import { BackgroundBeamsWithCollision } from "./BackgroundBeams";
import { Cover } from "./ui/Cover";

interface PageHeaderProps {
  title: string;
  highlightWord: string;
  subtitle?: string;
  tip: string;
  descs?: string[];
  tags?: string[];
}

export default function PageHeader({
  tip,
  title,
  highlightWord,
  subtitle,
  descs = [],
  tags = [],
}: PageHeaderProps) {
  const renderTitle = () => {
    const parts = title.split(new RegExp(`(${highlightWord})`, "i"));
    return (
      <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 lg:text-5xl xl:text-6xl dark:text-white mb-6">
        {parts.map((part, i) =>
          part.toLowerCase() === highlightWord.toLowerCase() ? (
            <Cover key={`highlight-${i}`}>
              <span className="text-primary-600 dark:text-primary-400">
                {part}
              </span>
            </Cover>
          ) : (
            <span key={`part-${i}`}>{part}</span>
          )
        )}
      </h1>
    );
  };

  return (
    <Container>
      <BackgroundBeamsWithCollision className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-4 py-1.5 bg-primary-50 dark:bg-primary-900/30 rounded-full">
            <span className="text-primary-600 dark:text-primary-400 font-medium text-sm">
              {tip}
            </span>
          </div>

          {renderTitle()}

          {subtitle && (
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {subtitle}
            </p>
          )}

          {descs.map((desc, index) => (
            <p
              key={`desc-${index}`}
              className="text-xl text-gray-600 dark:text-gray-300 mb-4 leading-relaxed"
            >
              {desc}
            </p>
          ))}

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-6">
              {tags.map((tag, index) => (
                <span
                  key={`tag-${index}`}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                >
                  <CheckCircle className="w-4 h-4 mr-1.5 text-primary-500" />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </BackgroundBeamsWithCollision>
    </Container>
  );
}
