import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
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
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-3">Privacy Policy</h1>
          <p className="text-base text-slate-400">Effective Date: March 17, 2026</p>
        </div>

        <article className="legal-content">
          <section>
            <h2>1. Introduction</h2>
            <p>This Privacy Policy ("Policy") describes how SURGEPAYXYZ, LLC, a Delaware limited liability company doing business as Surgepay ("Surgepay," "Company," "we," "us," "our"), collects, uses, discloses, retains, and protects your personal information when you access or use our website (https://surgepay.xyz), our WhatsApp-based interface, and all related services (collectively, the "Services").</p>
            <p>By accessing or using our Services, you acknowledge that you have read, understood, and agree to the practices described in this Policy. If you do not agree to this Policy, you must not access or use the Services.</p>
            <p>This Policy should be read in conjunction with our <Link to="/terms" className="text-whatsapp hover:underline">Terms and Conditions of Service</Link>.</p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <h3>2.1 Information You Provide Directly</h3>
            <p>When you register for and use our Services, we collect the following categories of personal information that you provide directly:</p>
            <ul>
              <li><strong>Registration Information:</strong> Full legal name, phone number (WhatsApp number), and email address. This information is collected to create your account and register you with our licensed partners.</li>
              <li><strong>Indian Bank Account Details:</strong> Account holder name, bank name, account number, IFSC code, and residential address linked to your NRO bank account.</li>
              <li><strong>Transaction Information:</strong> Transfer amounts, source and destination details, exchange rates, fees, timestamps, transaction identification numbers, and transfer status information.</li>
              <li><strong>Communications:</strong> Messages and interactions you send through WhatsApp or email, including support inquiries and feedback.</li>
            </ul>

            <h3>2.2 Information Collected by Our Licensed Partners</h3>
            <p>When you use certain features of the Services (such as KYC verification, bank account linking, and payment processing), our licensed partners may collect additional information directly from you, including but not limited to:</p>
            <ul>
              <li>Government-issued photo identification (passport, driver's license, state ID);</li>
              <li>Social Security Number (SSN) or Individual Taxpayer Identification Number (ITIN);</li>
              <li>Date of birth;</li>
              <li>Residential address and proof of address;</li>
              <li>U.S. bank account information (collected via Plaid's secure interface);</li>
              <li>PAN (Permanent Account Number) for Indian tax purposes;</li>
              <li>Selfie or biometric data for identity verification; and</li>
              <li>Source of funds and purpose of transfer information.</li>
            </ul>
            <div className="bg-slate-50 rounded-2xl p-5 mt-4">
              <p className="text-sm text-slate-600"><strong>Important:</strong> Surgepay does not directly collect or store your SSN/ITIN, government ID images, biometric data, or U.S. bank login credentials. This sensitive information is collected and processed directly by our licensed partners (Cybrid, Saber Money, Plaid) through their secure interfaces.</p>
            </div>

            <h3>2.3 Information Collected Automatically</h3>
            <p>When you visit our website, we automatically collect certain technical information, including:</p>
            <ul>
              <li>Device information (device type, operating system, browser type and version);</li>
              <li>IP address and approximate geographic location;</li>
              <li>Pages visited, time spent on pages, and navigation patterns;</li>
              <li>Referring URLs and search terms; and</li>
              <li>Usage data collected through Google Analytics.</li>
            </ul>

            <h3>2.4 Information from Third-Party Sources</h3>
            <p>We may receive information about you from our licensed partners, including KYC verification status, bank account linking status, transfer processing status, and compliance-related information.</p>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <h3>3.1 Service Delivery</h3>
            <ul>
              <li>Registering you with our licensed partners to enable KYC, bank linking, and transfers;</li>
              <li>Facilitating and processing your cross-border money transfers;</li>
              <li>Storing your Indian bank account details to enable repeat transfers;</li>
              <li>Displaying transaction history, transfer status, and account information;</li>
              <li>Communicating with you about your transfers, account status, and service updates; and</li>
              <li>Providing customer support.</li>
            </ul>

            <h3>3.2 Compliance and Legal Obligations</h3>
            <ul>
              <li>Complying with applicable anti-money laundering (AML), know your customer (KYC), and counter-terrorism financing (CTF) requirements;</li>
              <li>Complying with the Bank Secrecy Act (BSA), USA PATRIOT Act, FinCEN regulations, OFAC sanctions, FEMA, RBI guidelines, PMLA, and other applicable laws;</li>
              <li>Responding to lawful requests from law enforcement, regulatory authorities, or courts;</li>
              <li>Maintaining records as required by applicable law; and</li>
              <li>Reporting transactions to tax authorities as legally required.</li>
            </ul>

            <h3>3.3 Security and Fraud Prevention</h3>
            <ul>
              <li>Monitoring transactions and account activity for suspicious or fraudulent behavior;</li>
              <li>Detecting, preventing, and investigating fraud, unauthorized access, and other illegal activities;</li>
              <li>Verifying your identity and the legitimacy of transfers; and</li>
              <li>Protecting the rights, property, and safety of Surgepay, our users, our partners, and the public.</li>
            </ul>

            <h3>3.4 Service Improvement</h3>
            <ul>
              <li>Analyzing usage patterns to improve the Services;</li>
              <li>Identifying and resolving technical issues; and</li>
              <li>Developing new features and functionality.</li>
            </ul>
          </section>

          <section>
            <h2>4. Legal Basis for Processing</h2>
            <p>We process your personal information on the following legal bases:</p>
            <ul>
              <li><strong>Contractual Necessity:</strong> Processing necessary to perform our obligations under the Terms and Conditions and to provide the Services you have requested.</li>
              <li><strong>Legal Obligation:</strong> Processing necessary to comply with applicable laws and regulations, including AML/KYC requirements, tax reporting, and responding to lawful government requests.</li>
              <li><strong>Legitimate Interest:</strong> Processing necessary for our legitimate interests, including fraud prevention, service improvement, and security, provided such interests are not overridden by your rights and freedoms.</li>
              <li><strong>Consent:</strong> Where required by applicable law, we process your information based on your consent, which you may withdraw at any time.</li>
            </ul>
          </section>

          <section>
            <h2>5. How We Share Your Information</h2>
            <p>We do not sell your personal information. We share your personal information only in the following circumstances:</p>

            <h3>5.1 Licensed Partners</h3>
            <p>We share your registration information and Indian bank account details with our licensed partners — Saber Money, Cybrid Inc., Cybrid Canada Inc., and Plaid Inc. — solely for the purpose of providing the Services.</p>

            <h3>5.2 Service Providers</h3>
            <p>We may share your information with third-party service providers who assist us in operating the Services, including cloud hosting providers (Amazon Web Services), communication platforms (Twilio for WhatsApp messaging), and analytics providers (Google).</p>

            <h3>5.3 Legal and Compliance Disclosures</h3>
            <p>We may disclose your information when we believe in good faith that disclosure is necessary to comply with applicable law, enforce our Terms, detect fraud, or protect the rights and safety of Surgepay, our users, or the public.</p>

            <h3>5.4 Business Transfers</h3>
            <p>In the event of a merger, acquisition, reorganization, bankruptcy, or sale of all or a portion of our assets, your personal information may be transferred as part of such transaction.</p>

            <h3>5.5 With Your Consent</h3>
            <p>We may share your information with third parties when you have provided explicit consent to do so.</p>
          </section>

          <section>
            <h2>6. Data Retention</h2>
            <p>We retain your personal information for as long as necessary to fulfill the purposes for which it was collected. Specific retention periods include:</p>
            <ul>
              <li><strong>Account Information:</strong> Retained for the duration of your account and for a minimum of five (5) years following account closure, as required by the BSA and FinCEN regulations.</li>
              <li><strong>Transaction Records:</strong> Retained for a minimum of five (5) years from the date of the transaction.</li>
              <li><strong>KYC/Identity Verification Records:</strong> Retained by our licensed partners in accordance with their retention policies (typically five (5) years from account closure).</li>
              <li><strong>Communication Records:</strong> Retained for three (3) years from the date of the communication.</li>
              <li><strong>Website Analytics Data:</strong> Retained in accordance with Google Analytics' data retention settings (currently twenty-six (26) months).</li>
            </ul>
          </section>

          <section>
            <h2>7. Data Security</h2>
            <h3>7.1 Technical Safeguards</h3>
            <ul>
              <li>Encryption of data in transit using TLS/SSL protocols;</li>
              <li>Encryption of sensitive data at rest in our databases;</li>
              <li>Secure cloud infrastructure hosted on Amazon Web Services (AWS);</li>
              <li>Network security controls including firewalls, security groups, and access control lists;</li>
              <li>Regular security assessments and vulnerability scanning; and</li>
              <li>Automated monitoring and alerting for security events.</li>
            </ul>

            <h3>7.2 Administrative Safeguards</h3>
            <ul>
              <li>Access controls that limit access to personal information on a need-to-know basis;</li>
              <li>Employee security awareness and training;</li>
              <li>Background checks for personnel with access to sensitive information;</li>
              <li>Documented security policies and incident response procedures; and</li>
              <li>Regular review and audit of security practices.</li>
            </ul>

            <h3>7.3 Physical Safeguards</h3>
            <ul>
              <li>Data hosted in AWS data centers with SOC 2 Type II, ISO 27001, and other certifications;</li>
              <li>Physical access controls at all data processing facilities; and</li>
              <li>Environmental controls to protect against natural disasters and equipment failure.</li>
            </ul>
            <p>While we take reasonable measures to protect your information, no method of electronic transmission or storage is completely secure. We cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2>8. Cookies and Tracking Technologies</h2>
            <h3>8.1 Google Analytics</h3>
            <p>Our website uses Google Analytics, a web analytics service provided by Google LLC. Google Analytics uses cookies to collect information about your use of our website, including your IP address, browser type, pages visited, and time spent on pages.</p>

            <h3>8.2 Managing Cookies</h3>
            <p>You can control and manage cookies through your browser settings. Most browsers allow you to refuse cookies, delete existing cookies, or be notified when a cookie is set.</p>

            <h3>8.3 Do Not Track Signals</h3>
            <p>Our website does not currently respond to "Do Not Track" (DNT) signals from browsers.</p>
          </section>

          <section>
            <h2>9. Your Privacy Rights</h2>
            <h3>9.1 California Residents — CCPA/CPRA</h3>
            <p>If you are a California resident, you have the following rights:</p>
            <ul>
              <li><strong>Right to Know:</strong> Request disclosure of the categories and specific pieces of personal information we have collected about you.</li>
              <li><strong>Right to Delete:</strong> Request deletion of personal information we have collected from you, subject to certain exceptions.</li>
              <li><strong>Right to Correct:</strong> Request correction of inaccurate personal information.</li>
              <li><strong>Right to Opt-Out:</strong> We do not sell or share your personal information for cross-context behavioral advertising.</li>
              <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising any of your CCPA/CPRA rights.</li>
            </ul>
            <p>To exercise your rights, contact us at <a href="mailto:support@surgepay.xyz" className="text-whatsapp hover:underline">support@surgepay.xyz</a>. We will respond to verifiable consumer requests within forty-five (45) days.</p>

            <h3>9.2 Categories of Personal Information Collected</h3>
            <p>In the preceding twelve (12) months, we have collected the following categories of personal information as defined by the CCPA:</p>
            <ul>
              <li><strong>Identifiers:</strong> Name, phone number, email address, IP address.</li>
              <li><strong>Financial Information:</strong> Indian bank account number, IFSC code, transaction amounts, exchange rates.</li>
              <li><strong>Internet or Network Activity:</strong> Website browsing history, interaction with our website.</li>
              <li><strong>Geolocation Data:</strong> Approximate location derived from IP address.</li>
            </ul>
            <p>We have not sold personal information in the preceding twelve (12) months.</p>

            <h3>9.3 Other State Privacy Laws</h3>
            <p>If you are a resident of Virginia, Colorado, Connecticut, Utah, Texas, Oregon, Montana, or another state with applicable consumer privacy legislation, you may have additional rights including the right to access, correct, delete, and obtain a copy of your personal data.</p>

            <h3>9.4 Gramm-Leach-Bliley Act (GLBA)</h3>
            <p>To the extent that Surgepay is deemed a financial institution under the Gramm-Leach-Bliley Act, we comply with the GLBA's requirements regarding the collection, use, and protection of nonpublic personal information (NPI).</p>
          </section>

          <section>
            <h2>10. International Data Transfers</h2>
            <p>Your personal information may be transferred to and processed in countries other than the country in which you reside, including the United States and India. By using the Services, you consent to the transfer of your information to these countries.</p>
          </section>

          <section>
            <h2>11. Children's Privacy</h2>
            <p>The Services are not intended for individuals under eighteen (18) years of age. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child, we will take immediate steps to delete such information.</p>
          </section>

          <section>
            <h2>12. WhatsApp-Specific Disclosures</h2>
            <p>Our primary user interface is WhatsApp, a messaging platform owned by Meta Platforms, Inc. When you interact with Surgepay through WhatsApp:</p>
            <ul>
              <li>Your messages are end-to-end encrypted by WhatsApp between your device and WhatsApp's servers. Our access to messages is through the WhatsApp Business API via Twilio.</li>
              <li>We store the content of your WhatsApp conversations with our bot for the purpose of providing the Services, maintaining transaction records, and providing customer support.</li>
              <li>Meta/WhatsApp may collect metadata about your interactions in accordance with WhatsApp's own privacy policy.</li>
              <li>Our WhatsApp bot is rule-based and does not use artificial intelligence or large language models to process or generate responses.</li>
            </ul>
          </section>

          <section>
            <h2>13. Data Breach Notification</h2>
            <p>In the event of a data breach that compromises the security, confidentiality, or integrity of your personal information, we will:</p>
            <ol>
              <li>Investigate the breach promptly and take steps to contain and remediate it;</li>
              <li>Notify affected individuals as required by applicable law within the required timeframes;</li>
              <li>Notify our licensed partners (Saber Money, Cybrid) immediately;</li>
              <li>Notify relevant regulatory authorities as required by applicable law; and</li>
              <li>Provide information about the nature of the breach and steps individuals can take to protect themselves.</li>
            </ol>
          </section>

          <section>
            <h2>14. Third-Party Links and Services</h2>
            <p>The Services may contain links to third-party websites or services. This Privacy Policy does not apply to third-party websites or services. We encourage you to review the privacy policies of any third-party services you access through our platform.</p>
          </section>

          <section>
            <h2>15. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time. If we make material changes, we will notify you at least thirty (30) days in advance via WhatsApp, email, or by posting a notice on our website. Your continued use of the Services constitutes your acceptance of the updated Policy.</p>
          </section>

          <section>
            <h2>16. Data Controller and Contact Information</h2>
            <div className="bg-slate-50 rounded-2xl p-6 mt-4">
              <p className="mb-1"><strong>SURGEPAYXYZ, LLC</strong> (d/b/a Surgepay)</p>
              <p className="mb-1">131 Continental Dr, Suite 305</p>
              <p className="mb-1">Newark, Delaware 19713</p>
              <p className="mb-1">New Castle County</p>
              <p className="mb-3">Email: <a href="mailto:support@surgepay.xyz" className="text-whatsapp hover:underline">support@surgepay.xyz</a></p>
              <p>Website: <a href="https://surgepay.xyz" className="text-whatsapp hover:underline">https://surgepay.xyz</a></p>
            </div>
            <p className="mt-4">If you are not satisfied with our response, you may also contact the Consumer Financial Protection Bureau (CFPB) at consumerfinance.gov or your state's attorney general's office.</p>
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
