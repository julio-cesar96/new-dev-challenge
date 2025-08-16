import { Category } from '@/constants/categories';

export interface CategoryCardProps {
  category: Category;
  onClick: (category: Category) => void;
}