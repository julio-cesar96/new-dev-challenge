'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Container, Typography, Stack, Button, Loader } from '@/components/shared';
import { useRandomItem } from '@/hooks/useRandomItem';
import { CATEGORIES } from '@/constants/categories';
import { categoryTypeMap, Category } from '@/constants/categoryTypes';
import { ItemCard } from '@/components';

type CategoryPageProps = {
  category: Category;
};

export function CategoryPage({ category }: CategoryPageProps) {
  const router = useRouter();
  const categoryInfo = CATEGORIES.find(cat => cat.id === category);

  // Inferindo tipo pelo category
  type ItemType = typeof categoryTypeMap[typeof category];

  const { data: item, isLoading, error, refetch } = useRandomItem<ItemType>(category);

  const handleNewItem = () => refetch();
  const handleBackToHome = () => router.push('/');

  if (!categoryInfo) {
    return (
      <Container direction="column" align="center" padding="40px">
        <Typography.H2>Categoria não encontrada</Typography.H2>
        <Button onClick={handleBackToHome}>Voltar para Home</Button>
      </Container>
    );
  }

  return (
    <Container direction="column" padding="40px 20px">
      <Stack direction="column" gap="32px">
        {/* Header */}
        <Stack direction="row" justify="space-between" align="center">
          <Stack direction="column" gap="8px">
            <Typography.H1>{categoryInfo.icon} {categoryInfo.name}</Typography.H1>
            <Typography.Body color="#666">{categoryInfo.description}</Typography.Body>
          </Stack>
          <Button variant="secondary" onClick={handleBackToHome}>← Voltar para Home</Button>
        </Stack>

        {/* Action Button */}
        <Container justify="center">
          <Button variant="primary" size="large" onClick={handleNewItem} disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader.Spinner size={20} color="white" />
                <Button.Text>Carregando...</Button.Text>
              </>
            ) : (
              <Button.Text>🎲 Descobrir {categoryInfo.name}</Button.Text>
            )}
          </Button>
        </Container>

        {/* Content */}
        <Container justify="center">
          <div style={{ maxWidth: '800px', width: '100%' }}>
            {isLoading && !item ? (
              <Container justify="center" padding="80px 0">
                <Loader>
                  <Loader.Spinner size={48} />
                  <Loader.Text>Buscando informações...</Loader.Text>
                </Loader>
              </Container>
            ): null}

            {error ? (
              <Container justify="center" padding="40px">
                <Stack direction="column" align="center" gap="16px">
                  <Typography.Body color="red">Erro ao carregar: {error.message}</Typography.Body>
                  <Button onClick={handleNewItem}>Tentar novamente</Button>
                </Stack>
              </Container>
            ): null}

            {item && !isLoading ? <ItemCard item={item} category={category} /> : null}
          </div>
        </Container>
      </Stack>
    </Container>
  );
}
