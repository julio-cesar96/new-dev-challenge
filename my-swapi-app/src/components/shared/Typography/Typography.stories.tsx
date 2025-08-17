import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Typography } from './Typography';
import { Stack } from '../Stack';
import { colors } from '@/tokens/tokens';

const meta: Meta<typeof Typography> = {
  title: 'Shared/Typography',
  component: Typography,
  tags: ['autodocs'],
  parameters: { docs: { source: { type: 'auto' } } },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const AllVariants: Story = {
  render: () => (
    <Stack direction="column" gap="16px" align="flex-start">
      <Typography.H1>Heading 1</Typography.H1>
      <Typography.H2>Heading 2</Typography.H2>
      <Typography.H3>Heading 3</Typography.H3>
      <Typography.Body>Exemplo de parágrafo body</Typography.Body>
      <Typography.Caption>Exemplo de caption</Typography.Caption>
    </Stack>
  ),
};

export const Colored: Story = { args: { variant: 'h2', color: colors.primary, children: 'Texto colorido' } };
export const Centered: Story = { args: { variant: 'body', align: 'center', children: 'Texto centralizado' } };
