// src/components/ui/CategoryCard/CategoryCard.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CategoryCard } from './CategoryCard';
import { CATEGORIES } from '@/constants/categories'; // Importando as categorias reais

const meta: Meta<typeof CategoryCard> = {
  title: 'UI/CategoryCard',
  component: CategoryCard,
  tags: ['autodocs'],
  argTypes: {
    // A prop 'category' é um objeto complexo, então desabilitamos o controle automático
    category: {
      control: false,
    },
    // A ação onClick será registrada no painel "Actions" do Storybook
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof CategoryCard>;

// Usamos a primeira categoria da nossa constante como exemplo
const firstCategory = CATEGORIES[0];

export const Default: Story = {
  args: {
    category: firstCategory,
  },
};

export const Planets: Story = {
  args: {
    category: CATEGORIES.find(cat => cat.id === 'planets')!,
  },
};