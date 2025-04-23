import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Tanjin Tisha",
    image: "/1.png",
    quote:
      "The quality and craftsmanship are exceptional, and the piece is even more beautiful than I imagined. From start to finish, the experience was seamless—the team was incredibly helpful and ensured I found exactly what I was looking for.",
  },
  {
    name: "Sarah Miller",
    image: "/3.png",
    quote:
      "I’m beyond impressed with the attention to detail. Their collection is timeless and elegant. I’ll definitely be coming back for more.",
  },
  {
    name: "Lena Grace",
    image: "/4.png",
    quote:
      "Absolutely stunning! The whole process felt so personalized and professional. I feel confident and classy every time I wear it.",
  },
 
];

const TestimonialPromoSection = () => {
  return (
    <div className="py-20 px-4 sm:px-14 space-y-24">
      {/* Testimonial Section */}
      <div className="space-y-12">
        <h2 className="text-3xl font-serif text-center text-gray-900">
          What Our Customers Are Saying
        </h2>
        <div className="flex gap-8 overflow-x-auto no-scrollbar py-6 px-2">

          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="min-w-[300px] max-w-md bg-white/20 rounded-xl shadow-lg p-6 flex flex-col items-center text-center space-y-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full object-cover shadow-md"
              />
              <p className="italic text-gray-600 text-sm">{`"${testimonial.quote}"`}</p>
              <p className="font-semibold text-gray-800">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Promo Section */}
      <motion.div
        className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-4xl font-serif mb-4 text-gray-900">
            Pearls are always appropriate.
          </h2>
          <p className="text-gray-600 mb-6">
            <strong className="text-black">40% off on your first order</strong>
            <br />
            Dreaming of a piece that’s uniquely yours? Our custom jewelry
            service allows you to bring your vision to life.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            Shop Now
          </button>
        </div>

        <div className="relative w-72 h-72">
          <img
            src="/2.png"
            alt="Pearl Model"
            className="w-full h-full rounded-full object-cover shadow-xl"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-gray-300 opacity-30"
              fill="none"
              viewBox="0 0 200 200"
            >
              <ellipse
                cx="100"
                cy="100"
                rx="90"
                ry="50"
                stroke="currentColor"
                strokeWidth="2"
              />
              <ellipse
                cx="100"
                cy="100"
                rx="70"
                ry="40"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TestimonialPromoSection;
