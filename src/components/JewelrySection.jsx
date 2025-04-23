import { motion } from "framer-motion";

export default function JewelrySection() {
  return (
    <div className="py-10 px-4 sm:px-6 md:px-10 lg:px-16 ">
      <div className="max-w-7xl mx-auto">
        {/* Top Stats */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6 mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <div className="flex -space-x-2">
              {["/jewellery-model.png", "/jewellery-model.png", "/jewellery-model.png"].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Model ${i + 1}`}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border border-white shadow"
                />
              ))}
            </div>
            <p className="text-gray-700 max-w-xs text-sm sm:text-base">
              Jewelry business is highly competitive. Many new and established companies are competing in the market armed.
            </p>
          </div>
          <div className="flex gap-8 sm:gap-10 text-base sm:text-lg font-semibold">
            <div className="text-center md:text-left">
              <p className="text-xl sm:text-2xl">1.5K+</p>
              <span className="text-gray-500 text-sm">Partner Support</span>
            </div>
            <div className="text-center md:text-left">
              <p className="text-xl sm:text-2xl">2.0K+</p>
              <span className="text-gray-500 text-sm">Active Products</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex gap-4 justify-center lg:justify-start flex-wrap sm:flex-nowrap"
          >
            <img
              src="/jewellery-model.png"
              alt="Model 1"
              className="w-40 h-56 sm:w-44 sm:h-60 md:w-48 md:h-64 object-cover rounded-full shadow-lg"
            />
            <img
              src="/jewellery-model.png"
              alt="Model 2"
              className="w-40 h-56 sm:w-44 sm:h-60 md:w-48 md:h-64 object-cover rounded-3xl shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-xl text-center lg:text-left px-2"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug mb-4">
              Jewelry which fits everyone's <br className="hidden sm:block" /> budget and taste!
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-4">
              Jewelry business is highly competitive. Many new and established companies are competing in the market armed.
            </p>
            <p className="text-gray-600 text-sm sm:text-base mb-6">
              Jewelry business is highly competitive. Many new and established companies are competing in the market armed.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 font-medium text-gray-800 border-b border-gray-800 hover:text-amber-600 transition duration-300"
            >
              Explore Collection
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L21 10.5m0 0l-3.75 3.75M21 10.5H3"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
