import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Typography } from '../Typography';

const meta: Meta<typeof Card> = {
  title: 'Shared/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
O Card suporta composição flexível com cabeçalho, corpo e rodapé.

## Subcomponentes
- **Card.Header**: Cabeçalho do card
- **Card.Body**: Corpo do card
- **Card.Footer**: Rodapé do card
        `,
      },
      source: { type: 'auto' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    elevation: 2,
    padding: '24px',
    children: <Typography.Body>Este é o conteúdo do card.</Typography.Body>,
  },
};

export const Composed: Story = {
  args: {
    elevation: 3,
    children: (
      <>
        <Card.Header>
          <Typography.H3>Título do Card</Typography.H3>
        </Card.Header>
        <Card.Body>
          <Typography.Body>
            Este card é composto por cabeçalho, corpo e rodapé.
          </Typography.Body>
        </Card.Body>
        <Card.Footer>
          <Typography.Caption>Rodapé do Card</Typography.Caption>
        </Card.Footer>
      </>
    ),
  },
};
