import { motion } from "framer-motion";
import {
  Building2,
  FileCheck,
  FileText,
  Landmark,
  Scale,
  ShieldCheck,
  Handshake,
  Lightbulb,
  Briefcase,
} from "lucide-react";

import Container from "../layout/Container";

import devanshi from "../../assets/images/devanshi.png";
import mudrika from "../../assets/images/mudrika.png";

const partners = [
  {
    name: "Devanshi Gupta",
    role: "Co-Founding Partner",
    image: devanshi,

    expertise: [
      {
        icon: ShieldCheck,
        text: "Corporate Compliance",
      },
      {
        icon: FileCheck,
        text: "ROC Compliance",
      },
      {
        icon: Building2,
        text: "Company Law & Corporate Governance",
      },
      {
        icon: FileText,
        text: "Commercial Drafting",
      },
      {
        icon: Briefcase,
        text: "Secretarial & Regulatory Advisory",
      },
    ],
  },

  {
    name: "Mudrika Hudilwal",
    role: "Co-Founding Partner",
    image: mudrika,

    expertise: [
      {
        icon: Scale,
        text: "Litigation",
      },
      {
        icon: Handshake,
        text: "Dispute Resolution",
      },
      {
        icon: Landmark,
        text: "Court Representation",
      },
      {
        icon: Scale,
        text: "DRT & DRAT Matters",
      },
      {
        icon: FileText,
        text: "SARFAESI Act Matters",
      },
      {
        icon: Building2,
        text: "RERA Litigation & Advisory",
      },
      {
        icon: FileText,
        text: "Waqf Law Matters",
      },
      {
        icon: Lightbulb,
        text: "Legal Strategy",
      },
    ],
  },
];

function FoundingPartners() {
  return (
    <section className="bg-[#F8F6F2] py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B08D57]">
            Leadership
          </p>

          <h2
            className="mt-4 text-4xl font-semibold text-[#0F172A] md:text-5xl"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Meet Our Founding Partners
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            VIDHINAAD is led by experienced legal professionals committed to
            delivering strategic legal advice, ethical representation, and
            practical solutions for businesses and individuals.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 xl:grid-cols-2">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="overflow-hidden rounded-3xl border border-[#E6DED0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-2 bg-[#B08D57]" />

              <div className="p-8">
                <div className="flex flex-col items-center">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="h-60 w-48 rounded-2xl object-cover shadow-lg"
                  />

                  <h3
                    className="mt-8 text-3xl font-semibold text-[#0F172A]"
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                    }}
                  >
                    {partner.name}
                  </h3>

                  <p className="mt-2 font-medium text-[#B08D57]">
                    {partner.role}
                  </p>

                  <div className="mt-8 h-px w-24 bg-[#B08D57]" />
                </div>

                <div className="mt-10 space-y-5">
                                    {partner.expertise.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.text}
                        className="flex items-start gap-3 rounded-xl border border-[#EFE8DC] p-3 transition-all duration-300 hover:border-[#B08D57]/40 hover:bg-[#FAF8F4]"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#B08D57]/10">
                          <Icon
                            size={18}
                            className="text-[#B08D57]"
                          />
                        </div>

                        <p className="font-medium leading-6 text-[#374151]">
                          {item.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-20 max-w-4xl rounded-3xl border border-[#E6DED0] bg-white p-10 text-center shadow-sm"
        >
          <h3
            className="text-3xl font-semibold text-[#0F172A]"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Experienced Leadership. Trusted Legal Guidance.
          </h3>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our founding partners bring together expertise in corporate
            advisory, compliance, litigation, dispute resolution, and legal
            strategy, ensuring that every client receives practical,
            commercially sound, and results-driven legal solutions.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

export default FoundingPartners;