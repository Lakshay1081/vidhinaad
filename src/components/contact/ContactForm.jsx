import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 uppercase tracking-[0.3em] text-[#B08D57]">
            Request Consultation
          </p>

          <h2 className="font-serif text-4xl font-bold text-[#0F172A] md:text-5xl">
            Let's Discuss Your Legal Needs
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#B08D57]" />

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            Fill out the form below and our legal team will get back to you as
            soon as possible. We're committed to providing practical,
            strategic, and client-focused legal solutions.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-gray-200 bg-[#F8F6F2] p-8 shadow-lg md:p-10"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <input
              type="text"
              placeholder="Full Name"
              className="rounded-xl border border-gray-300 bg-white px-5 py-4 outline-none transition focus:border-[#B08D57] focus:ring-2 focus:ring-[#B08D57]/20"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="rounded-xl border border-gray-300 bg-white px-5 py-4 outline-none transition focus:border-[#B08D57] focus:ring-2 focus:ring-[#B08D57]/20"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="rounded-xl border border-gray-300 bg-white px-5 py-4 outline-none transition focus:border-[#B08D57] focus:ring-2 focus:ring-[#B08D57]/20"
            />

            <input
              type="text"
              placeholder="Subject"
              className="rounded-xl border border-gray-300 bg-white px-5 py-4 outline-none transition focus:border-[#B08D57] focus:ring-2 focus:ring-[#B08D57]/20"
            />
          </div>

          <textarea
            rows={6}
            placeholder="Tell us about your legal matter..."
            className="mt-6 w-full resize-none rounded-xl border border-gray-300 bg-white px-5 py-4 outline-none transition focus:border-[#B08D57] focus:ring-2 focus:ring-[#B08D57]/20"
          />

          <div className="mt-8 text-center">
            <button
              type="submit"
              className="rounded-xl bg-[#B08D57] px-10 py-4 font-medium text-white transition-all duration-300 hover:bg-[#9B7A48] hover:shadow-lg"
            >
              Request Consultation
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}