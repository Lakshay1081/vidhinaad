import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, FileText, Scale } from "lucide-react";

const practiceAreas = [
  {
    title: "Corporate Compliance",
    icon: Building2,
    description:
      "End-to-end compliance support and secretarial services to keep your business aligned with regulatory, governance, and filing requirements.",
    services: [
      "Secretarial & Corporate Services",
      "Board & General Meeting Documentation",
      "Minutes & Resolutions",
      "Statutory Registers Maintenance",
      "Annual Filings",
      "Search Reports & Inspections",
    ],
  },
  {
    title: "Legal Advisory & Drafting",
    icon: FileText,
    description:
      "End-to-end legal advisory and precise drafting solutions tailored for businesses, startups, corporates, and individuals.",
    services: [
      "Commercial Agreements",
      "Brand Ambassador Agreements",
      "Influencer Agreements",
      "Vendor & Supplier Agreements",
      "Distribution Agreements",
      "Service Agreements",
      "Lease & Leave & License Agreements",
      "NDAs & MoUs",
      "Contract Review & Documentation",
      "Legal Notices & Opinions",
      "Company Law Advisory",
      "Drafting - Writ Petitions (WP), Writ Appeals (WA), Appeals, Legal Notices & Agreements",
      "All Legal Applications & Petitions",
      "Replies, Rejoinders, Affidavits & Other Documents",
      "Court Representation",
      "Dispute Resolution",
    ],
  },
  {
    title: "Litigation & Court Practice",
    icon: Scale,
    description:
      "Strategic representation before Courts, Tribunals, and Authorities to protect your rights and achieve effective resolutions.",
    services: [
      "Civil & Commercial Litigation",
      "DRT & DRAT Matters",
      "SARFAESI Act Proceedings",
      "RERA Matters",
      "Waqf Matters",
      "Property & Land Disputes",
      "Writ Petitions (WP)",
      "Writ Appeals (WA)",
      "Civil Appeals",
      "Legal Notices",
      "Plaints & Written Statements",
      "All Legal Applications & Petitions",
      "Replies, Rejoinders & Affidavits",
      "Legal Notes & Agreements",
      "Court Representation",
      "Dispute Resolution",
    ],
  },
];

function PracticeCard({ area }) {
  const [expanded, setExpanded] = useState(false);

  const displayedServices = expanded
    ? area.services
    : area.services.slice(0, 6);

  return (
    <motion.div
      layout
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#B08D57] hover:shadow-xl"
    >
      {/* Icon */}
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#B08D57]/10 text-[#B08D57]">
        <area.icon size={28} />
      </div>

      {/* Title */}
      <h3 className="mb-3 font-serif text-2xl font-semibold text-[#0F172A]">
        {area.title}
      </h3>

      {/* Description */}
      <p className="mb-6 leading-relaxed text-gray-600">
        {area.description}
      </p>

      {/* Services */}
      <motion.ul layout className="space-y-3">
        <AnimatePresence initial={false}>
          {displayedServices.map((service) => (
            <motion.li
              key={service}
              layout
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="flex items-start gap-3 overflow-hidden text-gray-700"
            >
              <span className="mt-1 text-lg text-[#B08D57]">•</span>
              <span>{service}</span>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {/* Show More */}
      {area.services.length > 6 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-6 font-medium text-[#B08D57] transition-colors hover:text-[#9B7A48]"
        >
          {expanded ? "Show Less ↑" : "Show More ↓"}
        </button>
      )}
    </motion.div>
  );
}

export default function PracticeAreas() {
  return (
    <section className="bg-[#F8F6F2] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 uppercase tracking-[0.3em] text-[#B08D57]">
            Our Expertise
          </p>

          <h2 className="font-serif text-4xl font-bold text-[#0F172A] md:text-5xl">
            Practice Areas
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#B08D57]" />

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
            Comprehensive legal services designed to support businesses,
            startups, organizations, and individuals with strategic, practical,
            and result-oriented legal solutions.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
          {practiceAreas.map((area) => (
            <PracticeCard key={area.title} area={area} />
          ))}
        </div>
      </div>
    </section>
  );
}