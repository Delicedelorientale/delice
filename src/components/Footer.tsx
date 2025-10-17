import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Mail } from 'lucide-react';
import logo from '../assets/logo.png'; // 🧁 Mets ton vrai chemin ici

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-foreground/5 border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo + Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <img 
              src={logo} 
              alt="Délice de l'Orientale" 
              className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
            <p className="text-muted-foreground text-sm text-center md:text-left">
              {t('footer.copyright')}
            </p>
          </div>

          {/* Liens sociaux */}
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground text-sm">
              {t('footer.social')}:
            </span>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1KTTnPLMbM/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>

            {/* Email */}
            <a
              href="mailto:contact@delicedelorientale.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
