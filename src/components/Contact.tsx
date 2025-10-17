import { useTranslation } from 'react-i18next';
import { MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const { t } = useTranslation();

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/33123456789', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-gold mb-4">
              {t('contact.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up">
            {/* Address */}
            <div className="bg-gradient-to-br from-background to-muted p-8 rounded-2xl shadow-elegant border border-border">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-2">
                    {t('contact.address')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('contact.addressLine')}
                  </p>
                </div>
              </div>
            </div>

            {/* Phone / WhatsApp */}
            <div className="bg-gradient-to-br from-background to-muted p-8 rounded-2xl shadow-elegant border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-secondary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-2">
                    {t('contact.phone')}
                  </h3>
                  <p className="text-muted-foreground">+33 1 23 45 67 89</p>
                </div>
              </div>
              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
              >
                📞 {t('contact.whatsapp')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
