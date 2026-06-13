/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  MessageCircle,
  Zap,
  ShieldCheck,
  Globe,
  ArrowRight,
  CheckCircle2,
  Smartphone,
  Users,
  Lock,
  Menu,
  X,
  ChevronRight,
  Banknote,
  Sparkles,
  Star,
  Check
} from 'lucide-react';
import { FAQSection } from './FAQSection';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 96; // 24 * 4 = 96px (scroll-mt-24)
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed left-0 right-0 z-40 transition-all duration-300 top-0 ${isScrolled ? 'bg-white/94 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#hero" onClick={scrollToTop} className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-whatsapp rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
              <Zap className="text-white w-5 h-5 fill-current" />
            </div>
            <span className="text-xl font-semibold tracking-tight text-slate-900">Surgepay</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" onClick={(e) => scrollToSection(e, 'how-it-works')} className="text-sm font-medium text-slate-600 hover:text-whatsapp transition-colors">How it works</a>
            <a href="https://wa.me/18723127867?text=hi" target="_blank" rel="noopener noreferrer" className="bg-whatsapp hover:bg-whatsapp-dark text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg flex items-center gap-2">
              Send Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
            >
              <a href="#how-it-works" onClick={(e) => scrollToSection(e, 'how-it-works')} className="text-lg font-medium text-slate-900">How it works</a>
              <a href="https://wa.me/18723127867?text=hi" target="_blank" rel="noopener noreferrer" className="w-full bg-whatsapp hover:bg-whatsapp-dark text-white px-6 py-4 rounded-xl font-medium text-center mt-2 block">
                Send Now
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};


interface WhatsAppScreenProps {
  activeStep: number;
  direction: 'forward' | 'backward';
  rate: number;
  isLive: boolean;
}

const WhatsAppScreen = ({ activeStep, direction, rate, isLive }: WhatsAppScreenProps) => {
  const [animateBanks, setAnimateBanks] = useState(false);

  useEffect(() => {
    if (activeStep === 1) {
      const timer = requestAnimationFrame(() => {
        setAnimateBanks(true);
      });
      return () => cancelAnimationFrame(timer);
    } else {
      setAnimateBanks(false);
    }
  }, [activeStep]);

  const stepTransition = direction === 'forward' ? { duration: 0.3 } : { duration: 0 };

  return (
    <div className="phone-frame w-full max-w-[280px] md:max-w-[300px] max-h-full aspect-[9/19.5] overflow-hidden flex flex-col relative transition-all duration-500">
      {/* Side Buttons */}
      <div className="phone-button-left" style={{ top: '80px', height: '28px' }} />
      <div className="phone-button-left" style={{ top: '120px', height: '48px' }} />
      <div className="phone-button-left" style={{ top: '178px', height: '48px' }} />
      <div className="phone-button-right" style={{ top: '130px', height: '56px' }} />

      {/* Screen Content */}
      <div className="w-full h-full rounded-[calc(3rem-6px)] overflow-hidden flex flex-col bg-[#efe7de]">
        {/* iOS Status Bar */}
        <div className="h-[44px] bg-[#075e54] w-full flex justify-between items-end px-5 pb-1.5 relative">
          {/* Dynamic Island placeholder area */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-[72px] h-[20px] bg-black rounded-full z-10" />
          <div className="text-[13px] text-white font-semibold leading-none">9:41</div>
          <div className="flex gap-1 items-center">
            {/* Signal bars */}
            <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
              <rect x="0" y="8" width="3" height="3" rx="0.5" fill="white" />
              <rect x="4" y="5" width="3" height="6" rx="0.5" fill="white" />
              <rect x="8" y="2" width="3" height="9" rx="0.5" fill="white" />
              <rect x="12" y="0" width="3" height="11" rx="0.5" fill="white" />
            </svg>
            {/* WiFi */}
            <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
              <path d="M7 10.5a1 1 0 100-2 1 1 0 000 2z" fill="white" />
              <path d="M4.5 7.5a3.5 3.5 0 015 0" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M2 5a7 7 0 0110 0" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            {/* Battery */}
            <svg width="22" height="11" viewBox="0 0 22 11" fill="none">
              <rect x="0.5" y="0.5" width="18" height="10" rx="2" stroke="white" strokeWidth="1" />
              <rect x="19.5" y="3" width="2" height="5" rx="1" fill="white" />
              <rect x="2" y="2" width="12" height="7" rx="1" fill="white" />
            </svg>
          </div>
        </div>

        {/* WhatsApp Header */}
        <div className="bg-[#075e54] px-2 py-1.5 flex items-center gap-1.5">
          {/* Back Arrow */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
            <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {/* Profile Pic */}
          <div className="w-8 h-8 bg-whatsapp rounded-full flex items-center justify-center shrink-0">
            <Zap className="text-white w-4 h-4 fill-current" />
          </div>
          {/* Name */}
          <div className="flex-1 min-w-0">
            <div className="text-white text-[14px] font-medium leading-tight truncate">Surgepay</div>
            <div className="text-white/70 text-[11px] leading-tight">online</div>
          </div>
          {/* Action Icons */}
          <div className="flex items-center gap-3">
            {/* Video */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="5" width="14" height="14" rx="2" stroke="white" strokeWidth="1.5" />
              <path d="M16 10l4-2.5v9L16 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {/* Phone */}
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="white" strokeWidth="1.5" />
            </svg>
            {/* Menu dots */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="5" r="1.5" fill="white" />
              <circle cx="12" cy="12" r="1.5" fill="white" />
              <circle cx="12" cy="19" r="1.5" fill="white" />
            </svg>
          </div>
        </div>

        {/* Chat Body */}
        <div className="flex-1 p-2.5 flex flex-col gap-1.5 overflow-y-auto wa-chat-bg">
          <div className="relative w-full h-full">
            {/* Step 1 */}
            <div className={activeStep === 0 ? 'block' : 'hidden'}>
              <motion.div
                initial={direction === 'forward' ? { opacity: 0, y: 10 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={stepTransition}
                className="flex flex-col gap-1.5"
              >
                <div className="wa-bubble-out">
                  Hi
                  <div className="wa-time-out">10:28 AM <span className="wa-read">✓✓</span></div>
                </div>
                <div className="wa-bubble-in">
                  Hey! Surgepay helps you send money back home to India.<br/><br/>Zero fees. We transfer at Google rates.<br/><br/>What would you like to do?
                  <div className="mt-2 text-center text-[#00a884] font-medium border-t border-slate-200 pt-1.5 cursor-pointer">
                    <span className="flex items-center justify-center gap-1"><Menu className="w-3 h-3"/> Choose an option</span>
                  </div>
                  <div className="wa-time-in">10:28 AM</div>
                </div>
                <div className="wa-bubble-out">
                  Send money<br/><span className="text-[11px] text-slate-500">Send USD to India</span>
                  <div className="wa-time-out">10:28 AM <span className="wa-read">✓✓</span></div>
                </div>
                <div className="wa-bubble-in">
                  How much would you like to send (in USD)?<br/>Min: $2 | Max: $500<br/>Or type any amount.
                  <div className="mt-1 flex flex-col gap-1">
                    <div className="text-center text-[#00a884] font-medium border-t border-slate-200 pt-1 cursor-pointer">$10</div>
                    <div className="text-center text-[#00a884] font-medium border-t border-slate-200 pt-1 cursor-pointer">$20</div>
                    <div className="text-center text-[#00a884] font-medium border-t border-slate-200 pt-1 cursor-pointer">$50</div>
                  </div>
                  <div className="wa-time-in">10:29 AM</div>
                </div>
                <div className="wa-bubble-out">
                  $10
                  <div className="wa-time-out">10:29 AM <span className="wa-read">✓✓</span></div>
                </div>
                <div className="wa-bubble-in">
                  Here's your quote:<br/><br/>You send: $10.00<br/>You receive: Rs.854.00<br/>Rate: $1 = Rs.85.40<br/>Fees: $0.00<br/><br/>This rate is valid for the next few minutes.
                  <div className="mt-1 flex flex-col gap-1">
                    <div className="text-center text-[#00a884] font-medium border-t border-slate-200 pt-1 cursor-pointer">Continue</div>
                    <div className="text-center text-[#00a884] font-medium border-t border-slate-200 pt-1 cursor-pointer">Change amount</div>
                    <div className="text-center text-[#00a884] font-medium border-t border-slate-200 pt-1 cursor-pointer">Cancel</div>
                  </div>
                  <div className="wa-time-in">10:29 AM</div>
                </div>
              </motion.div>
            </div>

            {/* Step 2 */}
            <div className={activeStep === 1 ? 'block' : 'hidden'}>
              <motion.div
                initial={direction === 'forward' ? { opacity: 0, y: 10 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={stepTransition}
                className="flex flex-col gap-1.5"
              >
                <div className="wa-bubble-in">
                  You don't have a verified Indian bank account.<br/>Let's add your Indian bank account.<br/><br/>What is your Indian bank account number?<br/><br/><span className="text-slate-500">Note: Currently we do not support NRE bank account.</span>
                  <div className="wa-time-in">10:31 AM</div>
                </div>
                <div className="wa-bubble-out">
                  09845321876
                  <div className="wa-time-out">10:31 AM <span className="wa-read">✓✓</span></div>
                </div>
                <div className="wa-bubble-in">
                  Please type your account number again to confirm.
                  <div className="wa-time-in">10:31 AM</div>
                </div>
                <div className="wa-bubble-out">
                  09845321876
                  <div className="wa-time-out">10:31 AM <span className="wa-read">✓✓</span></div>
                </div>
                <div className="wa-bubble-in">
                  What is the IFSC code?<br/>Example: HDFC0001234<br/><br/><span className="text-slate-500">You can find this on your cheque book or bank statement.</span>
                  <div className="wa-time-in">10:31 AM</div>
                </div>
                <div className="wa-bubble-out">
                  ICIC0009876
                  <div className="wa-time-out">10:31 AM <span className="wa-read">✓✓</span></div>
                </div>
                <div className="wa-bubble-in">
                  Is this a Savings or Current account?
                  <div className="mt-1 flex flex-col gap-1">
                    <div className="text-center text-[#00a884] font-medium border-t border-slate-200 pt-1 cursor-pointer">Savings</div>
                    <div className="text-center text-[#00a884] font-medium border-t border-slate-200 pt-1 cursor-pointer">Current</div>
                  </div>
                  <div className="wa-time-in">10:31 AM</div>
                </div>
                <div className="wa-bubble-out">
                  Savings
                  <div className="wa-time-out">10:32 AM <span className="wa-read">✓✓</span></div>
                </div>
                <div className="wa-bubble-in">
                  Please review the bank details:<br/><br/>Account: ...1876<br/>IFSC: ICIC0009876<br/>Type: Savings<br/><br/>Make sure everything is correct. Incorrect details may cause delays.
                  <div className="mt-1 flex flex-col gap-1">
                    <div className="text-center text-[#00a884] font-medium border-t border-slate-200 pt-1 cursor-pointer">Looks good</div>
                    <div className="text-center text-[#00a884] font-medium border-t border-slate-200 pt-1 cursor-pointer">Edit details</div>
                  </div>
                  <div className="wa-time-in">10:32 AM</div>
                </div>
              </motion.div>
            </div>

            {/* Step 3 */}
            <div className={activeStep === 2 ? 'block' : 'hidden'}>
              <motion.div
                initial={direction === 'forward' ? { opacity: 0, y: 10 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={stepTransition}
                className="flex flex-col gap-1.5"
              >
                <div className="wa-bubble-in">
                  Next step: KYC Verification<br/><br/>Before we proceed, please keep the following in mind:<br/>• Have one of these U.S. Identity documents ready<br/>• A liveness check will be conducted to verify your identity.<br/>• KYC process takes ~2 minutes
                  <div className="wa-time-in">10:29 AM</div>
                </div>
                <div className="wa-bubble-in">
                  Persona<br/><span className="text-[#00a884] text-[10px]">api-dev.surgepay.xyz</span><br/><br/>Please use the following link to verify your identity:<br/><span className="text-blue-500 underline break-all">https://api-dev.surgepay.xyz/kyc/link</span><br/><br/>Your data is safe. ✓
                  <div className="wa-time-in">10:29 AM</div>
                </div>
                <div className="wa-bubble-in">
                  Your identity has been verified ✓✓
                  <div className="wa-time-in">10:29 AM</div>
                </div>
                <div className="wa-bubble-in">
                  Next step: Connect your U.S. Bank Account<br/><br/>Before we proceed, please keep the following in mind:<br/>• You'll be redirected to your bank's login page<br/>• Select a bank account.<br/>• Surgepay never sees or stores your bank login credentials.
                  <div className="wa-time-in">10:29 AM</div>
                </div>
                <div className="wa-bubble-in">
                  Please use the following link to connect your U.S. Bank Account:<br/><span className="text-blue-500 underline break-all">https://api-dev.surgepay.xyz/bank/link</span><br/><br/>Important: This link is valid for 10 minutes.
                  <div className="wa-time-in">10:29 AM</div>
                </div>
                <div className="wa-bubble-in">
                  Your US bank account has been connected!
                  <div className="wa-time-in">10:30 AM</div>
                </div>
              </motion.div>
            </div>

            {/* Step 4 */}
            <div className={activeStep === 3 ? 'block' : 'hidden'}>
              <motion.div
                initial={direction === 'forward' ? { opacity: 0, y: 10 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={stepTransition}
                className="flex flex-col gap-1.5"
              >
                <div className="wa-bubble-in">
                  Please confirm your transfer.<br/><br/>You send: $10.00<br/>You receive: Rs.854.00<br/>Fees: $0.00<br/>Rate: $1 = Rs.85.40 (USD/INR)<br/>To: ICIC
                  <div className="mt-1 flex flex-col gap-1">
                    <div className="text-center text-[#00a884] font-medium border-t border-slate-200 pt-1 cursor-pointer">Confirm & pay</div>
                    <div className="text-center text-[#00a884] font-medium border-t border-slate-200 pt-1 cursor-pointer">Change amount</div>
                    <div className="text-center text-[#00a884] font-medium border-t border-slate-200 pt-1 cursor-pointer">Cancel</div>
                  </div>
                  <div className="wa-time-in">10:33 AM</div>
                </div>
                <div className="wa-bubble-out">
                  Confirm & pay
                  <div className="wa-time-out">10:33 AM <span className="wa-read">✓✓</span></div>
                </div>
                <div className="wa-bubble-in">
                  Enter your 4-digit PIN to confirm this transfer.<br/><br/><span className="text-slate-500">Your PIN is never stored in chat history.</span>
                  <div className="wa-time-in">10:33 AM</div>
                </div>
                <div className="wa-bubble-out">
                  1234
                  <div className="wa-time-out">10:33 AM <span className="wa-read">✓✓</span></div>
                </div>
                <div className="wa-bubble-in">
                  Your transfer SP-37800 has been created!<br/><br/>Your payment is being processed. We'll notify you once it's confirmed.<br/><br/>Tracking ID: SP-37800
                  <div className="mt-1 flex flex-col gap-1">
                    <div className="text-center text-[#00a884] font-medium border-t border-slate-200 pt-1 cursor-pointer">Track transfer</div>
                    <div className="text-center text-[#00a884] font-medium border-t border-slate-200 pt-1 cursor-pointer">Back to menu</div>
                  </div>
                  <div className="wa-time-in">10:33 AM</div>
                </div>
                <div className="wa-bubble-in">
                  Your transfer (SP-37800) has been delivered!<br/><br/>Rs.854.00 has been deposited into your Indian bank account.
                  <div className="wa-time-in">10:33 AM</div>
                </div>
                <div className="wa-bubble-in">
                  <div className="flex items-center gap-3 bg-red-50 p-2 rounded border border-red-100 mb-1">
                    <div className="w-8 h-8 bg-red-500 rounded text-white flex items-center justify-center font-bold text-xs">PDF</div>
                    <div className="flex-1 overflow-hidden">
                      <div className="text-[11px] font-semibold text-slate-800 truncate">Surgepay_Receipt_SP-37800.pdf</div>
                      <div className="text-[9px] text-slate-500">4.6 MB • PDF</div>
                    </div>
                  </div>
                  Here is the receipt for your transfer SP-37800.
                  <div className="wa-time-in">10:33 AM</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* WhatsApp Input Bar */}
        <div className="wa-input-bar">
          <div className="wa-input-field">
            {/* Emoji */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
              <circle cx="12" cy="12" r="10" stroke="#8696A0" strokeWidth="1.5" />
              <circle cx="9" cy="10" r="1" fill="#8696A0" />
              <circle cx="15" cy="10" r="1" fill="#8696A0" />
              <path d="M8 14c1.333 1.333 2.667 2 4 2s2.667-.667 4-2" stroke="#8696A0" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="flex-1 text-[13px] text-[#8696A0]">Type a message</span>
            {/* Attach */}
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" className="shrink-0">
              <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" stroke="#8696A0" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            {/* Camera */}
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" className="shrink-0">
              <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" stroke="#8696A0" strokeWidth="1.5" />
              <circle cx="12" cy="13" r="4" stroke="#8696A0" strokeWidth="1.5" />
            </svg>
          </div>
          {/* Mic button */}
          <div className="w-[38px] h-[38px] bg-[#00a884] rounded-full flex items-center justify-center shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="9" y="1" width="6" height="14" rx="3" fill="white" />
              <path d="M5 10v1a7 7 0 0014 0v-1" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="12" y1="18" x2="12" y2="22" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [activeScreen, setActiveScreen] = useState(0);
  const [targetStep, setTargetStep] = useState(0);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const [isPhoneFullyVisible, setIsPhoneFullyVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [rate, setRate] = useState(83.20);
  const [isLive, setIsLive] = useState(false);

  const scrollRef = useRef<HTMLElement>(null);
  const phoneContainerRef = useRef<HTMLDivElement>(null);
  const swipeRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const response = await fetch('/api/rate');
        const data = await response.json();
        if (data.rate) {
          setRate(data.rate);
          setIsLive(true);
        }
      } catch (error) {
        console.error('Failed to fetch exchange rate:', error);
      }
    };

    fetchRate();
    const interval = setInterval(fetchRate, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    if (isMobile) return; // Disable observer on mobile

    const observer = new IntersectionObserver(
      ([entry]) => {
        // More lenient threshold to handle various browser scroll behaviors
        setIsPhoneFullyVisible(entry.intersectionRatio >= 0.7);
      },
      {
        threshold: [0, 0.2, 0.5, 0.7, 0.9, 1.0],
        rootMargin: "-5% 0px"
      }
    );

    if (phoneContainerRef.current) {
      observer.observe(phoneContainerRef.current);
    }

    return () => observer.disconnect();
  }, [isMobile]);

  // Mobile Swipe Gesture Lock: Prevents vertical scroll when horizontal intent is detected
  useEffect(() => {
    const el = swipeRef.current;
    if (!el || !isMobile) return;

    let startX = 0;
    let startY = 0;
    let isHorizontal = false;
    let isFirstMove = true;

    const onTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isHorizontal = false;
      isFirstMove = true;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (isFirstMove) {
        const dx = Math.abs(e.touches[0].clientX - startX);
        const dy = Math.abs(e.touches[0].clientY - startY);

        // If horizontal movement is greater than vertical, lock the scroll
        if (dx > dy && dx > 5) {
          isHorizontal = true;
        }
        isFirstMove = false;
      }

      if (isHorizontal) {
        // Prevent vertical page scroll during horizontal swipe
        if (e.cancelable) {
          e.preventDefault();
        }
      }
    };

    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchmove', onTouchMove, { passive: false });

    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
    };
  }, [isMobile]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (isMobile) return;

    // Detect direction
    const dir = latest > lastScrollY.current ? 'forward' : 'backward';
    setDirection(dir);
    lastScrollY.current = latest;

    // Use specific thresholds for each step to prevent jumping
    // We map the 0-1 progress to 4 distinct steps
    let newStep = 0;
    if (latest > 0.8) newStep = 3;
    else if (latest > 0.55) newStep = 2;
    else if (latest > 0.3) newStep = 1;
    else if (latest < 0.1) newStep = 0;

    // Only update target if we are reasonably within the section visibility
    if (isPhoneFullyVisible || latest < 0.1 || latest > 0.9) {
      setTargetStep(newStep);
    }
  });

  // Sequential transition logic: ensures we move through steps 1-by-1
  useEffect(() => {
    if (isMobile) return;

    if (activeScreen !== targetStep) {
      const timer = setTimeout(() => {
        setActiveScreen(prev => {
          if (targetStep > prev) return prev + 1;
          if (targetStep < prev) return prev - 1;
          return prev;
        });
      }, 150); // 150ms delay creates a clear sequential transition even on fast scrolls
      return () => clearTimeout(timer);
    }
  }, [targetStep, activeScreen, isMobile]);

  const handleSwipe = (dir: 'left' | 'right') => {
    if (dir === 'left') {
      setDirection('forward');
      setActiveScreen((prev) => (prev + 1) % 4);
    } else if (dir === 'right') {
      setDirection('backward');
      setActiveScreen((prev) => (prev - 1 + 4) % 4);
    }
  };

  const scrollToStep = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const sectionHeight = container.offsetHeight;
    const scrollTarget = container.offsetTop + (index / 4) * sectionHeight;

    setDirection(index > activeScreen ? 'forward' : 'backward');

    window.scrollTo({
      top: scrollTarget,
      behavior: 'smooth'
    });
  };

  const screens = [
    { title: "Enter Amount" },
    { title: "Select Recipient" },
    { title: "Verify & Connect" },
    { title: "Payment & Success" }
  ];

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-24 pb-8 px-6 overflow-hidden scroll-mt-24">


        {/* Animated Globe Background - Removed for Orbital layout */}

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 mb-16 relative z-10">

            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start z-10"
            >
              <div className="flex flex-col items-center lg:items-start mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm transition-transform hover:scale-105 cursor-default">
                  <span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Backed by</span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 bg-[#FF4B4B] flex items-center justify-center rounded-[2px]">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5L5 19H8.5L12 12L15.5 19H19L12 5Z" fill="white" />
                      </svg>
                    </div>
                    <span className="text-[11px] font-bold text-[#FF4B4B] tracking-widest uppercase">Antler</span>
                  </div>
                </div>
              </div>

              <h1 className="text-4xl leading-[1.2] md:text-5xl lg:text-[3.5rem] font-semibold tracking-tight text-slate-900 md:leading-[1.15] mb-6 max-w-[340px] md:max-w-2xl mx-auto lg:mx-0">
                <span className="block">Sending money home</span>
                <span className="block">should be as simple as</span>
                <span className="block">a <span className="text-whatsapp">WhatsApp chat.</span></span>
              </h1>

              <p className="text-base md:text-xl text-slate-800 font-medium mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Instant transfers. Zero fees. Google rates.
              </p>

              <div className="flex flex-col items-center lg:items-start gap-4 w-full">
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
                  <a href="https://wa.me/18723127867?text=hi" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-whatsapp hover:bg-whatsapp-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group">
                    Send Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
                <div className="text-sm text-slate-700 font-medium mt-2">
                  350+ people on the waitlist
                </div>
              </div>
            </motion.div>

            {/* Right Column: Orbital Promo Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-[500px] lg:w-[500px] aspect-square flex items-center justify-center shrink-0 mt-12 lg:mt-0 mx-auto lg:mx-0 z-10"
            >
              {/* Orbital Animation Background */}
              <div className="absolute inset-[-100px] flex items-center justify-center pointer-events-none">
                <svg viewBox="0 0 700 700" className="w-[700px] h-[700px]">
                  <defs>
                    <linearGradient id="arcGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#25D366" stopOpacity="0" />
                      <stop offset="50%" stopColor="#25D366" stopOpacity="1" />
                      <stop offset="100%" stopColor="#25D366" stopOpacity="0" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Globe Wireframe Background */}
                  <g className="text-slate-400 opacity-10" stroke="currentColor" strokeWidth="1" fill="none" style={{ transformOrigin: '350px 350px', transform: 'rotate(-15deg)' }}>
                    <circle cx="350" cy="350" r="300" />
                    <ellipse cx="350" cy="350" rx="300" ry="80" />
                    <ellipse cx="350" cy="350" rx="300" ry="180" />
                    <ellipse cx="350" cy="350" rx="300" ry="260" />
                    <ellipse cx="350" cy="350" rx="80" ry="300" />
                    <ellipse cx="350" cy="350" rx="180" ry="300" />
                    <ellipse cx="350" cy="350" rx="260" ry="300" />
                  </g>

                  {/* Northern Hemisphere Great Circle Arc connecting US and IN */}
                  <path d="M 82.1 215 A 300 300 0 0 1 617.9 215" stroke="#F1F5F9" strokeWidth="2" strokeDasharray="8 8" fill="none" />

                  {/* Glowing Path trailing the comet */}
                  <path d="M 82.1 215 A 300 300 0 0 1 617.9 215" stroke="url(#arcGlow)" strokeWidth="3" fill="none" opacity="0.4" />

                  {/* Comet Dot traveling from US to IN */}
                  <circle r="6" fill="#25D366" filter="url(#glow)">
                    <animateMotion dur="5s" repeatCount="indefinite" path="M 82.1 215 A 300 300 0 0 1 617.9 215" />
                  </circle>
                  <circle r="2" fill="white">
                    <animateMotion dur="5s" repeatCount="indefinite" path="M 82.1 215 A 300 300 0 0 1 617.9 215" />
                  </circle>
                </svg>
              </div>

              {/* US Node (Mid-Latitude West) */}
              <div className="absolute left-[-18px] top-[115px] -translate-y-1/2 flex flex-col items-center gap-2">
                <div className="w-4 h-4 bg-whatsapp rounded-full shadow-[0_0_0_5px_white,0_4px_12px_rgba(0,0,0,0.1)] relative z-10"></div>
                <div className="bg-white px-3 py-1 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.08)] text-[10px] font-bold text-slate-700 uppercase absolute top-7 w-max">US</div>
              </div>

              {/* IN Node (Mid-Latitude East) */}
              <div className="absolute right-[-18px] top-[115px] -translate-y-1/2 flex flex-col items-center gap-2">
                <div className="w-4 h-4 bg-whatsapp rounded-full shadow-[0_0_0_5px_white,0_4px_12px_rgba(0,0,0,0.1)] relative z-10"></div>
                <div className="bg-white px-3 py-1 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.08)] text-[10px] font-bold text-slate-700 uppercase absolute top-7 w-max">IN</div>
              </div>

              {/* The Central Promo Card */}
              <div className="relative bg-white rounded-3xl p-8 sm:p-10 shadow-[0_20px_60px_-5px_rgba(37,211,102,0.3)] border-2 border-whatsapp/30 ring-4 ring-whatsapp/10 flex flex-col items-center text-center overflow-hidden w-full max-w-[340px] z-20">

                <div className="flex flex-col items-center gap-1 mb-6">
                  <div className="text-slate-500 font-medium text-xl">
                    $1 = <span className="line-through decoration-slate-300">₹{rate.toFixed(2)}</span>
                  </div>
                  <div className="flex items-start gap-0 text-[4rem] sm:text-[4.5rem] font-bold text-whatsapp tracking-tight leading-none mt-2">
                    ₹111<span className="text-3xl text-whatsapp/70 font-medium mt-1 ml-1">*</span>
                  </div>
                </div>

                <p className="text-slate-800 font-medium text-lg mb-4 leading-snug">
                  for your first 3 transfers<br />up to $80
                </p>

                <div className="text-xs text-slate-400 font-medium mt-1">
                  *Limited time offer
                </div>
              </div>
            </motion.div>
          </div>

          {/* Trust Signals Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 mx-auto max-w-5xl px-4 relative z-10"
          >
            <div className="bg-white border border-slate-100 rounded-2xl p-4 md:px-8 md:py-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
              {[
                "REGULATED PARTNERS",
                "BANK-LEVEL SECURITY",
                "KYC COMPLIANT",
                "END-TO-END ENCRYPTED"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-whatsapp font-bold" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-800 tracking-wider">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Security */}
      <section id="security" className="py-20 px-6 bg-slate-50 relative overflow-hidden scroll-mt-24">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">Trust & Security</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Your money and data are protected by bank-grade encryption and regulated financial infrastructure.
            </p>
          </div>

          {/* Dominant Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-slate-100 text-center transition-transform hover:-translate-y-1 hover:shadow-md cursor-default">
              <div className="text-5xl md:text-6xl font-semibold text-whatsapp mb-2">
                350+
              </div>
              <div className="text-sm font-medium text-slate-400 uppercase tracking-widest">Users on waitlist</div>
            </div>
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-slate-100 text-center transition-transform hover:-translate-y-1 hover:shadow-md cursor-default">
              <div className="text-5xl md:text-6xl font-semibold text-whatsapp mb-2">$1M+</div>
              <div className="text-sm font-medium text-slate-400 uppercase tracking-widest">Volume in pipeline</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Lock className="w-8 h-8" />, title: "Bank-grade security", desc: "Your data is always encrypted." },
              { icon: <ShieldCheck className="w-8 h-8" />, title: "Identity verification", desc: "Strict KYC for every user." },
              { icon: <Globe className="w-8 h-8" />, title: "Encrypted comms", desc: "Pin-based login for every session." },
              { icon: <Users className="w-8 h-8" />, title: "Trusted partners", desc: "Regulated financial infrastructure." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all">
                <div className="text-whatsapp mb-6">{item.icon}</div>
                <h4 className="font-medium text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Experience Section */}
      <section id="how-it-works" ref={scrollRef} className={`relative bg-white scroll-mt-24 ${isMobile ? 'py-20' : 'h-[400vh]'}`}>
        <div className={`${isMobile ? 'relative' : 'sticky top-0 h-screen'} flex flex-col justify-center pt-16 pb-8 md:pt-24 md:pb-12 px-6 overflow-hidden`}>
          <div className="max-w-7xl mx-auto w-full">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-2 md:mb-4">Experience the Magic</h2>
              <p className="text-lg text-slate-600">Four simple steps to send money home.</p>
            </div>

            {isMobile ? (
              <div className="flex flex-col items-center gap-8">
                {/* Mobile Step Info - Always Visible */}
                <div className="w-full max-w-sm text-center min-h-[100px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeScreen}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="inline-flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-full bg-whatsapp text-white flex items-center justify-center font-semibold text-xs">
                          {activeScreen + 1}
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900">{screens[activeScreen].title}</h3>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed px-4">
                        {activeScreen === 0 && "Just tell us how much you want to send. We'll show you exactly what they'll receive using real-time Google rates."}
                        {activeScreen === 1 && "Select from your saved recipients or add a new one. We support all major Indian banks."}
                        {activeScreen === 2 && "Connect your US bank account securely via Plaid. A one-time KYC ensures your transfers are safe and compliant."}
                        {activeScreen === 3 && "Review everything one last time. Tap pay, and your money is delivered to India instantly."}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Mobile Swipeable Phone */}
                <div className="relative w-full flex flex-col items-center">
                  <motion.div
                    ref={swipeRef}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -80) handleSwipe('left');
                      if (info.offset.x > 80) handleSwipe('right');
                    }}
                    className="cursor-grab active:cursor-grabbing touch-pan-y"
                  >
                    <WhatsAppScreen
                      activeStep={activeScreen}
                      direction={direction}
                      rate={rate}
                      isLive={isLive}
                    />
                  </motion.div>

                  {/* Swipe Hint */}
                  <motion.div
                    initial={{ opacity: 0.6 }}
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2"
                  >
                    <ArrowRight className="w-3 h-3 rotate-180" />
                    Swipe to see steps
                    <ArrowRight className="w-3 h-3" />
                  </motion.div>

                  {/* Pagination Dots */}
                  <div className="flex gap-2 mt-4">
                    {screens.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveScreen(i)}
                        className={`w-2 h-2 rounded-full transition-all ${activeScreen === i ? 'bg-whatsapp w-6' : 'bg-slate-300'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
                {/* Left: Interactive Screens */}
                <div className="flex flex-col items-center">
                  <div ref={phoneContainerRef} className="relative w-full flex justify-center items-center h-[540px] md:h-[680px]">
                    <WhatsAppScreen
                      activeStep={activeScreen}
                      direction={direction}
                      rate={rate}
                      isLive={isLive}
                    />
                  </div>

                  {/* Screen Indicators */}
                  <div className="flex gap-2 mt-6">
                    {screens.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => scrollToStep(i)}
                        className={`w-2 h-2 rounded-full transition-all ${activeScreen === i ? 'bg-whatsapp w-6' : 'bg-slate-300'}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Right: Step Details */}
                <div className="flex flex-col gap-4">
                  {screens.map((screen, i) => (
                    <motion.div
                      key={i}
                      onClick={() => scrollToStep(i)}
                      className={`p-5 rounded-2xl cursor-pointer transition-all border-2 ${activeScreen === i ? 'bg-white border-whatsapp shadow-lg' : 'bg-transparent border-transparent opacity-50 hover:opacity-100'}`}
                      transition={direction === 'forward' ? { duration: 0.3 } : { duration: 0 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${activeScreen === i ? 'bg-whatsapp text-white' : 'bg-slate-200 text-slate-500'}`}>
                          {i + 1}
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900">{screen.title}</h3>
                      </div>
                      {activeScreen === i && (
                        <motion.p
                          initial={direction === 'forward' ? { opacity: 0, height: 0 } : { opacity: 1, height: 'auto' }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={direction === 'forward' ? { duration: 0.3 } : { duration: 0 }}
                          className="mt-3 text-sm text-slate-600 leading-relaxed"
                        >
                          {i === 0 && "Just tell us how much you want to send. We'll show you exactly what they'll receive using real-time Google rates."}
                          {i === 1 && "Select from your saved recipients or add a new one. We support all major Indian banks."}
                          {i === 2 && "Connect your US bank account securely via Plaid. A one-time KYC ensures your transfers are safe and compliant."}
                          {i === 3 && "Review everything one last time. Tap pay, and your money is delivered to India instantly."}
                        </motion.p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section id="benefits" className="py-20 px-6 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100">
              <div className="w-12 h-12 bg-whatsapp/10 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="text-whatsapp w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium mb-3">Instant Transfers</h3>
              <p className="text-slate-600 leading-relaxed">Your money arrives in minutes, not days.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100">
              <div className="w-12 h-12 bg-whatsapp/10 rounded-2xl flex items-center justify-center mb-6">
                <Banknote className="text-whatsapp w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium mb-3">Zero Fees</h3>
              <p className="text-slate-600 leading-relaxed">No hidden charges. No surprises.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100">
              <div className="w-12 h-12 bg-whatsapp/10 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="text-whatsapp w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium mb-3">Google Exchange Rates</h3>
              <p className="text-slate-600 leading-relaxed">Get the real rate you see online.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100">
              <div className="w-12 h-12 bg-whatsapp/10 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="text-whatsapp w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium mb-3">Secure & Trusted</h3>
              <p className="text-slate-600 leading-relaxed">Built on regulated financial infrastructure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why WhatsApp */}
      <section id="why-whatsapp" className="py-20 bg-whatsapp px-6 relative overflow-hidden scroll-mt-24">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-white">
            <h2 className="text-3xl md:text-5xl font-semibold mb-10">Why WhatsApp?</h2>
            <div className="flex flex-col gap-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                  <Smartphone className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">No app to download</h4>
                  <p className="text-white/80">Just send a message and you're done.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                  <MessageCircle className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">Works like a normal conversation</h4>
                  <p className="text-white/80">Simple, familiar, and fast.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                  <Users className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">Built for real people</h4>
                  <p className="text-white/80">No complicated steps or forms.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                  <Sparkles className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-2">AI powered transfers</h4>
                  <p className="text-white/80">Just type who you want to send again, and it's done.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full max-w-md">
            <div className="bg-[#efe7de] backdrop-blur-xl border border-white/20 p-8 rounded-[3rem] shadow-2xl flex flex-col gap-4 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat">
              <div className="whatsapp-bubble-left">Hey! Ready to send money?</div>
              <div className="whatsapp-bubble-right">Yes, sending $500 to Mom</div>
              <div className="whatsapp-bubble-left">Great! Rate is ₹{rate.toFixed(2)}. Confirm?</div>
              <div className="whatsapp-bubble-right">Confirm ✅</div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Steps */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-10">Simple as 1, 2, 3, 4</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Start chat on WhatsApp", icon: <MessageCircle /> },
              { step: "2", title: "Enter amount", icon: <Banknote /> },
              { step: "3", title: "Verify & connect bank", icon: <Smartphone /> },
              { step: "4", title: "Confirm and send", icon: <CheckCircle2 /> }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-6 text-whatsapp">
                  {item.icon}
                </div>
                <h4 className="text-lg font-medium text-slate-900">{item.title}</h4>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px border-t-2 border-dashed border-slate-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Corridors */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-3">Available Corridors</h2>
            <p className="text-slate-500 font-medium">
              WhatsApp us to get started: <a href="https://wa.me/18723127867?text=hi" target="_blank" rel="noopener noreferrer" className="text-whatsapp hover:underline">Send Now</a>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { name: "US", code: "us", status: "LIVE" },
              { name: "Canada", code: "ca", status: "Coming soon" },
              { name: "UAE", code: "ae", status: "Coming soon" },
              { name: "Saudi Arabia", code: "sa", status: "Coming soon" },
              { name: "Singapore", code: "sg", status: "Coming soon" }
            ].map((corridor) => (
              <motion.div
                key={corridor.name}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`p-6 rounded-3xl border flex flex-col items-center gap-4 ${corridor.status === "LIVE"
                  ? "bg-white border-whatsapp/20 shadow-xl shadow-whatsapp/5 scale-105 z-10"
                  : "bg-slate-50 border-slate-100 opacity-80"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <img
                      src={`https://flagcdn.com/${corridor.code}.svg`}
                      alt={corridor.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300" />
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <img
                      src="https://flagcdn.com/in.svg"
                      alt="India"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <div className="font-medium text-slate-900 mb-2">{corridor.name} → India</div>
                  <span className={`text-[10px] font-semibold px-3 py-1 rounded-full tracking-wider ${corridor.status === "LIVE"
                    ? "bg-whatsapp text-white"
                    : "bg-slate-200 text-slate-500"
                    }`}>
                    {corridor.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA */}
      <section className="py-24 px-6 text-center relative overflow-hidden bg-white">
        <div className="absolute inset-0 cta-gradient -z-10" />

        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-4">Send money in minutes, not days.</h2>
          <p className="text-lg text-slate-500 mb-8">No fees. No hassle. Just a simple chat.</p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full md:w-auto">
              <a href="https://wa.me/18723127867?text=hi" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-whatsapp hover:bg-whatsapp-dark text-white px-10 py-4 md:px-12 md:py-5 rounded-full font-medium text-lg md:text-xl transition-all shadow-xl shadow-whatsapp/20 flex items-center justify-center gap-2 md:gap-3 group mx-auto">
                Send Now
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="mt-2 text-base text-slate-400 font-medium">
              <span className="font-bold text-slate-600">350+</span> people on the waitlist
            </div>
          </div>
        </div>
      </section>

      {/* Footer — Apple-style minimal */}
      <footer className="bg-white border-t border-slate-200/80">
        {/* Navigation Links */}
        <div className="max-w-5xl mx-auto px-6 py-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-slate-500">
            <a href="mailto:support@surgepay.xyz" className="hover:text-slate-900 transition-colors">Contact</a>
            <Link to="/terms" className="hover:text-slate-900 transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="border-t border-slate-100">
          <div className="max-w-5xl mx-auto px-6 py-5">
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Surgepay is a financial technology company, not a bank. We provide technology solutions that enable users to send money internationally through regulated financial partners. Surgepay does not hold or custody customer funds. All money transmission, foreign exchange, payment processing, and identity verification services are provided by our licensed partner entities. Users must be 18 years or older to use the service. Transfers are subject to applicable laws, regulations, and partner terms. Additional terms and conditions may apply.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-100">
          <div className="max-w-5xl mx-auto px-6 py-4 text-[11px] text-slate-400">
            © 2026 SURGEPAYXYZ LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
