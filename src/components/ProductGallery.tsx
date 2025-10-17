import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { products } from '@/data/products';
import ProductCard from './ProductCard';
import FilterBar from './FilterBar';
import SearchBar from './SearchBar';

const ProductGallery = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null);
  const [searchSelectedId, setSearchSelectedId] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    // If a product is selected via search, show only that product
    if (searchSelectedId) {
      return products.filter((p) => p.id === searchSelectedId);
    }

    let filtered = products;

    // Filter by main category
    if (activeCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }

    // Filter by sub-category
    if (activeSubCategory) {
      filtered = filtered.filter((p) => p.subCategory === activeSubCategory);
    }

    return filtered;
  }, [activeCategory, activeSubCategory, searchSelectedId]);

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-background to-muted pattern-arabesque">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-gold mb-4">
            {t('nav.products')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar products={products} onSearchSelect={setSearchSelectedId} />
        </div>

        {/* Filter Bar */}
        <div className="mb-12">
          <FilterBar
            activeCategory={activeCategory}
            activeSubCategory={activeSubCategory}
            onCategoryChange={setActiveCategory}
            onSubCategoryChange={setActiveSubCategory}
          />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <p className="text-xl text-muted-foreground">
              Aucun produit trouvé
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGallery;
