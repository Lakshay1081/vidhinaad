import { motion } from "framer-motion";
import heroBg from "../../assets/images/about-hero.jpg";

function AboutHero() {
  return (
    <section
      className="relative flex min-h-[75vh] items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0F172A]/55" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/70 via-[#0F172A]/45 to-[#0F172A]/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-semibold leading-tight text-white md:text-7xl"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          Built on Integrity.
          <br />
          <span className="text-[#D4AF37]">
            Driven by Excellence.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-200 md:text-xl"
        >
          At VIDHINAAD, we combine legal expertise, ethical practice,
          and strategic thinking to help individuals, startups, and
          businesses navigate every legal challenge with confidence.
        </motion.p>
      </div>

    </section>
  );
}

export default AboutHero;