import type { Dictionary } from "./types";

/**
 * English content. British spelling, plain commercial register.
 */
export const en: Dictionary = {
  logotype: {
    mention: "Distribution France",
  },

  nav: {
    mainLabel: "Main navigation",
    footerLabel: "Footer navigation",
    languageLabel: "Language selection",
    languageNames: { fr: "Français", en: "English" },
    home: "Home",
    about: "About us",
    activity: "Our activity",
    faq: "Frequently asked questions",
    contact: "Contact",
    legal: "Legal notice",
    privacy: "Privacy policy",
    skipToContent: "Skip to content",
  },

  meta: {
    pages: {
      home: {
        title: "Amorance, distribution of everyday consumer goods",
        description:
          "Amorance is a French distribution company. We buy new products from brands and distributors established in the European Union and distribute them to French consumers on online marketplaces.",
      },
      about: {
        title: "About us",
        description:
          "Amorance is a French distribution company based in Essonne. Our method, our commitments and what we do not do.",
      },
      activity: {
        title: "Our activity",
        description:
          "Categories distributed, how we work with a brand, logistics and what we expect from a partner.",
      },
      faq: {
        title: "Frequently asked questions",
        description:
          "The questions brands ask us before opening a supplier account with Amorance.",
      },
      contact: {
        title: "Contact",
        description:
          "Supplier account requests, commercial enquiries and complaints. We reply within two working days.",
      },
      legal: {
        title: "Legal notice",
        description:
          "Publisher, hosting, intellectual property and liability for the Amorance website.",
      },
      privacy: {
        title: "Privacy policy",
        description:
          "Data collected, purpose, recipients, retention period and your rights.",
      },
    },
  },

  home: {
    lede:
      "Distribution of everyday consumer goods, selected and sold online in France.",
    bannerAlt: "Order preparation cartons stacked in a working area.",
    distribute: {
      title: "What we distribute",
      items: [
        {
          name: "Home",
          text: "Storage, cleaning, utensils and small everyday equipment.",
        },
        {
          name: "Stationery",
          text: "Writing, filing, organisation and office supplies.",
        },
        {
          name: "Pet supplies",
          text: "Accessories, care and comfort, excluding food.",
        },
        {
          name: "Decoration",
          text: "Objects, occasional textiles and small decorative items.",
        },
      ],
    },
    approach: {
      title: "Our approach",
      paragraphs: [
        "We buy new products from brands and distributors established in the European Union, on invoice, and we distribute them to French consumers through the main marketplaces.",
        "Our selection is deliberately narrow. We would rather distribute a small number of lines properly than list a catalogue we are not equipped to handle.",
      ],
    },
    commitments: {
      title: "Our commitments",
      items: [
        "Purchasing solely from suppliers established in the European Union.",
        "New, genuine products, supported by an invoice in the company’s name.",
        "Compliance with the pricing and distribution policies of our partners.",
        "A sales report by line, provided on request.",
      ],
    },
    brands: {
      title: "You are a brand",
      text: "We open supplier accounts with European brands wishing to develop their presence on French marketplaces within a controlled framework.",
      cta: "Request a supplier account",
    },
  },

  about: {
    title: "About us",
    intro:
      "Amorance is a French distribution company, based in Essonne, which selects everyday consumer goods and makes them available to French consumers on online marketplaces.",
    why: {
      title: "Why this company exists",
      paragraphs: [
        "Online distribution has put the resale of branded goods within anyone’s reach. It has also made commonplace a number of practices that damage brands: goods imported from outside Europe without traceability, batches of customer returns resold as new, prices undercut with no regard for the manufacturer’s commercial policy.",
        "Amorance was built on the refusal of those three practices. Not out of virtue, but because a distribution relationship that lasts rests on aligned interests. A brand whose prices collapse ends up closing its reseller accounts, and the reseller loses its supply.",
      ],
    },
    method: {
      title: "How we work",
      paragraphs: [
        "We distribute few lines, and we choose them slowly. Every product is assessed before purchase against written criteria: observed real demand, full cost structure, competition on the listing, category constraints. A product that fails one of these criteria is not bought, however appealing it may look.",
        "This discipline has a cost. It rules out most of the products we examine. In return, it spares us dormant stock, categories we are not equipped to handle, and products whose origin we could not vouch for.",
      ],
    },
    commitments: {
      title: "Our commitments",
      items: [
        {
          name: "Purchasing solely from suppliers established in the European Union.",
          text: "Our suppliers are brands or distributors registered in a member state of the European Union. We do not open an account with an intermediary whose place of establishment we cannot verify.",
        },
        {
          name: "New, genuine products, supported by an invoice in the company’s name.",
          text: "Every line is bought new, on an invoice issued in the company’s name. That invoice is kept and can be produced for the brand or for a marketplace that asks for it.",
        },
        {
          name: "Compliance with the pricing and distribution policies of our partners.",
          text: "Where a brand gives us a recommended price or channel restrictions, we apply them. If we judge that we cannot observe them, we say so before the account is opened rather than afterwards.",
        },
        {
          name: "A sales report by line, provided on request.",
          text: "We keep a line-by-line sales report available to our partners. It is sent on request, without conditions and without a volume threshold.",
        },
      ],
    },
    notDo: {
      title: "What we do not do",
      items: [
        "No importing from any country outside the European Union.",
        "No resale of customer returns, clearance lots or goods without traceability.",
        "No sale of lines for which we do not hold a supplier invoice.",
        "No distribution in categories we are not equipped to handle: food, supplements, cosmetics, health, clothing.",
      ],
    },
  },

  activity: {
    title: "Our activity",
    intro:
      "We buy new products from European brands and distributors, and we make them available to French consumers on online marketplaces.",
    bannerAlt: "Order preparation station and work surface.",
    categories: {
      title: "Categories distributed",
      note: "We do not distribute food, supplements, cosmetics, health devices, clothing or electronics under warranty. These categories call for skills and obligations we have chosen not to take on.",
    },
    process: {
      title: "How we work with a brand",
      steps: [
        {
          number: "01",
          name: "Range review",
          text: "We analyse the lines already present on French marketplaces, their price positioning, the existing competition and any unauthorised resellers. This review is shared with you.",
        },
        {
          number: "02",
          name: "Trial order",
          text: "We open the account with a low-volume order covering a few targeted lines, in order to measure actual turnover before committing further. We would rather place a small order that sells than a large one that sits.",
        },
        {
          number: "03",
          name: "Reporting and replenishment",
          text: "We provide a sales report by line on request, and we adjust orders according to the turnover observed. We also flag any anomalies we notice on your product listings.",
        },
      ],
    },
    logistics: {
      title: "Logistics",
      paragraphs: [
        "Goods are received, checked and prepared by us, then handed over to the logistics services of the marketplaces on which they are distributed. Storage, delivery to the end customer and the handling of returns are carried out within that framework.",
        "This arrangement lets us offer short delivery times without tying up warehouse space, and keeps us focused on product selection and on the relationship with brands.",
      ],
    },
    expectations: {
      title: "What we expect from a partner",
      items: [
        "An entity established in the European Union, able to issue a business invoice.",
        "Clear distribution terms, including any channel restrictions, which we undertake to observe.",
        "A trade price allowing viable distribution once platform fees are taken into account.",
        "A minimum order compatible with an initial trial order.",
      ],
    },
  },

  faq: {
    title: "Frequently asked questions",
    introBefore: "The questions brands ask us before opening an account. If yours is not here, ",
    introLink: "write to us",
    introAfter: ".",
    items: [
      {
        question: "Where do the products you distribute come from?",
        answer:
          "Solely from brands and distributors established in the European Union, on an invoice in our company’s name. We import nothing from outside the Union, and we resell neither customer returns, nor clearance lots, nor goods whose origin we cannot trace.",
      },
      {
        question: "Do you observe recommended prices?",
        answer:
          "Yes. We apply the pricing policies communicated by our partners. Our interest is aligned with yours: a range whose prices collapse loses its value for everyone, ourselves first.",
      },
      {
        question: "Which channels do you distribute through?",
        answer:
          "The main French marketplaces. If your distribution policy restricts certain channels, tell us before the account is opened. We will either comply or step aside.",
      },
      {
        question: "What volumes can you absorb?",
        answer:
          "We always begin with a low-volume trial order covering a few lines. Subsequent volumes depend on the turnover actually observed, which we report to you. We do not promise volumes we could not sell.",
      },
      {
        question: "Can you provide sales reporting?",
        answer:
          "Yes, a sales report by line, on request. We also flag any anomalies we notice on your product listings, such as an unauthorised reseller or a poorly completed listing.",
      },
      {
        question: "Who handles after-sales service?",
        answer:
          "Returns and customer service are handled within the logistics services of the marketplaces. We remain your point of contact for any question concerning your products.",
      },
      {
        question: "What happens if we wish to end the distribution?",
        answer:
          "We stop replenishment immediately, and we either sell through or withdraw the remaining stock according to your instructions. No clause on our side binds you.",
      },
      {
        question: "When was the company founded?",
        answer:
          "Amorance was founded in 2026. We have no track record to put forward, and we would rather say so plainly than maintain an ambiguity. What we can show is our method and our commitments, and an initial low-volume order that puts nothing at risk.",
      },
    ],
  },

  contact: {
    title: "Contact",
    intro:
      "For a supplier account request, a commercial enquiry or a complaint concerning one of our sales. We reply within two working days.",
    emailBlock: {
      title: "By email",
      text: "If you would rather attach a catalogue or a price list, write to us directly.",
    },
    postalBlock: {
      title: "Postal address",
    },
  },

  form: {
    legend: "Contact form",
    requiredHint: "Fields marked with an asterisk are required.",
    requiredMark: "required",
    optional: "optional",
    fields: {
      name: "Full name",
      company: "Company",
      website: "Website",
      email: "Email address",
      message: "Message",
    },
    honeypot: "Do not fill in this field",
    consentBefore: "I agree that the information provided may be used to answer my enquiry, on the terms set out in the ",
    consentLink: "privacy policy",
    consentAfter: ".",
    submit: "Send message",
    submitting: "Sending",
    success: "Your message has been sent. We reply within two working days.",
    errors: {
      name: "Enter your full name.",
      company: "Enter the name of your company.",
      email: "Enter a valid email address.",
      message: "Write your message.",
      consent: "You must accept the privacy policy before sending the form.",
      submit:
        "The message could not be sent. You can write to us directly at contact@amorance.fr.",
      summary: "The form could not be sent.",
    },
  },

  legal: {
    title: "Legal notice",
    publisher: {
      title: "Publisher",
      lines: [
        "AMORANCE, sole trader (entreprise individuelle) Neil Desmet.",
        "1 rue du Haras, 91240 Saint-Michel-sur-Orge, France.",
        "SIREN 932 229 503. Registered office SIRET 932 229 503 00044.",
        "Contact: contact@amorance.fr.",
        "Director of publication: Neil Desmet.",
        "VAT not applicable, article 293 B du Code général des impôts (article 293 B of the French General Tax Code).",
      ],
    },
    hosting: {
      title: "Hosting",
      lines: [
        "Vercel Inc.",
        "340 S Lemon Ave #4133, Walnut, CA 91789, United States.",
      ],
    },
    intellectualProperty: {
      title: "Intellectual property",
      paragraphs: [
        "The content of this website is the property of the publisher, unless stated otherwise. Reproduction is prohibited without prior written authorisation.",
        "Brands mentioned or distributed remain the property of their respective owners. Any mention of them implies no partnership other than the one expressly described on this website.",
      ],
    },
    liability: {
      title: "Liability",
      paragraphs: [
        "The publisher endeavours to ensure the accuracy of the information published on this website, without being able to guarantee that it is exhaustive or permanently up to date.",
      ],
    },
    privacyLink: {
      textBefore: "The processing of personal data is described in the ",
      linkText: "privacy policy",
      textAfter: ".",
    },
  },

  privacy: {
    title: "Privacy policy",
    controller: {
      title: "Data controller",
      lines: [
        "Amorance, sole trader (entreprise individuelle) Neil Desmet.",
        "1 rue du Haras, 91240 Saint-Michel-sur-Orge, France.",
        "SIREN 932 229 503.",
        "Contact: contact@amorance.fr.",
      ],
    },
    collected: {
      title: "Data collected",
      paragraphs: [
        "Simply browsing this website gives rise to no collection of personal data. The site uses no cookies and no audience measurement tool.",
        "The contact form collects the following information: full name, company, website on an optional basis, email address and the content of the message.",
      ],
    },
    purpose: {
      title: "Purpose and legal basis",
      paragraphs: [
        "The data provided is used to answer your enquiry and to maintain the commercial relationship that may follow. Processing rests on the consent given through the form’s tick box, and on the publisher’s legitimate interest in handling the business enquiries addressed to it.",
        "The data is neither sold, nor rented, nor used for unsolicited marketing.",
      ],
    },
    recipients: {
      title: "Recipients",
      paragraphs: [
        "Formspree Inc., established in the United States, forwards the messages sent through the form. That transfer is governed by the standard contractual clauses of the European Commission.",
        "Vercel Inc., also established in the United States, provides the hosting of the website and keeps the technical logs.",
        "No other transmission takes place.",
      ],
    },
    retention: {
      title: "Retention period",
      paragraphs: [
        "Messages that lead to nothing further are kept for twelve months. Exchanges that give rise to a commercial relationship are kept for the duration of that relationship, then for the applicable statutory limitation period.",
      ],
    },
    rights: {
      title: "Your rights",
      paragraphs: [
        "You have the right of access, rectification, erasure, restriction, objection and portability, as well as the right to withdraw your consent at any time.",
        "These rights may be exercised at contact@amorance.fr. You will receive a reply within one month.",
        "You may also lodge a complaint with the CNIL, the French data protection authority, 3 place de Fontenoy, 75007 Paris.",
      ],
    },
    fonts: {
      title: "Typefaces",
      paragraphs: [
        "The typefaces used on this website are hosted on our own servers. No request is sent to a third-party service when they are loaded.",
      ],
    },
  },

  footer: {
    contactLabel: "Contact",
    copyright: "© 2026 Amorance. All rights reserved.",
  },
};

export default en;
