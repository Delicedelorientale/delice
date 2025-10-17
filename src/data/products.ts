export interface Product {
  id: string;
  name: string;
  content: string;
  price: string;
  category: 'cakes' | 'dishes';
  subCategory?: 'sweet' | 'savory';
  image: string;
}

export const products: Product[] = [
  // Plateaux de pâtisseries
  {
    id: '1',
    name: 'Plateau 20 pièces',
    content: 'Makrout, Baklawa, Cornes de Gazelle',
    price: '15 €',
    category: 'cakes',
    subCategory: 'sweet',
    image: '/placeholder.svg'
  },
  {
    id: '2',
    name: 'Plateau 30 pièces',
    content: 'Makrout, Baklawa, Cornes de Gazelle, Ghriba',
    price: '22 €',
    category: 'cakes',
    subCategory: 'sweet',
    image: '/placeholder.svg'
  },
  {
    id: '3',
    name: 'Plateau 50 pièces',
    content: 'Mix complet de pâtisseries orientales',
    price: '35 €',
    category: 'cakes',
    subCategory: 'sweet',
    image: '/placeholder.svg'
  },
  // Pâtisseries individuelles
  {
    id: '4',
    name: 'Makrout',
    content: 'Pâtisserie aux dattes et miel',
    price: '2 €/pièce',
    category: 'cakes',
    subCategory: 'sweet',
    image: '/placeholder.svg'
  },
  {
    id: '5',
    name: 'Baklawa',
    content: 'Feuilleté au miel et fruits secs',
    price: '2.5 €/pièce',
    category: 'cakes',
    subCategory: 'sweet',
    image: '/placeholder.svg'
  },
  {
    id: '6',
    name: 'Cornes de Gazelle',
    content: 'Pâtisserie aux amandes',
    price: '2.5 €/pièce',
    category: 'cakes',
    subCategory: 'sweet',
    image: '/placeholder.svg'
  },
  {
    id: '7',
    name: 'Ghriba',
    content: 'Biscuit fondant aux amandes',
    price: '1.5 €/pièce',
    category: 'cakes',
    subCategory: 'sweet',
    image: '/placeholder.svg'
  },
  {
    id: '8',
    name: 'Mhajeb',
    content: 'Crêpe feuilletée farcie',
    price: '3 €/pièce',
    category: 'cakes',
    subCategory: 'savory',
    image: '/placeholder.svg'
  },
  // Plats
  {
    id: '9',
    name: 'Tajine poulet citron',
    content: 'Poulet mijoté aux olives et citron confit',
    price: '18 €',
    category: 'dishes',
    image: '/placeholder.svg'
  },
  {
    id: '10',
    name: 'Couscous royal',
    content: 'Couscous avec viandes et légumes',
    price: '22 €',
    category: 'dishes',
    image: '/placeholder.svg'
  },
  {
    id: '11',
    name: 'Chorba',
    content: 'Soupe traditionnelle orientale',
    price: '8 €',
    category: 'dishes',
    image: '/placeholder.svg'
  }
];
