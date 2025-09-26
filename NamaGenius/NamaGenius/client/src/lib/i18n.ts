import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        title: "NamaX",
        language: "Language"
      },
      hero: {
        title: "Universal Name Generator",
        subtitle: "Generate perfect names for people, businesses, pets, and more with advanced filtering and multilingual support.",
        cta: "Start Generating Names"
      },
      generators: {
        personal: {
          title: "Personal Names",
          subtitle: "Generate names for children and adults",
          ageGroup: "Age Group",
          gender: "Gender",
          religion: "Religion",
          zodiac: "Zodiac Sign",
          nationality: "Nationality",
          popularity: "Popularity Period",
          generate: "Generate Names"
        },
        keyword: {
          title: "Keyword & Synonym Generator",
          subtitle: "Create names based on keywords with synonyms",
          keyword: "Enter keyword",
          minLength: "Min Length",
          maxLength: "Max Length",
          generate: "Generate Names"
        },
        company: {
          title: "Company Names",
          subtitle: "Professional business name ideas",
          industry: "Industry",
          style: "Style",
          generate: "Generate Names"
        },
        pet: {
          title: "Pet Names",
          subtitle: "Cute names for your furry friends",
          petType: "Pet Type",
          personality: "Personality",
          generate: "Generate Names"
        },
        place: {
          title: "Place Names",
          subtitle: "Names for locations and venues",
          placeType: "Place Type",
          theme: "Theme",
          generate: "Generate Names"
        },
        gift: {
          title: "Gift Suggestions",
          subtitle: "Perfect gift ideas by occasion",
          occasion: "Occasion",
          recipient: "Recipient",
          generate: "Generate Ideas"
        },
        nickname: {
          title: "Nicknames",
          subtitle: "Fun and creative nicknames",
          baseName: "Base Name",
          style: "Style",
          generate: "Generate Nicknames"
        },
        leader: {
          title: "Family Leader Names",
          subtitle: "Traditional and modern family names",
          culture: "Culture",
          generation: "Generation",
          generate: "Generate Names"
        },
        random: {
          title: "Random Names",
          subtitle: "Completely random name generation",
          category: "Category",
          count: "Number of Names",
          generate: "Generate Random Names"
        }
      },
      results: {
        copy: "Copy",
        copied: "Copied!",
        noResults: "No names generated yet"
      }
    }
  },
  ar: {
    translation: {
      nav: {
        title: "ناماكس",
        language: "اللغة"
      },
      hero: {
        title: "مولد الأسماء الشامل",
        subtitle: "اولد أسماءً مثالية للأشخاص والشركات والحيوانات الأليفة والمزيد مع خيارات التصفية المتقدمة ودعم اللغات المتعددة.",
        cta: "ابدأ توليد الأسماء"
      },
      generators: {
        personal: {
          title: "الأسماء الشخصية",
          subtitle: "اولد أسماءً للأطفال والكبار",
          ageGroup: "الفئة العمرية",
          gender: "الجنس",
          religion: "الدين",
          zodiac: "برج",
          nationality: "الجنسية",
          popularity: "فترة الشعبية",
          generate: "اولد أسماء"
        },
        keyword: {
          title: "مولد الكلمات المفتاحية والمرادفات",
          subtitle: "أنشئ أسماءً بناءً على الكلمات المفتاحية مع المرادفات",
          keyword: "أدخل كلمة مفتاحية",
          minLength: "الحد الأدنى للطول",
          maxLength: "الحد الأقصى للطول",
          generate: "اولد أسماء"
        },
        company: {
          title: "أسماء الشركات",
          subtitle: "أفكار أسماء تجارية احترافية",
          industry: "الصناعة",
          style: "الأسلوب",
          generate: "اولد أسماء"
        },
        pet: {
          title: "أسماء الحيوانات الأليفة",
          subtitle: "أسماء لطيفة لأصدقائك ذوي الفراء",
          petType: "نوع الحيوان الأليف",
          personality: "الشخصية",
          generate: "اولد أسماء"
        },
        place: {
          title: "أسماء الأماكن",
          subtitle: "أسماء للمواقع والأماكن",
          placeType: "نوع المكان",
          theme: "الموضوع",
          generate: "اولد أسماء"
        },
        gift: {
          title: "اقتراحات الهدايا",
          subtitle: "أفكار هدايا مثالية حسب المناسبة",
          occasion: "المناسبة",
          recipient: "المتلقي",
          generate: "اولد أفكار"
        },
        nickname: {
          title: "الألقاب",
          subtitle: "ألقاب ممتعة وإبداعية",
          baseName: "الاسم الأساسي",
          style: "الأسلوب",
          generate: "اولد ألقاب"
        },
        leader: {
          title: "أسماء قادة العائلة",
          subtitle: "أسماء عائلية تقليدية وعصرية",
          culture: "الثقافة",
          generation: "الجيل",
          generate: "اولد أسماء"
        },
        random: {
          title: "أسماء عشوائية",
          subtitle: "توليد أسماء عشوائية تماماً",
          category: "الفئة",
          count: "عدد الأسماء",
          generate: "اولد أسماء عشوائية"
        }
      },
      results: {
        copy: "نسخ",
        copied: "تم النسخ!",
        noResults: "لم يتم توليد أسماء بعد"
      }
    }
  },
  hi: {
    translation: {
      nav: {
        title: "नामएक्स",
        language: "भाषा"
      },
      hero: {
        title: "यूनिवर्सल नेम जेनरेटर",
        subtitle: "उन्नत फ़िल्टरिंग और बहुभाषी समर्थन के साथ लोगों, व्यवसायों, पालतू जानवरों और बहुत कुछ के लिए परफेक्ट नाम जेनरेट करें।",
        cta: "नाम जेनरेट करना शुरू करें"
      },
      generators: {
        personal: {
          title: "व्यक्तिगत नाम",
          subtitle: "बच्चों और वयस्कों के लिए नाम जेनरेट करें",
          ageGroup: "आयु समूह",
          gender: "लिंग",
          religion: "धर्म",
          zodiac: "राशि",
          nationality: "राष्ट्रीयता",
          popularity: "लोकप्रियता अवधि",
          generate: "नाम जेनरेट करें"
        },
        keyword: {
          title: "कीवर्ड और समानार्थक जेनरेटर",
          subtitle: "समानार्थकों के साथ कीवर्ड के आधार पर नाम बनाएं",
          keyword: "कीवर्ड दर्ज करें",
          minLength: "न्यूनतम लंबाई",
          maxLength: "अधिकतम लंबाई",
          generate: "नाम जेनरेट करें"
        },
        company: {
          title: "कंपनी नाम",
          subtitle: "पेशेवर व्यावसायिक नाम विचार",
          industry: "उद्योग",
          style: "शैली",
          generate: "नाम जेनरेट करें"
        },
        pet: {
          title: "पालतू जानवरों के नाम",
          subtitle: "आपके प्यारे दोस्तों के लिए प्यारे नाम",
          petType: "पालतू जानवर का प्रकार",
          personality: "व्यक्तित्व",
          generate: "नाम जेनरेट करें"
        },
        place: {
          title: "स्थान नाम",
          subtitle: "स्थानों और स्थलों के लिए नाम",
          placeType: "स्थान का प्रकार",
          theme: "विषय",
          generate: "नाम जेनरेट करें"
        },
        gift: {
          title: "उपहार सुझाव",
          subtitle: "अवसर के अनुसार परफेक्ट उपहार विचार",
          occasion: "अवसर",
          recipient: "प्राप्तकर्ता",
          generate: "विचार जेनरेट करें"
        },
        nickname: {
          title: "उपनाम",
          subtitle: "मजेदार और रचनात्मक उपनाम",
          baseName: "मूल नाम",
          style: "शैली",
          generate: "उपनाम जेनरेट करें"
        },
        leader: {
          title: "पारिवारिक नेता नाम",
          subtitle: "पारंपरिक और आधुनिक पारिवारिक नाम",
          culture: "संस्कृति",
          generation: "पीढ़ी",
          generate: "नाम जेनरेट करें"
        },
        random: {
          title: "यादृच्छिक नाम",
          subtitle: "पूरी तरह से यादृच्छिक नाम जनरेशन",
          category: "श्रेणी",
          count: "नामों की संख्या",
          generate: "यादृच्छिक नाम जेनरेट करें"
        }
      },
      results: {
        copy: "कॉपी",
        copied: "कॉपी हो गया!",
        noResults: "अभी तक कोई नाम जेनरेट नहीं हुआ"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;