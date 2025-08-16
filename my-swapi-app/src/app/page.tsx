'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Container, Typography, Stack } from '@/components/shared';
import { CategoryCard } from '@/components/ui';
import { CATEGORIES, Category } from '@/constants/categories';

export default function HomePage() {
  const router = useRouter();

  const handleCategoryClick = (category: Category) => {
    router.push(category.path);
  };

  return (
    <Container direction="column" padding="40px 20px">
      <Stack direction="column" gap="48px" align="center">
        <Stack direction="column" gap="16px" align="center">
          <Typography.H1 align="center">
            🌟 Star Wars Universe
          </Typography.H1>
          <Typography.Body align="center" color="#666">
            Explore o universo de Star Wars através de suas categorias
          </Typography.Body>
        </Stack>

        <Container 
          direction="row" 
          gap="24px" 
          wrap={true} 
          justify="center"
          style={{ maxWidth: '1200px' }}
        >
          {CATEGORIES.map((category) => (
            <div key={category.id} style={{ minWidth: '300px', flex: '1 1 300px' }}>
              <CategoryCard 
                category={category} 
                onClick={handleCategoryClick} 
              />
            </div>
          ))}
        </Container>
      </Stack>
    </Container>
  );
}