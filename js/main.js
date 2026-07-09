/* ─────────────────────────────────────────────
   ChamberWebsiteProject – main.js
───────────────────────────────────────────── */

'use strict';

/* ── Theme Toggle ── */
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Apply saved theme on load
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

/* ── Translations ── */
const translations = {
  en: {
    site_title: 'Bhardwaj Associates',
    nav_home: 'Home', nav_about: 'About', nav_services: 'Services',
    nav_gallery: 'Gallery', nav_contact: 'Contact',
    hero_tag: 'Welcome to my world',
    hero_greeting: "Hi, I'm",
    hero_subtitle: 'A passionate professional dedicated to delivering excellence.',
    hero_tagline: 'Explorer · Creator · Visionary',
    hero_cta1: 'Discover More', hero_cta2: 'Get in Touch', hero_badge: 'Available',
    profile_name: 'Advocate Arun Sharma',
    profile_alias: '(Aruneshwar Sharma)',
    profile_credentials: 'M.Com, LL.M.',
    profile_svc1: 'All Legal Documents Advisor and Writer',
    profile_svc2: 'Civil and Criminal Legal Advisor',
    profile_chamber: 'Chamber No. 77, Tehsil Compound, Ghaziabad (U.P)',
    about_tag: 'Who I Am', about_title1: 'About', about_title2: 'Me',
    about_us_title: 'About', about_us_title2: 'Us',
    about_bio: "Advocate Arun Sharma is a highly respected legal professional and a well-recognized name among the senior advocates practicing in the Ghaziabad Tehsil Compound. With over 25 years of independent legal practice, he has built a strong reputation for providing reliable legal advice, strategic representation, and ethical advocacy. His expertise spans civil and criminal matters, legal documentation, and consultancy services. Committed to professionalism, integrity, and achieving the best possible outcomes for his clients, Advocate Arun Sharma continues to serve individuals and businesses with dedication and excellence.",
    stat_projects: 'नामांकन संख्या', stat_clients: 'संतुष्ट मुवक्किल', stat_awards: 'विवाह पंजीकरण',
    skill_strategy: 'Strategy', skill_design: 'Design', skill_leadership: 'Leadership',
    about_cta: "Let's Connect", exp_text: 'Years Experience',
    cta_heading: "Don't Hesitate To Ask",
    cta_line1: "Are You Facing Any Legal Problem But Can't Consult to Anyone?",
    cta_line2: 'Getting the right legal advice is important because it helps you know your rights and gives you a better chance of a positive outcome.',
    cta_line3: 'Then Consult Us...',
    cta_btn: 'Call Now',
    team_title: 'Our', team_title2: 'Team',
    about_extra: 'Beyond legal documentation, Advocate Arun Sharma provides comprehensive legal consultation, dispute resolution, and courtroom representation across civil, criminal, matrimonial, property, financial, commercial, labour, and constitutional matters. He is also highly experienced in drafting and executing legal documents such as Partition Deeds, Exchange Deeds, Mortgage Deeds, Leasehold Mortgage Deeds, Leave & License Agreements, Sub-Lease Deeds, Special Power of Attorney (SPA), Builder-Buyer Agreements (BBA), Agreements to Sell, and Wills, ensuring legally sound, transparent, and client-focused solutions.',
    svc_sale_deed: 'Sale Deed (Registry)',
    svc_gift_deed: 'Gift of Property (Gift Deed)',
    svc_cancel_deed: 'Cancellation Deed',
    svc_lease_deed: 'Lease Deed',
    svc_gpa: 'General Power of Attorney (GPA)',
    svc_rent: 'Rent Agreement',
    svc_agree_sell: 'Agreements to Sell (Bayana)',
    svc_wills: 'Wills (Vasiyatnama)',
    svc_heirs: 'Legal Heirs (Warisan)',
    svc_marriage: 'Marriage Registration (Court Marriage)',
    svc_affidavit: 'Affidavits',
    svc_income: 'Income Certificate',
    svc_ews: 'EWS Certificates',
    svc_domicile: 'Domicile',
    svc_stamp: 'Stamp Duty',
    svc_property_disp: 'Property Disputes & Partition',
    svc_municipal: 'Municipal Corporation Matters',
    svc_devauth: 'Development Authority Matters',
    svc_notarize: 'Notarization & Legal Documentation',
    svc_other_govt: 'Other Government Documentation Assistance',
    svc_dev_auth: 'Development Authority Matters (GDA, DDA, Noida Authority, etc.)',
    svc_bldg_plan: 'Building Plan Approvals',
    svc_prop_mutation: 'Property Mutation',
    svc_prop_tax: 'Property Tax Matters',
    svc_bail: 'Bail & Anticipatory Bail',
    svc_fir: 'FIR & Criminal Complaints',
    svc_dowry: 'Dowry & Domestic Violence',
    svc_assault: 'Assault & Criminal Offences',
    svc_theft: 'Theft, Robbery & Fraud',
    svc_cheating: 'Cheating & Defamation',
    svc_ndps: 'NDPS & Narcotics Cases',
    svc_murder: 'Murder & Attempt to Murder',
    svc_summons: 'Summons & Warrants',
    svc_criminal_appeal: 'Criminal Appeals',
    services_title1: 'Our', services_title2: 'Services',
    services_page_title: 'Bhardwaj Associates \u2013 Our Services',
    services_intro: 'Bhardwaj Associates provides comprehensive legal services across a wide range of practice areas. We are committed to protecting your rights and delivering results with integrity.',
    svc1_title: 'Property Registration & Documentation',
    svc1_desc: 'Legal assistance for drafting, verification, registration, and execution of all property-related documents and agreements.',
    svc1_inc: 'Includes: Sale Deed, Gift Deed, General Power of Attorney (GPA), Wills (Wasiyatnama)',
    svc2_title: 'Legal Agreements & Documentation',
    svc2_desc: 'Expert legal assistance in drafting, reviewing, and executing agreements and legal documents to safeguard your rights and interests.',
    svc2_inc: 'Includes: Agreement to Sell (Bayana), Rent Agreement, Affidavits, Marriage Registration (Court Marriage)',
    svc3_title: 'Government Certificates & Documentation',
    svc3_desc: 'Professional legal assistance for obtaining government certificates, preparing official documentation, and ensuring compliance with legal requirements.',
    svc3_inc: 'Includes: Income Certificate, EWS Certificate, Domicile Certificate, Legal Heir Certificate (Waarisaan)',
    svc4_title: 'Development Authority & Municipal Matters',
    svc4_desc: 'Expert legal assistance for matters relating to development authorities, municipal corporations, property approvals, regulatory compliance, and civic disputes.',
    svc4_inc: 'Includes: Development Authority Matters (GDA, Noida Authority, MDA etc.), Municipal Corporation Matters',
    svc5_title: 'Criminal Law Services',
    svc5_desc: "Comprehensive legal representation and advisory services across criminal matters, ensuring the protection of our clients' rights at every stage.",
    svc5_inc: 'Includes: Bail & Anticipatory Bail, FIR & Criminal Complaints, Dowry & Domestic Violence',
    svc6_title: 'More Services',
    svc6_desc: 'We offer a wide range of additional legal services. Contact us to know how we can assist you further.',
    gallery_tag: 'My Work & Moments', gallery_title1: 'Gallery', gallery_title2: '& Memories',
    filter_all: 'All', filter_work: 'Work', filter_events: 'Events', filter_personal: 'Personal',
    g1_caption: 'Project Title', g2_caption: 'Event Name', g3_caption: 'Personal Shot',
    g4_caption: 'Project 2', g5_caption: 'Conference', g6_caption: 'Life Moments',
    testi_tag: 'Kind Words', testi_title1: 'What People', testi_title2: 'Say',
    testi1_text: '"An exceptional professional with unparalleled dedication and vision. Their impact on our organization has been transformational."',
    testi2_text: '"A true leader who brings clarity, creativity, and passion to everything they do. Highly recommended for any venture."',
    testi3_text: '"Their strategic thinking and ability to execute flawlessly has made all the difference. A remarkable individual to work with."',
    contact_tag: 'Reach Out', contact_title1: 'Get In', contact_title2: 'Touch',
    contact_lead: "Have a project in mind or just want to say hello? I'd love to hear from you!",
    contact_location_label: 'Location', contact_email_label: 'Email', contact_phone_label: 'Phone',
    form_name_ph: 'Your Full Name', form_name_label: 'Your Full Name',
    form_email_ph: 'Mobile Number', form_email_label: 'Mobile Number',
    form_msg_ph: 'Describe Your Legal Issue', form_msg_label: 'Describe Your Legal Issue',
    form_submit: 'Send Message',
    footer_copy: '© 2026 Bhardwaj Associates. All Rights Reserved.',
    footer_desc: 'Adv. Arun Sharma provides expert legal consultation for property documents, criminal matters, and civil cases in Ghaziabad.',
    footer_address_title: 'Address',
    footer_quicklinks_title: 'Quick Links',
    footer_nav_home: 'Home', footer_nav_about: 'About Us',
    footer_nav_services: 'Our Services', footer_nav_contact: 'Contact Us',
    footer_visitors: 'Total Visitors:',
    msg_required: 'Please fill in all required fields.',
    msg_invalid_mobile: 'Please enter a valid 10-digit mobile number.',
    msg_invalid_email: 'Please enter a valid email address.',
    msg_sending: 'Sending…',
    msg_sent: "Message sent successfully! I'll get back to you soon.",
    msg_error: 'Failed to send message. Please try again or call directly.',
    msg_ratelimit: 'Please wait a few minutes before sending another message.',
    dd_sale_deed: 'Sale Deed (Registry)',
    dd_gpa: 'Power of Attorney (GPA)',
    dd_wills: 'Wills (Wasiyatnama)',
    dd_rent: 'Rent Agreement',
    dd_court_marriage: 'Court Marriage',
    dd_agree_sale: 'Agreement of Sale',
  },
  hi: {
    site_title: 'Bhardwaj Associates',
    nav_home: 'होम', nav_about: 'परिचय', nav_services: 'सेवाएं',
    nav_gallery: 'गैलरी', nav_contact: 'संपर्क',
    hero_tag: 'मेरी दुनिया में आपका स्वागत है',
    hero_greeting: 'नमस्ते, मैं हूं',
    hero_subtitle: 'उत्कृष्टता प्रदान करने के लिए समर्पित एक जुनूनी पेशेवर।',
    hero_tagline: 'अन्वेषक · निर्माता · दूरदर्शी',
    hero_cta1: 'और जानें', hero_cta2: 'संपर्क करें', hero_badge: 'उपलब्ध',
    profile_name: 'Advocate अरुण शर्मा',
    profile_alias: '(अरुणेश्वर शर्मा)',
    profile_credentials: 'M.Com, LL.M.',
    profile_svc1: 'सभी कानूनी दस्तावेज़ सलाहकार और लेखक',
    profile_svc2: 'सिविल और आपराधिक कानूनी सलाहकार',
    profile_chamber: 'चैम्बर नं. 77, तहसील परिसर, गाजियाबाद (उ.प्र.)',
    about_tag: 'मैं कौन हूं', about_title1: 'परिचय', about_title2: 'मेरे बारे में',
    about_us_title: 'हमारे', about_us_title2: 'बारे में',
    about_bio: 'अधिवक्ता अरुण शर्मा गाज़ियाबाद तहसील परिसर के वरिष्ठ अधिवक्ताओं में एक प्रतिष्ठित एवं सम्मानित नाम हैं। स्वतंत्र रूप से 25 वर्षों से अधिक के विधिक अनुभव के साथ, उन्होंने विश्वसनीय कानूनी परामर्श, प्रभावी न्यायालयीन प्रतिनिधित्व तथा नैतिक एवं पारदर्शी अधिवक्ता सेवाओं के माध्यम से अपनी विशिष्ट पहचान स्थापित की है। उन्हें दीवानी (सिविल) एवं फौजदारी (क्रिमिनल) मामलों, कानूनी दस्तावेज़ों के निर्माण एवं परीक्षण तथा विधिक परामर्श सेवाओं में व्यापक विशेषज्ञता प्राप्त है। व्यावसायिक उत्कृष्टता, सत्यनिष्ठा एवं अपने मुवक्किलों के हितों की सर्वोत्तम रक्षा के प्रति समर्पित अधिवक्ता अरुण शर्मा आज भी व्यक्तियों एवं व्यवसायों को समर्पण, दक्षता और उत्कृष्ट कानूनी सेवाएँ प्रदान कर रहे हैं।',
    stat_projects: 'नामांकन संख्या', stat_clients: 'संतुष्ट मुवक्किल', stat_awards: 'विवाह पंजीकरण',
    skill_strategy: 'रणनीति', skill_design: 'डिज़ाइन', skill_leadership: 'नेतृत्व',
    about_cta: 'जुड़ें', exp_text: 'वर्षों का अनुभव',
    cta_heading: 'संकोच न करें, पूछें',
    cta_line1: 'क्या आप किसी कानूनी समस्या का सामना कर रहे हैं लेकिन किसी से परामर्श नहीं कर पा रहे?',
    cta_line2: 'सही कानूनी सलाह आपके अधिकारों को जानने में और सकारात्मक परिणाम पाने की संभावना बढ़ाने में मदद करती है।',
    cta_line3: 'तो हमसे परामर्श करें...',
    cta_btn: 'अभी कॉल करें',
    team_title: 'हमारी', team_title2: 'टीम',
    about_extra: 'कानूनी दस्तावेज़ीकरण से आगे, अधिवक्ता अरुण शर्मा दीवानी, फौजदारी, वैवाहिक, संपत्ति, वित्तीय, वाणिज्यिक, श्रम तथा संवैधानिक मामलों में व्यापक विधिक परामर्श, विवाद समाधान तथा न्यायालयीय पैरवी की सेवाएं भी प्रदान करते हैं। वे पार्टीशन डीड, एक्सचेंज डीड, मॉर्गेज डीड, लीजहोल्ड मॉर्गेज डीड, लीव आर लाइसेंस अग्रीमेंट, सब-लीज डीड, विशेष मुख्तिपत्र (SPA), बिल्डर-खरीदार अनुबंध (BBA), विक्रय करार तथा वसीयतनामा जैसे कानूनी दस्तावेज़ तैयार करने और निष्पादित करने में भी अत्यंत अनुभवी हैं, ताकि कानूनी रूप से सुदृढ़, पारदर्शी और मुवक्किल-केंद्रित समाधान सुनिश्चित हो सकें।',
    svc_sale_deed: 'विक्रय पत्र (रजिस्ट्री)',
    svc_gift_deed: 'संपत्ति उपहार पत्र (Gift Deed)',
    svc_cancel_deed: 'रद्दीकरण पत्र',
    svc_lease_deed: 'पट्टा विलेख',
    svc_gpa: 'सामान्य मुख्तिपत्र (GPA)',
    svc_rent: 'किराया समझौता',
    svc_agree_sell: 'विक्रय करार (बयाना)',
    svc_wills: 'वसीयतनामा',
    svc_heirs: 'कानूनी वारिसान',
    svc_marriage: 'विवाह पंजीकरण (कोर्ट मैरिज)',
    svc_affidavit: 'शपथ पत्र (हलफनामा)',
    svc_income: 'आय प्रमाण पत्र',
    svc_ews: 'EWS प्रमाण पत्र',
    svc_domicile: 'मूल निवास प्रमाण पत्र',
    svc_stamp: 'स्टाम्प ड्यूटी',
    svc_property_disp: 'संपत्ति विवाद एवं बंटवारा',
    svc_municipal: 'नगर निगम संबंधी मामले',
    svc_devauth: 'विकास प्राधिकरण संबंधी मामले',
    svc_notarize: 'नोटरी एवं कानूनी दस्तावेक़ीकरण',
    svc_other_govt: 'अन्य सरकारी दस्तावेक़ीकरण सहायता',
    svc_dev_auth: 'विकास प्राधिकरण मामले (GDA, DDA, नोएडा प्राधिकरण, आदि)',
    svc_bldg_plan: 'भवन मानचित्र अनुमोदन',
    svc_prop_mutation: 'संपत्ति नामांतरण',
    svc_prop_tax: 'संपत्ति कर मामले',
    svc_bail: 'जमानत एवं अग्रिम जमानत',
    svc_fir: 'FIR एवं आपराधिक शिकायत',
    svc_dowry: 'दहेज एवं घरेलू हिंसा',
    svc_assault: 'मारपीट एवं आपराधिक अपराध',
    svc_theft: 'चोरी, डकैती एवं धोखाधड़ी',
    svc_cheating: 'धोखाधड़ी एवं मानहानि',
    svc_ndps: 'NDPS एवं नशीले पदार्थ मामले',
    svc_murder: 'हत्या एवं हत्या का प्रयास',
    svc_summons: 'समन एवं वारंट',
    svc_criminal_appeal: 'आपराधिक अपील',
    services_title1: 'हमारी', services_title2: 'सेवाएं',
    services_page_title: 'Bhardwaj Associates – हमारी सेवाएं',
    services_intro: 'भारद्वाज एसोसिएट्स विभिन्न कानूनी क्षेत्रों में व्यापक कानूनी सेवाएं प्रदान करती है। हम आपके अधिकारों की रक्षा करने और न्याय दिलाने के लिए प्रतिबद्ध हैं।',
    svc1_title: 'संपत्ति पंजीकरण एवं दस्तावेजीकरण',
    svc1_desc: 'संपत्ति से संबंधित सभी दस्तावेजों के मसौदे, सत्यापन, पंजीकरण और निष्पादन में कानूनी सहायता।',
    svc1_inc: 'जैसे – विक्रय पत्र, उपहार पत्र, सामान्य मुख्तारनामा (GPA), वसीयतनामा',
    svc2_title: 'कानूनी अनुबंध एवं दस्तावेजीकरण',
    svc2_desc: 'आपके अधिकारों और हितों की रक्षा के लिए अनुबंधों और कानूनी दस्तावेजों का मसौदा तैयार करने में विशेषज्ञ सहायता।',
    svc2_inc: 'जैसे – बैनामा, किराया अनुबंध, शपथपत्र, विवाह पंजीकरण (कोर्ट मैरिज)',
    svc3_title: 'सरकारी प्रमाण पत्र एवं दस्तावेजीकरण',
    svc3_desc: 'सरकारी प्रमाण पत्र प्राप्त करने और नियामक अनुपालन सुनिश्चित करने में पेशेवर कानूनी सहायता।',
    svc3_inc: 'जैसे – आय प्रमाण पत्र, EWS प्रमाण पत्र, अधिवास प्रमाण पत्र, कानूनी उत्तराधिकारी प्रमाण पत्र',
    svc4_title: 'विकास प्राधिकरण एवं नगरपालिका मामले',
    svc4_desc: 'विकास प्राधिकरण, नगर निगम, संपत्ति अनुमोदन, नियामक अनुपालन और नागरिक विवादों से संबंधित मामलों में विशेषज्ञ कानूनी सहायता।',
    svc4_inc: 'जैसे – विकास प्राधिकरण मामले (GDA, नोएडा प्राधिकरण, MDA आदि), नगर निगम मामले',
    svc5_title: 'आपराधिक कानून सेवाएं',
    svc5_desc: 'आपराधिक मामलों में हर कदम पर मुवक्किलों के अधिकारों की रक्षा करते हुए व्यापक कानूनी प्रतिनिधित्व।',
    svc5_inc: 'जैसे – जमानत एवं अग्रिम जमानत, FIR एवं आपराधिक शिकायत, दहेज एवं घरेलू हिंसा',
    svc6_title: 'अन्य सेवाएं',
    svc6_desc: 'हम अतिरिक्त कानूनी सेवाओं की एक विस्तृत श्रृंखला प्रदान करते हैं। अधिक जानकारी के लिए हमसे संपर्क करें।',
    gallery_tag: 'मेरा कार्य और यादें', gallery_title1: 'गैलरी', gallery_title2: 'और यादें',
    filter_all: 'सभी', filter_work: 'कार्य', filter_events: 'कार्यक्रम', filter_personal: 'व्यक्तिगत',
    g1_caption: 'परियोजना शीर्षक', g2_caption: 'कार्यक्रम का नाम', g3_caption: 'व्यक्तिगत फोटो',
    g4_caption: 'परियोजना 2', g5_caption: 'सम्मेलन', g6_caption: 'जीवन के पल',
    testi_tag: 'प्रशंसा के शब्द', testi_title1: 'लोग क्या', testi_title2: 'कहते हैं',
    testi1_text: '"एक असाधारण पेशेवर जिनकी लगन और दूरदृष्टि अतुलनीय है। हमारी संस्था पर उनका प्रभाव परिवर्तनकारी रहा है।"',
    testi2_text: '"एक सच्चे नेता जो अपने हर काम में स्पष्टता, रचनात्मकता और जुनून लाते हैं। किसी भी उद्यम के लिए अत्यधिक अनुशंसित।"',
    testi3_text: '"उनकी रणनीतिक सोच और निर्दोष तरीके से काम करने की क्षमता ने सारा फर्क डाल दिया। काम करने के लिए एक असाधारण व्यक्ति।"',
    contact_tag: 'संपर्क करें', contact_title1: 'संपर्क में', contact_title2: 'आएं',
    contact_lead: 'कोई परियोजना मन में है या बस नमस्ते कहना चाहते हैं? मुझे आपसे सुनकर खुशी होगी!',
    contact_location_label: 'स्थान', contact_email_label: 'ईमेल', contact_phone_label: 'फोन',
    form_name_ph: 'आपका पूरा नाम', form_name_label: 'आपका पूरा नाम',
    form_email_ph: 'मोबाइल नंबर', form_email_label: 'मोबाइल नंबर',
    form_msg_ph: 'अपनी कानूनी समस्या बताएं', form_msg_label: 'अपनी कानूनी समस्या बताएं',
    form_submit: 'संदेश भेजें',
    footer_copy: '© 2026 भारद्वाज एसोसिएट्स। सर्वाधिकार सुरक्षित।',
    footer_desc: 'अधि. अरुण शर्मा गाजियाबाद में संपत्ति दस्तावेज़, आपराधिक मामलों और दीवानी मुकदमों के लिए विशेषज्ञ कानूनी परामर्श प्रदान करते हैं।',
    footer_address_title: 'पता',
    footer_quicklinks_title: 'त्वरित लिंक',
    footer_nav_home: 'होम', footer_nav_about: 'हमारे बारे में',
    footer_nav_services: 'हमारी सेवाएं', footer_nav_contact: 'संपर्क करें',
    footer_visitors: 'कुल आगंतुक:',
    msg_required: 'कृपया सभी आवश्यक फ़ील्ड भरें।',
    msg_invalid_mobile: 'कृपया सही 10 अंकों का मोबाइल नंबर दर्ज करें।',
    msg_invalid_email: 'कृपया एक वैध ईमेल पता दर्ज करें।',
    msg_sending: 'भेजा जा रहा है…',
    dd_sale_deed: 'सेल डीड (रजिस्ट्री)',
    dd_gpa: 'पावर ऑफ अटॉर्नी (GPA)',
    dd_wills: 'वसीयतनामा',
    dd_rent: 'रेंट एग्रीमेंट',
    dd_court_marriage: 'कोर्ट मैरिज',
    dd_agree_sale: 'एग्रीमेंट ऑफ सेल',
    msg_sent: 'संदेश सफलतापूर्वक भेज दिया गया! मैं जल्द ही आपसे संपर्क करूंगा।',
    msg_error: 'संदेश भेजने में विफल। कृपया पुनः प्रयास करें या सीधे कॉल करें।',
    msg_ratelimit: 'कृपया कुछ मिनट बाद पुनः संदेश भेजें।',
  }
};

/* ── Language Switcher ── */
const langBtns = document.querySelectorAll('.lang-btn');
let currentLang = localStorage.getItem('lang') || 'hi';

function applyLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  // Update html lang attribute
  document.documentElement.lang = lang;

  // Update page title
  document.title = t.site_title;

  // Update all [data-i18n] text elements (preserve child elements like .req-star)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      const star = el.querySelector('.req-star');
      el.textContent = t[key];
      if (star) el.appendChild(star);
    }
  });

  // Update all [data-i18n-ph] placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
  });

  // Update active lang button
  langBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  localStorage.setItem('lang', lang);
}

langBtns.forEach(btn => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

// Apply saved language on page load
applyLanguage(currentLang);

/* ── Navbar scroll effect ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

/* ── Mobile hamburger ── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close nav when a link is clicked (but not the dropdown toggle on mobile)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', (e) => {
    if (link.classList.contains('dropdown-toggle') && window.innerWidth <= 768) {
      e.preventDefault();
      link.closest('.nav-dropdown').classList.toggle('open');
      return;
    }
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    navLinks.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
  });
});

// Toggle dropdown via arrow icon on mobile
navLinks.querySelectorAll('.dropdown-arrow').forEach(arrow => {
  arrow.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      e.stopPropagation();
      arrow.closest('.nav-dropdown').classList.toggle('open');
    }
  });
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav-dropdown')) {
    navLinks.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
  }
});

/* ── Scroll reveal ── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger siblings in the same parent
      const siblings = Array.from(entry.target.parentNode.querySelectorAll('.reveal'));
      const idx = siblings.indexOf(entry.target);
      setTimeout(() => {
        entry.target.classList.add('visible');
        animateSkillBars(entry.target);
      }, idx * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── Skill bars ── */
function animateSkillBars(container) {
  const fills = container.querySelectorAll
    ? container.querySelectorAll('.skill-fill')
    : [];
  fills.forEach(fill => {
    fill.style.width = fill.dataset.width || '0%';
  });
}

// Also trigger for about-content directly
const aboutContent = document.querySelector('.about-content');
if (aboutContent) {
  const aboutObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      document.querySelectorAll('.skill-fill').forEach(fill => {
        fill.style.width = fill.dataset.width || '0%';
      });
      aboutObserver.disconnect();
    }
  }, { threshold: 0.3 });
  aboutObserver.observe(aboutContent);
}

/* ── Gallery filter ── */
const filterBtns  = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    galleryItems.forEach(item => {
      const match = filter === 'all' || item.dataset.category === filter;
      item.classList.toggle('hidden', !match);
      if (match) {
        item.style.animation = 'none';
        item.offsetHeight; // reflow
        item.style.animation = 'fadeInUp .4s ease forwards';
      }
    });
  });
});

/* ── Lightbox ── */
const lightbox      = document.getElementById('lightbox');
const lightboxImg   = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const src = item.querySelector('img').src;
    const alt = item.querySelector('img').alt;
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

/* ── EmailJS config ── */
const EMAILJS_PUBLIC_KEY  = 'ssWqHd1wI8EWGQ630';
const EMAILJS_SERVICE_ID  = 'service_e3juqoo';
const EMAILJS_TEMPLATE_ID = 'template_vwdvymb';
emailjs.init(EMAILJS_PUBLIC_KEY);

/* ── Contact form ── */
const form     = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Honeypot: bots fill this hidden field; block silently
    if (form.website && form.website.value !== '') return;

    // Rate limit: max 1 submission per 3 minutes per browser
    const _lfs = localStorage.getItem('_lfs');
    if (_lfs && Date.now() - parseInt(_lfs, 10) < 180000) {
      showNote(translations[currentLang].msg_ratelimit, 'error');
      return;
    }

    const name    = form.name.value.trim();
    const mobile  = form.mobile.value.trim();
    const message = form.message.value.trim();

    if (!name || !mobile || !message) {
      showNote(translations[currentLang].msg_required, 'error');
      return;
    }
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      showNote(translations[currentLang].msg_invalid_mobile, 'error');
      return;
    }

    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.querySelector('[data-i18n="form_submit"]').textContent = translations[currentLang].msg_sending;

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      from_name: name,
      mobile_number: mobile,
      message: message,
      to_email: 'aruneshwarsharma@gmail.com'
    })
    .then(() => {
      showNote(translations[currentLang].msg_sent, 'success');
      form.reset();
      localStorage.setItem('_lfs', Date.now().toString());
    })
    .catch((err) => {
      console.error('EmailJS error:', err);
      showNote(translations[currentLang].msg_error, 'error');
    })
    .finally(() => {
      btn.disabled = false;
      btn.querySelector('[data-i18n="form_submit"]').textContent = translations[currentLang].form_submit;
    });
  });
}

function showNote(msg, type) {
  formNote.textContent = msg;
  formNote.style.color = type === 'error' ? '#f87171' : '#a78bfa';
  setTimeout(() => { formNote.textContent = ''; }, 5000);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function isValidMobile(mobile) {
  return /^[6-9]\d{9}$/.test(mobile);
}

/* ── Active nav link highlight on scroll ── */
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 100;
  sections.forEach(sec => {
    const top    = sec.offsetTop;
    const height = sec.offsetHeight;
    const id     = sec.getAttribute('id');
    const link   = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) {
      if (scrollY >= top && scrollY < top + height) {
        document.querySelectorAll('.nav-links a').forEach(a => a.style.color = '');
        link.style.color = 'var(--accent-1)';
      }
    }
  });
}, { passive: true });

/* ── Smooth scroll for all anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ── Service cards -> services page ── */
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('click', () => { window.location.href = 'services.html'; });
});

