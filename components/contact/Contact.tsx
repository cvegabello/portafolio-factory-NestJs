"use client";

import ContactInfo from "@/components/ui/ContactInfo";
import ContactForm from "@/components/ui/ContactForm";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import { contactData } from "@/data/contact";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen! bg-[#050505] py-20! px-4! sm:px-6! lg:px-8! overflow-hidden"
    >
      <div className="max-w-7xl mx-auto!">
        <SectionTitle title={contactData.sectionTitle} />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid mt-18!  grid-cols-1 lg:grid-cols-2 gap-12! lg:gap-16! items-start"
        >
          {/* Left Column: Contact Info */}
          <div className="w-full">
            <ContactInfo />
          </div>

          {/* Right Column: Contact Form */}
          <div className="w-full">
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
