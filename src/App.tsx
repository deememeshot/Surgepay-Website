
import React, { useState, useEffect } from 'react';
import { ArrowRight } from "lucide-react";
import GlobeAnimation from "./GlobeAnimation";

const G = '#25D366';

const icons = {
  zap: <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>,
  money: <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>,
  lock: <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>,
  shield: <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 01-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 011-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 011.52 0C13.51 3.81 16 5 18 5a1 1 0 011 1z" /><path d="M9 12l2 2 4-4" /></svg>,
  globe: <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 000 20 14.5 14.5 0 000-20" /><path d="M2 12h20" /></svg>,
  users: <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>,
  phone: <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" /></svg>,
  msg: <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" /></svg>,
  sparkles: <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" /><path d="M19 15l.7 1.8L21.5 18l-1.8.7L19 20.5l-.7-1.8L16.5 18l1.8-.7z" /></svg>,
  arrow: <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>,
  plus: <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
};

const HoverAnchor = ({ style, hoverStyle, children, ...props }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a
      {...props}
      style={{ ...style, ...(isHovered ? hoverStyle : {}) }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </a>
  );
};

const bubbleIn = (children: React.ReactNode, time: string, key: string) => (
  <div key={key} style={{ background: '#fff', borderRadius: '0 8px 8px 8px', padding: '6px 8px 4px', maxWidth: '85%', position: 'relative', fontSize: 13, lineHeight: 1.35, color: '#111b21', alignSelf: 'flex-start', boxShadow: '0 1px 0.5px rgba(11,20,26,0.13)' }}>
    <div style={{ position: 'absolute', top: 0, left: -6, width: 8, height: 13, background: '#fff', clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
    {children}
    <div style={{ fontSize: 10, color: '#667781', textAlign: 'right', marginTop: 2, lineHeight: 1 }}>{time}</div>
  </div>
);

const bubbleOut = (children: React.ReactNode, time: string, key: string) => (
  <div key={key} style={{ background: '#d9fdd3', borderRadius: '8px 0 8px 8px', padding: '6px 8px 4px', maxWidth: '85%', position: 'relative', fontSize: 13, lineHeight: 1.35, color: '#111b21', alignSelf: 'flex-end', boxShadow: '0 1px 0.5px rgba(11,20,26,0.13)' }}>
    <div style={{ position: 'absolute', top: 0, right: -6, width: 8, height: 13, background: '#d9fdd3', clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />
    {children}
    <div style={{ fontSize: 10, color: '#667781', textAlign: 'right', marginTop: 2, lineHeight: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 3 }}>
      {time}
      <span style={{ color: '#53bdeb', fontSize: 12, letterSpacing: '-3px', marginLeft: 1 }}>✓✓</span>
    </div>
  </div>
);

const opt = (label: string, i: number) => <div key={i} style={{ textAlign: 'center', color: '#00a884', fontWeight: 500, borderTop: '1px solid #e2e8f0', paddingTop: 4 }}>{label}</div>;
const opts = (list: string[]) => <div style={{ marginTop: 4, display: 'flex', flexDirection: 'column', gap: 4 }}>{list.map(opt)}</div>;
const nl = (text: string) => text.split('\n').map((l, i) => <React.Fragment key={i}>{l}<br /></React.Fragment>);

export default function App() {
  const [active, setActive] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [amount, setAmount] = useState('10');
  const [rate, setRate] = useState<number | null>(null);
  const [googleRate, setGoogleRate] = useState<number | null>(null);

  useEffect(() => {
    const SURGEPAY_RATE_URL = 'https://api.surgepay.xyz/api/v1/public/rates/usd-inr';

    const fetchSurgepayRate = async () => {
      try {
        const res = await fetch(SURGEPAY_RATE_URL, {
          signal: AbortSignal.timeout(8000),
        });
        if (!res.ok) return null;

        const data = await res.json();
        if (data.stale) return null;

        const fetchedRate = Number(data.rate);
        return Number.isFinite(fetchedRate) && fetchedRate > 0 ? fetchedRate : null;
      } catch {
        return null;
      }
    };

    const fetchFallbackRate = async () => {
      try {
        const response = await fetch('/api/rate');
        const data = await response.json();
        return data.rate ? Number(data.rate) : null;
      } catch (error) {
        return null;
      }
    };

    const fetchGoogleRate = async () => {
      try {
        const res = await fetch('/api/rate');
        if (res.ok) {
          const data = await res.json();
          if (data?.rate) return Number(data.rate);
        }
      } catch {}
      return null;
    };

    const updateRate = async () => {
      const surgepayRate = await fetchSurgepayRate();
      const finalRate = surgepayRate ?? await fetchFallbackRate();
      if (finalRate !== null) {
        setRate(finalRate);
      }

      const mRate = await fetchGoogleRate();
      if (mRate !== null) {
        setGoogleRate(mRate);
      }
    };

    updateRate();
    const interval = setInterval(updateRate, 60_000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById('how-it-works');
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      if (total <= 0) return;
      const p = Math.min(1, Math.max(0, -r.top / total));
      const next = Math.min(3, Math.floor(p * 4.0001));
      if (next !== active) setActive(next);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [active]);

  const goToStep = (i: number) => {
    setActive(i);
    const el = document.getElementById('how-it-works');
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    if (total > 0) {
      window.scrollTo({ top: el.offsetTop + (i / 4) * total * 1.02 + 8, behavior: 'smooth' });
    }
  };

  const chat = () => {
    const chatRate = rate !== null ? rate.toFixed(2) : '--.--';
    const chatReceive = rate !== null ? (10 * rate).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '--.--';

    const a = active;
    if (a === 0) return [
      bubbleOut('Hi', '10:28 AM', 'a'),
      bubbleIn([nl("Hey! Surgepay helps you send money back home to India.\n\nZero fees. We transfer at Google rates.\n\nWhat would you like to do?"), <div key='m' style={{ marginTop: 8, textAlign: 'center', color: '#00a884', fontWeight: 500, borderTop: '1px solid #e2e8f0', paddingTop: 6 }}>☰ Choose an option</div>], '10:28 AM', 'b'),
      bubbleOut([<span key={1}>Send money</span>, <br key={2} />, <span key={3} style={{ fontSize: 11, color: '#64748b' }}>Send USD to India</span>], '10:28 AM', 'c'),
      bubbleIn([nl("How much would you like to send (in USD)?\nMin: $2 | Max: $500\nOr type any amount."), opts(['$10', '$20', '$50'])], '10:29 AM', 'd'),
      bubbleOut('$10', '10:29 AM', 'e'),
      bubbleIn([nl(`Here's your quote:\n\nYou send: $10.00\nYou receive: Rs.${chatReceive}\nRate: $1 = Rs.${chatRate}\nFees: $0.00\n\nThis rate is valid for the next few minutes.`), opts(['Continue', 'Change amount', 'Cancel'])], '10:29 AM', 'f')
    ];
    if (a === 2) return [
      bubbleIn(nl("You don't have a verified Indian bank account.\nLet's add your Indian bank account.\n\nWhat is your Indian bank account number?\n\nNote: Currently we do not support NRE bank account."), '10:31 AM', 'a'),
      bubbleOut('09845321876', '10:31 AM', 'b'),
      bubbleIn('Please type your account number again to confirm.', '10:31 AM', 'c'),
      bubbleOut('09845321876', '10:31 AM', 'd'),
      bubbleIn(nl("What is the IFSC code?\nExample: HDFC0001234\n\nYou can find this on your cheque book or bank statement."), '10:31 AM', 'e'),
      bubbleOut('ICIC0009876', '10:31 AM', 'f'),
      bubbleIn([<span key={1}>Is this a Savings or Current account?</span>, opts(['Savings', 'Current'])], '10:31 AM', 'g'),
      bubbleOut('Savings', '10:32 AM', 'h'),
      bubbleIn([nl("Please review the bank details:\n\nAccount: ...1876\nIFSC: ICIC0009876\nType: Savings\n\nMake sure everything is correct. Incorrect details may cause delays."), opts(['Looks good', 'Edit details'])], '10:32 AM', 'i')
    ];
    if (a === 1) return [
      bubbleIn(nl("Next step: KYC Verification\n\nBefore we proceed, please keep the following in mind:\n• Have one of these U.S. Identity documents ready\n• A liveness check will be conducted to verify your identity.\n• KYC process takes ~2 minutes"), '10:29 AM', 'a'),
      bubbleIn([<span key={1}>Persona</span>, <br key={2} />, <span key={3} style={{ color: '#00a884', fontSize: 10 }}>api-dev.surgepay.xyz</span>, <br key={4} />, <br key={5} />, <span key={6}>Please use the following link to verify your identity:</span>, <br key={7} />, <span key={8} style={{ color: '#3b82f6', textDecoration: 'underline', wordBreak: 'break-all' }}>https://api-dev.surgepay.xyz/kyc/link</span>, <br key={9} />, <br key={10} />, <span key={11}>Your data is safe. ✓</span>], '10:29 AM', 'b'),
      bubbleIn('Your identity has been verified ✓✓', '10:29 AM', 'c'),
      bubbleIn(nl("Next step: Connect your U.S. Bank Account\n\nBefore we proceed, please keep the following in mind:\n• You'll be redirected to your bank's login page\n• Select a bank account.\n• Surgepay never sees or stores your bank login credentials."), '10:29 AM', 'd'),
      bubbleIn([<span key={1}>Please use the following link to connect your U.S. Bank Account:</span>, <br key={2} />, <span key={3} style={{ color: '#3b82f6', textDecoration: 'underline', wordBreak: 'break-all' }}>https://api-dev.surgepay.xyz/bank/link</span>, <br key={4} />, <br key={5} />, <span key={6}>Important: This link is valid for 10 minutes.</span>], '10:29 AM', 'e'),
      bubbleIn('Your US bank account has been connected!', '10:30 AM', 'f')
    ];
    return [
      bubbleIn([nl(`Please confirm your transfer.\n\nYou send: $10.00\nYou receive: Rs.${chatReceive}\nFees: $0.00\nRate: $1 = Rs.${chatRate} (USD/INR)\nTo: ICIC`), opts(['Confirm & pay', 'Change amount', 'Cancel'])], '10:33 AM', 'a'),
      bubbleOut('Confirm & pay', '10:33 AM', 'b'),
      bubbleIn(nl("Enter your 4-digit PIN to confirm this transfer.\n\nYour PIN is never stored in chat history."), '10:33 AM', 'c'),
      bubbleOut('1234', '10:33 AM', 'd'),
      bubbleIn([nl("Your transfer SP-37800 has been created!\n\nYour payment is being processed. We'll notify you once it's confirmed.\n\nTracking ID: SP-37800"), opts(['Track transfer', 'Back to menu'])], '10:33 AM', 'e'),
      bubbleIn(nl(`Your transfer (SP-37800) has been delivered!\n\nRs.${chatReceive} has been deposited into your Indian bank account.`), '10:33 AM', 'f')
    ];
  };

  const screens = [
    { title: 'Enter amount', desc: "Tell us how much you want to send. We show exactly what lands in India at real-time Google rates." },
    { title: 'Verify &amp; connect', desc: 'A one-time KYC and a secure bank connection. We never see your bank login.' },
    { title: 'Add your Indian bank', desc: 'Account number, IFSC, account type. All major Indian banks, savings and NRO.' },
    { title: 'Confirm and send', desc: 'Review, enter your PIN, and the money is on its way. Receipt arrives in the chat.' }
  ];
  const amt = parseFloat(String(amount).replace(/[^0-9.]/g, '')) || 0;
  const faqs = [
    ['What is Surgepay?', 'Surgepay is a WhatsApp first US to India remittance platform built for Indians in the US, offering instant transfers, Google matching rates, and zero hidden fees. No additional application downloads required.'],
    ['How is Surgepay different from traditional banking systems?', 'Traditional providers often charge hidden FX markups and slower settlement times. Surgepay uses a mix of traditional banking and stablecoin infrastructure in a compliant manner to enable faster, more transparent transfers.'],
    ['How fast are transfers?', 'Most transfers are completed within minutes depending on banking partner availability and verification status. Ideally, transfers are instant.'],
    ['Are there any hidden fees?', 'No hidden fees. No surprise deductions. The rate you see is the rate you get. We aim to consistently offer rates matching or better than Google rates till December 31st 2027.'],
    ['Is Surgepay safe?', 'Yes. We work with regulated banking and payment partners and follow strict KYC, AML, and compliance standards.'],
    ['Can I send money to my own Indian account?', 'Yes. You can transfer money from your US bank account to your own Indian bank account.'],
    ['Can I send money to a third party account?', "No. Currently, Surgepay supports transfers only to your own Indian bank account from your own US bank account. You cannot transfer to another person's bank account."],
    ['Which Indian banks and account types are supported?', 'All major Indian banks are supported. We currently support savings and NRO accounts. NRE accounts are not supported at the moment.'],
    ['Is it safe to use WhatsApp?', 'Yes, 100% safe. WhatsApp is only the interface layer. The actual transaction happens securely through our regulated banking partners in protected browser sessions. We also comply with strict data security and privacy standards.']
  ];
  const corridors = [['United States', 'us', 'LIVE'], ['Canada', 'ca', 'Coming soon'], ['UAE', 'ae', 'Coming soon'], ['Saudi Arabia', 'sa', 'Coming soon'], ['Singapore', 'sg', 'Coming soon']];

  const rateText = rate !== null ? rate.toFixed(2) : '--.--';
  const googleRateText = googleRate !== null ? googleRate.toFixed(2) : '--.--';
  const onAmount = (e: any) => setAmount(e.target.value.replace(/[^0-9.]/g, '').slice(0, 7));
  const receiveText = rate !== null ? (amt * rate).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '--.--';
  const trustSignals = ['REGULATED PARTNERS', 'BANK-LEVEL SECURITY', 'KYC COMPLIANT', 'END-TO-END ENCRYPTED'];
  const stats = [
    { value: '$1M+', label: 'Volume in pipeline' },
    { value: '$0', label: 'Fees, always' },
    { value: '~2 min', label: 'One-time KYC' },
    { value: 'All', label: 'Major Indian banks' }
  ];
  const securityCards = [
    { icon: icons.zap, title: 'Instant Transfers', desc: 'Your money arrives in minutes, not\u00a0days.' },
    { icon: icons.money, title: 'Zero Fees', desc: 'No hidden charges. No surprises.' },
    { icon: icons.globe, title: 'Google Exchange Rates', desc: 'Get the real rate you see online.' },
    { icon: icons.shield, title: 'Secure & Trusted', desc: 'Built on regulated financial infrastructure.' }
  ];
  const whyItems = [
    { icon: icons.phone, title: 'No app to download', desc: "Just send a message and you're done." },
    { icon: icons.msg, title: 'A normal conversation', desc: 'Simple, familiar, and fast.' },
    { icon: icons.users, title: 'Built for real people', desc: 'No complicated steps or forms.' }
  ];
  const chatColumn = <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>{chat()}</div>;
  const dots = screens.map((s, i) => <button key={i} onClick={() => goToStep(i)} style={{ width: 8, height: active === i ? 26 : 8, borderRadius: 999, border: 'none', padding: 0, cursor: 'pointer', background: active === i ? G : '#cbd5e1', transition: 'all .35s' }} />);
  const stepRows = screens.map((s, i) => {
    const on = active === i;
    return <div key={i} className={`step-row-item${on ? ' is-active' : ''}`} onClick={() => goToStep(i)} style={{ position: 'relative', cursor: 'pointer', padding: on ? '22px 0 24px 24px' : '16px 0 16px 24px', borderLeft: `2px solid ${on ? G : '#e2e8f0'}`, transition: 'all .4s cubic-bezier(0.16,1,0.3,1)', opacity: on ? 1 : 0.5 }}>
      <div className="step-inner-grid" style={{ display: 'grid', gridTemplateColumns: '72px 1fr', gap: 20, alignItems: 'baseline' }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', color: on ? G : '#94a3b8', transition: 'color .4s' }}>{'STEP 0' + (i + 1)}</div>
        <div>
          <h3 className={`step-title-text${on ? ' step-active' : ''}`} style={{ fontSize: on ? 30 : 19, lineHeight: 1.05, letterSpacing: '-0.035em', fontWeight: 600, color: '#0f172a', margin: 0, transition: 'all .4s cubic-bezier(0.16,1,0.3,1)' }} dangerouslySetInnerHTML={{ __html: s.title }} />
          <div style={{ maxHeight: on ? 120 : 0, opacity: on ? 1 : 0, overflow: 'hidden', transition: 'max-height .4s cubic-bezier(0.16,1,0.3,1),opacity .3s' }}>
            <p style={{ margin: '10px 0 0', fontSize: 15, color: '#64748b', lineHeight: 1.65, maxWidth: '40ch' }}>{s.desc}</p>
          </div>
        </div>
      </div>
    </div>;
  });
  const corridorRows = (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {corridors.map(([name, code, status]) => {
        const live = status === 'LIVE';
        return (
          <div
            key={name}
            style={{ transition: 'transform 0.3s, box-shadow 0.3s' }}
            className={`p-6 rounded-3xl border flex flex-col items-center gap-4 hover:-translate-y-2 ${live
              ? "bg-white border-[#25D366]/20 shadow-xl shadow-[#25D366]/5 scale-105 z-10"
              : "bg-slate-50 border-slate-100 opacity-80"
              }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                <img
                  src={`https://flagcdn.com/${code}.svg`}
                  alt={name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div style={{ color: '#cbd5e1', display: 'flex', alignItems: 'center' }}>{icons.arrow}</div>
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
              <div className="font-medium text-slate-900 mb-2">{name} → India</div>
              <span className={`text-[10px] font-semibold px-3 py-1 rounded-full tracking-wider ${live
                ? "bg-[#25D366] text-white"
                : "bg-slate-200 text-slate-500"
                }`}>
                {status.toUpperCase()}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
  const faqRows = faqs.map(([q, ansr], i) => {
    const open = openFaq === i;
    return <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', background: open ? 'linear-gradient(90deg,rgba(37,211,102,0.06),rgba(37,211,102,0))' : 'transparent', transition: 'background .3s' }}>
      <button className="faq-question" onClick={() => setOpenFaq(open ? null : i)} style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between', gap: 20, textAlign: 'left', padding: '22px 8px', background: 'none', border: 'none', cursor: 'pointer' }}>
        <h3 style={{ fontSize: 18, fontWeight: 500, letterSpacing: '-0.02em', margin: 0, color: open ? G : '#e2e8f0', transition: 'color .2s' }}>{q}</h3>
        <span style={{ flexShrink: 0, color: open ? G : '#64748b', transition: 'transform .35s', transform: open ? 'rotate(45deg)' : 'none', display: 'flex' }}>{icons.plus}</span>
      </button>
      {open ? <p className="faq-answer" style={{ padding: '0 60px 24px 8px', margin: 0, fontSize: 15, lineHeight: 1.7, color: '#94a3b8' }}>{ansr}</p> : null}
    </div>;
  });

  return (
    <div style={{ minHeight: '100vh', overflowX: 'clip', fontFamily: "'SF Pro Display', 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif", fontVariantNumeric: 'tabular-nums' }}>


      <div style={{ "position": "fixed", "top": "20px", "left": "0", "right": "0", "zIndex": "50", "maxWidth": "1280px", "margin": "0 auto", "padding": "0 24px", "pointerEvents": "none" }}>
        <div style={{ "background": "rgba(255,255,255,0.85)", "border": "1px solid rgba(15,23,42,0.08)", "pointerEvents": "auto", "borderRadius": "999px", "padding": "12px 12px 12px 24px", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "boxShadow": "0 8px 30px rgba(15,23,42,0.04)", "backdropFilter": "blur(12px)", "WebkitBackdropFilter": "blur(12px)" }}>
          <a href="#hero" style={{ "display": "flex", "alignItems": "center", "gap": "10px" }}>
            <div style={{ "width": "32px", "height": "32px", "background": "#25D366", "borderRadius": "10px", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            </div>
            <span style={{ "fontSize": "20px", "fontWeight": "600", "letterSpacing": "-0.03em", "color": "#0f172a" }}>Surgepay</span>
          </a>
          <div style={{ "display": "flex", "alignItems": "center", "gap": "28px" }}>
            <a href="#how-it-works" className="nav-link-desktop" style={{ "fontSize": "15px", "fontWeight": "500", "color": "#475569" }}>How it works</a>
            <HoverAnchor href="https://wa.me/18723127867?text=hi" target="_blank" rel="noopener noreferrer" className="nav-send-btn" style={{ "background": "#25D366", "color": "#fff", "padding": "10px 24px", "borderRadius": "999px", "fontSize": "15px", "fontWeight": "600", "boxShadow": "0 4px 14px rgba(37,211,102,0.4)" }} hoverStyle={{ "background": "#128C7E" }} >Send Now</HoverAnchor>
          </div>
        </div>
      </div>

      <section id="hero" data-screen-label="Hero" style={{ "minHeight": "100vh", "display": "flex", "flexDirection": "column", "position": "relative", "overflow": "hidden", "background": "radial-gradient(ellipse 70% 60% at 12% 8%,rgba(236,253,245,0.85) 0%,transparent 62%),radial-gradient(ellipse 50% 50% at 88% 30%,rgba(240,253,244,0.7) 0%,transparent 60%),#fff" }}>
        <div className="hero-grid" style={{ "flex": "1", "width": "100%", "maxWidth": "1280px", "margin": "0 auto", "padding": "130px 32px 56px 32px" }}>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div style={{ "display": "inline-flex", "alignItems": "center", "gap": "12px", "padding": "8px 16px", "borderRadius": "999px", "background": "rgba(255,255,255,0.7)", "backdropFilter": "blur(18px) saturate(160%)", "WebkitBackdropFilter": "blur(18px) saturate(160%)", "border": "1px solid rgba(15,23,42,0.07)", "boxShadow": "0 1px 0 rgba(255,255,255,0.9) inset", "marginBottom": "30px" }}>
              <span style={{ "fontSize": "13px", "fontWeight": "600", "color": "#64748b", "textTransform": "uppercase", "letterSpacing": "0.14em" }}>Backed by</span>
              <a href="https://www.antler.co" target="_blank" rel="noopener noreferrer" style={{ "display": "flex", "alignItems": "center", "gap": "6px" }}>
                <div style={{ "width": "18px", "height": "18px", "background": "#FF4B4B", "display": "flex", "alignItems": "center", "justifyContent": "center", "borderRadius": "3px" }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M12 5L5 19H8.5L12 12L15.5 19H19L12 5Z" fill="white"></path></svg>
                </div>
                <span style={{ "fontSize": "12px", "fontWeight": "700", "color": "#FF4B4B", "letterSpacing": "0.1em", "textTransform": "uppercase" }}>Antler</span>
              </a>
              <span style={{ "fontSize": "12px", "color": "#94a3b8" }}>&amp;</span>
              <a href="https://www.yzilabs.com" target="_blank" rel="noopener noreferrer" style={{ "display": "flex", "alignItems": "center" }}>
                <img src="/yzilabs-logo.png" alt="YZi Labs" style={{ "height": "18px", "width": "auto", "objectFit": "contain" }} />
              </a>
            </div>

            <h1 className="text-4xl leading-[1.2] md:text-5xl lg:text-[3.5rem] font-semibold tracking-tight text-slate-900 md:leading-[1.15] mb-6 max-w-[340px] md:max-w-2xl mx-auto md:mx-0">
              <span className="block">Sending money home</span>
              <span className="block">should be as simple as a</span>
              <span className="block text-whatsapp">WhatsApp chat.</span>
            </h1>

            <p className="text-base md:text-xl text-slate-800 font-medium mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Instant transfers. Zero fees. Google rates.
            </p>

            <div className="flex flex-col items-center md:items-start gap-4 w-full">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-4 w-full sm:w-auto">
                <a href="https://wa.me/18723127867?text=hi" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-whatsapp hover:bg-whatsapp-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group">
                  Send Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <HoverAnchor href="#how-it-works" className="hero-see-how" style={{ "padding": "16px 26px", "borderRadius": "999px", "fontWeight": "500", "fontSize": "17px", "color": "#0f172a", "background": "rgba(255,255,255,0.62)", "backdropFilter": "blur(18px) saturate(160%)", "WebkitBackdropFilter": "blur(18px) saturate(160%)", "border": "1px solid rgba(15,23,42,0.09)", "boxShadow": "0 1px 0 rgba(255,255,255,0.9) inset" }} hoverStyle={{ "color": "#128C7E", "borderColor": "rgba(37,211,102,0.35)" }}>
                  See how it works
                </HoverAnchor>
              </div>
            </div>
          </div>

          <div className="hero-quote-wrapper" style={{ "position": "relative" }}>
            <GlobeAnimation />
            <div style={{ "position": "absolute", "inset": "-40px", "pointerEvents": "none", "background": "radial-gradient(circle at 60% 35%,rgba(37,211,102,0.16),transparent 62%)", "filter": "blur(28px)" }}></div>
            <div style={{ "position": "relative", "zIndex": "10", "borderRadius": "28px", "padding": "26px", "background": "linear-gradient(180deg,rgba(255,255,255,0.86),rgba(255,255,255,0.66))", "backdropFilter": "blur(26px) saturate(170%)", "WebkitBackdropFilter": "blur(26px) saturate(170%)", "border": "1px solid rgba(255,255,255,0.85)", "boxShadow": "0 1px 0 rgba(255,255,255,0.95) inset,0 26px 70px -30px rgba(15,23,42,0.3)" }}>
              <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "space-between", "marginBottom": "22px" }}>
                <div style={{ "fontSize": "11px", "fontWeight": "600", "color": "#64748b", "textTransform": "uppercase", "letterSpacing": "0.14em" }}>Live quote</div>
                <div style={{ "display": "inline-flex", "alignItems": "center", "gap": "6px", "padding": "5px 10px", "borderRadius": "999px", "background": "rgba(37,211,102,0.1)", "color": "#128C7E", "fontSize": "11px", "fontWeight": "600" }}>
                  <span style={{ "width": "6px", "height": "6px", "borderRadius": "50%", "background": "#25D366", "display": "block" }}></span>$1 = ₹{rateText}
                </div>
              </div>

              <div style={{ "border": "1px solid rgba(15,23,42,0.08)", "borderRadius": "18px", "overflow": "hidden", "background": "rgba(255,255,255,0.6)" }}>
                <label style={{ "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "14px", "padding": "18px 20px", "cursor": "text" }}>
                  <span style={{ "fontSize": "13px", "fontWeight": "500", "color": "#64748b", "whiteSpace": "nowrap" }}>You send</span>
                  <span style={{ "display": "flex", "alignItems": "baseline", "gap": "2px", "minWidth": "0", "justifyContent": "flex-end" }}>
                    <span style={{ "fontSize": "30px", "fontWeight": "600", "color": "#0f172a", "letterSpacing": "-0.03em" }}>$</span>
                    <input type="text" inputMode="decimal" value={amount} onChange={onAmount} style={{ "width": `${Math.max(String(amount).length, 1)}ch`, "border": "none", "outline": "none", "background": "transparent", "fontSize": "30px", "fontWeight": "600", "letterSpacing": "-0.03em", "color": "#0f172a", "textAlign": "left", "fontVariantNumeric": "tabular-nums" }} />
                  </span>
                </label>
                <div style={{ "height": "1px", "background": "rgba(15,23,42,0.08)" }}></div>
                <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "14px", "padding": "18px 20px", "background": "rgba(37,211,102,0.05)" }}>
                  <span style={{ "fontSize": "13px", "fontWeight": "500", "color": "#64748b", "whiteSpace": "nowrap" }}>They receive</span>
                  <span style={{ "fontSize": "30px", "fontWeight": "600", "color": "#128C7E", "letterSpacing": "-0.03em" }}>₹{receiveText}</span>
                </div>
              </div>

              <div style={{ "display": "flex", "flexDirection": "column", "gap": "10px", "margin": "18px 4px 0" }}>
                <div style={{ "display": "flex", "justifyContent": "space-between", "fontSize": "13px" }}><span style={{ "color": "#64748b" }}>Google rate</span><span style={{ "color": "#0f172a", "fontWeight": "600" }}>$1 = ₹{googleRateText}</span></div>
                <div style={{ "display": "flex", "justifyContent": "space-between", "fontSize": "13px" }}><span style={{ "color": "#64748b" }}>Surgepay rate</span><span style={{ "color": "#25D366", "fontWeight": "700" }}>$1 = ₹{rateText}</span></div>
                <div style={{ "display": "flex", "justifyContent": "space-between", "fontSize": "13px" }}><span style={{ "color": "#64748b" }}>Transfer fee</span><span style={{ "color": "#0f172a", "fontWeight": "600" }}>$0.00</span></div>
                <div style={{ "display": "flex", "justifyContent": "space-between", "fontSize": "13px" }}><span style={{ "color": "#64748b" }}>Arrives</span><span style={{ "color": "#0f172a", "fontWeight": "600" }}>In 3 minutes</span></div>
              </div>

              <div style={{ "marginTop": "20px", "padding": "14px 18px", "borderRadius": "16px", "background": "rgba(37,211,102,0.08)", "border": "1px solid rgba(37,211,102,0.18)", "display": "flex", "alignItems": "center", "gap": "12px" }}>
                <div style={{ "fontSize": "26px", "fontWeight": "700", "color": "#25D366", "letterSpacing": "-0.03em", "lineHeight": "1" }}>₹111</div>
                <div style={{ "fontSize": "12px", "color": "#334155", "lineHeight": "1.4" }}>on your first 3 transfers up to $80<br /><span style={{ "color": "#64748b" }}>Limited time offer</span></div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ "borderTop": "1px solid rgba(15,23,42,0.08)", "background": "rgba(255,255,255,0.5)", "backdropFilter": "blur(16px)", "WebkitBackdropFilter": "blur(16px)" }}>
          <div className="trust-signals-bar" style={{ "maxWidth": "1280px", "margin": "0 auto", "padding": "16px 32px" }}>
            {trustSignals.map((t, i) => (
              <React.Fragment key={i}>

                <span style={{ "fontSize": "13px", "fontWeight": "600", "color": "#64748b", "textTransform": "uppercase", "letterSpacing": "0.14em" }}>{t}</span>

              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section id="numbers" data-screen-label="Numbers" style={{ "background": "#fff" }}>
        <div className="numbers-section" style={{ "maxWidth": "1280px", "margin": "0 auto", "padding": "80px 32px" }}>
          <div style={{ "display": "flex", "alignItems": "baseline", "gap": "14px", "marginBottom": "36px" }}>
            <span style={{ "fontSize": "14px", "fontWeight": "700", "color": "#25D366", "letterSpacing": "0.14em" }}>01</span>
            <span style={{ "fontSize": "14px", "fontWeight": "700", "color": "#64748b", "textTransform": "uppercase", "letterSpacing": "0.14em" }}>Trust &amp; security</span>
          </div>
          <h2 className="numbers-heading" style={{ "fontSize": "clamp(2rem,3.1vw,3rem)", "lineHeight": "1.05", "letterSpacing": "-0.038em", "fontWeight": "600", "color": "#0f172a", "margin": "0 0 12px", "maxWidth": "24ch" }}>Your money and data are protected by bank-grade infrastructure.</h2>
          <p style={{ "fontSize": "17px", "color": "#64748b", "margin": "0 0 48px", "maxWidth": "none", "lineHeight": "1.6" }}>Regulated partners, strict KYC on every user, and encryption end to end.</p>

          <div style={{ "borderTop": "1px solid #e8ecf1" }}>
            <div className="stats-grid" style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(190px,1fr))", "margin": "0 -24px" }}>
              {stats.map((s, i) => (
                <React.Fragment key={i}>

                  <div className="stat-item" style={{ "padding": "32px 24px 34px 24px" }}>
                    <div style={{ "fontSize": "clamp(2.75rem,4vw,4rem)", "lineHeight": "0.92", "letterSpacing": "-0.05em", "fontWeight": "600", "color": "#0f172a", "marginBottom": "14px" }}>{s.value}</div>
                    <div style={{ "fontSize": "13px", "fontWeight": "600", "color": "#64748b", "textTransform": "uppercase", "letterSpacing": "0.13em" }}>{s.label}</div>
                  </div>

                </React.Fragment>
              ))}
            </div>
          </div>

          <div style={{ "borderTop": "1px solid #e8ecf1" }}>
            <div className="security-cards-grid" style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(230px,1fr))", "gap": "1px", "background": "#e8ecf1", "margin": "0 -24px" }}>
              {securityCards.map((c, i) => (
                <React.Fragment key={i}>

                  <div className="security-card" style={{
                    "background": "#fff",
                    "padding": "30px 24px"
                  }}>
                    <div style={{
                      "width": "48px", "height": "48px",
                      "background": "#e6fbf0",
                      "borderRadius": "12px",
                      "display": "flex", "alignItems": "center", "justifyContent": "center",
                      "color": "#25D366",
                      "marginBottom": "18px"
                    }}>
                      {c.icon}
                    </div>
                    <h4 style={{ "fontSize": "17px", "fontWeight": "600", "letterSpacing": "-0.02em", "color": "#0f172a", "margin": "0 0 8px" }}>{c.title}</h4>
                    <p style={{ "color": "#64748b", "fontSize": "14px", "lineHeight": "1.6", "margin": "0", "maxWidth": "26ch" }}>{c.desc}</p>
                  </div>

                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" data-screen-label="How it works" style={{ "position": "relative", "background": "#f8fafc", "height": "320vh", "borderTop": "1px solid #e8ecf1" }}>
        <div style={{ "position": "sticky", "top": "0", "height": "100vh", "display": "flex", "flexDirection": "column", "justifyContent": "center", "overflow": "hidden" }}>
          <div className="section-padding" style={{ "maxWidth": "1280px", "margin": "0 auto", "width": "100%", "padding": "56px 32px 32px 32px" }}>
            <div style={{ "display": "flex", "alignItems": "baseline", "gap": "14px", "marginBottom": "22px" }}>
              <span style={{ "fontSize": "14px", "fontWeight": "700", "color": "#25D366", "letterSpacing": "0.14em" }}>02</span>
              <span style={{ "fontSize": "14px", "fontWeight": "700", "color": "#64748b", "textTransform": "uppercase", "letterSpacing": "0.14em" }}>How it works</span>
            </div>
            <div className="how-it-works-grid">
              <div className="phone-container" style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "32px" }}>
                <div className="step-dots-desktop" style={{ "display": "flex", "flexDirection": "column", "gap": "8px" }}>{dots}</div>
                <div style={{ "position": "relative", "width": "100%", "display": "flex", "justifyContent": "center", "alignItems": "center", "height": "min(600px,60vh)" }}>
                  <div style={{ "position": "relative", "borderRadius": "3rem", "border": "6px solid #1a1a1a", "background": "#1a1a1a", "boxShadow": "inset 0 0 0 1px rgba(255,255,255,0.1),0 30px 70px -18px rgba(15,23,42,0.35)", "width": "100%", "maxWidth": "292px", "aspectRatio": "9/19.5", "maxHeight": "100%", "overflow": "hidden", "display": "flex", "flexDirection": "column" }}>
                    <div style={{ "position": "absolute", "left": "-8px", "width": "3px", "background": "#2a2a2a", "borderRadius": "2px 0 0 2px", "top": "80px", "height": "28px" }}></div>
                    <div style={{ "position": "absolute", "left": "-8px", "width": "3px", "background": "#2a2a2a", "borderRadius": "2px 0 0 2px", "top": "120px", "height": "48px" }}></div>
                    <div style={{ "position": "absolute", "left": "-8px", "width": "3px", "background": "#2a2a2a", "borderRadius": "2px 0 0 2px", "top": "178px", "height": "48px" }}></div>
                    <div style={{ "position": "absolute", "right": "-8px", "width": "3px", "background": "#2a2a2a", "borderRadius": "0 2px 2px 0", "top": "130px", "height": "56px" }}></div>
                    <div style={{ "width": "100%", "height": "100%", "borderRadius": "calc(3rem - 6px)", "overflow": "hidden", "display": "flex", "flexDirection": "column", "background": "#efe7de" }}>
                      <div style={{ "height": "44px", "background": "#075e54", "width": "100%", "display": "flex", "justifyContent": "space-between", "alignItems": "flex-end", "padding": "0 20px 6px", "position": "relative", "flexShrink": "0" }}>
                        <div style={{ "position": "absolute", "top": "6px", "left": "50%", "transform": "translateX(-50%)", "width": "72px", "height": "20px", "background": "#000", "borderRadius": "999px", "zIndex": "10" }}></div>
                        <div style={{ "fontSize": "13px", "color": "#fff", "fontWeight": "600", "lineHeight": "1" }}>9:41</div>
                        <div style={{ "display": "flex", "gap": "4px", "alignItems": "center" }}>
                          <svg width="16" height="11" viewBox="0 0 16 11" fill="none"><rect x="0" y="8" width="3" height="3" rx="0.5" fill="white"></rect><rect x="4" y="5" width="3" height="6" rx="0.5" fill="white"></rect><rect x="8" y="2" width="3" height="9" rx="0.5" fill="white"></rect><rect x="12" y="0" width="3" height="11" rx="0.5" fill="white"></rect></svg>
                          <svg width="14" height="11" viewBox="0 0 14 11" fill="none"><path d="M7 10.5a1 1 0 100-2 1 1 0 000 2z" fill="white"></path><path d="M4.5 7.5a3.5 3.5 0 015 0" stroke="white" strokeWidth="1.2" strokeLinecap="round"></path><path d="M2 5a7 7 0 0110 0" stroke="white" strokeWidth="1.2" strokeLinecap="round"></path></svg>
                          <svg width="22" height="11" viewBox="0 0 22 11" fill="none"><rect x="0.5" y="0.5" width="18" height="10" rx="2" stroke="white" strokeWidth="1"></rect><rect x="19.5" y="3" width="2" height="5" rx="1" fill="white"></rect><rect x="2" y="2" width="12" height="7" rx="1" fill="white"></rect></svg>
                        </div>
                      </div>
                      <div style={{ "background": "#075e54", "padding": "6px 8px", "display": "flex", "alignItems": "center", "gap": "6px", "flexShrink": "0" }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ "flexShrink": "0" }}><path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        <div style={{ "width": "32px", "height": "32px", "background": "#25D366", "borderRadius": "50%", "display": "flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0" }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                        </div>
                        <div style={{ "flex": "1", "minWidth": "0", "overflow": "hidden" }}>
                          <div style={{ "color": "#fff", "fontSize": "14px", "fontWeight": "500", "lineHeight": "1.25", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis" }}>Surgepay</div>
                          <div style={{ "color": "rgba(255,255,255,0.7)", "fontSize": "11px", "lineHeight": "1.25", "whiteSpace": "nowrap", "overflow": "hidden", "textOverflow": "ellipsis" }}>online</div>
                        </div>
                        <div style={{ "display": "flex", "alignItems": "center", "gap": "12px" }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="5" width="14" height="14" rx="2" stroke="white" strokeWidth="1.5"></rect><path d="M16 10l4-2.5v9L16 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                          <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="white" strokeWidth="1.5"></path></svg>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="5" r="1.5" fill="white"></circle><circle cx="12" cy="12" r="1.5" fill="white"></circle><circle cx="12" cy="19" r="1.5" fill="white"></circle></svg>
                        </div>
                      </div>
                      <div style={{ "flex": "1", "padding": "10px", "display": "flex", "flexDirection": "column", "gap": "6px", "overflowY": "auto", "backgroundColor": "#efeae2", "backgroundImage": "url(\"https", "backgroundRepeat": "repeat", "backgroundSize": "300px" }}>
                        {chatColumn}
                      </div>
                      <div style={{ "background": "#f0f2f5", "padding": "4px 6px 22px", "display": "flex", "alignItems": "center", "gap": "5px", "flexShrink": "0" }}>
                        <div style={{ "flex": "1", "background": "#fff", "borderRadius": "21px", "height": "38px", "padding": "0 10px", "display": "flex", "alignItems": "center", "gap": "8px" }}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ "flexShrink": "0" }}><circle cx="12" cy="12" r="10" stroke="#8696A0" strokeWidth="1.5"></circle><circle cx="9" cy="10" r="1" fill="#8696A0"></circle><circle cx="15" cy="10" r="1" fill="#8696A0"></circle><path d="M8 14c1.333 1.333 2.667 2 4 2s2.667-.667 4-2" stroke="#8696A0" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                          <span style={{ "flex": "1", "fontSize": "13px", "color": "#8696A0" }}>Type a message</span>
                          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" style={{ "flexShrink": "0" }}><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" stroke="#8696A0" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                        </div>
                        <div style={{ "width": "38px", "height": "38px", "background": "#00a884", "borderRadius": "50%", "display": "flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0" }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="9" y="1" width="6" height="14" rx="3" fill="white"></rect><path d="M5 10v1a7 7 0 0014 0v-1" stroke="white" strokeWidth="1.8" strokeLinecap="round"></path><line x1="12" y1="18" x2="12" y2="22" stroke="white" strokeWidth="1.8" strokeLinecap="round"></line></svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 style={{ "fontSize": "clamp(2rem,3.1vw,3rem)", "lineHeight": "1.05", "letterSpacing": "-0.038em", "fontWeight": "600", "color": "#0f172a", "margin": "0 0 28px", "maxWidth": "22ch" }}>Four messages from money sent to money received.</h2>
                <div className="mobile-step-dots">{dots}</div>
                <div style={{ "display": "flex", "flexDirection": "column" }}>{stepRows}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why-whatsapp" data-screen-label="Why WhatsApp" style={{ "background": "#25D366", "position": "relative", "overflow": "hidden" }}>
        <div className="why-wa-section" style={{ "maxWidth": "1280px", "margin": "0 auto", "padding": "88px 32px" }}>
          <div style={{ "display": "flex", "alignItems": "baseline", "gap": "14px", "marginBottom": "26px" }}>
            <span style={{ "fontSize": "14px", "fontWeight": "700", "color": "rgba(255,255,255,0.85)", "letterSpacing": "0.14em" }}>03</span>
            <span style={{ "fontSize": "14px", "fontWeight": "700", "color": "rgba(255,255,255,0.85)", "textTransform": "uppercase", "letterSpacing": "0.14em" }}>Why WhatsApp</span>
          </div>
          <h2 className="why-wa-heading" style={{ "fontSize": "clamp(2.25rem,3.6vw,3.5rem)", "lineHeight": "1.02", "letterSpacing": "-0.04em", "fontWeight": "600", "color": "#fff", "margin": "0 0 52px", "maxWidth": "20ch" }}>No app. No forms. Just a conversation.</h2>
          <div className="why-wa-border-wrap" style={{ "borderTop": "1px solid rgba(255,255,255,0.22)" }}>
            <div className="why-wa-cards-grid" style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(240px,1fr))", "gap": "1px", "background": "rgba(255,255,255,0.22)", "margin": "0 -24px" }}>
              {whyItems.map((w, i) => (
                <React.Fragment key={i}>

                  <div className="why-wa-card" style={{ "background": "#25D366", "padding": "30px 24px" }}>
                    <div style={{ "color": "#fff", "marginBottom": "18px", "opacity": "0.9" }}>{w.icon}</div>
                    <h4 style={{ "fontSize": "18px", "fontWeight": "600", "letterSpacing": "-0.02em", "color": "#fff", "margin": "0 0 8px" }}>{w.title}</h4>
                    <p style={{ "color": "rgba(255,255,255,0.78)", "fontSize": "14px", "lineHeight": "1.6", "margin": "0", "maxWidth": "26ch" }}>{w.desc}</p>
                  </div>

                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="corridors" data-screen-label="Corridors" style={{ "background": "#fff" }}>
        <div className="corridor-section" style={{ "maxWidth": "1280px", "margin": "0 auto", "padding": "88px 32px" }}>
          <div style={{ "display": "flex", "alignItems": "baseline", "gap": "14px", "marginBottom": "26px" }}>
            <span style={{ "fontSize": "14px", "fontWeight": "700", "color": "#25D366", "letterSpacing": "0.14em" }}>04</span>
            <span style={{ "fontSize": "14px", "fontWeight": "700", "color": "#64748b", "textTransform": "uppercase", "letterSpacing": "0.14em" }}>Available corridors</span>
          </div>
          <div style={{ "display": "flex", "alignItems": "flex-end", "justifyContent": "space-between", "gap": "24px", "flexWrap": "wrap", "marginBottom": "36px" }}>
            <h2 style={{ "fontSize": "clamp(2rem,3.1vw,3rem)", "lineHeight": "1.05", "letterSpacing": "-0.038em", "fontWeight": "600", "color": "#0f172a", "margin": "0", "maxWidth": "22ch" }}>One corridor live, four on the way.</h2>
            <p style={{ "color": "#64748b", "margin": "0", "fontSize": "15px" }}>WhatsApp us to get started: <a href="https://wa.me/18723127867?text=hi" target="_blank" rel="noopener noreferrer" style={{ "fontWeight": "600" }}>Send Now</a></p>
          </div>
          <div style={{ "marginTop": "20px" }}>{corridorRows}</div>
        </div>
      </section>

      <section id="faq" data-screen-label="FAQ" style={{ "background": "#060D14", "position": "relative", "overflow": "hidden" }}>
        <div style={{ "position": "absolute", "top": "-120px", "right": "-80px", "width": "640px", "height": "640px", "background": "rgba(37,211,102,0.06)", "borderRadius": "50%", "filter": "blur(100px)", "pointerEvents": "none" }}></div>
        <div className="faq-grid" style={{ "maxWidth": "1280px", "margin": "0 auto", "padding": "96px 32px", "position": "relative", "zIndex": "10" }}>
          <div>
            <div className="faq-sticky" style={{ "position": "sticky", "top": "96px" }}>
              <div style={{ "display": "flex", "alignItems": "baseline", "gap": "14px", "marginBottom": "26px" }}>
                <span style={{ "fontSize": "14px", "fontWeight": "700", "color": "#25D366", "letterSpacing": "0.14em" }}>05</span>
                <span style={{ "fontSize": "14px", "fontWeight": "700", "color": "rgba(255,255,255,0.7)", "textTransform": "uppercase", "letterSpacing": "0.14em" }}>FAQ</span>
              </div>
              <h2 className="faq-heading" style={{ "fontSize": "clamp(2.5rem,4vw,4rem)", "lineHeight": "0.98", "letterSpacing": "-0.042em", "fontWeight": "600", "color": "#fff", "margin": "0 0 22px" }}>Find your answers <span style={{ "color": "#25D366" }}>here</span></h2>
              <p style={{ "fontSize": "16px", "color": "#94a3b8", "maxWidth": "34ch", "margin": "0", "lineHeight": "1.6" }}>Everything you need to know about Surgepay. Can't find the answer you're looking for? Feel free to <a href="https://wa.me/918884500283?text=Hi%2C%20I%20have%20questions%20around%20Surgepay.%20Could%20you%20please%20help%20me%3F" target="_blank" rel="noopener noreferrer" style={{ "color": "#fff", "fontWeight": "500", "textDecoration": "underline", "textUnderlineOffset": "4px", "textDecorationColor": "#334155" }}>contact our support team</a>.</p>
            </div>
          </div>
          <div style={{ "borderTop": "1px solid rgba(255,255,255,0.1)" }}>{faqRows}</div>
        </div>
      </section>

      <section data-screen-label="Final CTA" style={{ "position": "relative", "overflow": "hidden", "background": "radial-gradient(ellipse 60% 60% at 50% 20%,rgba(236,253,245,0.9) 0%,transparent 65%),#fff" }}>
        <div className="cta-section" style={{ "maxWidth": "1280px", "margin": "0 auto", "padding": "104px 32px", "textAlign": "center", "position": "relative", "zIndex": "10" }}>
          <h2 className="cta-heading" style={{ "fontSize": "clamp(2rem,3.5vw,3.2rem)", "lineHeight": "1.0", "letterSpacing": "-0.042em", "fontWeight": "600", "color": "#0f172a", "margin": "0 auto 20px", "maxWidth": "22ch" }}>Send money in minutes, not days.</h2>
          <p style={{ "fontSize": "19px", "color": "#64748b", "margin": "0 0 36px" }}>No fees. No hassle. Just a simple chat.</p>
          <HoverAnchor href="https://wa.me/18723127867?text=hi" target="_blank" rel="noopener noreferrer" className="cta-btn" style={{ "display": "inline-flex", "alignItems": "center", "gap": "12px", "background": "#25D366", "color": "#fff", "padding": "18px 40px", "borderRadius": "999px", "fontWeight": "600", "fontSize": "19px", "boxShadow": "0 20px 45px -18px rgba(37,211,102,0.85)" }} hoverStyle={{ "background": "#128C7E" }} >
            Send Now
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </HoverAnchor>
        </div>
      </section>

      <footer style={{ "background": "#fff", "borderTop": "1px solid #e8ecf1" }}>
        <div className="footer-main" style={{ "maxWidth": "1280px", "margin": "0 auto", "padding": "28px 32px", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "20px", "flexWrap": "wrap" }}>
          <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "8px 28px", "fontSize": "13px", "color": "#64748b" }}>
            <a href="mailto:support@surgepay.xyz" style={{ "color": "#64748b" }}>Contact</a>
            <a href="#terms" style={{ "color": "#64748b" }}>Terms</a>
            <a href="#privacy" style={{ "color": "#64748b" }}>Privacy Policy</a>
          </div>
          <div style={{ "display": "flex", "alignItems": "center", "gap": "10px" }}>
            <HoverAnchor href="https://www.linkedin.com/company/surgepayxyz" target="_blank" rel="noopener noreferrer" aria-label="Surgepay on LinkedIn" style={{ "width": "34px", "height": "34px", "borderRadius": "999px", "display": "flex", "alignItems": "center", "justifyContent": "center", "border": "1px solid rgba(15,23,42,0.09)", "color": "#334155", "transition": "all .3s" }} hoverStyle={{ "color": "#25D366", "borderColor": "rgba(37,211,102,0.35)" }} >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95C21.1 8.75 22 11 22 14.1V21h-4v-6.1c0-1.5-.54-2.5-1.9-2.5-1.15 0-1.83.77-2.13 1.51-.11.27-.14.64-.14 1.01V21h-4z"></path></svg>
            </HoverAnchor>
            <HoverAnchor href="https://x.com/surgepayxyz" target="_blank" rel="noopener noreferrer" aria-label="Surgepay on X" style={{ "width": "34px", "height": "34px", "borderRadius": "999px", "display": "flex", "alignItems": "center", "justifyContent": "center", "border": "1px solid rgba(15,23,42,0.09)", "color": "#334155", "transition": "all .3s" }} hoverStyle={{ "color": "#25D366", "borderColor": "rgba(37,211,102,0.35)" }} >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.63l-5.2-6.8-5.94 6.8H1.74l7.5-8.58L1.08 2.25h6.8l4.71 6.23zm-1.16 17.52h1.83L6.99 4.13H5.03z"></path></svg>
            </HoverAnchor>
          </div>
        </div>
        <div style={{ "borderTop": "1px solid #f1f5f9" }}>
            <div className="footer-disclaimer" style={{ "maxWidth": "1280px", "margin": "0 auto", "padding": "22px 32px" }}>
            <p style={{ "fontSize": "11px", "color": "#94a3b8", "lineHeight": "1.7", "margin": "0", "maxWidth": "90ch" }}>Surgepay is a financial technology company, not a bank. We provide technology solutions that enable users to send money internationally through regulated financial partners. Surgepay does not hold or custody customer funds. All money transmission, foreign exchange, payment processing, and identity verification services are provided by our licensed partner entities. Users must be 18 years or older to use the service. Transfers are subject to applicable laws, regulations, and partner terms. Additional terms and conditions may apply.</p>
          </div>
        </div>
        <div style={{ "borderTop": "1px solid #f1f5f9" }}>
          <div className="footer-copyright" style={{ "maxWidth": "1280px", "margin": "0 auto", "padding": "16px 32px", "fontSize": "11px", "color": "#94a3b8", "letterSpacing": "0.04em" }}>© 2026 SURGEPAY PTE. LTD. All rights reserved.</div>
        </div>
      </footer>

    </div>
  );
}
