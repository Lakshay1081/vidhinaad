import {
  Briefcase,
  Users,
  Lightbulb,
  ShieldCheck,
  Scale,
  Handshake,
} from "lucide-react";
import { motion } from "framer-motion";
import Container from "../layout/Container";

const features = [
  {
    icon: Briefcase,
    title: "Strategic Legal Expertise",
    description:
      "Thoughtful legal advice backed by research, practical experience, and a deep understanding of legal and commercial challenges.",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description:
      "We build relationships through trust, transparency, responsiveness, and legal guidance aligned with your goals.",
  },
  {
    icon: Lightbulb,
    title: "Practical & Commercial Solutions",
    description:
      "We focus on practical, commercially viable legal solutions that help businesses and individuals move forward confidently.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity & Professionalism",
    description:
      "Ethics, confidentiality, and professional responsibility remain at the core of every legal service we provide.",
  },
  {
    icon: Scale,
    title: "Comprehensive Legal Support",
    description:
      "From advisory and drafting to compliance and dispute resolution, we provide complete legal support under one roof.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnerships",
    description:
      "We strive to become trusted legal advisors by building lasting relationships based on confidence and results.",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B08D57]">
            Why Choose VIDHINAAD
          </p>

          <h2
            className="mt-4 text-4xl font-semibold text-[#0F172A] md:text-5xl"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Why Choose VIDHINAAD
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            At VIDHINAAD, we believe exceptional legal service goes beyond
            interpreting the law. We combine strategic thinking, commercial
            understanding, and unwavering integrity to deliver practical legal
            solutions that protect your interests and support your long-term
            goals.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-[#E6DED0] bg-[#F8F6F2] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 h-1 w-16 rounded-full bg-[#B08D57]" />

                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#B08D57]/10">
                  <Icon
                    size={28}
                    className="text-[#B08D57]"
                  />
                </div>

                <h3 className="text-2xl font-semibold text-[#0F172A]">
                  {feature.title}
                </h3>

                <p className="mt-5 leading-7 text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      
      </Container>
    </section>
  );
}

export default WhyChooseUs;