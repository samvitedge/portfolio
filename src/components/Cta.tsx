import { ArrowRight, Mail } from "lucide-react";
import { Container } from "./Container";

export const Cta = () => {
  return (
    <Container className="py-16">
      <div className="relative bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl shadow-elevated overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/50 to-transparent pointer-events-none z-0 rounded-2xl" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32 pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24 pointer-events-none z-0" />

        <div className="relative px-8 py-12 lg:px-16 lg:py-16 z-10">
          <div className="flex flex-wrap items-center justify-between gap-8 lg:flex-nowrap">
            <div className="flex-grow text-center lg:text-left">
              <div className="inline-block mb-4 px-3 py-1 bg-white/20 rounded-full">
                <span className="text-white font-medium text-sm">Ready to get started?</span>
              </div>

              <h2 className="text-3xl font-bold text-white lg:text-4xl mb-4">
                Ready to Elevate Your Business with Smarter IT Solutions?
              </h2>

              <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                Partner with Samvit Edge, where innovation meets precision and your ideas come to life through
                cutting-edge technology.
              </p>
            </div>

            <div className="flex-shrink-0 w-full text-center lg:w-auto">
              <div className="flex flex-col sm:flex-row gap-4 lg:flex-col xl:flex-row">
                <a
                  href="mailto:contact@samvitedge.com"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-primary-600 font-medium py-3 px-6 rounded-lg transition-colors duration-200 shadow-sm"
                >
                  <Mail className="w-5 h-5" />
                  Get in Touch
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 border border-white/20"
                >
                  Schedule Call
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              <p className="text-sm text-white/80 mt-4">
                Free consultation • No obligations • Response within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
