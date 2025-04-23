import { motion } from "framer-motion";
import { FaYoutube, FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-16   px-4 py-10 md:px-16"
    >
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 w-full">
        {/* Logo and Newsletter */}
        <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">
              U
            </div>
            <span className="font-bold text-lg text-gray-800 tracking-wide">
              UiXSHUVO
            </span>
          </div>

          <div className="flex items-center border border-gray-300 rounded-full overflow-hidden w-full max-w-md transition-all duration-300 focus-within:ring-2 focus-within:ring-black">
            <input
              type="email"
              placeholder="Enter Email"
              className="flex-1 px-4 py-2 bg-transparent outline-none text-sm"
            />
            <button className="px-4 py-2 text-sm font-medium bg-black text-white hover:bg-gray-800 transition-colors">
              Subscribe →
            </button>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-gray-600 text-xl">
          {[FaYoutube, FaInstagram, FaTwitter, FaFacebookF].map((Icon, i) => (
            <motion.a
              key={i}
              whileHover={{ scale: 1.1, color: "#111" }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="p-2 rounded-full border border-gray-300 hover:border-black transition-colors"
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="my-6 border-t border-gray-300"></div>

      {/* Bottom section */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 gap-2">
        <p>© Contraction website 2022</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-black transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-black transition">
            Terms of Service
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
