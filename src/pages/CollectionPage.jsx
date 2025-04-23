import { motion } from "motion/react";

const products = [
  {
    name: "Diamond Drop Earrings",
    price: "$320.00",
    rating: 5,
    image: "/1.png",
  },
  {
    name: "Elegant Rose Ring",
    price: "$289.00",
    rating: 4,
    image: "/2.png",
  },
  {
    name: "Classic Bracelet",
    price: "$150.00",
    rating: 5,
    image: "/3.png",
  },
  {
    name: "Hoop Earrings",
    price: "$110.00",
    rating: 4,
    image: "/2.png",
  },
];

export default function CollectionPage() {
  return (
    <div className="w-full text-black font-sans">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center px-6 lg:px-20 py-16 bg-[url('/images/hero-bg.png')] bg-cover bg-center relative">
        <motion.img
          src="/jewellery-model.png"
          alt="Model"
          className="w-full lg:w-1/2 max-w-md z-10 rounded-2xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          className="text-center lg:text-left max-w-fit lg:max-w-1/2 mt-10 lg:mt-0 z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-sm uppercase tracking-widest text-gray-700">
            Romance Bridal Designs
          </h2>
          <h1 className="text-5xl lg:text-7xl font-extrabold my-4 text-gray-900">
            Classic Jewellery
          </h1>
          <button className="bg-black text-white rounded-full px-8 py-3 mt-4 hover:bg-gray-800 transition-transform transform hover:scale-105">
            Shop Now
          </button>
        </motion.div>
        <div className="absolute inset-0  to-white/20 backdrop-blur-sm z-0" />
      </div>

      {/* Features */}
      <div className="flex justify-center items-center gap-10 px-4 py-8 text-md font-medium text-gray-600">
        <motion.div whileHover={{ scale: 1.1 }}> Free Delivery</motion.div>
        <motion.div whileHover={{ scale: 1.1 }}> 30 Days Return</motion.div>
        <motion.div whileHover={{ scale: 1.1 }}> Secure Payment</motion.div>
      </div>

      {/* Most Popular */}
      <div className="px-6 lg:px-20 py-14">
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">
          {" "}
          Most Popular{" "}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white/20 p-5 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow"
              whileHover={{ y: -5 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="mx-auto h-36 object-contain transition-transform hover:scale-105"
              />
              <h3 className="mt-5 text-center text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-center text-sm text-gray-500">
                {product.price}
              </p>
              <div className="text-center mt-2 text-yellow-400 text-lg">
                {"★".repeat(product.rating)}
                {"☆".repeat(5 - product.rating)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Promo Section */}
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 mx-5 sm:mx-10 py-12  rounded-3xl my-10 shadow-md"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center lg:text-left max-w-md">
        <h3 className="text-2xl font-bold mb-2 text-amber-800">
            💎 Up to 60% OFF
          </h3>
          <p className="mb-4 text-gray-700">
            Don’t miss the exclusive sale on our finest Rose Gold Collection.
          </p>
          <button className="bg-black text-white rounded-full px-8 py-2 hover:bg-gray-900 transition-transform transform hover:scale-105">
            Explore Now
          </button>
        </div>
        <img
          src="/1.png"
          alt="Rose Gold Collection"
          className="mt-6 lg:mt-0 w-full max-w-xs drop-shadow-xl"
        />
      </motion.div>
    </div>
  );
}
