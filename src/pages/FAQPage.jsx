import { useState } from "react";
import { motion } from "framer-motion";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="bg-white/30 backdrop-blur-md p-6 rounded-3xl shadow-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex justify-between items-center"
      >
        <h3 className="text-xl font-semibold text-black/80">{question}</h3>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            className="text-black"
          >
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 9l6 6 6-6"
            />
          </svg>
        </motion.div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.4 }}
          className="mt-4 text-black text-lg"
        >
          {answer}
        </motion.div>
      )}
    </motion.div>
  );
};

export default function FAQPage() {
  const faqData = [
    {
      question: "What is your return policy?",
      answer:
        "We accept returns within 30 days of purchase. Please ensure that the product is unused and in its original packaging.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes! We offer worldwide shipping. Shipping fees vary depending on the destination country.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order has been shipped, you will receive a tracking number via email that you can use to track your package.",
    },
    {
      question: "How do I contact customer service?",
      answer:
        "You can contact us through our Contact Us page, or email us directly at support@jewelleryshop.com.",
    },
    {
      question: "Do you offer gift wrapping?",
      answer:
        "Yes, we offer free gift wrapping for all orders. Just select the option during checkout.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-amber-100 text-black font-sans px-6 lg:px-20 py-16">
      {/* Header */}
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight">Frequently Asked Questions</h1>
        <p className="text-lg text-black max-w-xl mx-auto">
          Here are some common questions that might help you. If you can't find your answer, feel free to contact us!
        </p>
      </motion.div>

      {/* FAQ Items */}
      <div className="mt-16 space-y-6">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
}
