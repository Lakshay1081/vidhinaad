import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[#0F172A]">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#B08D57]/10 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#B08D57]/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[75vh] max-w-7xl items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-8 text-5xl font-semibold leading-tight text-white md:text-7xl"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Comprehensive
            <span className="block text-[#B08D57]">
              Legal Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl"
          >
            From corporate compliance and legal advisory to litigation
            and dispute resolution, VIDHINAAD delivers practical,
            strategic, and client-focused legal solutions tailored to
            individuals, startups, businesses, and organizations.
          </motion.p>


        </div>
      </div>
    </section>
  );
}

export default ServicesHero;