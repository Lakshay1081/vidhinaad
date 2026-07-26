import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const reasons = [
  "Strategic legal advice tailored to every client.",
  "Corporate and litigation expertise under one roof.",
  "Transparent communication and ethical representation.",
  "Technology-driven and future-ready legal practice.",
  "Practical solutions focused on real business outcomes.",
  "Long-term partnerships built on trust and confidence.",
];

function WhyVidhinaad() {
  return (
    <section className="bg-[#0F172A] py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Why Choose VIDHINAAD
          </span>

          <h2
            className="mt-5 text-4xl font-semibold leading-tight text-white md:text-5xl"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Legal Excellence
            <br />
            Built Around
            <span className="text-[#D4AF37]"> Your Success.</span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-300">
            We combine legal expertise, commercial understanding,
            and unwavering integrity to help individuals,
            entrepreneurs, and businesses make informed legal decisions
            with confidence.
          </p>

          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-[#B08D57] px-7 py-4 font-medium text-white transition duration-300 hover:bg-[#9B7A48]"
          >
            Get Legal Consultation
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-5"
        >
          {reasons.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-[#B08D57]/40 hover:bg-white/10"
            >
              <CheckCircle2
                className="mt-1 shrink-0 text-[#D4AF37]"
                size={22}
              />

              <p className="leading-7 text-gray-300">
                {item}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default WhyVidhinaad;