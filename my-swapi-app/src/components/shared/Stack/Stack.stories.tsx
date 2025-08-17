import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { Stack } from './Stack';

const Box = styled.div<{ size?: string }>`
  background-color: #fea1a1;
  border: 2px solid #b46060;
  color: #443737;
  padding: 20px;
  width: ${({ size }) => size || '100px'};
  height: ${({ size }) => size || '50px'};
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const meta: Meta<typeof Stack> = {
  title: 'Shared/Stack',
  component: Stack,
  tags: ['autodocs'],
  argTypes: {
    direction: { control: 'select', options: ['row','column'] },
    gap: { control: 'text' },
    align: { control: 'select', options: ['stretch','center','flex-start','flex-end'] },
    justify: { control: 'select', options: ['flex-start','center','flex-end','space-between'] },
    children: { control: false },
  },
  parameters: { docs: { source: { type: 'auto' } } },
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const Vertical: Story = {
  args: { direction: 'column', gap: '16px', align: 'flex-start', children: (<><Box size="150px">Item 1</Box><Box size="200px">Item 2</Box><Box size="100px">Item 3</Box></>) },
};
export const Horizontal: Story = { args: { ...Vertical.args, direction: 'row', align: 'center' } };
export const WithSpacerAndDivider: Story = {
  args: { direction: 'column', gap: '8px', align: 'stretch', style: { width: 300 }, children: (<><Box size="auto">Primeiro Item</Box><Stack.Divider /><Box size="auto">Segundo Item</Box><Stack.Spacer size="32px" /><Box size="auto">Terceiro Item</Box></>) },
};
