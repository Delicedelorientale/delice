import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

interface FilterBarProps {
  activeCategory: string;
  activeSubCategory: string | null;
  onCategoryChange: (category: string) => void;
  onSubCategoryChange: (subCategory: string | null) => void;
}

const FilterBar = ({
  activeCategory,
  activeSubCategory,
  onCategoryChange,
  onSubCategoryChange,
}: FilterBarProps) => {
  const { t } = useTranslation();

  const categories = [
    { id: 'all', label: t('filters.all') },
    { id: 'cakes', label: t('filters.cakes') },
    { id: 'dishes', label: t('filters.dishes') },
  ];

  const subCategories = [
    { id: 'sweet', label: t('filters.sweet') },
    { id: 'savory', label: t('filters.savory') },
  ];

  return (
    <div className="space-y-4 animate-fade-in-up">
      {/* Main Categories */}
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((cat) => (
          <Button
            key={cat.id}
            onClick={() => {
              onCategoryChange(cat.id);
              onSubCategoryChange(null);
            }}
            variant={activeCategory === cat.id ? 'default' : 'outline'}
            className={
              activeCategory === cat.id
                ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-gold'
                : 'hover:border-primary hover:text-primary'
            }
          >
            {cat.label}
          </Button>
        ))}
      </div>

      {/* Sub-categories (only show if Gâteaux is selected) */}
      {activeCategory === 'cakes' && (
        <div className="flex flex-wrap gap-3 justify-center animate-fade-in-up">
          {subCategories.map((sub) => (
            <Button
              key={sub.id}
              onClick={() => onSubCategoryChange(sub.id)}
              variant={activeSubCategory === sub.id ? 'secondary' : 'outline'}
              size="sm"
              className={
                activeSubCategory === sub.id
                  ? 'bg-secondary text-secondary-foreground'
                  : 'hover:border-secondary hover:text-secondary'
              }
            >
              {sub.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterBar;
