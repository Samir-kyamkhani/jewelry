import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

// FullscreenPopupMenu Component
const FullscreenPopupMenu = ({ closeMenu }) => {
  const menuItems = [
    { label: "Collection", link: "/collection" },
    { label: "About", link: "/about" },
    { label: "Contact Us", link: "/contact" },
    { label: "FAQ ", link: "/faq" },
  ];

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-white to-amber-100 bg-opacity-95 text-black/90 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="fixed inset-0 border m-6 rounded-xl border-gray-400/40 bg-gradient-to-br from-white to-amber-100 bg-opacity-95 text-black/90 flex items-center justify-center z-50"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={closeMenu}
          className="absolute top-6 right-6 p-2 rounded-lg bg-gradient-to-br from-white to-amber-100 border border-[#f5ecd7]/50 hover:bg-[#1a1a1a] transition"
        >
          <AiOutlineClose className="text-black/90" />
        </button>

        <div className="flex flex-col items-center space-y-6 text-center text-3xl md:text-5xl">
          <div className="text-sm text-black/90">--- ● ---</div>
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                onClick={closeMenu}
                to={item.link}
                className="hover:text-black/90 transition-transform duration-300"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
          <div className="text-sm text-black/90">--- ● ---</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Navbar Component
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Collection", link: "/collection" },
    { label: "About", link: "/about" },
    { label: "Contact Us", link: "/contact" },
    { label: "FAQ ", link: "/faq" },
  ];

  return (
    <>
      <header className="w-full flex justify-between items-center px-4 md:px-20 py-6 backdrop-blur-md">
        <Link to={"/"}>
          <h1 className="text-2xl font-bold tracking-widest text-gray-900">
            UIXSHUVO
          </h1>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 text-sm font-semibold text-gray-700">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="hover:text-black/90 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger menu button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-gray-800 hover:scale-110 transition-transform"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </header>

      {/* Fullscreen Popup Menu for Mobile */}
      <AnimatePresence>
        {isOpen && <FullscreenPopupMenu closeMenu={() => setIsOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
