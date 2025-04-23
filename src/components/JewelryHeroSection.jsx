import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function JewelryHeroSection() {
  return (
    <div className="min-h-screen w-full px-4 md:px-20 py-6 font-serif overflow-hidden pb-16">
      {/* Main Section */}
      <main className="grid md:grid-cols-2 gap-10 items-center mt-8 sm:mt-15">
        {/* Text Area */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            The Happiness <br /> of Women
          </h2>
          <h3 className="text-2xl sm:text-3xl text-gray-800">
            Elegant. Timeless. <br /> Jewelry Collections
          </h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 text-base font-medium border-b-2 border-gray-900 hover:gap-4 transition-all duration-300"
          >
            Explore Collection <FaArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center"
        >
          {/* Main Center Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative z-10"
          >
            <img
              src="/jewellery-model.png"
              alt="Jewelry"
              className="w-60 md:w-80 rounded-xl object-cover shadow-xl"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-32 h-32 flex items-center justify-center text-xs border border-gray-400/40 rounded-full bg-red-400/20 text-white shadow-lg text-center font-medium">
              WATCH OUR HISTORY
            </div>
          </motion.div>

          {/* Decorative Left Image */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="absolute left-2 bottom-4 md:bottom-20 md:-left-16"
          >
            <img
              src="/jewellery-model.png"
              alt="Decor Left"
              className="w-20 md:w-28 rounded-full object-cover shadow-md"
            />
          </motion.div>

          {/* Decorative Right Image */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="absolute right-2 top-4 md:top-10 md:-right-10"
          >
            <img
              src="/jewellery-model.png"
              alt="Decor Right"
              className="w-20 md:w-28 rounded-full object-cover shadow-md"
            />
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
