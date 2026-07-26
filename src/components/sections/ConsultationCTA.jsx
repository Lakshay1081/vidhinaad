import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck } from "lucide-react";
import Container from "../layout/Container";

function ConsultationCTA() {
  return (
    <section className="bg-[#0F172A] py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl rounded-3xl border border-[#B08D57]/30 bg-gradient-to-br from-[#111C31] to-[#16233F] p-10 md:p-16 text-center shadow-2xl"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#B08D57]/15">
            <CalendarCheck className="h-8 w-8 text-[#D4AF37]" />
          </div>

          <h2
            className="mt-8 text-4xl font-semibold text-white md:text-5xl"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Need Trusted Legal Guidance?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Whether you're a startup, business, or an individual, our team is
            committed to providing strategic legal advice, precise
            documentation, regulatory compliance, and effective representation
            tailored to your needs.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#B08D57] px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:bg-[#9B7A48] hover:shadow-lg"
            >
              Book a Consultation
              <ArrowRight size={20} />
            </a>

            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-xl border border-[#B08D57]/40 px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:border-[#D4AF37] hover:bg-white/5"
            >
              Explore Our Services
            </a>
          </div>

          <div className="mt-12 grid gap-6 border-t border-white/10 pt-10 md:grid-cols-3">
            <div>
              <h3 className="text-2xl font-semibold text-[#D4AF37]">
                Corporate Advisory
              </h3>
              <p className="mt-2 text-gray-400">
                Strategic legal solutions for businesses and startups.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#D4AF37]">
                Compliance
              </h3>
              <p className="mt-2 text-gray-400">
                End-to-end regulatory and corporate compliance support.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#D4AF37]">
                Litigation
              </h3>
              <p className="mt-2 text-gray-400">
                Strong representation with practical legal strategies.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

export default ConsultationCTA;