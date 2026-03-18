import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowLeft } from 'lucide-react';

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-white">
      {/* Minimal Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 py-4">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-7 h-7 bg-whatsapp rounded-lg flex items-center justify-center">
              <Zap className="text-white w-4 h-4 fill-current" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-slate-900">Surgepay</span>
          </Link>
          <Link to="/" className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-whatsapp transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 pt-28 pb-20">
        <div className="mb-12">
          <p className="text-xs font-medium text-whatsapp uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-3">Terms and Conditions</h1>
          <p className="text-base text-slate-400">Effective Date: March 17, 2026</p>
        </div>

        <article className="legal-content">
          <section>
            <h2>1. Introduction and Acceptance</h2>
            <p>These Terms and Conditions of Service ("Terms," "Agreement") constitute a legally binding agreement between ("User," "you," "your") and SURGEPAYXYZ, LLC, a Delaware limited liability company doing business as Surgepay ("Surgepay," "Company," "we," "us," "our"), for governing your access to and use of the Surgepay platform, including our website located at https://surgepay.xyz, our WhatsApp-based interface, and all related services (collectively, the "Services").</p>
            <p><strong>IMPORTANT:</strong> By accessing, registering for, or using any of our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms, our <Link to="/privacy" className="text-whatsapp hover:underline">Privacy Policy</Link>, and any other supplemental terms applicable to specific features of the Services. If you do not agree to these Terms, you cannot access or use the Services.</p>
            <p>We reserve the right to modify these Terms at any time. If we make material changes that diminish your rights or increase your obligations, we will provide at least thirty (30) days' advance notice via WhatsApp, email, or by posting on our website. Your continued use of the Services after such notice constitutes acceptance of the modified Terms.</p>
          </section>

          <section>
            <h2>2. Nature of Surgepay's Services</h2>
            <h3>2.1 Technology Facilitator</h3>
            <p>Surgepay is a technology platform that facilitates cross-border money transfers from the United States to India. Surgepay does not itself transmit, transfer, or hold money. Surgepay is not a bank, money services business, money transmitter, or financial institution. All money transmission, foreign exchange, payment processing, identity verification (KYC), and banking services are provided by our licensed partner entities.</p>

            <h3>2.2 Licensed Partners</h3>
            <p>Our Services are powered by the following licensed entities:</p>
            <ul>
              <li><strong>Saber Money</strong> — An FIU-licensed entity in India providing off-ramp, foreign exchange conversion, and INR delivery services.</li>
              <li><strong>Cybrid Inc.</strong> — Holding Money Service Business (MSB) License No. 31000246961737 in the United States, providing on-ramp, payment processing, and compliance services.</li>
              <li><strong>Cybrid Canada Inc.</strong> — Holding Canadian MSB License No. M22090366.</li>
              <li><strong>Plaid Inc.</strong> — Providing secure bank account linking and verification services.</li>
            </ul>
            <p>Surgepay acts solely as the technology layer that orchestrates the transfer workflow between you and these licensed partners. Your relationship for the purposes of money transmission, KYC, and fund custody is directly with these partner entities, governed by their respective terms of service which are presented to you during the onboarding process.</p>

            <h3>2.3 Stablecoin-Based Transfer Rail</h3>
            <p>To facilitate cross-border transfers, our partner infrastructure may convert your U.S. dollar funds into stablecoins (such as USDC) for the purpose of transmitting value across borders, and subsequently convert those stablecoins into Indian Rupees (INR) for deposit into your designated Indian bank account. You acknowledge and understand the risks associated with this process as described in Section 12 of these Terms.</p>
          </section>

          <section>
            <h2>3. Definitions</h2>
            <ul>
              <li><strong>"ACH"</strong> means the Automated Clearing House network, an electronic funds transfer system used for processing direct debit transactions from your U.S. bank account.</li>
              <li><strong>"Business Day"</strong> means any day that is not a Saturday, Sunday, or a public holiday in the United States on which banks in the United States are open for business.</li>
              <li><strong>"Cryptocurrency" or "Crypto"</strong> means any digital or virtual currency, including stablecoins such as USDC, that uses cryptographic technology and operates on a blockchain or distributed ledger.</li>
              <li><strong>"INR"</strong> means Indian Rupees, the official currency of the Republic of India.</li>
              <li><strong>"KYC"</strong> means Know Your Customer, the identity verification process required by law before you can use certain Services.</li>
              <li><strong>"NRO Account"</strong> means a Non-Resident Ordinary account maintained in India, which is an Indian bank account held in the name of a Non-Resident Indian (NRI) for managing income earned in India.</li>
              <li><strong>"Services"</strong> means all products, services, features, technologies, and functionalities offered by Surgepay, including the website, WhatsApp interface, and all related applications.</li>
              <li><strong>"Stablecoin"</strong> means a type of cryptocurrency designed to maintain a stable value relative to a reference asset, such as the U.S. dollar (e.g., USDC).</li>
              <li><strong>"Transfer"</strong> means a cross-border money transfer initiated through the Services from the United States to India.</li>
              <li><strong>"USD"</strong> means United States Dollars, the official currency of the United States of America.</li>
              <li><strong>"Unauthorized Transaction"</strong> means a Transfer initiated from your account without your knowledge or consent that does not benefit you.</li>
            </ul>
          </section>

          <section>
            <h2>4. Eligibility</h2>
            <p>To use the Services, you must:</p>
            <ol>
              <li>Be at least eighteen (18) years of age;</li>
              <li>Be a resident of the United States with a valid U.S. bank account;</li>
              <li>Have the legal capacity and authority to enter into this Agreement;</li>
              <li>Not be a person or entity barred from receiving services under the laws of the United States, India, or any other applicable jurisdiction;</li>
              <li>Not be listed on any U.S. government sanctions list, including the Office of Foreign Assets Control (OFAC) Specially Designated Nationals (SDN) list;</li>
              <li>Possess a valid WhatsApp account with a verified US phone number;</li>
              <li>Provide accurate and complete information during registration and maintain its accuracy throughout your use of the Services; and</li>
              <li>Meet any other requirements as per the law of applicable jurisdiction.</li>
            </ol>
            <p>We reserve the right to refuse service to any person or entity at our sole discretion, at any time, for any reason, including but not limited to compliance with applicable laws and regulations.</p>
          </section>

          <section>
            <h2>5. Account Registration and Security</h2>
            <h3>5.1 Account Creation</h3>
            <p>To access the Services, you must register by providing your full legal name, phone number, and email address. This information is used to create your account with our licensed partners for the purpose of identity verification, bank account linking, and transfer initiation. You may create only one account. Duplicate accounts may be closed without notice.</p>

            <h3>5.2 Account Security</h3>
            <p>You are solely responsible for maintaining the confidentiality and security of your account credentials, your WhatsApp account, and the devices used to access the Services. You agree to:</p>
            <ul>
              <li>Keep your credentials confidential and not share them with any third party;</li>
              <li>Immediately notify us at support@surgepay.xyz if you suspect unauthorized access to your account;</li>
              <li>Ensure the security of your WhatsApp account and the phone used to access our Services; and</li>
              <li>Regularly review your transaction history for any unauthorized or erroneous activity.</li>
            </ul>
            <p>Surgepay will never ask you for your passwords, one-time passcodes (OTPs), or bank login credentials. Any such request is fraudulent and should be reported immediately.</p>

            <h3>5.3 Account Verification (KYC)</h3>
            <p>Federal law, including the Bank Secrecy Act (BSA) and USA PATRIOT Act, requires our licensed partners to verify your identity before you can use certain Services. By registering, you authorize Surgepay and our licensed partners to:</p>
            <ul>
              <li>Collect and verify your personal information, including name, date of birth, address, Social Security Number (SSN) or Individual Taxpayer Identification Number (ITIN), and other identifying information;</li>
              <li>Conduct identity verification through third-party services, government databases, credit bureaus, and other commercially available sources;</li>
              <li>Request additional documentation such as a government-issued photo ID (passport, driver's license), proof of address, or other documents as needed; and</li>
              <li>Perform ongoing monitoring and enhanced due diligence as required by applicable anti-money laundering (AML) and counter-terrorism financing (CTF) regulations.</li>
            </ul>
            <p>KYC verification is conducted by our licensed partners through a secure external process. If verification cannot be completed, we reserve the right to suspend or terminate your access to the Services.</p>
          </section>

          <section>
            <h2>6. Transfer Services</h2>
            <h3>6.1 Supported Transfers</h3>
            <p>Surgepay currently supports cross-border money transfers exclusively from the United States to India, denominated in USD and converted to INR. All transfer amounts must be entered in USD.</p>

            <h3>6.2 NRO Account Restriction — First-Party Transfers Only</h3>
            <p><strong>IMPORTANT:</strong> You may only send money to your own Indian NRO (Non-Resident Ordinary) bank account. Third-party transfers (sending money to another person's bank account) are not permitted.</p>
            <p>This restriction exists to comply with applicable regulatory requirements, including India's Foreign Exchange Management Act (FEMA) and Reserve Bank of India (RBI) guidelines governing inward remittances to NRO accounts.</p>
            <p>If the system determines that the designated Indian bank account is not held in your name (first-party check failure), the transfer will be rejected. You may update your bank account details and retry.</p>

            <h3>6.3 Adding an Indian Bank Account</h3>
            <p>To add a new Indian NRO bank account, you will be asked to provide the account holder's full name, bank name, account number, IFSC code, and the residential address linked to the account. You represent and warrant that all bank account information provided is accurate, complete, and belongs to you.</p>

            <h3>6.4 Exchange Rates and Quotes</h3>
            <p>When you initiate a transfer, Surgepay will display an exchange rate quote showing the amount you will send in USD, the amount the recipient (you) will receive in INR, applicable fees, and the estimated delivery time.</p>
            <p>Quotes are locked for fifteen (15) minutes from the time of display. If you do not confirm the transfer within the quote validity period, a new quote will be generated at the then-prevailing rate.</p>
            <p>Exchange rates are determined by our licensed partners based on prevailing market conditions and include the applicable margin. Surgepay does not guarantee any specific exchange rate. Rates may differ from those displayed on third-party reference sites.</p>

            <h3>6.5 Payment Methods</h3>
            <p>Transfers are funded via ACH direct debit from your linked U.S. bank account. By linking your bank account through Plaid and initiating a transfer, you:</p>
            <ul>
              <li>Confirm that you are the authorized holder of the bank account;</li>
              <li>Authorize the electronic debit of the transfer amount plus applicable fees from your bank account via the ACH network;</li>
              <li>Confirm that the bank account is in good standing with sufficient funds; and</li>
              <li>Acknowledge that this authorization remains in effect until revoked in accordance with these Terms.</li>
            </ul>

            <h3>6.6 Transfer Processing and Delivery</h3>
            <p>Once a transfer is confirmed and payment is successfully received, the transfer will be processed through our partner infrastructure. Standard delivery is estimated at one to two (1–2) Business Days, although actual delivery times may vary depending on factors outside our control, including banking hours, partner processing times, and regulatory holds.</p>
            <p>Instant payout may be enabled after your second successful transfer, subject to eligibility and availability.</p>

            <h3>6.7 Duplicate Transfer Protection</h3>
            <p>If you initiate a transfer for the same amount while a prior transfer of the same amount is still processing, Surgepay will notify you and ask you to confirm whether you intend to send a duplicate transfer. This safeguard is designed to prevent accidental duplicate transactions.</p>

            <h3>6.8 Transfer Limits</h3>
            <p>Transfers are subject to minimum and maximum limits as determined by our licensed partners and applicable regulatory requirements. Current limits will be communicated to you during the transfer process. We reserve the right to modify these limits at any time.</p>
          </section>

          <section>
            <h2>7. Fees</h2>
            <p>Surgepay may charge a fee ("Fee") for each transfer. The applicable Fee will be clearly disclosed to you before you confirm any transfer. Fees are non-refundable except as expressly provided in Section 8 (Cancellations and Refunds).</p>
            <p>The Fee does not include any charges that your U.S. bank or the recipient Indian bank may impose. You are solely responsible for any such third-party charges.</p>
            <p>We reserve the right to modify our Fee structure at any time. Any changes will be communicated in advance and will apply to transfers initiated after the effective date of the change.</p>
          </section>

          <section>
            <h2>8. Cancellations and Refunds</h2>
            <h3>8.1 Cancellation Window</h3>
            <p>You may cancel a transfer through WhatsApp for a full refund, provided:</p>
            <ul>
              <li>The transfer has not yet been processed by our partners; or</li>
              <li>The cancellation request is made within thirty (30) minutes of initiating the transfer, provided the funds have not yet been disbursed to the recipient account.</li>
            </ul>

            <h3>8.2 Refund Processing</h3>
            <p>If a cancellation is eligible, the refund will be credited to the same U.S. bank account used for the original transfer within three (3) to four (4) Business Days. Refunds are issued in USD at the original transfer amount, without adjustment for exchange rate fluctuations.</p>

            <h3>8.3 Post-Processing Cancellations</h3>
            <p>Once a transfer has been fully processed and funds have been disbursed to the recipient account, cancellation is generally not possible. In exceptional circumstances, we will make commercially reasonable efforts to facilitate a reversal, but we cannot guarantee success.</p>

            <h3>8.4 Failed Transfers</h3>
            <p>If a transfer fails due to an issue on the U.S. side (e.g., insufficient funds, bank rejection), no funds will be deducted from your account. If a transfer fails due to an issue with the Indian bank account (e.g., invalid account details, bank rejection), any funds already debited will be refunded to your U.S. bank account within four (4) Business Days. No money will be lost in either scenario.</p>
          </section>

          <section>
            <h2>9. Tax Responsibilities</h2>
            <p>You are solely responsible for determining, calculating, collecting, reporting, and remitting all taxes applicable to transfers made through the Services, including but not limited to federal, state, and local taxes in the United States and any applicable taxes in India.</p>
            <p><strong>NRE/NRO Inward Remittances:</strong> Inward remittances from the United States to your own NRE or NRO bank account in India are generally not subject to Tax Deducted at Source (TDS), as these transfers represent your own funds remitted from abroad and do not constitute Indian-sourced income. However, tax laws are subject to change, and your overall tax obligations in India and the United States remain solely your responsibility.</p>
            <p>SurgePay does not provide tax advice and is not responsible for determining your tax liability in any jurisdiction. You should consult a qualified tax advisor regarding your specific tax obligations.</p>
          </section>

          <section>
            <h2>10. Prohibited Activities</h2>
            <p>You agree not to use the Services for any purpose that is unlawful, prohibited by these Terms, or that could damage, disable, overburden, or impair the Services. Specifically, you shall not:</p>
            <ol>
              <li>Use the Services in violation of any applicable local, state, national, or international law or regulation;</li>
              <li>Use the Services for money laundering, terrorist financing, tax evasion, fraud, or any other financial crime;</li>
              <li>Provide false, misleading, or fraudulent information during registration, KYC, or any transfer;</li>
              <li>Use the Services to send money to third parties (non-first-party transfers);</li>
              <li>Attempt to circumvent transfer limits, duplicate transfer protections, or other safeguards;</li>
              <li>Use the Services for any commercial or business purpose not expressly authorized by Surgepay;</li>
              <li>Access or attempt to access the Services through automated means (bots, scrapers, etc.) without our prior written consent;</li>
              <li>Introduce viruses, malware, or other harmful code into our systems;</li>
              <li>Interfere with or disrupt the integrity or performance of the Services;</li>
              <li>Use the Services in connection with any activity involving illegal drugs, gambling, weapons, counterfeit goods, or other prohibited goods or services; or</li>
              <li>Assist, encourage, or enable any third party to engage in any of the foregoing activities.</li>
            </ol>
            <p>Violation of these restrictions may result in immediate suspension or termination of your account, forfeiture of any pending transfers, and referral to appropriate law enforcement authorities.</p>
          </section>

          <section>
            <h2>11. Anti-Money Laundering (AML) Compliance</h2>
            <p>Surgepay and its licensed partners are committed to compliance with all applicable anti-money laundering laws and regulations. We reserve the right to:</p>
            <ul>
              <li>Monitor transactions for suspicious activity;</li>
              <li>File Suspicious Activity Reports (SARs) with FinCEN without notifying you;</li>
              <li>Delay, block, or refuse any transfer that we believe may violate applicable law or pose a risk;</li>
              <li>Request additional documentation or information at any time to verify the source or purpose of funds; and</li>
              <li>Cooperate with law enforcement, regulatory authorities, and judicial proceedings.</li>
            </ul>
          </section>

          <section>
            <h2>12. Cryptocurrency and Stablecoin Risk Disclosures</h2>
            <p><strong>IMPORTANT RISK DISCLOSURE:</strong> Our partner infrastructure utilizes stablecoins (such as USDC) as an intermediary rail for cross-border value transfer. By using the Services, you acknowledge and accept the following risks:</p>
            <ol>
              <li><strong>No Government Insurance:</strong> Cryptocurrencies, including stablecoins, are not insured by the FDIC, SIPC, or any other governmental agency.</li>
              <li><strong>Price and Liquidity Risk:</strong> While stablecoins are designed to maintain a stable value, there is no guarantee they will maintain their peg at all times.</li>
              <li><strong>Cybersecurity Risk:</strong> Cryptocurrency exchanges and blockchain networks have been subject to cyberattacks and security incidents. Recovery of lost or stolen cryptocurrency may not be possible.</li>
              <li><strong>No Central Bank Protection:</strong> Cryptocurrencies are not issued or controlled by any central bank.</li>
              <li><strong>Regulatory Risk:</strong> Changes to applicable law or regulation may adversely affect the use, transfer, exchange, or value of cryptocurrencies.</li>
              <li><strong>Not Legal Tender:</strong> Cryptocurrencies are not legal tender and are not backed by any government.</li>
              <li><strong>Market Confidence Risk:</strong> The value of cryptocurrency depends on the continued willingness of market participants to use it.</li>
            </ol>
            <p>In the ordinary course of a transfer, your exposure to cryptocurrency risk is limited to the brief period during which value is transmitted across borders via the stablecoin rail. Surgepay does not hold cryptocurrency on your behalf.</p>
          </section>

          <section>
            <h2>13. Error Resolution and Unauthorized Transactions</h2>
            <h3>13.1 Regulation E Rights</h3>
            <p>For transfers that involve electronic fund transfers from your U.S. bank account, your rights and our obligations are governed by the Electronic Fund Transfer Act (EFTA) and Regulation E.</p>

            <h3>13.2 Reporting Errors</h3>
            <p>If you believe an error has occurred in connection with a transfer, contact us immediately at support@surgepay.xyz or through WhatsApp. You should report errors within one hundred eighty (180) days of the date we notified you of the transfer.</p>

            <h3>13.3 Types of Errors</h3>
            <p>Errors may include: incorrect amounts sent or received; computational errors affecting the exchange rate or fees; funds not made available to the recipient by the disclosed date; and missing transactions in your account records.</p>

            <h3>13.4 Investigation and Resolution</h3>
            <p>We will investigate reported errors and provide a determination within ninety (90) days, with an initial response within ten (10) Business Days.</p>

            <h3>13.5 Unauthorized Transactions</h3>
            <p>If you believe an unauthorized transaction has occurred on your account, notify us immediately. Prompt reporting (within thirty (30) days) qualifies you for full protection against unauthorized transactions.</p>
          </section>

          <section>
            <h2>14. Account Suspension and Termination</h2>
            <h3>14.1 By You</h3>
            <p>You may close your account at any time by contacting us at support@surgepay.xyz or through WhatsApp.</p>

            <h3>14.2 By Surgepay</h3>
            <p>We reserve the right to suspend, limit, or terminate your account and access to the Services at any time, with or without notice, for any reason, including but not limited to:</p>
            <ul>
              <li>Violation of these Terms or any applicable law or regulation;</li>
              <li>Suspected fraudulent, illegal, or unauthorized activity;</li>
              <li>Failure to complete or pass KYC verification;</li>
              <li>Request by law enforcement or other governmental authority;</li>
              <li>Security concerns or potential threats to the integrity of the Services; or</li>
              <li>Extended periods of inactivity.</li>
            </ul>
          </section>

          <section>
            <h2>15. Intellectual Property</h2>
            <p>All content, software, technology, trademarks, trade names, logos, and other intellectual property associated with the Services are owned by or licensed to Surgepay and are protected by applicable copyright, trademark, patent, and other intellectual property laws.</p>
          </section>

          <section>
            <h2>16. Third-Party Services</h2>
            <p>The Services may contain links to or integrate with third-party services. Your use of third-party services is subject to their respective terms and privacy policies. Surgepay does not control, endorse, or assume responsibility for any third-party services.</p>
          </section>

          <section>
            <h2>17. Disclaimer of Warranties</h2>
            <p>THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.</p>
          </section>

          <section>
            <h2>18. Limitation of Liability</h2>
            <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL SURGEPAY, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, PARTNERS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES.</p>
            <p>SURGEPAY'S TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS SHALL NOT EXCEED THE TOTAL FEES PAID BY YOU TO SURGEPAY DURING THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE EVENT, OR ONE HUNDRED U.S. DOLLARS (USD $100.00), WHICHEVER IS GREATER.</p>
          </section>

          <section>
            <h2>19. Indemnification</h2>
            <p>You agree to defend, indemnify, and hold harmless Surgepay and its officers, directors, employees, agents, affiliates, licensors, and partners from and against any and all claims, liabilities, damages, losses, costs, and expenses arising out of or in connection with your use of the Services, your violation of these Terms, or your provision of inaccurate information.</p>
          </section>

          <section>
            <h2>20. Dispute Resolution and Arbitration</h2>
            <h3>20.1 Informal Resolution</h3>
            <p>Before initiating any formal dispute resolution process, you agree to first contact us at support@surgepay.xyz and attempt to resolve the dispute informally for a period of at least thirty (30) days.</p>

            <h3>20.2 Binding Arbitration</h3>
            <p>IF INFORMAL RESOLUTION IS UNSUCCESSFUL, ANY DISPUTE SHALL BE RESOLVED BY BINDING ARBITRATION ADMINISTERED BY THE AMERICAN ARBITRATION ASSOCIATION ("AAA") UNDER ITS CONSUMER ARBITRATION RULES. The arbitration shall be conducted by a single arbitrator in the English language. The seat of arbitration shall be the State of Delaware.</p>

            <h3>20.3 Class Action Waiver</h3>
            <p>YOU AND SURGEPAY AGREE THAT EACH PARTY MAY BRING CLAIMS AGAINST THE OTHER ONLY IN AN INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS, CONSOLIDATED, OR REPRESENTATIVE PROCEEDING.</p>

            <h3>20.4 Jury Trial Waiver</h3>
            <p>YOU AND SURGEPAY EACH WAIVE THE RIGHT TO A TRIAL BY JURY.</p>
          </section>

          <section>
            <h2>21. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law principles.</p>
          </section>

          <section>
            <h2>22. Force Majeure</h2>
            <p>Surgepay shall not be liable for any failure or delay in performance of its obligations under these Terms where such failure or delay results from circumstances beyond Surgepay's reasonable control, including but not limited to acts of God, natural disasters, pandemics, war, terrorism, government actions, sanctions, cyberattacks, or disruptions in banking or payment systems.</p>
          </section>

          <section>
            <h2>23. Communications</h2>
            <p>You consent to receive electronic communications from Surgepay regarding your account and the Services. Communications may be sent via WhatsApp, email, SMS, or posted on our website. We primarily use WhatsApp to communicate with you.</p>
          </section>

          <section>
            <h2>24–27. General Provisions</h2>
            <p><strong>Severability:</strong> If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.</p>
            <p><strong>Entire Agreement:</strong> These Terms, together with the Privacy Policy and any supplemental terms, constitute the entire agreement between you and Surgepay.</p>
            <p><strong>Assignment:</strong> You may not assign or transfer your rights or obligations under these Terms without our prior written consent. Surgepay may assign its rights without restriction.</p>
            <p><strong>No Waiver:</strong> Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.</p>
          </section>

          <section>
            <h2>28. Contact Information</h2>
            <div className="bg-slate-50 rounded-2xl p-6 mt-4">
              <p className="mb-1"><strong>SURGEPAYXYZ, LLC</strong> (d/b/a Surgepay)</p>
              <p className="mb-1">131 Continental Dr, Suite 305</p>
              <p className="mb-1">Newark, Delaware 19713</p>
              <p className="mb-1">New Castle County</p>
              <p className="mb-3">Email: <a href="mailto:support@surgepay.xyz" className="text-whatsapp hover:underline">support@surgepay.xyz</a></p>
              <p>Website: <a href="https://surgepay.xyz" className="text-whatsapp hover:underline">https://surgepay.xyz</a></p>
            </div>
          </section>
        </article>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-slate-100 py-8 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <span>© 2026 SURGEPAY PTE LTD. All rights reserved.</span>
          <div className="flex gap-6">
            <Link to="/terms" className="hover:text-whatsapp transition-colors font-medium">Terms</Link>
            <Link to="/privacy" className="hover:text-whatsapp transition-colors font-medium">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
