import { Briefcase, ShieldCheck, Scale, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "../layout/Container";

const practiceAreas = [
  {
    icon: Briefcase,
    title: "Corporate Legal Advisory & Drafting",
    description:
      "Strategic legal advisory, contract drafting, due diligence, regulatory guidance, and business documentation designed to protect and strengthen your business.",
  },
  {
    icon: ShieldCheck,
    title: "Corporate Compliance",
    description:
      "End-to-end corporate compliance, ROC filings, governance support, statutory documentation, and secretarial services to keep your business compliant.",
  },
  {
    icon: Scale,
    title: "Litigation & Court Practice",
    description:
      "Representation before Courts, Tribunals, and Statutory Authorities with practical legal strategies and effective dispute resolution.",
  },
];

function PracticeAreas() {
  return (
    <section className="bg-[#F8F6F2] py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B08D57]">
            Practice Areas
          </p>

          <h2
            className="mt-4 text-4xl font-semibold text-[#0F172A] md:text-5xl"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Our Practice Areas
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            VIDHINAAD provides comprehensive legal services designed to meet
            the evolving needs of businesses, startups, entrepreneurs,
            financial institutions, and individuals. We combine strategic legal
            advice, regulatory expertise, and effective representation to
            deliver practical legal solutions across diverse areas of law.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {practiceAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-[#E6DED0] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#B08D57]/10">
                  <Icon
                    size={28}
                    className="text-[#B08D57]"
                  />
                </div>

                <h3 className="text-2xl font-semibold text-[#0F172A]">
                  {area.title}
                </h3>

                <p className="mt-5 leading-7 text-gray-600">
                  {area.description}
                </p>

                <Link
                  to="/services"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-[#B08D57] transition group-hover:gap-3"
                >
                  Learn More

                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-3 rounded-lg bg-[#0F172A] px-8 py-4 font-semibold text-white transition hover:bg-[#1E293B]"
          >
            Explore All Legal Services

            <ArrowRight size={18} />
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default PracticeAreas;