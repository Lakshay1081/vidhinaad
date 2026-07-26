import { motion } from "framer-motion";
import {
  User,
  Rocket,
  Store,
  Building2,
  Briefcase,
  Landmark,
  Building,
} from "lucide-react";

const industries = [
  {
    title: "Individuals",
    icon: User,
    description:
      "Legal guidance for personal, property, family, and civil matters with practical, client-focused solutions.",
  },
  {
    title: "Startups & Entrepreneurs",
    icon: Rocket,
    description:
      "Supporting emerging businesses with incorporation, contracts, compliance, and strategic legal advisory.",
  },
  {
    title: "MSMEs",
    icon: Store,
    description:
      "Helping micro, small, and medium enterprises manage legal compliance, contracts, and business operations.",
  },
  {
    title: "Private Limited Companies",
    icon: Building2,
    description:
      "Comprehensive legal support for corporate governance, regulatory compliance, and commercial transactions.",
  },
  {
    title: "LLPs",
    icon: Briefcase,
    description:
      "Legal assistance for LLP incorporation, partnership agreements, statutory compliance, and advisory services.",
  },
  {
    title: "Banking",
    icon: Landmark,
    description:
      "Professional legal representation in banking, recovery matters, regulatory compliance, and financial documentation.",
  },
  {
    title: "Corporates",
    icon: Building,
    description:
      "End-to-end legal solutions for corporations, including advisory, compliance, contracts, and dispute resolution.",
  },
];

export default function IndustriesWeServe() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 uppercase tracking-[0.3em] text-[#B08D57]">
            Our Clients
          </p>

          <h2 className="font-serif text-4xl font-bold text-[#0F172A] md:text-5xl">
            Industries We Serve
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#B08D57]" />

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            We proudly provide trusted legal services to individuals,
            entrepreneurs, businesses, financial institutions, and corporate
            organizations across diverse sectors.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.1,
                delay: index * 0.1,
              }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#B08D57] hover:shadow-xl"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#B08D57]/10 text-[#B08D57]">
                <industry.icon size={28} />
              </div>

              <h3 className="mb-3 font-serif text-xl font-semibold text-[#0F172A]">
                {industry.title}
              </h3>

              <p className="leading-relaxed text-gray-600">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}