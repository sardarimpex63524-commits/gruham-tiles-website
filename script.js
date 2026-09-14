const menuToggle = document.getElementById("menuToggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
        mainNav.classList.toggle("active");
    });
}

// =========================================
// LANGUAGE SWITCHER - FULL HOME PAGE
// =========================================

const translations = {

    en: {
        navHome: "Home",
        navAbout: "About",
        navProducts: "Products",
        navContact: "Contact",
        whatsapp: "WhatsApp",

        heroEyebrow: "GRUHAM TILES & BATHWARE",
        heroTitle: "Premium Tiles & Bathware for Inspired Spaces",
        heroText: "Discover stylish tiles and bathware solutions designed for beautiful homes, modern spaces and professional projects.",
        explore: "Explore Products",
        contact: "Contact Us",

        collection: "OUR COLLECTION",
        productsTitle: "Explore Our Products",
        productsText: "Quality surfaces and bathware solutions for residential and professional projects.",

        floor: "Floor Tiles",
        floorText: "Stylish and durable flooring solutions for every space.",
        wall: "Wall Tiles",
        wallText: "Contemporary designs to bring character to your walls.",
        decorative: "Decorative Tiles",
        decorativeText: "Statement designs for distinctive interiors.",
        bathware: "Bathware",
        bathwareText: "Elegant bathroom solutions for modern spaces.",

        aboutEyebrow: "ABOUT GRUHAM",
        aboutTitle: "Creating Spaces That Feel Beautiful",
        aboutText1: "Gruham Tiles & Bathware brings together premium tile designs and bathware solutions for modern spaces.",
        aboutText2: "Based in Morbi, Gujarat, we serve architects, builders, contractors and customers looking for quality products and inspiring designs.",
        discover: "Discover More →",

        professionalEyebrow: "FOR PROFESSIONALS",
        professionalTitle: "Solutions for Your Projects",
        professionalText: "Supporting architects, builders and contractors with tile and bathware solutions.",

        architects: "Architects",
        architectsText: "Explore designs that complement your architectural vision.",
        builders: "Builders",
        buildersText: "Reliable product solutions for residential and commercial projects.",
        contractors: "Contractors",
        contractorsText: "Practical and stylish products for project requirements.",

        visitEyebrow: "VISIT OR CONTACT US",
        ctaTitle: "Let's Create Your Perfect Space",
        ctaText: "Talk to our team about your tile and bathware requirements.",
        call: "Call Us",
        whatsappUs: "WhatsApp Us",

        footerText: "Premium tiles and bathware solutions for inspired spaces.",
        quickLinks: "Quick Links",
        contactTitle: "Contact",
        copyright: "© 2026 Gruham Tiles & Bathware. All rights reserved."
    },


    gu: {
        navHome: "હોમ",
        navAbout: "અમારા વિશે",
        navProducts: "પ્રોડક્ટ્સ",
        navContact: "સંપર્ક",
        whatsapp: "વોટ્સએપ",

        heroEyebrow: "ગ્રુહમ ટાઇલ્સ એન્ડ બાથવેર",
        heroTitle: "તમારી સુંદર જગ્યાઓ માટે પ્રીમિયમ ટાઇલ્સ અને બાથવેર",
        heroText: "સુંદર ઘરો, આધુનિક જગ્યાઓ અને પ્રોફેશનલ પ્રોજેક્ટ્સ માટે સ્ટાઇલિશ ટાઇલ્સ અને બાથવેર સોલ્યુશન્સ.",
        explore: "પ્રોડક્ટ્સ જુઓ",
        contact: "સંપર્ક કરો",

        collection: "અમારો કલેક્શન",
        productsTitle: "અમારા પ્રોડક્ટ્સ જુઓ",
        productsText: "ઘર અને પ્રોફેશનલ પ્રોજેક્ટ્સ માટે ગુણવત્તાયુક્ત ટાઇલ્સ અને બાથવેર સોલ્યુશન્સ.",

        floor: "ફ્લોર ટાઇલ્સ",
        floorText: "દરેક જગ્યા માટે સ્ટાઇલિશ અને ટકાઉ ફ્લોરિંગ સોલ્યુશન્સ.",
        wall: "વોલ ટાઇલ્સ",
        wallText: "તમારી દિવાલોને સુંદર બનાવતી આધુનિક ડિઝાઇન્સ.",
        decorative: "ડેકોરેટિવ ટાઇલ્સ",
        decorativeText: "આકર્ષક ઇન્ટિરિયર માટે સુંદર અને ખાસ ડિઝાઇન્સ.",
        bathware: "બાથવેર",
        bathwareText: "આધુનિક બાથરૂમ માટે સુંદર અને ઉપયોગી સોલ્યુશન્સ.",

        aboutEyebrow: "ગ્રુહમ વિશે",
        aboutTitle: "સુંદર જગ્યાઓનું નિર્માણ",
        aboutText1: "ગ્રુહમ ટાઇલ્સ એન્ડ બાથવેર આધુનિક જગ્યાઓ માટે પ્રીમિયમ ટાઇલ ડિઝાઇન્સ અને બાથવેર સોલ્યુશન્સ પ્રદાન કરે છે.",
        aboutText2: "મોરબી, ગુજરાત સ્થિત અમે આર્કિટેક્ટ્સ, બિલ્ડર્સ, કોન્ટ્રાક્ટર્સ અને ગુણવત્તાયુક્ત પ્રોડક્ટ્સ શોધતા ગ્રાહકોને સેવા આપીએ છીએ.",
        discover: "વધુ જાણો →",

        professionalEyebrow: "પ્રોફેશનલ્સ માટે",
        professionalTitle: "તમારા પ્રોજેક્ટ માટે સોલ્યુશન્સ",
        professionalText: "આર્કિટેક્ટ્સ, બિલ્ડર્સ અને કોન્ટ્રાક્ટર્સને ટાઇલ્સ અને બાથવેર સોલ્યુશન્સ સાથે સહાય.",

        architects: "આર્કિટેક્ટ્સ",
        architectsText: "તમારી આર્કિટેક્ચરલ વિઝનને અનુરૂપ ડિઝાઇન્સ શોધો.",
        builders: "બિલ્ડર્સ",
        buildersText: "રેસિડેન્શિયલ અને કોમર્શિયલ પ્રોજેક્ટ્સ માટે વિશ્વસનીય પ્રોડક્ટ સોલ્યુશન્સ.",
        contractors: "કોન્ટ્રાક્ટર્સ",
        contractorsText: "પ્રોજેક્ટની જરૂરિયાતો માટે પ્રેક્ટિકલ અને સ્ટાઇલિશ પ્રોડક્ટ્સ.",

        visitEyebrow: "મુલાકાત લો અથવા સંપર્ક કરો",
        ctaTitle: "ચાલો તમારી પરફેક્ટ જગ્યા બનાવીએ",
        ctaText: "તમારી ટાઇલ્સ અને બાથવેરની જરૂરિયાત વિશે અમારી ટીમ સાથે વાત કરો.",
        call: "કૉલ કરો",
        whatsappUs: "વોટ્સએપ કરો",

        footerText: "સુંદર જગ્યાઓ માટે પ્રીમિયમ ટાઇલ્સ અને બાથવેર સોલ્યુશન્સ.",
        quickLinks: "ઝડપી લિંક્સ",
        contactTitle: "સંપર્ક",
        copyright: "© 2026 ગ્રુહમ ટાઇલ્સ એન્ડ બાથવેર. સર્વાધિકાર સુરક્ષિત."
    },


    hi: {
        navHome: "होम",
        navAbout: "हमारे बारे में",
        navProducts: "प्रोडक्ट्स",
        navContact: "संपर्क",
        whatsapp: "व्हाट्सऐप",

        heroEyebrow: "ग्रुहम टाइल्स एंड बाथवेयर",
        heroTitle: "आपकी खूबसूरत जगहों के लिए प्रीमियम टाइल्स और बाथवेयर",
        heroText: "खूबसूरत घरों, आधुनिक जगहों और प्रोफेशनल प्रोजेक्ट्स के लिए स्टाइलिश टाइल्स और बाथवेयर समाधान।",
        explore: "प्रोडक्ट्स देखें",
        contact: "संपर्क करें",

        collection: "हमारा कलेक्शन",
        productsTitle: "हमारे प्रोडक्ट्स देखें",
        productsText: "घर और प्रोफेशनल प्रोजेक्ट्स के लिए गुणवत्तापूर्ण टाइल्स और बाथवेयर समाधान।",

        floor: "फ्लोर टाइल्स",
        floorText: "हर जगह के लिए स्टाइलिश और टिकाऊ फ्लोरिंग समाधान।",
        wall: "वॉल टाइल्स",
        wallText: "दीवारों को आकर्षक बनाने वाली आधुनिक डिजाइन्स।",
        decorative: "डेकोरेटिव टाइल्स",
        decorativeText: "खूबसूरत इंटीरियर के लिए आकर्षक और खास डिजाइन्स।",
        bathware: "बाथवेयर",
        bathwareText: "आधुनिक बाथरूम के लिए सुंदर और उपयोगी समाधान।",

        aboutEyebrow: "ग्रुहम के बारे में",
        aboutTitle: "खूबसूरत जगहों का निर्माण",
        aboutText1: "ग्रुहम टाइल्स एंड बाथवेयर आधुनिक जगहों के लिए प्रीमियम टाइल डिजाइन्स और बाथवेयर समाधान प्रदान करता है।",
        aboutText2: "मोर्बी, गुजरात में स्थित हम आर्किटेक्ट्स, बिल्डर्स, कॉन्ट्रैक्टर्स और गुणवत्तापूर्ण प्रोडक्ट्स की तलाश करने वाले ग्राहकों की सेवा करते हैं।",
        discover: "और जानें →",

        professionalEyebrow: "प्रोफेशनल्स के लिए",
        professionalTitle: "आपके प्रोजेक्ट के लिए समाधान",
        professionalText: "आर्किटेक्ट्स, बिल्डर्स और कॉन्ट्रैक्टर्स को टाइल्स और बाथवेयर समाधानों के साथ सहायता।",

        architects: "आर्किटेक्ट्स",
        architectsText: "आपकी आर्किटेक्चरल विज़न के अनुरूप डिजाइन्स देखें।",
        builders: "बिल्डर्स",
        buildersText: "रेसिडेंशियल और कमर्शियल प्रोजेक्ट्स के लिए भरोसेमंद प्रोडक्ट समाधान।",
        contractors: "कॉन्ट्रैक्टर्स",
        contractorsText: "प्रोजेक्ट की जरूरतों के लिए प्रैक्टिकल और स्टाइलिश प्रोडक्ट्स।",

        visitEyebrow: "मिलें या संपर्क करें",
        ctaTitle: "आइए आपकी परफेक्ट जगह बनाएं",
        ctaText: "अपनी टाइल्स और बाथवेयर जरूरतों के बारे में हमारी टीम से बात करें।",
        call: "कॉल करें",
        whatsappUs: "व्हाट्सऐप करें",

        footerText: "खूबसूरत जगहों के लिए प्रीमियम टाइल्स और बाथवेयर समाधान।",
        quickLinks: "क्विक लिंक्स",
        contactTitle: "संपर्क",
        copyright: "© 2026 ग्रुहम टाइल्स एंड बाथवेयर। सर्वाधिकार सुरक्षित।"
    }

};


function changeLanguage(lang) {

    const t = translations[lang];

    if (!t) return;


    // Header
    const navLinks = document.querySelectorAll(".main-nav a");

    if (navLinks.length >= 4) {
        navLinks[0].textContent = t.navHome;
        navLinks[1].textContent = t.navAbout;
        navLinks[2].textContent = t.navProducts;
        navLinks[3].textContent = t.navContact;
    }

    const whatsappButton = document.querySelector(".whatsapp-btn");

    if (whatsappButton) {
        whatsappButton.textContent = t.whatsapp;
    }


    // Hero
    const heroEyebrow = document.querySelector(".hero .eyebrow");
    const heroTitle = document.querySelector(".hero h1");
    const heroText = document.querySelector(".hero-text");

    if (heroEyebrow) heroEyebrow.textContent = t.heroEyebrow;
    if (heroTitle) heroTitle.textContent = t.heroTitle;
    if (heroText) heroText.textContent = t.heroText;


    const heroButtons = document.querySelectorAll(".hero-buttons .btn");

    if (heroButtons.length >= 2) {
        heroButtons[0].textContent = t.explore;
        heroButtons[1].textContent = t.contact;
    }


    // Products section
    const categoriesHeading = document.querySelector(".categories .section-heading");

    if (categoriesHeading) {

        const eyebrow = categoriesHeading.querySelector(".eyebrow");
        const title = categoriesHeading.querySelector("h2");
        const text = categoriesHeading.querySelector("p:not(.eyebrow)");

        if (eyebrow) eyebrow.textContent = t.collection;
        if (title) title.textContent = t.productsTitle;
        if (text) text.textContent = t.productsText;
    }


    const cards = document.querySelectorAll(".category-card");

    if (cards.length >= 4) {

        cards[0].querySelector("h3").textContent = t.floor;
        cards[0].querySelector("p").textContent = t.floorText;

        cards[1].querySelector("h3").textContent = t.wall;
        cards[1].querySelector("p").textContent = t.wallText;

        cards[2].querySelector("h3").textContent = t.decorative;
        cards[2].querySelector("p").textContent = t.decorativeText;

        cards[3].querySelector("h3").textContent = t.bathware;
        cards[3].querySelector("p").textContent = t.bathwareText;
    }


    // About section
const aboutEyebrow = document.querySelector(".about-content .eyebrow");
const aboutTitle = document.querySelector(".about-content h2");
const aboutParagraphs = document.querySelectorAll(".about-content p");
const aboutLink = document.querySelector(".about-content .text-link");

if (aboutEyebrow) {
    aboutEyebrow.textContent = t.aboutEyebrow;
}

if (aboutTitle) {
    aboutTitle.textContent = t.aboutTitle;
}

if (aboutParagraphs.length >= 2) {
    aboutParagraphs[0].textContent = t.aboutText1;
    aboutParagraphs[1].textContent = t.aboutText2;
}

if (aboutLink) {
    aboutLink.textContent = t.discover;
}


    // Professionals section
    const professionalSection = document.querySelector(".professionals");

    if (professionalSection) {

        const eyebrow = professionalSection.querySelector(".eyebrow");
        const title = professionalSection.querySelector("h2");
        const description = professionalSection.querySelector(".section-heading p:not(.eyebrow)");

        if (eyebrow) eyebrow.textContent = t.professionalEyebrow;
        if (title) title.textContent = t.professionalTitle;
        if (description) description.textContent = t.professionalText;

        const professionalCards = professionalSection.querySelectorAll(".professional-card");

        if (professionalCards.length >= 3) {

            professionalCards[0].querySelector("h3").textContent = t.architects;
            professionalCards[0].querySelector("p").textContent = t.architectsText;

            professionalCards[1].querySelector("h3").textContent = t.builders;
            professionalCards[1].querySelector("p").textContent = t.buildersText;

            professionalCards[2].querySelector("h3").textContent = t.contractors;
            professionalCards[2].querySelector("p").textContent = t.contractorsText;
        }
    }


    // Contact CTA
    const contactCTA = document.querySelector(".contact-cta");

    if (contactCTA) {

        const eyebrow = contactCTA.querySelector(".eyebrow");
        const title = contactCTA.querySelector("h2");
        const text = contactCTA.querySelector("p:not(.eyebrow)");

        if (eyebrow) eyebrow.textContent = t.visitEyebrow;
        if (title) title.textContent = t.ctaTitle;
        if (text) text.textContent = t.ctaText;

        const buttons = contactCTA.querySelectorAll(".btn");

        if (buttons.length >= 2) {
            buttons[0].textContent = t.call;
            buttons[1].textContent = t.whatsappUs;
        }
    }


    // Footer
    const footer = document.querySelector(".site-footer");

    if (footer) {

        const footerParagraphs = footer.querySelectorAll(".footer-grid p");

        if (footerParagraphs.length >= 1) {
            footerParagraphs[0].textContent = t.footerText;
        }

        const footerHeadings = footer.querySelectorAll(".footer-grid h4");

        if (footerHeadings.length >= 2) {
            footerHeadings[0].textContent = t.quickLinks;
            footerHeadings[1].textContent = t.contactTitle;
        }

        const footerBottom = footer.querySelector(".footer-bottom p");

        if (footerBottom) {
            footerBottom.textContent = t.copyright;
        }
    }

}


// Language buttons
document.querySelectorAll(".language").forEach(function (button) {

    button.addEventListener("click", function () {

        const lang = button.getAttribute("data-lang");

        changeLanguage(lang);

    });

});