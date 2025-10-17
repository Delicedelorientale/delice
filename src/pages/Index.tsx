import { useEffect } from 'react';
import '../i18n/config';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductGallery from '@/components/ProductGallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Set default direction
    document.documentElement.dir = 'ltr';
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Hero />
        <ProductGallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
