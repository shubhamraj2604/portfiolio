import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("Sending message...");
    
    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLScGTrRFQXI760Cbeb7AKd8bv_gMef7Kv9gmocXoeVMJlWW7pQ/formResponse";
    
    const formEntries = new URLSearchParams();
    formEntries.append("entry.890432005", formData.name);
    formEntries.append("entry.500373926", formData.email);
    formEntries.append("entry.1311731411", formData.message);

    try {
      await fetch(formURL, {
        method: "POST",
        mode: "no-cors",
        body: formEntries,
      });

      setStatusMessage("Message sent successfully. Thanks for reaching out.");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatusMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-shell pb-24">
      <div className="section-inner">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title mb-12"
        >
          Contact
        </motion.h2>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="glass-panel rounded-2xl border-cyan-300/20 p-8"
          >
            <h3 className="text-2xl font-bold text-cyan-200">Let&apos;s build something great</h3>
            <p className="mt-3 leading-relaxed">
              I am open to internships, collaborations, and product development opportunities.
              Drop a message and I will get back to you soon.
            </p>

            <div className="mt-8">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">Email</p>
              <a href="mailto:raj669682@gmail.com" className="mt-2 inline-block text-lg font-semibold text-slate-100 transition hover:text-cyan-200">
                raj669682@gmail.com
              </a>
            </div>

            <motion.div
              className="mt-8 flex items-center gap-5 text-slate-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <a href="https://github.com/shubhamraj2604" target="_blank" rel="noopener noreferrer" className="transition hover:text-cyan-200">
                <FaGithub size={28} />
              </a>
              <a href="https://www.linkedin.com/in/shubham-raj26/" target="_blank" rel="noopener noreferrer" className="transition hover:text-cyan-200">
                <FaLinkedin size={28} />
              </a>
            </motion.div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel rounded-2xl border-cyan-300/20 p-8"
          >
            <div className="mb-5">
              <label className="mb-2 block text-sm font-semibold uppercase tracking-wider text-cyan-200">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-cyan-200/20 bg-slate-900/80 px-4 py-3 text-white outline-none transition focus:border-cyan-300"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-5">
              <label className="mb-2 block text-sm font-semibold uppercase tracking-wider text-cyan-200">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-cyan-200/20 bg-slate-900/80 px-4 py-3 text-white outline-none transition focus:border-cyan-300"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-6">
              <label className="mb-2 block text-sm font-semibold uppercase tracking-wider text-cyan-200">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full rounded-xl border border-cyan-200/20 bg-slate-900/80 px-4 py-3 text-white outline-none transition focus:border-cyan-300"
                placeholder="Tell me about your idea"
                required
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 py-3 font-bold uppercase tracking-wider text-white transition hover:from-cyan-400 hover:to-blue-400 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>

            {statusMessage && (
              <p className="mt-4 text-sm text-cyan-100">{statusMessage}</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
