export type LegalMedia = {
  src: string;
  alt: string;
};

export type LegalSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  media?: LegalMedia[];
};

export type LegalDocument = {
  title: string;
  lastUpdated: string;
  intro: string[];
  sections: LegalSection[];
  contactEmail: string;
};

const privacyProcessingTable = {
  src: "/assets/legal/privacy-processing.png",
  alt: "Boardible privacy processing purposes and legal bases table",
};

const privacySharingTable = {
  src: "/assets/legal/privacy-sharing.png",
  alt: "Boardible privacy data sharing table",
};

function createPrivacyDocument(options: {
  title: string;
  lastUpdated: string;
  appName: string;
  appDescription: string;
  termsAppleUrl: string;
  termsGoogleUrl: string;
  contactOwnerLine: string;
}) {
  const { title, lastUpdated, appName, appDescription, termsAppleUrl, termsGoogleUrl, contactOwnerLine } = options;

  return {
    title,
    lastUpdated,
    intro: [
      `Hello, User! Thank you for using ${appName}!`,
      `Our Privacy Policy describes to the Users of ${appName}'s services, mainly through their interaction with our application, but also in the case of interaction through other channels (marketing, events, etc.), how we treat their personal data. This processing may include collecting, using, storing, sharing, and disposing ${appName === "Isso não é um Jogo" ? "of" : ""} this personal data.`.replace("  ", " "),
      `Some definitions used in this document are referenced in ${appName}'s Terms and Conditions (Apple Store: ${termsAppleUrl}. Google Play: ${termsGoogleUrl}). As explained in our Terms, ${appDescription}`,
      "To achieve this, we need to be transparent with you about your personal data that will be processed in our app. In addition, we keep our privacy policy up to date and let you know whenever we make any relevant changes to our data processing practices.",
      "But beyond this objective, this document should also serve as a reference that you can follow if you want to find out about your rights.",
    ],
    sections: [
      {
        title: '1. What is "personal data"?',
        paragraphs: [
          "Personal data is any data that individually identifies you or makes you identifiable. Your TAX ID or your name, for example, identify you almost immediately. But there are those pieces of data which, although they cannot identify you as easily as your TAX ID, in combination with other data or through the use of software, lists and systems, can make you identifiable.",
          "Anonymized data, on the other hand, is personal data that, after undergoing certain processes involving reasonable efforts, costs, and technology, loses the possibility of being associated, directly or indirectly, with an individual.",
          "After this brief explanation, below we detail the data we collect, depending on your interaction with the platform, and which you provide to us when you register with our app, interact with our products and services and with the functionalities of our app:",
        ],
        bullets: [
          "Access Data: This is the personal data collected automatically when someone downloads, accesses and/or browses our app. This is technical data, related to the device through which you are accessing our platform/app. This data includes: IP, operating system of the accessing device, date and time of access, location of access (information about the location may be more or less precise depending on the permissions you grant to our app through your device settings), and model, ID, and manufacturer of your mobile device, tablet or television.",
          `${appName === "Isso não é um Jogo" ? "Registration Data: As a paying user, this is the personal data you provide us with to set up your registration in our application. This data includes your username and email address, among other data that you can actively provide when interacting with the platform. As guest users, you can create an account or log in with your account linked to the app store (Apple Store or Google Play), if you prefer." : "Registration Data: As a paying user, this is the personal data you provide us with to set up your registration in our application. This data includes your username and e-mail address, among other data that you can actively provide when interacting with the platform. As guest users, you can create an account or log in with your account linked to the app store (Apple Store or Google Play), if you prefer."}`,
          "Usage Data: This is data about your use of our application. It concerns, for example, how you, as a user, use our app and the games available, such as how long you play, how many people are playing with you, how long you stay, how many games you play, interactions with features, among other quantitative data so that we can better understand your behavior within our app and optimize your user experience. In the context of Usage Data, our primary interest does not lie in direct identification of individuals, but only in aggregating data and compiling statistics that can help us to constantly improve our services.",
        ],
      },
      {
        title: "2. Got it! But how does the processing of my data work?",
        paragraphs: [
          `To make it easier for ${appName} to explain how we process your data, we have compiled the explanatory tables below, which show which data is processed, as well as the reason for processing this data and the legal basis, which takes into account the provisions of the applicable data protection legislation. But before we go any further, it is necessary to briefly explain who the data processing agents are under the main laws.`,
          "Basically, there are two processing agents: the controller and the operator. The controller is the one who makes the decisions regarding the processing of your data. The operator is the one who processes your data on behalf of the controller, in accordance with the controller's instructions. Because of this, the controller has more obligations to fulfill than the operator, but this does not mean that the operator has few or no obligations towards the user or data subject. In fact, the opposite is true!",
          "For certain activities involving the processing of your data, we are considered to be controllers, and for other activities, we are considered to be operators. We may also be both controllers and operators for certain activities.",
          "Please see below, in the case of the data we process as controllers or co-controllers, what are the purposes and legal bases corresponding to each processing. We remind you that the details of the \"Types of Data Processed\" are in item 2 above and that, when the applicable legal basis is \"Performance of Contract\", the \"contract\" is our Terms of Services, to which you must expressly accept when using our application.",
        ],
        media: [privacyProcessingTable],
      },
      {
        title: "3. Is my data safe?",
        paragraphs: [
          `All security systems are susceptible to errors and unlawful intervention by third parties, and you should be aware of this. However, security is one of our priorities${appName === "Isso não é um Jogo" ? ", and" : " and"} we adopt levels of protection in line with the best market practices, undertaking technical, physical${appName === "Isso não é um Jogo" ? ", and" : " and"} administrative information security measures to keep your personal data safe and private. In addition, we constantly review our security procedures, analyzing new technologies and methods that emerge on the market, updating our practices when ${appName === "Isso não é um Jogo" ? "it is" : "its"} possible, necessary and appropriate.`.replace("  ", " "),
          "As you will see below, one of the operators with whom we share your data is our cloud storage provider (Google), with whom we contract for various services, including database services. This company adopts information security practices that are in line with the highest market standards, such as encryption of data stored and in transit, as well as communications between servers.",
          "But you know very well that the security of our systems does not automatically correspond to the security of our work environment. That's why we also have internal security standards and processes that reduce the risk of your personal data being leaked and/or breached, including among our employees and collaborators.",
          `To begin with, ${appName} aims to ensure that any access to your personal data by employees and collaborators is confidential. In addition, one of the principles we respect is that only employees and collaborators who need to access your personal data in order to provide ${appName}'s services better will be granted such access.`,
          "We also strive to promote awareness among our employees and collaborators regarding the importance of protecting their personal data and our data. This awareness is reflected in our work environment, so we try our best to prevent the use of our systems outside this environment.",
        ],
      },
      {
        title: "4. Right. And do you share this data with third parties?",
        paragraphs: [
          `${appName === "Isso não é um Jogo" ? "Yes, we share your data with our employees and collaborators (see above) and with third-party service providers (inside and outside Brazil), but always in accordance with the relevant legislation. When personal data is transferred outside Brazil, this is done to the United States of America, where the servers and databases of the operators and sub-operators with whom we share your data are located." : "Yes, we share your data with our employees and collaborators (see above) and with third-party service providers (inside and outside Brazil), but always in accordance of the relevant legislation. When personal data is transferred outside Brazil, this is done to the United States of North America, where the servers and databases of the operators and sub-operators with whom we share your data are located."}`,
          "For clarity on how we share your data, refer to the table below to see who we share your data with, as well as the reason for each sharing:",
        ],
        media: [privacySharingTable],
      },
      {
        title: "5. Do you collect and use cookies?",
        paragraphs: [
          "We do not collect or use cookies.",
          `Cookies are small files added to your device (computer, cell phone, etc.) to make it easier for you to fill in certain information and access services, usually on websites. As ${appName} offers its services mainly via an app, and we have no need to use it, we do not need to collect cookies.`,
        ],
      },
      {
        title: "6. Got it! But what about data retention?",
        paragraphs: [
          "We retain your personal data for the period necessary to fulfill the purposes set out in this Privacy Policy, or for a longer period if required or permitted by law. After this period, the data will be deleted, anonymized or, where this is not possible, stored and isolated in such a way that it can no longer be used to identify its owner.",
          `One of your rights as a data subject, as you will see below, is to request the deletion, blocking${appName === "Isso não é um Jogo" ? "," : ""} or anonymization of certain personal data that may be stored in our systems. Our disposal policy is secure${appName === "Isso não é um Jogo" ? ", and" : " and"} when proceeding with the disposal of your personal data, ${appName} takes all necessary care to ensure that the data is permanently deleted or anonymized, in accordance with the relevant data protection legislation.`,
          `However, it is important to note that ${appName} has the right and duty to keep certain personal data stored to comply with legal and regulatory obligations, or in the event of litigation. For example, when there is a risk that ${appName} may be compelled by the competent authorities to share this data.`,
        ],
      },
      {
        title: "7. Speaking of which, what are my rights regarding my personal data?",
        paragraphs: [
          "You, as the data subject of the personal data we process, may have rights guaranteed by law, depending on your location and the applicable data protection legislation. For example, if you are located in Brazil, these rights are provided for in the LGPD, and if you are located in a European Union country, these rights are provided for in the GDPR. These rights mainly revolve around easy access to information regarding the processing of your data.",
          `${appName === "Isso não é um Jogo" ? `This information must be made available to you by ${appName}, upon your request, in a clear, conspicuous, easy-to-access, and free-of-charge manner.` : `This information must be made available to you by ${appName}, upon your request, in a clear, conspicuous, easy-to-access and free-of-charge manner.`} For example, you can ask us for information on the following topics:`,
          `In addition, you can choose to revoke the processing of some data processed by means of consent (if this is the applicable legal basis), as well as choose to delete this data, except for the legal hypotheses of conservation by ${appName === "Monstic-Tac-Toe" ? "Boardible" : appName}.`,
        ],
        bullets: [
          "(a) the specific purpose for which we process your personal data (information already contained in this Privacy Policy);",
          "(b) the form and duration of the processing of your personal data;",
          "(c) our identification and other information necessary for you to contact us (information already present in this Privacy Policy);",
          "(d) information on the shared use of your personal data with third parties, in the event that these third parties jointly determine with us the purpose of the processing of your data;",
          "(e) confirmation of the fact that we process your personal data and which of them are being processed;",
          `(f) access to your personal data that is being processed by us (${appName} is required by law to store your personal data in a format that facilitates your access);`,
          "(g) correction of any incomplete, inaccurate, or outdated personal data in the context of our processing; and",
          `${appName === "Isso não é um Jogo" ? "(h) anonymization, blocking, or deletion of personal data that is unnecessary, excessive, or processed in breach of the provisions of this Privacy Policy or the relevant personal data protection legislation." : "(h) anonymization, blocking or deletion of personal data that is unnecessary, excessive, or processed in breach of the provisions of this Privacy Policy or the relevant personal data protection legislation."}`,
        ],
      },
      {
        title: "8. Additional information",
        paragraphs: [
          `${appName} is concerned with the privacy and protection of your personal data from the creation of our products and services to their implementation. For this reason, in this chapter${appName === "Isso não é um Jogo" ? "," : ""} we have separated out some other information that may be of interest, ${appName === "Isso não é um Jogo" ? "divided" : "separated"} into a few general topics:`,
        ],
        bullets: [
          `${appName === "Isso não é um Jogo" ? "- " : ""}Whenever we change this Privacy Policy, due to changes in the purpose of processing your personal data, the form and duration of this processing and/or establish any new shared use of this data with third parties, you will be informed as soon as possible; and`.replace("- Whenever", "Whenever"),
          `${appName === "Isso não é um Jogo" ? "- " : ""}You may exercise the so-called right to object to certain processing of personal data carried out by us, in particular when the processing is not based on obtaining your consent; as ${appName} aims to fully respect the principle of necessity (we only process your personal data when this is strictly necessary to enable our services and functionalities), we believe that this will not be necessary, but it is your right${appName === "Isso não é um Jogo" ? "," : ""} and we have seen fit to inform you in this Privacy Policy.`.replace("- You", "You"),
        ],
      },
      {
        title: "9. Questions and contact",
        paragraphs: [contactOwnerLine],
      },
    ],
    contactEmail: "talktous@boardible.com",
  } satisfies LegalDocument;
}

function createStoreTermsDocument(options: {
  title: string;
  lastUpdated: string;
  marketplaceName: "Apple" | "Google";
  downloadLabel: string;
  brandedProducts: string;
  deviceDescription: string;
  marketplaceTermsName: string;
  contactEmail: string;
  contactParagraphs: string[];
}) {
  const {
    title,
    lastUpdated,
    marketplaceName,
    downloadLabel,
    brandedProducts,
    deviceDescription,
    marketplaceTermsName,
    contactEmail,
    contactParagraphs,
  } = options;

  return {
    title,
    lastUpdated,
    intro: [
      "END USER LICENSE AGREEMENT",
      "Boardible LTDA is licensed to You (End-User) by Boardible LTDA, located at Rua Guimaraes Passos 182, Sao Paulo, SP 04107030, Brazil (hereinafter: Licensor), for use only under the terms of this License Agreement.",
      `By downloading the Application from the ${downloadLabel}, and any update thereto (as permitted by this License Agreement), You indicate that You agree to be bound by all of the terms and conditions of this License Agreement, and that You accept this License Agreement.`,
      `The parties of this License Agreement acknowledge that ${marketplaceName} is not a Party to this License Agreement and is not bound by any provisions or obligations with regard to the Application, such as warranty, liability, maintenance and support thereof. Boardible LTDA, not ${marketplaceName}, is solely responsible for the licensed Application and the content thereof.`,
      `This License Agreement may not provide for usage rules for the Application that are in conflict with the latest ${marketplaceTermsName}. Boardible LTDA acknowledges that it had the opportunity to review said terms and this License Agreement is not conflicting with them. All rights not expressly granted to You are reserved.`,
    ],
    sections: [
      {
        title: "1. The Application",
        paragraphs: [
          `Boardible LTDA (hereinafter: Application) is a piece of software created to allow users to play mobile board and card games in groups and customized for ${deviceDescription}. It is used to provide quality time and fun to its players.`,
          "The Application is not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use this Application. You may not use the Application in a way that would violate the Gramm-Leach-Bliley Act (GLBA).",
        ],
      },
      {
        title: "2. Scope of License",
        paragraphs: [
          `2.1 You are given a non-transferable, non-exclusive, non-sublicensable license to install and use the Licensed Application on any ${brandedProducts} that You (End-User) own or control and as permitted by the Usage Rules set forth in this section and the ${marketplaceTermsName}, with the exception that such licensed Application may be accessed and used by other accounts associated with You (End-User, The Purchaser) via Family Sharing or volume purchasing.`,
          "2.2 This license will also govern any updates of the Application provided by Licensor that replace, repair, and/or supplement the first Application, unless a separate license is provided for such update in which case the terms of that new license will govern.",
          `2.3 You may not share or make the Application available to third parties (unless to the degree allowed by the ${marketplaceName} Terms and Conditions, and with Boardible LTDA's prior written consent), sell, rent, lend, lease or otherwise redistribute the Application.`,
          "2.4 You may not reverse engineer, translate, disassemble, integrate, decompile, remove, modify, combine, create derivative works or updates of, adapt, or attempt to derive the source code of the Application, or any part thereof (except with Boardible LTDA's prior written consent).",
          `2.5 You may not copy (excluding when expressly authorized by this license and the Usage Rules) or alter the Application or portions thereof. You may create and store copies only on devices that You own or control for backup keeping under the terms of this license, the ${marketplaceTermsName}, and any other terms and conditions that apply to the device or software used. You may not remove any intellectual property notices. You acknowledge that no unauthorized third parties may gain access to these copies at any time.`,
          "2.6 Violations of the obligations mentioned above, as well as the attempt of such infringement, may be subject to prosecution and damages.",
          "2.7 Licensor reserves the right to modify the terms and conditions of licensing.",
          "2.8 Nothing in this license should be interpreted to restrict third-party terms. When using the Application, You must ensure that You comply with applicable third-party terms and conditions.",
        ],
      },
      {
        title: "3. Technical Requirements",
        paragraphs: [
          "3.1 Licensor attempts to keep the Application updated so that it complies with modified or new versions of the firmware and new hardware. You are not granted rights to claim such an update.",
          "3.2 You acknowledge that it is Your responsibility to confirm and determine that the app end-user device on which You intend to use the Application satisfies the technical specifications required by the Application.",
          "3.3 Licensor reserves the right to modify the technical specifications as it sees appropriate at any time.",
        ],
      },
      {
        title: "4. Maintenance and Support",
        paragraphs: [
          "4.1 The Licensor is solely responsible for providing any maintenance and support services for this licensed Application. You can reach the Licensor at the email address listed in the app overview for this licensed Application.",
          `4.2 Boardible LTDA and the End-User acknowledge that ${marketplaceName} has no obligation whatsoever to furnish any maintenance and support services with respect to the licensed Application.`,
        ],
      },
      {
        title: "5. User Generated Contributions",
        paragraphs: [
          "The Application does not offer users the ability to submit or post content. We may, however, provide the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or in the Application, including text, writings, video, audio, photographs, graphics, comments, suggestions, personal information, or other material (collectively, Contributions). Contributions may be viewable by other users of the Application and through third-party websites or applications. As such, any Contributions you transmit may be treated in accordance with the Application Privacy Policy. When you create or make available any Contributions, you thereby represent and warrant that:",
          "Any use of the Application in violation of the foregoing violates these Terms of Use and may result in, among other things, termination or suspension of your rights to use the Application.",
        ],
        bullets: [
          "The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.",
          "You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Application, and other users of the Application to use your Contributions in any manner contemplated by the Application and these Terms of Use.",
          "You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Application and these Terms of Use.",
          "Your Contributions are not false, inaccurate, or misleading.",
          "Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.",
          "Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).",
          "Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.",
          "Your Contributions are not used to harass or threaten any other person and do not promote violence against a specific person or class of people.",
          "Your Contributions do not violate any applicable law, regulation, or rule.",
          "Your Contributions do not violate the privacy or publicity rights of any third party.",
          "Your Contributions do not contain any material that solicits personal information from anyone under the age of 18 or exploits people under the age of 18 in a sexual or violent manner.",
          "Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.",
          "Your Contributions do not include any offensive comments connected to race, national origin, gender, sexual preference, or physical handicap.",
          "Your Contributions do not otherwise violate, or link to material that violates, any provision of these Terms of Use or any applicable law or regulation.",
        ],
      },
      {
        title: "6. Contribution License",
        paragraphs: [
          "You agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices, including settings.",
          "By submitting suggestions or other feedback regarding the Application, you agree that we can use and share such feedback for any purpose without compensation to you.",
          "We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area in the Application. You are solely responsible for your Contributions to the Application and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.",
        ],
      },
      {
        title: "7. Liability",
        paragraphs: [
          "7.1 Licensor's responsibility in the case of violation of obligations and tort shall be limited to intent and gross negligence. Only in the case of a breach of essential contractual duties (cardinal obligations), Licensor shall also be liable in case of slight negligence. In any case, liability shall be limited to the foreseeable, contractually typical damages. The limitation mentioned above does not apply to injuries to life, limb, or health.",
          "7.2 Licensor takes no accountability or responsibility for any damages caused due to a breach of duties according to Section 2 of this Agreement. To avoid data loss, You are required to make use of backup functions of the Application to the extent allowed by applicable third-party terms and conditions of use. You are aware that in case of alterations or manipulations of the Application, You will not have access to the licensed Application.",
        ],
      },
      {
        title: "8. Warranty",
        paragraphs: [
          "8.1 Licensor warrants that the Application is free of spyware, trojan horses, viruses, or any other malware at the time of Your download. Licensor warrants that the Application works as described in the user documentation.",
          "8.2 No warranty is provided for the Application that is not executable on the device, that has been modified without authorization, handled inappropriately or culpably, combined or installed with inappropriate hardware or software, used with inappropriate accessories, or if there are any other reasons outside of Boardible LTDA's sphere of influence that affect the executability of the Application.",
          "8.3 You are required to inspect the Application immediately after installing it and notify Boardible LTDA about issues discovered without delay by the contact email listed below. The defect report will be taken into consideration and further investigated if it has been mailed within a period of two days after discovery.",
          "8.4 If we confirm that the Application is defective, Boardible LTDA reserves the right to remedy the situation either by means of solving the defect or substitute delivery.",
          "8.5 In the event of any failure of the Application to conform to any applicable warranty, You may notify the app marketplace operator, and Your Application purchase price will be refunded to You. To the maximum extent permitted by applicable law, the app marketplace operator will have no other warranty obligation whatsoever with respect to the App, and any other losses, claims, damages, liabilities, expenses and costs attributable to any negligence to adhere to any warranty.",
          "8.6 If the user is an entrepreneur, any claim based on faults expires after a statutory period of limitation amounting to twelve months after the Application was made available to the user. The statutory periods of limitation given by law apply for users who are consumers.",
        ],
      },
      {
        title: "9. Product Claims",
        paragraphs: [
          `Boardible LTDA and the End-User acknowledge that Boardible LTDA, and not ${marketplaceName}, is responsible for addressing any claims of the End-User or any third party relating to the licensed Application or the End-User's possession and/or use of that licensed Application, including but not limited to product liability claims, any claim that the licensed Application fails to conform to any applicable legal or regulatory requirement, and claims arising under consumer protection, privacy, or similar legislation.`,
        ],
      },
      {
        title: "10. Legal Compliance",
        paragraphs: [
          "You represent and warrant that You are not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a terrorist supporting country, and that You are not listed on any U.S. Government list of prohibited or restricted parties.",
        ],
      },
      {
        title: "11. Contact Information",
        paragraphs: contactParagraphs,
      },
      {
        title: "12. Termination",
        paragraphs: [
          "The license is valid until terminated by Boardible LTDA or by You. Your rights under this license will terminate automatically and without notice from Boardible LTDA if You fail to adhere to any term of this license. Upon license termination, You shall stop all use of the Application, and destroy all copies, full or partial, of the Application.",
        ],
      },
      {
        title: "13. Third-Party Terms of Agreements and Beneficiary",
        paragraphs: [
          "Boardible LTDA represents and warrants that Boardible LTDA will comply with applicable third-party terms of agreement when using the licensed Application.",
          `In accordance with the marketplace minimum EULA requirements, ${marketplaceName} and ${marketplaceName}'s subsidiaries shall be third-party beneficiaries of this End User License Agreement and, upon Your acceptance of the terms and conditions of this license agreement, ${marketplaceName} will have the right to enforce this End User License Agreement against You as a third-party beneficiary thereof.`,
        ],
      },
      {
        title: "14. Intellectual Property Rights",
        paragraphs: [
          `Boardible LTDA and the End-User acknowledge that, in the event of any third-party claim that the licensed Application or the End-User's possession and use of that licensed Application infringes on the third party's intellectual property rights, Boardible LTDA, and not ${marketplaceName}, will be solely responsible for the investigation, defense, settlement and discharge of any such intellectual property infringement claims.`,
        ],
      },
      {
        title: "15. Applicable Law",
        paragraphs: ["This license agreement is governed by the laws of Brazil, excluding its conflicts of law rules."],
      },
      {
        title: "16. Miscellaneous",
        paragraphs: [
          "16.1 If any of the terms of this agreement should be or become invalid, the validity of the remaining provisions shall not be affected. Invalid terms will be replaced by valid ones formulated in a way that will achieve the primary purpose.",
          "16.2 Collateral agreements, changes and amendments are only valid if laid down in writing. The preceding clause can only be waived in writing.",
          "These terms of use were created using Termly's Terms and Conditions Generator.",
        ],
      },
    ],
    contactEmail,
  } satisfies LegalDocument;
}

export const legalDocuments: Record<"privacy" | "privacyIneuj" | "privacyTictac" | "terms" | "termsApple" | "termsGoogle", LegalDocument> = {
  privacy: createPrivacyDocument({
    title: "Boardible Privacy Policy",
    lastUpdated: "March 25, 2024",
    appName: "Boardible",
    appDescription:
      "Boardible is a software designed to allow users to play board and card games in groups in a personalized way on mobile devices, while also being able to connect to Smart TVs, providing quality time and fun for its players.",
    termsAppleUrl: "https://www.boardible.com/terms-of-services-apple",
    termsGoogleUrl: "https://www.boardible.com/terms-of-services-google",
    contactOwnerLine:
      "BOARDIBLE is owned by BOARDIBLE LTDA., a limited liability company with head offices in Brazil, registered with the Brazilian TAX ID under nº. 44.544.388/0001-67, with address at Rua Guimarães Passos 182, apartment 21, neighborhood Vila Mariana, Zip Code 04107-030, São Paulo - SP, Brazil. If you have any questions about this Privacy Policy, please contact us directly at talktous@boardible.com.",
  }),
  privacyIneuj: createPrivacyDocument({
    title: "Isso não é um Jogo Privacy Policy",
    lastUpdated: "February 25, 2024",
    appName: "Isso não é um Jogo",
    appDescription:
      "Isso não é um Jogo is a software designed to allow users to play board and card games in groups in a personalized way on mobile devices, while also being able to connect to Smart TVs, providing quality time and fun for its players.",
    termsAppleUrl: "https://www.boardible.com/terms-of-services-apple",
    termsGoogleUrl: "https://www.boardible.com/terms-of-services-google",
    contactOwnerLine:
      "The app ISSO NÃO É UM JOGO is owned by BOARDIBLE LTDA., a limited liability company with head offices in Brazil, registered with the Brazilian TAX ID under nº. 44.544.388/0001-67, with address at Rua Guimarães Passos 182, apartment 21, neighborhood Vila Mariana, Zip Code 04107-030, São Paulo - SP, Brazil. If you have any questions about this Privacy Policy, please contact us directly at talktous@boardible.com.",
  }),
  privacyTictac: createPrivacyDocument({
    title: "Monstic-Tac-Toe Privacy Policy",
    lastUpdated: "March 19, 2025",
    appName: "Monstic-Tac-Toe",
    appDescription:
      "Monstic-Tac-Toe is a software designed to allow users to play the classic tic-tac-toe game with a big twist on different monster pieces that can be combined to create the ultimate set, providing quality time and fun for its players.",
    termsAppleUrl: "https://www.boardible.com/terms-of-services-apple",
    termsGoogleUrl: "https://www.boardible.com/terms-of-services-google",
    contactOwnerLine:
      "MONSTIC-TAC-TOE is owned by BOARDIBLE LTDA., a limited liability company with head offices in Brazil, registered with the Brazilian TAX ID under nº. 44.544.388/0001-67, with address at Rua Guimarães Passos 182, apartment 21, neighborhood Vila Mariana, Zip Code 04107-030, São Paulo - SP, Brazil. If you have any questions about this Privacy Policy, please contact us directly at talktous@boardible.com.",
  }),
  terms: {
    title: "Boardible Terms and Conditions",
    lastUpdated: "March 25, 2024",
    intro: [
      'These Terms and Conditions and End User License Agreement ("Terms") establish the relationship between the end user ("User") and Boardible, in the context of the use of the software owned by Boardible LTDA. ("Application"), available for download on a digital distribution platform (“App Marketplace”). Throughout these Terms, Boardible and the User may be jointly referred to as the "Parties" and individually as the "Party".',
      'The Application is licensed to you by Boardible LTDA., a limited liability company with head offices in Brazil, registered with the Brazilian TAX ID under nº. 44.544.388/0001-67, with address at Rua Guimarães Passos 182, apartment 21, neighborhood Vila Mariana, Zip Code 04107-030, São Paulo - SP, Brazil (hereinafter referred to as "Licensor" or "Boardible"), for your exclusive use under these Terms.',
      'The Parties to these Terms acknowledge that the App Marketplace is not a Party to this Terms and is not subject to any provisions or obligations related to the Application, such as warranties, liabilities, maintenance and support thereof. Boardible is solely responsible for the licensed Application and its content.',
      'These Terms and Conditions may not provide rules for the use of the Application that conflict with the latest App Marketplace’s terms of service. All rights not expressly granted to you through these Terms belong to the Licensor. BY DOWNLOADING, ACCESSING, REGISTERING AND/OR USING THE BOARDIBLE APPLICATION, THE USER DECLARES AND WARRANTS THAT IT HAS CAREFULLY READ AND FULLY AGREES TO THESE TERMS.',
    ],
    sections: [
      {
        title: "1. The Application",
        paragraphs: [
          "1.1 Boardible is software designed to allow users to play board and card games that have been adapted and customized for mobile devices, individually or in groups, providing quality time and fun for its players. Users can also connect the Application to a Smart TV and use it as a board and paying Users can invite third parties (guest users) to play.",
        ],
      },
      {
        title: "2. Registration and Access",
        paragraphs: [
          "2.1 Before accessing the Application for the first time, the User must register by filling in a specific form. This registration may vary depending on the type of User (paying or guest). The registration fields must be filled in with complete, recent, valid and correct information.",
          "2.1.1 The User is aware that all payments due for use of the Application are made and processed by the App Marketplace, as are any returns and refunds. No charges are made within the Application.",
          "2.2 The User must keep all the information provided to the Application up to date, as well as guarantee the confidentiality of the access password, and may not share it with third parties not expressly authorized by Boardible, which will not be held liable for any activities carried out by Users in the Application, whether or not they are authorized to access it. Users agree to change their password immediately if they become aware that someone has accessed their registration in an unauthorized manner.",
          "2.3 The User may not, in the context of the Application, record registration data containing: (a) offensive, abusive, discriminatory, defamatory or illegal material in general; and (b) illegal information or information intended to promote or commit an illegal act of any kind.",
          "2.4 The conditions for User access to the Application may be altered at Boardible's sole discretion in order to adapt or improve its functionality. Boardible may also adopt the appropriate legal measures and/or restrict certain accesses which may, in Boardible's reasonable discretion, cause damage to Boardible and Users, as well as obstruct the normal use of the Application.",
        ],
      },
      {
        title: "3. Intellectual Property and Licensing Terms",
        paragraphs: [
          "3.1 With the exception of elements whose intellectual property clearly belongs, or is expressly indicated in the Application, to third parties (for example, the games of our partners), the User declares and guarantees that they acknowledge that the Application, its source code and all its elements, including the Boardible brand, are the property of Boardible.",
          "3.2 Consequently, no content owned by Boardible or third parties may be used, transferred, sublicensed, exploited or altered without the prior consent of Boardible or without express provision in these Terms.",
          "3.3 The User may not, under any circumstances: (i) appropriate the elements owned by Boardible and/or our partners to use them outside the Application, for any purpose, by using any means or techniques, such as reverse engineering, cyber-attacks etc. (ii) reproduce and/or copy, partially or totally, permanently or temporarily, the Application and/or the content made available therein; (iii) artificially alter the data or manipulate the Application by employing technical mechanisms that in any way subvert the regular use of the Application, such as the use of robots, bots, spiders, scripts or any other type of automated access that in any way serves to distort the purpose of the Application; and (iv) use or implement malicious content, such as malware, Trojans or viruses, or others that in any way interfere with the functioning of the Application.",
          "3.4 For the use of the Application by the User, Boardible grants the User a temporary, revocable, limited, non-exclusive, non-sublicensable and non-transferable license to use the Application, except for access by guest accounts via the paying User's invitation, and this license may be free or onerous depending on the type of User.",
          "3.5 The User declares and warrants that it acknowledges that the Application is offered as “Software as a Service”, accessed via an internet connection, and made available as is, without warranties of any kind, express or implied, including, without limitation, warranties of suitability for a particular purpose, or that the Application, the App Marketplace and/or the services provided by Boardible will function uninterruptedly or be free of bugs.",
          "3.6 The Application does not allow Users the possibility of sending or publishing content and contributions. In the event that the User suggests or produces improvements to the Application, including drawings, ideas, suggestions or creative materials, annotations, concepts, comments, suggestions for techniques, know-how, advertising material, video or other information, the User agrees to assign the ownership to Boardible immediately, free of charge, royalty-free, irreversibly and irrevocably for any type of use and purpose by Boardible, without exclusivity, with global validity, for the full term of the legal protection and may be sublicensed and assigned freely by Boardible. The User also declares that the contributions do not violate any laws or rights of third parties, including intellectual property rights.",
          "3.7 Violations of the aforementioned obligations, as well as attempted violations, may be subject to damages assessed by a court. Boardible reserves the right to modify the licensing terms and conditions by notifying the User.",
        ],
      },
      {
        title: "4. Technical Requirements and Support",
        paragraphs: [
          "4.1 The User must keep the Application up to date so that it complies with the latest firmware and hardware versions of the devices. The User cannot claim an update if it is not yet available.",
          "4.2 The User acknowledges that it is their responsibility to confirm and determine whether the device on which they intend to download and use the Application meets the necessary technical specifications. The User can check the technical compatibility of your device by accessing the Application’s page on the App Marketplace and clicking on \"About this game\".",
          "4.3 The Licensor reserves the right to modify the technical specifications of the Application as deemed appropriate at any time.",
          "4.4 The Licensor is solely responsible for providing any maintenance and support services for the Application. The User may contact Licensor via the email address listed under \"App Support\" on the Application’s page on the App Marketplace.",
          "4.5 Boardible and the User acknowledge that the App Marketplace is not obligated to provide any maintenance and support services related to the Application.",
        ],
      },
      {
        title: "5. Personal Data Collection and Privacy",
        paragraphs: [
          "5.1 Information regarding the collection and processing of Users' personal data by Boardible is detailed in Boardible's Privacy Policy (available at https://www.boardible.com/privacy-policy). By using the Application, the User expressly agrees to the terms of the Boardible's Privacy Policy.",
          "5.2 Boardible undertakes to fully comply with the provisions of Brazilian Law No. 13,709/2018 (\"LGPD\") and other applicable legislation regarding the processing of Users' personal data that needs to be collected to enable the functionalities of the Application.",
          "5.3 As provided in the Boardible's Privacy Policy, Boardible may collect and use technical data and related information about your device, such as application and system software, and other data, which is collected from time to time to facilitate the provision of updates, product support and other services related to the Application. Boardible may use this data as described in the Boardible's Privacy Policy.",
        ],
      },
      {
        title: "6. Responsibility",
        paragraphs: [
          "6.1 Boardible's liability in the event of breach of duty and tort, including breaches of contractual duties provided herein, shall be limited to damages ascertained in court.",
          "6.2 Users are solely responsible for its conduct and for any data, text, files, information, usernames, images, graphics, photos, profiles, audio and video clips, sounds, musical works, sound recordings, works of authorship, applications, links and other content or material that the User send, share, publish, use, provide, transmit or display on or through the Application, or even on or through the App Marketplace.",
          "6.3 THE USER EXPRESSLY ACKNOWLEDGES AND AGREES THAT THE USE OF THE APPLICATION IS AT THE USER'S OWN RISK AND THAT THE ENTIRE RISK AS TO ITS SATISFACTORY QUALITY AND PERFORMANCE LIES WITH THE USER. THE APPLICATION IS PROVIDED \"AS IS\". BOARDIBLE DISCLAIMS ALL REPRESENTATIONS, WARRANTIES, AGREEMENTS AND CONDITIONS, EXPRESS OR IMPLIED, STATUTORY, ARISING BY TRADE PRACTICE OR USAGE AND OTHERWISE, TO THE FULLEST EXTENT PERMITTED BY LAW, INCLUDING ANY WARRANTIES OR CONDITIONS OF SUITABILITY FOR PARTICULAR PURPOSE, SATISFACTORY QUALITY, DURABILITY, TITLE, NON-INFRINGEMENT AND SALE BY DESCRIPTION.",
          "6.5 TO THE EXTENT PERMITTED BY APPLICABLE LAWS, IN NO EVENT WILL BOARDIBLE BE LIABLE FOR ANY INCIDENTAL, SPECIAL, INDIRECT OR CONSEQUENTIAL DAMAGES ARISING FROM ACTS OF GOD OR FORCE MAJEURE, PROBLEMS ATTRIBUTABLE TO CONNECTION PROVIDERS AND TELECOMMUNICATIONS COMPANIES, UNLAWFUL DIGITAL HACKING PRACTICES, PHISING AND THE LIKE, LOST PROFITS, MENTAL DISTRESS, INTERRUPTION OF USE OR ACCESS OR ANY OTHER DAMAGES OR LOSSES ARISING OUT OF OR IN CONNECTION WITH YOUR USE OR INABILITY TO USE THE APPLICATION OR ITS CONTENT, REGARDLESS OF CAUSE AND REGARDLESS OF THE THEORY OF LIABILITY. IN NO EVENT SHALL BOARDIBLE'S AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE APPLICATION OR ITS USE EXCEED THE AMOUNT PAID BY YOU FOR THE USE OF THE GAME GIVING RISE TO THE CLAIM, EVEN IF A CLAIM IS ONGOING.",
        ],
      },
      {
        title: "7. Guarantees",
        paragraphs: [
          "7.1 Subject to the technical requirements set out in Clause 4 above, the Licensor warrants that to the best of his knowledge the Application will be free of spyware, Trojans, viruses or any other malware at the time of download and that it will function as described on the Application's page on the App Marketplace.",
          "7.2 No warranty is provided for devices and users where the Application has been: modified without authorization; handled inappropriately or culpably; combined or installed with inappropriate hardware or software; used with inappropriate accessories; or if there are any other reasons outside Boardible's sphere of influence that affect the Application's ability to run.",
          "7.3 The User warrants that it will inspect the Application immediately after installing it and will notify immediately Boardible of any problems discovered via the email indicated under \"App Support\" on the Application’s page on the App Marketplace. The defect report will be considered and investigated and, if the problem is confirmed, Boardible reserves the right to remedy the situation as it sees fit on a case-by-case basis.",
        ],
      },
      {
        title: "8. General Provisions",
        paragraphs: [
          "8.1 These Terms shall become effective as from the User's registration with the Application and shall remain in force during the User's use of the Application, and may be terminated (i) by the User, at any time, without prior notice, upon deletion of their account on the Application; and/or (ii) by Boardible (a) immediately, in the event of a breach of the Terms by the User, (b) with or without cause, giving the User at least 7 (seven) days' notice.",
          "8.1.1 Upon termination of these Terms, Boardible shall bear no obligation or liability towards the User, including the responsibility to remove, relocate or change any content.",
          "8.2 The valid and effective version of these Terms is the one currently published on the Application and on our website. This version governs all past and present relations between Users, respecting acquired rights and perfect legal acts.",
          "8.2.1 Boardible may update these Terms from time to time, notifying Users of such updates. Continued use of the Application by the User after such update will correspond to free, express and consensual acceptance of the new version of these Terms.",
          "8.3 The rights and obligations provided for in these Terms may not be assigned or transferred by the User without the express consent of Boardible, which may, however, freely assign or transfer its rights and obligations without any consent.",
          "8.4 The rights provided for in these Terms shall be cumulative with other rights provided for by law. Any forbearance on the part of either Party regarding the delay, non-compliance or inaccurate compliance with any of the provisions of these Terms shall not be construed or understood as a waiver of any right of that Party, shall not prejudice the right to demand compliance with the obligation assumed and shall not constitute a ovation.",
          "8.5 These Terms do not create any corporate, labor or any other type of relationship between the Parties, and there is no relationship of subordination between the Parties.",
          "8.6 The invalidity or ineffectiveness, in whole or in part, of any of the clauses in these Terms shall not affect the others clauses, which shall always remain valid and effective until the Parties have fulfilled all their obligations herein.",
          "8.7 All clauses which, by their nature, may subsist even after the termination of these Terms, shall remain valid after such termination, such as, but not limited to, clauses protecting intellectual property, liability, etc.",
          "8.8 All notices regarding these Terms shall be sent to the Boardible email address provided in the Application and/or on the Application’s page on the App Marketplace.",
          "8.9 These Terms shall be governed by the laws of Brazil. Any disputes arising from these Terms shall be resolved exclusively under the Brazilian’ jurisdiction, with express waiver of any other, however privileged.",
        ],
      },
    ],
    contactEmail: "talktous@boardible.com",
  },
  termsApple: createStoreTermsDocument({
    title: "Terms of Services Apple",
    lastUpdated: "December 14, 2021",
    marketplaceName: "Apple",
    downloadLabel: "Apple AppStore",
    brandedProducts: "Apple-branded Products",
    deviceDescription: "Apple mobile devices",
    marketplaceTermsName: "App Store Terms of Service",
    contactEmail: "talktous@boardible.com",
    contactParagraphs: [
      "For general inquiries, complaints, questions or claims concerning the licensed Application, please contact talktous@boardible.com.",
    ],
  }),
  termsGoogle: createStoreTermsDocument({
    title: "Terms of Services Google",
    lastUpdated: "December 14, 2021",
    marketplaceName: "Google",
    downloadLabel: "Google Play",
    brandedProducts: "Google-branded Products",
    deviceDescription: "Android mobile devices",
    marketplaceTermsName: "Google Play Terms of Service",
    contactEmail: "talktous@boardible.com",
    contactParagraphs: [
      "For general inquiries, complaints, questions or claims concerning the licensed Application, please contact talktous@boardible.com.",
    ],
  }),
};
