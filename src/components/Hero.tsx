import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-pastries.jpg';

const Hero = () => {
  const { t } = useTranslation();

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pattern-arabesque"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            filter: 'brightness(0.4)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4">
          {t('hero.title')}
        </h1>
        <p className="text-2xl md:text-3xl text-gold font-display mb-6">
          {t('hero.subtitle')}
        </p>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
          {t('hero.description')}
        </p>
        <Button
          size="lg"
          onClick={scrollToProducts}
          className="bg-gradient-to-r from-primary to-gold-dark hover:from-gold-dark hover:to-primary text-white font-semibold px-8 py-6 text-lg rounded-full shadow-gold hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          {t('hero.cta')}
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;
