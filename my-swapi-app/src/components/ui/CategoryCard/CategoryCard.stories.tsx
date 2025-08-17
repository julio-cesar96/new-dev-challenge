
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { CategoryCard } from './CategoryCard';
import { CATEGORIES } from '@/constants/categories'; 

const meta: Meta<typeof CategoryCard> = {
  title: 'UI/CategoryCard',
  component: CategoryCard,
  tags: ['autodocs'],
  argTypes: {
    category: {
      control: false,
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof CategoryCard>;

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