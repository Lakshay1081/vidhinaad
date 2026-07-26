import { motion } from "framer-motion";
import {
  MessageSquare,
  Search,
  FileText,
  Scale,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    icon: MessageSquare,
    description:
      "We begin by understanding your legal concerns, objectives, and the background of your matter to provide the right direction.",
  },
  {
    number: "02",
    title: "Case Assessment",
    icon: Search,
    description:
      "Our legal team carefully reviews documents, identifies potential risks, and evaluates all available legal options.",
  },
  {
    number: "03",
    title: "Strategy & Documentation",
    icon: FileText,
    description:
      "We develop a customized legal strategy and prepare all agreements, notices, petitions, and supporting documentation.",
  },
  {
    number: "04",
    title: "Representation & Resolution",
    icon: Scale,
    description:
      "Whether through negotiations, tribunals, or courts, we represent your interests with professionalism until resolution.",
  },
];

function HowWeWork() {
  return (
    <section className="bg-[#0F172A] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B08D57]">
            Our Process
          </span>

          <h2
            className="mt-4 text-5xl text-white"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            How We Work
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Every legal matter deserves careful planning, clear
            communication, and strategic execution. Our structured
            approach ensures every client receives dedicated attention
            from consultation to resolution.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Line */}
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-[#B08D57]/30 lg:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#B08D57]"
              >
                {/* Number */}
                <span className="text-sm font-bold tracking-widest text-[#B08D57]">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="mt-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#B08D57]/10">
                  <Icon className="h-7 w-7 text-[#B08D57]" />
                </div>

                {/* Title */}
                <h3
                  className="mt-6 text-2xl text-white"
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                  }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-7 text-slate-300">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;