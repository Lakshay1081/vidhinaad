import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

function MissionVision() {
  return (
    <section className="bg-[#F8F6F2] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B08D57]">
            Our Purpose
          </span>

          <h2
            className="mt-4 text-4xl font-semibold text-[#0F172A] md:text-5xl"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Mission & Vision
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every decision we make is guided by integrity, excellence, and an
            unwavering commitment to our clients.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-[#B08D57]/20 bg-white p-10 shadow-lg"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#B08D57]/10">
              <Target className="h-8 w-8 text-[#B08D57]" />
            </div>

            <h3
              className="mt-8 text-3xl font-semibold text-[#0F172A]"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Our Mission
            </h3>

            <p className="mt-6 leading-8 text-gray-600">
              To deliver exceptional legal services rooted in integrity,
              expertise, and innovation through solutions that are practical,
              commercially sound, and built around what our clients actually
              need.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              We safeguard our clients' interests through strategic advice,
              precise documentation, and effective representation, earning
              confidence through relationships built on trust.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-[#0F172A] p-10 shadow-lg"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#B08D57]/20">
              <Eye className="h-8 w-8 text-[#D4AF37]" />
            </div>

            <h3
              className="mt-8 text-3xl font-semibold text-white"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Our Vision
            </h3>

            <p className="mt-6 leading-8 text-gray-300">
              To be one of India's most trusted and progressive legal practices,
              setting new standards in advisory, litigation, and corporate
              services.
            </p>

            <p className="mt-5 leading-8 text-gray-300">
              We're building a future where quality legal counsel isn't a
              privilege but a given—accessible, technology-driven, and focused
              on outcomes that matter.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;