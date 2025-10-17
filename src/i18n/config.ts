import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        products: "Nos gourmandises",
        contact: "Contact"
      },
      hero: {
        title: "Délice de l'Orientale",
        subtitle: "Pâtisseries & Délices Orientaux",
        description: "Découvrez nos créations gourmandes faites avec passion et savoir-faire traditionnel",
        cta: "Voir nos gourmandises"
      },
      filters: {
        all: "Tous",
        cakes: "Gâteaux & Douceurs",
        dishes: "Délices salés",
        sweet: "Sucré",
        savory: "Salé",
        search: "Rechercher un produit..."
      },
      contact: {
        title: "Contactez-nous",
        address: "Adresse",
        addressLine: "59 rue des escalopes marinée, Lille",
        phone: "Téléphone",
        whatsapp: "Contacter sur WhatsApp"
      },
      footer: {
        copyright: "© 2025 Délice de l'Orientale. Tous droits réservés.",
        social: "Suivez-nous"
      }
    }
  },
  es: {
    translation: {
      nav: {
        home: "Inicio",
        products: "Nuestras delicias",
        contact: "Contacto"
      },
      hero: {
        title: "Délice de l'Orientale",
        subtitle: "Repostería & Delicias Orientales",
        description: "Descubra nuestras creaciones gourmet hechas con pasión y saber hacer tradicional",
        cta: "Ver nuestras delicias"
      },
      filters: {
        all: "Todos",
        cakes: "Pasteles & Dulces",
        dishes: "Delicias saladas",
        sweet: "Dulce",
        savory: "Salado",
        search: "Buscar un producto..."
      },
      contact: {
        title: "Contáctenos",
        address: "Dirección",
        addressLine: "123 Calle de la Pastelería, París",
        phone: "Teléfono",
        whatsapp: "Contactar por WhatsApp"
      },
      footer: {
        copyright: "© 2025 Délice de l'Orientale. Todos los derechos reservados.",
        social: "Síguenos"
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: "الرئيسية",
        products: "حلوياتنا",
        contact: "اتصل بنا"
      },
      hero: {
        title: "لذة الشرقية",
        subtitle: "حلويات و أطباق شرقية",
        description: "اكتشف إبداعاتنا اللذيذة المصنوعة بشغف وخبرة تقليدية",
        cta: "شاهد حلوياتنا"
      },
      filters: {
        all: "الكل",
        cakes: "الحلويات و السكريات",
        dishes: "الأطباق المالحة",
        sweet: "حلو",
        savory: "مالح",
        search: "ابحث عن منتج..."
      },
      contact: {
        title: "اتصل بنا",
        address: "العنوان",
        addressLine: "١٢٣ شارع الحلويات، باريس",
        phone: "الهاتف",
        whatsapp: "تواصل عبر واتساب"
      },
      footer: {
        copyright: "© ٢٠٢٥ لذة الشرقية. جميع الحقوق محفوظة.",
        social: "تابعنا"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
