import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

export default function JewelryCatalog() {
  const [activeTab, setActiveTab] = useState("Necklaces");
  const tabs = [
    { name: "Bracelets", images: ["/1.png", "/2.png"] },
    { name: "Rings", images: ["/3.png", "/4.png"] },
    { name: "Necklaces", images: ["/5.png", "/2.png"] },
    { name: "Earrings", images: ["/1.png", "/3.png"] }
  ];

  const activeTabImages = tabs.find(tab => tab.name === activeTab)?.images || [];

  return (
    <div className="px-16 py-10 max-w-screen-xl mx-auto font-serif text-[#1f1f1f] md:mt-20">
      <section className="mb-20">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12">Our Exquisite Collection</h2>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-8 text-lg">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`relative transition-all hover:text-[#9d4d00] ${
                  activeTab === tab.name ? "font-semibold text-[#9d4d00]" : "opacity-70"
                }`}
              >
                <span className="hover:underline">{tab.name}</span>
                {activeTab === tab.name && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-1 bg-[#9d4d00] rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>

          <button className="text-sm flex items-center space-x-2 group">
            <span className="text-[#9d4d00] font-semibold">Explore All Collections</span>
            <FaChevronRight className="group-hover:translate-x-1 transition-transform text-[#9d4d00]" />
          </button>
        </div>

        <div className="flex justify-start gap-6 mt-10 overflow-x-auto">
          {activeTabImages.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={activeTab}
              className="w-52 h-72 object-cover rounded-xl shadow-lg transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <motion.h3
            className="text-4xl md:text-5xl font-extrabold mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Jewelry is like the perfect spice
          </motion.h3>
          <p className="text-gray-600 text-lg max-w-xl">
            The jewelry business is highly competitive. Many new and established companies are competing in the market, bringing fresh ideas and exclusive designs.
          </p>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <img
            src="/jewellery-model.png"
            alt="Jewelry Display"
            className="rounded-xl w-full max-w-md mx-auto shadow-2xl"
          />
          <p className="absolute bottom-8 left-8 text-xl md:text-2xl font-semibold text-white bg-[#9d4d00] p-4 rounded-xl shadow-lg">
            It Complements What’s Already There!!!
          </p>
        </motion.div>
      </section>
    </div>
  );
}
