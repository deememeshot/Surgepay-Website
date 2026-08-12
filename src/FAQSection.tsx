import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: "What is Surgepay?",
    answer: "Surgepay is a WhatsApp first US to India remittance platform built for Indians in the US, offering instant transfers, Google matching rates, and zero hidden fees. No additional application downloads required."
  },
  {
    question: "How is Surgepay different from traditional banking systems?",
    answer: "Traditional providers often charge hidden FX markups and slower settlement times. Surgepay uses a mix of traditional banking and stablecoin infrastructure in a compliant manner to enable faster, more transparent transfers."
  },
  {
    question: "How fast are transfers?",
    answer: "Most transfers are completed within minutes depending on banking partner availability and verification status. Ideally, transfers are instant."
  },
  {
    question: "Are there any hidden fees?",
    answer: "No hidden fees. No surprise deductions. The rate you see is the rate you get. We aim to consistently offer rates matching or better than Google rates till December 31st 2027."
  },
  {
    question: "Is Surgepay safe?",
    answer: "Yes. We work with regulated banking and payment partners and follow strict KYC, AML, and compliance standards."
  },
  {
    question: "Can I send money to my own Indian account?",
    answer: "Yes. You can transfer money from your US bank account to your own Indian bank account."
  },
  {
    question: "Can I send money to a third party account?",
    answer: "No. Currently, Surgepay supports transfers only to your own Indian bank account from your own US bank account. You cannot transfer to another person's bank account."
  },
  {
    question: "Which Indian banks and account types are supported?",
    answer: "All major Indian banks are supported. We currently support savings and NRO accounts. NRE accounts are not supported at the moment."
  },
  {
    question: "Is it safe to use WhatsApp?",
    answer: "Yes, 100% safe. WhatsApp is only the interface layer. The actual transaction happens securely through our regulated banking partners in protected browser sessions. We also comply with strict data security and privacy standards."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-[#060D14] py-24 sm:py-32 relative overflow-hidden">
      {/* Background radial gradient for premium look */}
      {/* Background radial gradient for subtle texture */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-whatsapp/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-whatsapp/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left Column: Heading */}
          <div className="w-full lg:w-5/12 flex flex-col justify-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-32"
            >
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                Find your<br />
                answers <span className="text-whatsapp relative inline-flex items-center">
                  here
                  <MessageCircle className="absolute -top-3 -right-6 w-8 h-8 text-whatsapp opacity-80" strokeWidth={2.5} />
                </span>
              </h2>
              <p className="text-lg text-slate-400 max-w-md">
                Everything you need to know about Surgepay. Can't find the answer you're looking for? Feel free to <a href="https://wa.me/918884500283?text=Hi%2C%20I%20have%20questions%20around%20Surgepay.%20Could%20you%20please%20help%20me%3F" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-whatsapp transition-colors underline underline-offset-4 decoration-slate-700">contact our support team</a>.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Accordion */}
          <div className="w-full lg:w-7/12 flex flex-col">
            <div className="flex flex-col gap-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`transition-all duration-300 rounded-2xl overflow-hidden ${isOpen ? 'bg-whatsapp/[0.05] backdrop-blur-md border border-whatsapp/20' : 'glass-dark hover:bg-white/[0.06]'}`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-center justify-between gap-4 text-left group p-5 sm:p-6"
                    >
                      <h3 className={`text-lg sm:text-xl font-medium transition-colors duration-200 ${isOpen ? 'text-whatsapp' : 'text-slate-200 group-hover:text-white'}`}>
                        {faq.question}
                      </h3>
                      <div className={`shrink-0 ml-4 flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-200 ${isOpen ? 'border-whatsapp text-whatsapp bg-whatsapp/10' : 'border-white/10 text-slate-400 bg-white/5 group-hover:border-white/20 group-hover:text-slate-300'}`}>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                        />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-base leading-relaxed text-slate-400 pr-12">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
