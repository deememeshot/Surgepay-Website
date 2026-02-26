/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
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
  Sparkles
} from 'lucide-react';

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#hero" onClick={scrollToTop} className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-whatsapp rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
            <Zap className="text-white w-5 h-5 fill-current" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">Surgepay</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" onClick={(e) => scrollToSection(e, 'how-it-works')} className="text-sm font-medium text-slate-600 hover:text-whatsapp transition-colors">How it works</a>
          <div className="relative group">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[8px] font-black uppercase tracking-widest text-whatsapp/60 whitespace-nowrap">Coming soon</span>
            <button className="bg-whatsapp hover:bg-whatsapp-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg flex items-center gap-2">
              Start on WhatsApp
            </button>
          </div>
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
            <div className="flex flex-col items-center gap-1 mt-2">
              <span className="text-[8px] font-black uppercase tracking-widest text-whatsapp/60">Coming soon</span>
              <button className="w-full bg-whatsapp text-white px-6 py-4 rounded-xl font-bold text-center">
                Start on WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
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
    <div className={`w-full max-w-[280px] md:max-w-[300px] max-h-full aspect-[9/19.5] bg-[#efe7de] rounded-[3rem] border-[10px] border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col relative transition-all duration-500`}>
      {/* Status Bar */}
      <div className="h-7 bg-[#075e54] w-full flex justify-between items-center px-6 pt-1">
        <div className="text-[11px] text-white font-bold">9:41</div>
        <div className="flex gap-1.5 items-center">
          <div className="w-3.5 h-2 bg-white/30 rounded-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-white w-2/3" />
          </div>
          <div className="flex gap-0.5">
            <div className="w-0.5 h-1 bg-white" />
            <div className="w-0.5 h-1.5 bg-white" />
            <div className="w-0.5 h-2 bg-white" />
          </div>
        </div>
      </div>
      
      {/* Chat Header */}
      <div className="bg-[#075e54] p-3 py-2 flex items-center gap-2">
        <div className="w-9 h-9 bg-slate-200 rounded-full flex items-center justify-center overflow-hidden border border-white/10">
          <div className="w-full h-full bg-whatsapp flex items-center justify-center">
            <Zap className="text-white w-5 h-5 fill-current" />
          </div>
        </div>
        <div className="flex-1">
          <div className="text-white text-[14px] font-bold leading-tight">Surgepay</div>
          <div className="text-white/70 text-[10px]">online</div>
        </div>
        <div className="flex gap-3 text-white/90">
          <div className="w-1 h-1 bg-white rounded-full" />
          <div className="w-1 h-1 bg-white rounded-full" />
          <div className="w-1 h-1 bg-white rounded-full" />
        </div>
      </div>

      {/* Chat Body */}
      <div className="flex-1 p-3 flex flex-col gap-2 overflow-y-auto bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat">
        <div className="relative w-full h-full">
          {/* Step 1 */}
          <div className={activeStep === 0 ? 'block' : 'hidden'}>
            <motion.div 
              initial={direction === 'forward' ? { opacity: 0, y: 10 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={stepTransition}
              className="flex flex-col gap-2"
            >
              <div className="whatsapp-bubble-right">
                Hi
                <div className="whatsapp-timestamp">10:42 AM <CheckCircle2 className="w-2.5 h-2.5 text-blue-400" /></div>
              </div>
              <div className="whatsapp-bubble-left">
                How much would you like to send?
                <div className="whatsapp-timestamp">10:42 AM</div>
              </div>
              <div className="whatsapp-bubble-right">
                $700
                <div className="whatsapp-timestamp">10:43 AM <CheckCircle2 className="w-2.5 h-2.5 text-blue-400" /></div>
              </div>
              <div className="whatsapp-bubble-left bg-white border-l-4 border-whatsapp !p-3">
                <div className="text-[10px] font-bold text-whatsapp mb-1">SURGEPAY QUOTE</div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-500">You send:</span>
                  <span className="font-bold">$700</span>
                </div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-500">Fees:</span>
                  <span className="font-bold text-whatsapp">$0</span>
                </div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-500">Rate:</span>
                  <span className="font-bold">
                    ₹{rate.toFixed(2)} 
                    <span className="ml-1 text-[8px] font-normal text-whatsapp">
                      {isLive ? '● Live rate' : '(Google rate)'}
                    </span>
                  </span>
                </div>
                <div className="h-px bg-slate-100 my-2" />
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">They receive:</span>
                  <span className="font-black text-slate-900">₹{(700 * rate).toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="whatsapp-timestamp">10:43 AM</div>
              </div>
            </motion.div>
          </div>

          {/* Step 2 */}
          <div className={activeStep === 1 ? 'block' : 'hidden'}>
            <motion.div 
              initial={direction === 'forward' ? { opacity: 0, y: 10 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={stepTransition}
              className="flex flex-col gap-2"
            >
              <div className="whatsapp-bubble-left">
                Where do you want to send the money?
                <div className="whatsapp-timestamp">10:44 AM</div>
              </div>
              <div className="flex flex-col gap-1.5 mt-1">
                {['HDFC Bank ••• 4821', 'SBI Bank ••• 1934', 'ICICI Bank ••• 7742'].map((bank, i) => (
                  <div 
                    key={bank}
                    className={`bank-row p-2.5 rounded-lg border flex items-center justify-between text-[11px] font-medium cursor-pointer transition-all ${i === 0 ? 'bg-whatsapp/10 border-whatsapp text-whatsapp' : 'bg-white border-slate-200 text-slate-600'} ${animateBanks ? 'animate' : ''} bank-row-delay-${i}`}
                  >
                    {bank}
                    {i === 0 && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </div>
                ))}
              </div>
              <div className="whatsapp-bubble-right mt-1">
                HDFC Bank ••• 4821
                <div className="whatsapp-timestamp">10:44 AM <CheckCircle2 className="w-2.5 h-2.5 text-blue-400" /></div>
              </div>
              <div className="whatsapp-bubble-left">
                Please confirm recipient details
                <div className="whatsapp-timestamp">10:44 AM</div>
              </div>
            </motion.div>
          </div>

          {/* Step 3 */}
          <div className={activeStep === 2 ? 'block' : 'hidden'}>
            <motion.div 
              initial={direction === 'forward' ? { opacity: 0, y: 10 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={stepTransition}
              className="flex flex-col gap-2"
            >
              <div className="whatsapp-bubble-left">
                Connect your US bank account
                <div className="whatsapp-timestamp">10:45 AM</div>
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-slate-200 flex items-center gap-2.5 shadow-sm">
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Banknote className="text-blue-600 w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="text-[11px] font-bold text-slate-900">Chase Bank ••• 9901</div>
                  <div className="text-[9px] text-slate-500">Connected via Plaid</div>
                </div>
                <CheckCircle2 className="text-whatsapp w-4 h-4" />
              </div>
              <div className="whatsapp-bubble-left">
                Complete quick identity verification
                <div className="whatsapp-timestamp">10:45 AM</div>
              </div>
              <div className="whatsapp-bubble-left flex items-center gap-2">
                Verifying… <motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="inline-block">⏳</motion.span>
                <div className="whatsapp-timestamp">10:46 AM</div>
              </div>
              <div className="whatsapp-bubble-left bg-whatsapp text-white font-bold">
                Verifying… ✅
                <div className="whatsapp-timestamp !text-white/70">10:46 AM</div>
              </div>
            </motion.div>
          </div>

          {/* Step 4 */}
          <div className={activeStep === 3 ? 'block' : 'hidden'}>
            <motion.div 
              initial={direction === 'forward' ? { opacity: 0, y: 10 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={stepTransition}
              className="flex flex-col gap-2"
            >
              <div className="whatsapp-bubble-left">
                Review your transfer
                <div className="whatsapp-timestamp">10:47 AM</div>
              </div>
              <div className="bg-white rounded-lg p-2.5 border border-slate-200 shadow-sm">
                <div className="flex justify-between text-[11px] mb-1">
                  <span className="text-slate-500">$700 → ₹{(700 * rate).toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="text-[10px] text-whatsapp font-bold">Fees: $0 • Rate: ₹{rate.toFixed(2)}</div>
              </div>
              <div className="whatsapp-bubble-left">
                Secure payment link generated
                <div className="whatsapp-timestamp">10:47 AM</div>
              </div>
              <div className="w-full bg-whatsapp text-white py-2.5 rounded-lg font-black text-xs shadow-lg shadow-whatsapp/20 text-center">
                PAY $700
              </div>
              <div className="whatsapp-bubble-right">
                User taps Pay
                <div className="whatsapp-timestamp">10:48 AM <CheckCircle2 className="w-2.5 h-2.5 text-blue-400" /></div>
              </div>
              <div className="whatsapp-bubble-left bg-white border-l-4 border-whatsapp !p-3">
                <div className="text-[10px] font-bold text-whatsapp mb-1">TRANSFER SUCCESSFUL</div>
                <div className="text-[11px] text-slate-600 mb-2">₹{(700 * rate).toLocaleString('en-IN', { maximumFractionDigits: 0 })} is on its way to India.</div>
                <div className="flex justify-between text-[10px]">
                  <span className="text-slate-400">Ref: SP-99281</span>
                  <span className="text-whatsapp font-bold">Track Status</span>
                </div>
                <div className="whatsapp-timestamp">10:48 AM</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Chat Input */}
      <div className="p-2 pb-4 bg-transparent flex gap-1.5 items-center">
        <div className="flex-1 bg-white rounded-full h-9 px-4 flex items-center text-slate-400 text-[12px] shadow-sm">
          Type a message
        </div>
        <div className="w-9 h-9 bg-[#128c7e] rounded-full flex items-center justify-center shadow-sm">
          <MessageCircle className="text-white w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [activeScreen, setActiveScreen] = useState(0);
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
        const response = await fetch('https://api.frankfurter.app/latest?from=USD&to=INR');
        const data = await response.json();
        if (data.rates && data.rates.INR) {
          setRate(data.rates.INR);
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
        setIsPhoneFullyVisible(entry.intersectionRatio >= 0.99);
      },
      {
        threshold: [0, 0.5, 0.99, 1.0],
        rootMargin: "0px"
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
    if (isMobile) return; // Disable scroll-based steps on mobile

    // Detect direction
    const dir = latest > lastScrollY.current ? 'forward' : 'backward';
    setDirection(dir);
    lastScrollY.current = latest;

    // Only advance steps if the phone is fully visible in the viewport
    if (isPhoneFullyVisible || latest < 0.05 || latest > 0.95) {
      const step = Math.min(Math.floor(latest * 4), 3);
      if (step !== activeScreen) {
        setActiveScreen(step);
      }
    }
  });

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
      <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-32 pb-24 px-6 overflow-hidden scroll-mt-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-whatsapp/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-whatsapp/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Backed by</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 bg-[#FF4B4B] flex items-center justify-center rounded-[2px]">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5L5 19H8.5L12 12L15.5 19H19L12 5Z" fill="white"/>
                    </svg>
                  </div>
                  <span className="text-[11px] font-black text-[#FF4B4B] tracking-widest uppercase">Antler</span>
                </div>
              </div>
            </div>
            <h1 className="text-[1.85rem] leading-[1.2] md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 md:leading-[1.05] mb-6 max-w-[320px] md:max-w-5xl mx-auto">
              <span className="block">Sending money home</span>
              <span className="block">should be as simple</span>
              <span className="block">as a <span className="text-whatsapp">WhatsApp chat.</span></span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 mb-10 max-w-3xl mx-auto leading-relaxed">
              From US to India. Instant transfers. Zero fees. Google rates.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-center gap-6 mb-12"
          >
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-slate-100 shadow-sm bg-slate-50">
              <img 
                src="https://flagcdn.com/us.svg" 
                alt="US Flag" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ArrowRight className="text-slate-300 w-8 h-8" />
            </motion.div>
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-slate-100 shadow-sm bg-slate-50">
              <img 
                src="https://flagcdn.com/in.svg" 
                alt="India Flag" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center sm:items-end justify-center gap-5"
          >
            <div className="relative flex flex-col items-center w-full sm:w-auto">
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-[0.2em] text-whatsapp/60 whitespace-nowrap">Coming soon</span>
              <button className="w-full sm:w-auto bg-whatsapp hover:bg-whatsapp-dark text-white px-12 py-6 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-whatsapp/30 flex items-center justify-center gap-3 group">
                Start on WhatsApp 
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <a href="#how-it-works" className="w-full sm:w-auto bg-slate-50 hover:bg-slate-100 text-slate-900 px-12 py-6 rounded-2xl font-bold text-xl transition-all border border-slate-200 text-center">
              See how it works
            </a>
          </motion.div>

          {/* Trust Signals Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-8 border-t border-slate-100 flex flex-col items-center sm:flex-row sm:flex-wrap sm:justify-center gap-x-12 gap-y-4 sm:gap-y-6"
          >
            <div className="flex flex-col items-start gap-y-4 sm:flex-row sm:items-center sm:gap-x-12 sm:gap-y-0">
              <div className="flex items-center gap-4 text-slate-400">
                <div className="w-7 h-7 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-whatsapp" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest">Regulated Partners</span>
              </div>
              <div className="flex items-center gap-4 text-slate-400">
                <div className="w-7 h-7 flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5 text-whatsapp" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest">Bank-level Security</span>
              </div>
              <div className="flex items-center gap-4 text-slate-400">
                <div className="w-7 h-7 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-whatsapp" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest">KYC Compliant</span>
              </div>
              <div className="flex items-center gap-4 text-slate-400">
                <div className="w-7 h-7 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-whatsapp" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest">End-to-end Encrypted</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Security */}
      <section id="security" className="py-20 px-6 bg-slate-50 relative overflow-hidden scroll-mt-24">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Trust & Security</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Your money and data are protected by bank-grade encryption and regulated financial infrastructure.
            </p>
          </div>

          {/* Dominant Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-slate-100 text-center">
              <div className="text-5xl md:text-7xl font-black text-whatsapp mb-2">10,000+</div>
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Active Users</div>
            </div>
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-slate-100 text-center">
              <div className="text-5xl md:text-7xl font-black text-whatsapp mb-2">$10M+</div>
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Transferred</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Lock className="w-8 h-8" />, title: "Bank-grade security", desc: "Your data is always encrypted." },
              { icon: <ShieldCheck className="w-8 h-8" />, title: "Identity verification", desc: "Strict KYC for every user." },
              { icon: <Globe className="w-8 h-8" />, title: "Encrypted comms", desc: "Pin-based login for every sessions." },
              { icon: <Users className="w-8 h-8" />, title: "Trusted partners", desc: "Regulated financial infrastructure." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-all">
                <div className="text-whatsapp mb-6">{item.icon}</div>
                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
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
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-2 md:mb-4">Experience the magic</h2>
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
                        <div className="w-6 h-6 rounded-full bg-whatsapp text-white flex items-center justify-center font-black text-xs">
                          {activeScreen + 1}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">{screens[activeScreen].title}</h3>
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
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-sm ${activeScreen === i ? 'bg-whatsapp text-white' : 'bg-slate-200 text-slate-500'}`}>
                          {i + 1}
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">{screen.title}</h3>
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
              <h3 className="text-lg font-bold mb-3">Instant Transfers</h3>
              <p className="text-slate-600 leading-relaxed">Your money arrives in minutes, not days.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100">
              <div className="w-12 h-12 bg-whatsapp/10 rounded-2xl flex items-center justify-center mb-6">
                <Banknote className="text-whatsapp w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-3">Zero Fees</h3>
              <p className="text-slate-600 leading-relaxed">No hidden charges. No surprises.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100">
              <div className="w-12 h-12 bg-whatsapp/10 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="text-whatsapp w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-3">Google Exchange Rates</h3>
              <p className="text-slate-600 leading-relaxed">Get the real rate you see online.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100">
              <div className="w-12 h-12 bg-whatsapp/10 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="text-whatsapp w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-3">Secure & Trusted</h3>
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
            <h2 className="text-4xl md:text-6xl font-black mb-10">Why WhatsApp?</h2>
            <div className="flex flex-col gap-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                  <Smartphone className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">No app to download</h4>
                  <p className="text-white/80">Just send a message and you're done</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                  <MessageCircle className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Works like a normal conversation</h4>
                  <p className="text-white/80">Simple, familiar, and fast</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                  <Users className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Built for real people</h4>
                  <p className="text-white/80">No complicated steps or forms</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                  <Sparkles className="text-white w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">AI powered recurring transfers</h4>
                  <p className="text-white/80">Just say who you want to send, confirm and boom, sent</p>
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
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-10">Simple as 1, 2, 3, 4</h2>
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
                <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
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
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">Available corridors</h2>
            <p className="text-slate-500 font-medium">More countries launching soon.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { name: "US", code: "us", status: "LIVE" },
              { name: "Canada", code: "ca", status: "COMING SOON" },
              { name: "UAE", code: "ae", status: "COMING SOON" },
              { name: "Saudi Arabia", code: "sa", status: "COMING SOON" },
              { name: "Singapore", code: "sg", status: "COMING SOON" }
            ].map((corridor) => (
              <motion.div
                key={corridor.name}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`p-6 rounded-3xl border flex flex-col items-center gap-4 ${
                  corridor.status === "LIVE" 
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
                  <div className="font-bold text-slate-900 mb-2">{corridor.name} → India</div>
                  <span className={`text-[10px] font-black px-3 py-1 rounded-full tracking-wider ${
                    corridor.status === "LIVE"
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



      {/* Final CTA */}
      <section className="py-24 px-6 text-center relative overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-whatsapp/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-whatsapp/10 rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4">Send money in minutes, not days.</h2>
          <p className="text-xl text-slate-600 mb-8">No fees. No hassle. Just a simple chat.</p>
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-whatsapp/60">Coming soon</span>
            <button className="bg-whatsapp hover:bg-whatsapp-dark text-white px-8 py-4 md:px-12 md:py-6 rounded-2xl md:rounded-3xl font-black text-lg md:text-2xl transition-all shadow-2xl shadow-whatsapp/30 flex items-center justify-center gap-2 md:gap-3 mx-auto">
              Start on WhatsApp <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 pt-20 pb-10 px-6 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <a href="#hero" onClick={scrollToTop} className="flex items-center gap-2 mb-6 group cursor-pointer w-fit">
                <div className="w-8 h-8 bg-whatsapp rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                  <Zap className="text-white w-5 h-5 fill-current" />
                </div>
                <span className="text-2xl font-bold tracking-tight text-slate-900">Surgepay</span>
              </a>
              <p className="text-slate-500 max-w-sm leading-relaxed">
                Send money from the US to India instantly using WhatsApp. The simplest way to support your loved ones back home.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Contact</h4>
              <ul className="flex flex-col gap-4 text-slate-500">
                <li><a href="mailto:support@surgpay.xyz" className="hover:text-whatsapp transition-colors">support@surgpay.xyz</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="text-[11px] text-slate-400 leading-relaxed">
                <p className="font-bold mb-2 uppercase tracking-wider text-slate-500">Disclaimers</p>
                <p className="mb-4">
                  1. <a href="#hero" onClick={scrollToTop} className="hover:text-whatsapp transition-colors font-bold">Surgepay</a> is a financial technology company, not a bank. We provide technology solutions that enable users to send money internationally through regulated financial partners. Surgepay does not hold or custody customer funds.
                </p>
                <p>
                  2. <a href="#hero" onClick={scrollToTop} className="hover:text-whatsapp transition-colors font-bold">Surgepay</a> works with licensed financial institutions and service providers to facilitate payments, identity verification, and bank connectivity. These partners are responsible for the underlying financial services and regulatory compliance. Users must be 18 years or older to use the service. Additional terms and conditions may apply.
                </p>
              </div>
              <div className="text-[11px] text-slate-400 leading-relaxed">
                <p className="font-bold mb-2 uppercase tracking-wider text-slate-500">All rights reserved</p>
                <p>
                  <a href="#hero" onClick={scrollToTop} className="hover:text-whatsapp transition-colors font-bold">Surgepay</a> is a financial technology company that facilitates international money transfers through trusted, regulated partners. We do not provide banking services directly. All transfers are subject to applicable laws, regulations, and partner terms. Surgepay does not take custody of user funds. Users are responsible for ensuring the accuracy of transaction details and complying with applicable requirements.
                </p>
              </div>
            </div>
            <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
              <span>© 2026 SURGEPAY PTE LTD. All rights reserved.</span>
              <div className="flex gap-6 items-center">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <span>US to India</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Regulated Partners</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
