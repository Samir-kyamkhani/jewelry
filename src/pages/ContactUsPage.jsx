import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactUsPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy validation
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      setError(true);
      setFormSubmitted(false);
      return;
    }

    setFormSubmitted(true);
    setError(false);
    form.reset();
  };

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-amber-100 text-black font-sans px-6 lg:px-20 py-16">
      {/* Header */}
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight">Contact Us</h1>
        <p className="text-lg text-black max-w-xl mx-auto">
          We’d love to hear from you. Whether you have a question about our products, shipping, or anything else—our team is ready to help.
        </p>
      </motion.div>

      {/* Content Grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Contact Info */}
        <motion.div
          className="bg-white/40 backdrop-blur-md p-6 rounded-3xl shadow-lg col-span-1 md:col-span-2"
          {...fadeIn}
        >
          <h2 className="text-2xl font-bold text-amber-800 mb-4">Our Office</h2>
          <p className="text-black">123 Gold Street, Glam City, GL 45678</p>
          <p className="text-black mt-2">
            📞 <a href="tel:+12345678901" className="hover:underline">+1 234 567 8901</a>
          </p>
          <p className="text-black">
            📧 <a href="mailto:support@jewelleryshop.com" className="hover:underline">support@jewelleryshop.com</a>
          </p>
        </motion.div>

        {/* Image 1 */}
        <motion.div
          className="rounded-3xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src="/2.png"
            alt="Jewellery"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/40 backdrop-blur-md p-8 rounded-3xl shadow-lg col-span-1 md:col-span-2"
          {...fadeIn}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-black mb-1">Name</label>
              <input
                type="text"
                name="name"
                aria-label="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-black/20 focus:outline-none focus:ring-2 focus:ring-black/30"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-1">Email</label>
              <input
                type="email"
                name="email"
                aria-label="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-black/20 focus:outline-none focus:ring-2 focus:ring-black/30"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-sm font-medium text-black mb-1">Message</label>
            <textarea
              name="message"
              aria-label="Your Message"
              rows="5"
              className="w-full px-4 py-3 rounded-lg border border-black/20 focus:outline-none focus:ring-2 focus:ring-black/30"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="mt-6 w-full bg-amber-700 text-white py-3 rounded-lg font-semibold hover:bg-amber-800 transition-transform transform hover:scale-105"
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>

          {/* Feedback */}
          {formSubmitted && (
            <p className="mt-4 text-green-700 font-medium">Message sent successfully!</p>
          )}
          {error && (
            <p className="mt-4 text-red-600 font-medium">Please fill in all fields correctly.</p>
          )}
        </motion.form>

        {/* Image 2 */}
        <motion.div
          className="rounded-3xl overflow-hidden shadow-lg hidden lg:block"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img
            src="/1.png"
            alt="Jewellery Closeup"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
