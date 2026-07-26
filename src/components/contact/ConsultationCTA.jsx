import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ConsultationCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A] py-24">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(176,141,87,0.15),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(176,141,87,0.08),transparent_45%)]" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Label */}
          <p className="mb-4 uppercase tracking-[0.3em] text-[#B08D57]">
            Schedule a Consultation
          </p>

          {/* Heading */}
          <h2 className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Your Legal Matter
            <span className="block text-[#B08D57]">
              Deserves Trusted Guidance
            </span>
          </h2>

          {/* Divider */}
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#B08D57]" />

          {/* Description */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-300">
            Whether you require legal advisory, corporate compliance,
            contract drafting, or representation before courts and
            tribunals, our experienced team is ready to provide practical,
            strategic, and result-oriented legal solutions tailored to your
            needs.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#B08D57] px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-[#9B7A48] hover:shadow-lg"
            >
              Request Consultation
              <ArrowRight size={18} />
            </Link>

            <a
              href="tel:+91XXXXXXXXXX"
              className="rounded-xl border border-[#B08D57] px-8 py-4 font-medium text-[#B08D57] transition-all duration-300 hover:bg-[#B08D57] hover:text-white"
            >
              Call Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}