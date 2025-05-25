import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero.png";

export const Hero = () => {
  return (
    <>
      <div className="flex flex-wrap mb-8 pt-8">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Empowering Digital Evolution for Modern Businesses
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              {"At Samvit Edge, we don’t just build software. we engineer smart, scalable, and future-ready tech solutions that drive impact."}
            </p>
            <div className="pt-10">
              <h1 className="text-xl md:text-1xl font-bold text-gray-900 dark:text-white mb-6">
                {"Whether you're a startup or scaling enterprise, we're here to:"}
              </h1>
              <ul className="text-lg md:text-xl text-gray-700 dark:text-gray-300 space-y-4 mb-8">
                <li className="flex items-center gap-2">
                  <span>Develop robust backends</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>Craft beautiful frontends</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>Deliver full-stack digital platforms</span>
                </li>
              </ul>

              <p className="text-lg md:text-xl text-gray-800 dark:text-white font-medium">
                {"Let's bring your ideas to life with "}
                <span className="text-indigo-600 font-semibold">clarity</span>,
                <span className="text-indigo-600 font-semibold"> speed</span>, and
                <span className="text-indigo-600 font-semibold"> precision</span>.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </>
  );
}


