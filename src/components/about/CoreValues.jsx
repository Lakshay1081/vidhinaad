import { motion } from "framer-motion";
import {
  ShieldCheck,
  Scale,
  Users,
  Lightbulb,
  Briefcase,
  Handshake,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We uphold the highest ethical standards, ensuring honesty, transparency, and accountability in every legal matter.",
  },
  {
    icon: Scale,
    title: "Justice",
    description:
      "We are committed to protecting our clients' rights through fair, strategic, and effective legal representation.",
  },
  {
    icon: Users,
    title: "Client First",
    description:
      "Every strategy begins with understanding our clients' objectives, challenges, and long-term interests.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace modern legal practices and technology to deliver smarter and more efficient solutions.",
  },
  {
    icon: Briefcase,
    title: "Professional Excellence",
    description:
      "Every matter receives meticulous attention, legal precision, and practical commercial insight.",
  },
  {
    icon: Handshake,
    title: "Trust",
    description:
      "Strong client relationships are built on reliability, confidentiality, and consistent legal guidance.",
  },
];

function CoreValues() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B08D57]">
            What Defines Us
          </span>

          <h2
            className="mt-4 text-4xl font-semibold text-[#0F172A] md:text-5xl"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Our Core Values
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            These principles shape every decision we make and every relationship
            we build.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl border border-[#B08D57]/15 bg-[#F8F6F2] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#B08D57] hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#B08D57]/10">
                  <Icon className="h-8 w-8 text-[#B08D57]" />
                </div>

                <h3
                  className="mt-6 text-2xl font-semibold text-[#0F172A]"
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CoreValues;