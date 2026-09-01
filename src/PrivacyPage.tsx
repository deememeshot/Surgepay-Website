import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
  useEffect(() => {
    document.title = 'Privacy Policy — Surgepay';
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
<h2>LEGAL</h2>
<h1>Privacy Policy</h1>
<p><strong>Effective Date: September 1, 2026</strong>
<em>(Supersedes the version dated March 17, 2026)</em></p>
</section>
<section>
<h2>1. Introduction</h2>
<p>This Privacy Policy (&quot;Policy&quot;) describes how SURGEPAY PTE. LTD., a private company limited by shares doing business as Surgepay (&quot;Surgepay,&quot; &quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our&quot;), collects, uses, discloses, retains, and protects your personal information when you access or use our website (<a href="https://www.surgepay.money">https://www.surgepay.money</a>), our WhatsApp-based interface, and all related services (collectively, the &quot;Services&quot;).</p>
<p>By accessing or using our Services, you acknowledge that you have read, understood, and agree to the practices described in this Policy. If you do not agree to this Policy, you must not access or use the Services.</p>
<p>This Policy should be read in conjunction with our Terms and Conditions of Service, and with the privacy documents of our licensed partner Cybrid, which are linked in Sections 5.1 and 9.4 and which describe how Cybrid handles information about you in its own right.</p>
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
<li>Government-issued photo identification (passport, driver&#39;s license, state ID);</li>
<li>Social Security Number (SSN) or Individual Taxpayer Identification Number (ITIN);</li>
<li>Date of birth;</li>
<li>Residential address and proof of address;</li>
<li>U.S. bank account information (collected via Plaid&#39;s secure interface);</li>
<li>PAN (Permanent Account Number) for Indian tax purposes;</li>
<li>Selfie or biometric data for identity verification; and</li>
<li>Source of funds and purpose of transfer information.</li>
</ul>
<p><strong>Important:</strong> Surgepay does not directly collect or store your SSN/ITIN, government ID images, biometric data, or U.S. bank login credentials. This sensitive information is collected and processed directly by our licensed partners — Cybrid Technology Inc., Cybrid, Inc., Cybrid Canada Inc., Saber Money, and Plaid Inc. — through their secure interfaces, and is handled under their own privacy policies. Cybrid&#39;s are available here:</p>
<ul>
<li><strong>Cybrid Privacy Policy (USA):</strong> <a href="https://cybrid.xyz/legal/privacy-policy-usa">https://cybrid.xyz/legal/privacy-policy-usa</a></li>
<li><strong>Cybrid Privacy Notice (USA):</strong> <a href="https://cybrid.xyz/legal/privacy-notice-usa">https://cybrid.xyz/legal/privacy-notice-usa</a></li>
<li><strong>Cybrid Technology Inc. Privacy Policy:</strong> <a href="https://cybrid.xyz/legal/privacy-policy-cybrid-tech">https://cybrid.xyz/legal/privacy-policy-cybrid-tech</a></li>
<li><strong>Cybrid Canada Inc. Privacy Policy:</strong> <a href="https://cybrid.xyz/legal/privacy-policy-canada">https://cybrid.xyz/legal/privacy-policy-canada</a></li>
</ul>
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
<li>Meeting information-sharing obligations that apply to transfers of funds and digital assets, including &quot;travel rule&quot; requirements, as described in Section 5.6;</li>
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
<p>We share your registration information, transaction information, and Indian bank account details with our licensed partners, solely for the purpose of providing the Services:</p>
<table>
<thead>
<tr>
<th>Partner</th>
<th>Role</th>
<th>Privacy policy</th>
</tr>
</thead>
<tbody><tr>
<td><strong>Cybrid Technology Inc.</strong></td>
<td>Payments technology platform (Canada)</td>
<td><a href="https://cybrid.xyz/legal/privacy-policy-cybrid-tech">https://cybrid.xyz/legal/privacy-policy-cybrid-tech</a></td>
</tr>
<tr>
<td><strong>Cybrid, Inc.</strong> (&quot;Cybrid USA&quot;)</td>
<td>On-ramp, payment processing, compliance (United States)</td>
<td><a href="https://cybrid.xyz/legal/privacy-policy-usa">https://cybrid.xyz/legal/privacy-policy-usa</a> and <a href="https://cybrid.xyz/legal/privacy-notice-usa">https://cybrid.xyz/legal/privacy-notice-usa</a></td>
</tr>
<tr>
<td><strong>Cybrid Canada Inc.</strong></td>
<td>Regulated services (Canada)</td>
<td><a href="https://cybrid.xyz/legal/privacy-policy-canada">https://cybrid.xyz/legal/privacy-policy-canada</a></td>
</tr>
<tr>
<td><strong>Saber Money</strong></td>
<td>Off-ramp, FX conversion, INR delivery (India)</td>
<td>Available on request</td>
</tr>
<tr>
<td><strong>Plaid Inc.</strong></td>
<td>Bank account linking and verification</td>
<td><a href="https://plaid.com/legal/">https://plaid.com/legal/</a></td>
</tr>
</tbody></table>
<p><strong>Onward transfers by our partners.</strong> Our partners do not process your information in isolation. In particular, Cybrid transfers information about you and your transactions to its own affiliates, banking partners, identity verification and fraud prevention vendors, liquidity and custody providers, and payout providers, in order to deliver the regulated services and to meet its legal obligations. Cybrid also collects information about you from those providers. These onward transfers are governed by the Cybrid privacy documents linked above and by the Cybrid User Agreement (<a href="https://cybrid.xyz/legal/user-agreement">https://cybrid.xyz/legal/user-agreement</a>), not by this Policy. We encourage you to read them.</p>
<h3>5.2 Service Providers</h3>
<p>We may share your information with third-party service providers who assist us in operating the Services, including cloud hosting providers (Amazon Web Services), communication platforms (Twilio for WhatsApp messaging), and analytics providers (Google).</p>
<h3>5.3 Legal and Compliance Disclosures</h3>
<p>We may disclose your information when we believe in good faith that disclosure is necessary to comply with applicable law, enforce our Terms, detect fraud, or protect the rights and safety of Surgepay, our users, or the public.</p>
<h3>5.4 Business Transfers</h3>
<p>In the event of a merger, acquisition, reorganization, bankruptcy, or sale of all or a portion of our assets, your personal information may be transferred as part of such transaction.</p>
<h3>5.5 With Your Consent</h3>
<p>We may share your information with third parties when you have provided explicit consent to do so.</p>
<h3>5.6 Information Sharing Required to Process Transfers</h3>
<p>Certain information sharing is a mandatory feature of the payment networks and regulatory regimes through which your transfers move, rather than a discretionary choice by Surgepay.</p>
<p>By using the Services, you authorize Surgepay and our licensed partners to collect, use, and share information about you and your transactions with the operators of the payment networks and rails used to process your transfer, with correspondent and beneficiary financial institutions, and with other providers, as required by the rules of those networks and by applicable law. This includes information-sharing requirements that apply to transfers of funds and digital assets, commonly known as &quot;travel rule&quot; requirements, under which originator and beneficiary details must accompany a transfer.</p>
<p>Our partners may request additional information about your bank accounts, wallets, source of funds, and the parties to a transaction. Pending receipt of that information, a transfer may be delayed, declined, or reversed.</p>
<p>Where you provide us with information about another person, you confirm that you have obtained any consent required for us and our partners to use it for these purposes.</p>
</section>
<section>
<h2>6. Data Retention</h2>
<p>We retain your personal information for as long as necessary to fulfill the purposes for which it was collected. Specific retention periods include:</p>
<ul>
<li><strong>Account Information:</strong> Retained for the duration of your account and for a minimum of five (5) years following account closure, as required by the BSA and FinCEN regulations.</li>
<li><strong>Transaction Records:</strong> Retained for a minimum of five (5) years from the date of the transaction.</li>
<li><strong>KYC/Identity Verification Records:</strong> Retained by our licensed partners in accordance with their retention policies (typically five (5) years from account closure).</li>
<li><strong>Communication Records:</strong> Retained for three (3) years from the date of the communication.</li>
<li><strong>Website Analytics Data:</strong> Retained in accordance with Google Analytics&#39; data retention settings (currently twenty-six (26) months).</li>
</ul>
<p>Our licensed partners retain information independently under their own retention policies, and may retain information after your Surgepay account is closed where required by law or for legitimate business purposes.</p>
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
<p>Our website does not currently respond to &quot;Do Not Track&quot; (DNT) signals from browsers.</p>
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
<p>To exercise your rights, contact us at <a href="mailto:support@surgepay.money">support@surgepay.money</a>. We will respond to verifiable consumer requests within forty-five (45) days. Requests concerning information held by our licensed partners in their own right should be directed to those partners; we will help you route such a request where we can.</p>
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
<h3>9.4 Gramm-Leach-Bliley Act (GLBA) and Federal Privacy Notices</h3>
<p>To the extent that Surgepay is deemed a financial institution under the Gramm-Leach-Bliley Act, we comply with the GLBA&#39;s requirements regarding the collection, use, and protection of nonpublic personal information (NPI).</p>
<p>United States federal privacy law also requires our licensed partner Cybrid, Inc. to provide you with its own privacy notice as a consumer customer. That notice, and Cybrid&#39;s privacy policy, are separate documents and both are available to you here:</p>
<ul>
<li><strong>Cybrid Privacy Policy (USA):</strong> <a href="https://cybrid.xyz/legal/privacy-policy-usa">https://cybrid.xyz/legal/privacy-policy-usa</a></li>
<li><strong>Cybrid Privacy Notice (USA):</strong> <a href="https://cybrid.xyz/legal/privacy-notice-usa">https://cybrid.xyz/legal/privacy-notice-usa</a></li>
</ul>
<p>These documents describe Cybrid&#39;s own handling of your nonpublic personal information, including the categories of information it collects, the parties with which it shares that information, and any choices available to you. They apply in addition to this Policy.</p>
</section>
<section>
<h2>10. International Data Transfers</h2>
<p>Your personal information may be transferred to and processed in countries other than the country in which you reside, including the United States, Canada (where Cybrid Technology Inc. and Cybrid Canada Inc. are established), India (where transfers are settled and INR is delivered), and Singapore (where Surgepay is established). By using the Services, you consent to the transfer of your information to these countries. Data protection laws in these countries may differ from those in your place of residence.</p>
</section>
<section>
<h2>11. Children&#39;s Privacy</h2>
<p>The Services are not intended for individuals under eighteen (18) years of age. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child, we will take immediate steps to delete such information.</p>
</section>
<section>
<h2>12. WhatsApp-Specific Disclosures</h2>
<p>Our primary user interface is WhatsApp, a messaging platform owned by Meta Platforms, Inc. When you interact with Surgepay through WhatsApp:</p>
<ul>
<li>Your messages are end-to-end encrypted by WhatsApp between your device and WhatsApp&#39;s servers. Our access to messages is through the WhatsApp Business API via Twilio.</li>
<li>We store the content of your WhatsApp conversations with our bot for the purpose of providing the Services, maintaining transaction records, and providing customer support.</li>
<li>Meta/WhatsApp may collect metadata about your interactions in accordance with WhatsApp&#39;s own privacy policy.</li>
<li>Our WhatsApp bot is rule-based and does not use artificial intelligence or large language models to process or generate responses.</li>
<li>Legal notices, including notices about changes to this Policy or to our partners&#39; terms, may be delivered to you through WhatsApp as well as by email.</li>
</ul>
</section>
<section>
<h2>13. Data Breach Notification</h2>
<p>In the event of a data breach that compromises the security, confidentiality, or integrity of your personal information, we will:</p>
<ul>
<li>Investigate the breach promptly and take steps to contain and remediate it;</li>
<li>Notify affected individuals as required by applicable law within the required timeframes;</li>
<li>Notify our licensed partners (Cybrid and Saber Money) immediately;</li>
<li>Notify relevant regulatory authorities as required by applicable law; and</li>
<li>Provide information about the nature of the breach and steps individuals can take to protect themselves.</li>
</ul>
</section>
<section>
<h2>14. Third-Party Links and Services</h2>
<p>The Services may contain links to third-party websites or services. This Privacy Policy does not apply to third-party websites or services. We encourage you to review the privacy policies of any third-party services you access through our platform.</p>
<p>The Cybrid privacy documents linked in Sections 2.2, 5.1 and 9.4 are not &quot;third-party services&quot; for the purposes of this Section. They describe how a licensed partner integral to the Services handles your information, and you should read them alongside this Policy.</p>
</section>
<section>
<h2>15. Changes to This Privacy Policy</h2>
<p>We may update this Privacy Policy from time to time. If we make material changes, we will notify you at least thirty (30) days in advance via WhatsApp, email, or by posting a notice on our website. Your continued use of the Services constitutes your acceptance of the updated Policy.</p>
<p>Our licensed partners may separately update their own privacy policies and notices under their own change procedures. Where we receive advance notice of a material change from a partner, we will pass that notice on to you.</p>
</section>
<section>
<h2>16. Data Controller and Contact Information</h2>
<p><strong>SURGEPAY PTE. LTD.</strong> (d/b/a Surgepay)</p>
<p>20A Tanjong Pagar Road
Singapore 088443</p>
<p>Email: <a href="mailto:support@surgepay.money">support@surgepay.money</a>
Website: <a href="https://www.surgepay.money">https://www.surgepay.money</a></p>
<p>For questions about how Cybrid handles your information, you may contact Cybrid directly at <a href="mailto:legal@cybrid.app">legal@cybrid.app</a>, or <a href="mailto:support@cybrid.app">support@cybrid.app</a> for general enquiries.</p>
<p>If you are not satisfied with our response, you may also contact the Consumer Financial Protection Bureau (CFPB) at consumerfinance.gov or your state&#39;s attorney general&#39;s office.</p>
</section>

</article>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-slate-100 py-8 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <span>© 2026 SURGEPAY PTE. LTD. All rights reserved.</span>
          <div className="flex gap-6">
            <Link to="/terms" className="hover:text-whatsapp transition-colors font-medium">Terms</Link>
            <Link to="/privacy" className="hover:text-whatsapp transition-colors font-medium">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
