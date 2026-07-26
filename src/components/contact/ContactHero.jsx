import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-[#0F172A] py-20">
      {/* Decorative Background */}
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#B08D57]/10 blur-3xl" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#B08D57]/10 blur-3xl" />

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B08D57]/5 blur-[140px]" />

      {/* Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="font-serif text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
        >
          Let's Start a
          <span className="block text-[#B08D57]">
            Conversation
          </span>
        </motion.h1>

        {/* Gold Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#B08D57]"
        />

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl"
        >
          Whether you need legal advice, corporate compliance support,
          contract drafting, or representation before courts and tribunals,
          our experienced team is ready to provide practical, strategic,
          and result-oriented legal solutions tailored to your needs.
        </motion.p>
      </div>

      
    </section>
  );
}