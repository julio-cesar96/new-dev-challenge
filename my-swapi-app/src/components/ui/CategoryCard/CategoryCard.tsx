import React from 'react';

import { CategoryCardProps } from './CategoryCard.types';
import { 
  CategoryCardContainer, 
  IconContainer, 
  CategoryName, 
  CategoryDescription 
} from './CategoryCard.styles';
import { Card } from '@/components/shared';

export const CategoryCard: React.FC<CategoryCardProps> = ({ 
  category, 
  onClick 
}) => {
  return (
    <CategoryCardContainer onClick={() => onClick(category)}>
      <Card elevation={2} padding="24px">
        <IconContainer>
          {category.icon}
        </IconContainer>
        <CategoryName>{category.name}</CategoryName>
        <CategoryDescription>{category.description}</CategoryDescription>
      </Card>
    </CategoryCardContainer>
  );
};
