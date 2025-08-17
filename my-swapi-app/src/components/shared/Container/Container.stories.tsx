import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { Container } from './Container';

const Box = styled.div`
  background-color: #a6d1e6;
  border: 2px solid #3e54ac;
  color: #3e54ac;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
`;

const meta: Meta<typeof Container> = {
  title: 'Shared/Container',
  component: Container,
  tags: ['autodocs'],
  argTypes: {
    direction: { control: 'select', options: ['row', 'column'] },
    justify: { control: 'select', options: ['flex-start','center','flex-end','space-between','space-around'] },
    align: { control: 'select', options: ['stretch','center','flex-start','flex-end'] },
    gap: { control: 'text' },
    padding: { control: 'text' },
    children: { control: false },
  },
  parameters: {
    docs: { source: { type: 'auto' } },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const RowDirection: Story = {
  args: {
    direction: 'row',
    gap: '16px',
    padding: '16px',
    style: { backgroundColor: '#f0f0f0', borderRadius: '8px' },
    children: (
      <>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
      </>
    ),
  },
};

export const ColumnDirection: Story = { args: { ...(RowDirection.args ?? {}), direction: 'column' } };
export const JustifyCenter: Story = { args: { ...(RowDirection.args ?? {}), justify: 'center' } };
export const JustifySpaceBetween: Story = { args: { ...(RowDirection.args ?? {}), justify: 'space-between' } };
export const AlignCenter: Story = { args: { ...(RowDirection.args ?? {}), align: 'center', style: { ...((RowDirection.args ?? {}).style), minHeight: '150px' } } };