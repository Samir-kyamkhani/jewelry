import { motion } from 'framer-motion';
import { FaShippingFast, FaThumbsUp, FaLock } from 'react-icons/fa';

export default function AboutUsPage() {
  return (
    <div className="bg-gradient-to-br from-white to-amber-100 py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* About Section */}
        <motion.div 
          className="text-center md:text-left mb-16"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-semibold text-brown-800 mb-6">About Us</h2>
          <p className="text-gray-700 max-w-2xl mx-auto md:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus, dolor nec placerat scelerisque, 
            urna libero lacinia nisi, vitae viverra augue turpis eget dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </motion.div>

        {/* Product Images with animation */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20"
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.6 }}
        >
          <motion.img whileHover={{ scale: 1.05 }} src="/1.png" alt="product" className="rounded-xl shadow-md" />
          <motion.img whileHover={{ scale: 1.05 }} src="/2.png" alt="product" className="rounded-xl shadow-md" />
          <motion.img whileHover={{ scale: 1.05 }} src="/3.png" alt="product" className="rounded-xl shadow-md" />
        </motion.div>

        {/* Feature Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-20">
          {[
            { icon: <FaShippingFast size={30} />, title: 'Free Shipping' },
            { icon: <FaThumbsUp size={30} />, title: 'Premium Quality' },
            { icon: <FaLock size={30} />, title: '100% Secure Checkout' }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 1.05 }} 
              className="bg-white p-6 rounded-2xl shadow-md"
            >
              <div className="text-amber-700 mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus luctus nec ullamcorper mattis.
              </p>
            </motion.div>
          ))}
        </div>

        {/* Instagram Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-xl font-semibold mb-4">Follow Our Instagram</h4>
          <p className="text-gray-700 mb-4">@moska.my</p>
          <button className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-full transition duration-300">
            Follow Now
          </button>
        </motion.div>

        {/* Instagram Images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          <motion.img whileHover={{ scale: 1.05 }} src="1.png" alt="insta" className="rounded-xl shadow-sm" />
          <motion.img whileHover={{ scale: 1.05 }} src="2.png" alt="insta" className="rounded-xl shadow-sm" />
          <motion.img whileHover={{ scale: 1.05 }} src="3.png" alt="insta" className="rounded-xl shadow-sm" />
          <motion.img whileHover={{ scale: 1.05 }} src="4.png" alt="insta" className="rounded-xl shadow-sm" />
        </div>
      </div>
    </div>
  );
}
