import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../layout/Container";
import logo from "../../assets/images/logo.png";
import { heroContent } from "../../data/siteContent";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-[#B08D57]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <Container>
        <div className="relative grid min-h-[calc(100vh-80px)] items-center gap-12 py-10 lg:grid-cols-[1.15fr_0.85fr]">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <span className="inline-flex rounded-full border border-[#B08D57]/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#B08D57]">
              {heroContent.badge}
            </span>

            <h1
              className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              {heroContent.title}
            </h1>

            <p className="mt-6 text-base leading-7 text-slate-300">
              {heroContent.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-lg bg-[#B08D57] px-7 py-3 font-semibold text-[#0F172A] transition-all duration-300 hover:-translate-y-1 hover:bg-[#9A7845]"
              >
                {heroContent.primaryButton}

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-lg border border-[#B08D57] px-7 py-3 font-semibold text-[#B08D57] transition-all duration-300 hover:bg-[#B08D57] hover:text-[#0F172A]"
              >
                {heroContent.secondaryButton}
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-400">
              {heroContent.keywords.map((item, index) => (
                <div key={item} className="flex items-center">
                  <span>{item}</span>
                  {index !== heroContent.keywords.length - 1 && (
                    <span className="mx-3 text-[#B08D57]">•</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src={logo}
              alt="VIDHINAAD"
              className="w-full max-w-[340px] lg:max-w-[420px]"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;