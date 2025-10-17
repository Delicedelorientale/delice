import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Product } from '@/data/products';

interface SearchBarProps {
  products: Product[];
  onSearchSelect: (productId: string | null) => void;
}

const SearchBar = ({ products, onSearchSelect }: SearchBarProps) => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSuggestions([]);
      setShowSuggestions(false);
      onSearchSelect(null);
      return;
    }

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSuggestions(filtered);
    setShowSuggestions(filtered.length > 0);
  }, [searchTerm, products]);

  const handleSuggestionClick = (product: Product) => {
    setSearchTerm(product.name);
    setShowSuggestions(false);
    onSearchSelect(product.id);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && suggestions.length > 0) {
      handleSuggestionClick(suggestions[0]);
    }
  };

  const highlightMatch = (text: string, term: string) => {
    if (!term) return text;
    
    const regex = new RegExp(`(${term})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark key={index} className="bg-primary/30 text-foreground font-semibold">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className="relative w-full max-w-md mx-auto animate-fade-in-up">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder={t('filters.search')}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          className="pl-10 pr-4 py-6 bg-card border-border focus:border-primary rounded-full shadow-elegant"
        />
      </div>

      {/* Suggestions Dropdown */}
      {showSuggestions && (
        <div className="absolute top-full mt-2 w-full bg-card border border-border rounded-2xl shadow-elegant overflow-hidden z-50 max-h-80 overflow-y-auto">
          {suggestions.map((product) => (
            <button
              key={product.id}
              onClick={() => handleSuggestionClick(product)}
              className="w-full text-left px-4 py-3 hover:bg-muted transition-colors flex items-center gap-3"
            >
              <div className="flex-1">
                <p className="font-semibold text-foreground">
                  {highlightMatch(product.name, searchTerm)}
                </p>
                <p className="text-sm text-muted-foreground">
                  {highlightMatch(product.content, searchTerm)}
                </p>
              </div>
              <span className="text-primary font-bold">{product.price}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
