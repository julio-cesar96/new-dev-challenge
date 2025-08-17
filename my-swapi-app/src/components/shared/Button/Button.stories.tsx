import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import React from 'react';

// Função simples para lidar com clicks
const handleClick = () => {
  console.log('Button clicked!');
};

const meta: Meta<typeof Button> = {
  title: 'Shared/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
O componente Button implementa o **Composition Pattern**, permitindo composição flexível com ícones e texto.

## Uso com Composition Pattern
\`\`\`jsx
<Button>
  <Button.LeftIcon>🏠</Button.LeftIcon>
  <Button.Text>Home</Button.Text>
  <Button.RightIcon>→</Button.RightIcon>
</Button>
\`\`\`

## Subcomponentes
- **Button.LeftIcon**: Ícone à esquerda
- **Button.RightIcon**: Ícone à direita  
- **Button.Text**: Wrapper para texto
        `,
      },
      source: { type: 'auto' }, // força sempre gerar pelos args
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'warning'],
      description: 'Variante visual do botão',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Tamanho do botão',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Se o botão deve ocupar toda a largura disponível',
    },
    disabled: {
      control: 'boolean',
      description: 'Se o botão está desabilitado',
    },
    children: {
      control: false,
      description: 'Conteúdo do botão (texto, ícones, etc.)',
    },
    customColor: {
      control: 'color',
      description: 'Cor customizada para o botão',
    },
    width: {
      control: 'text',
      description: 'Largura customizada (ex: "200px")',
    },
    height: {
      control: 'text',
      description: 'Altura customizada (ex: "50px")',
    },
  },
  args: { 
    onClick: handleClick 
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Story básica com texto simples
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success Button',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'Error Button',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning Button',
  },
};

// Exemplos de tamanhos
export const Large: Story = {
  args: {
    size: 'large',
    children: 'Large Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    children: 'Medium Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Small Button',
  },
};

// Exemplos com Composition Pattern
export const WithLeftIcon: Story = {
  args: {
    variant: 'primary',
    children: (
      <>
        <Button.LeftIcon>🏠</Button.LeftIcon>
        <Button.Text>Home</Button.Text>
      </>
    ),
  },
};

export const WithRightIcon: Story = {
  args: {
    variant: 'secondary',
    children: (
      <>
        <Button.Text>Next</Button.Text>
        <Button.RightIcon>→</Button.RightIcon>
      </>
    ),
  },
};

export const WithBothIcons: Story = {
  args: {
    variant: 'success',
    children: (
      <>
        <Button.LeftIcon>✅</Button.LeftIcon>
        <Button.Text>Success</Button.Text>
        <Button.RightIcon>🎉</Button.RightIcon>
      </>
    ),
  },
};

// Exemplos de customização
export const CustomColor: Story = {
  args: {
    customColor: '#9c27b0',
    children: 'Custom Purple',
  },
};

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    fullWidth: true,
    children: 'Full Width Button',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Disabled Button',
  },
};

export const CustomSize: Story = {
  args: {
    variant: 'primary',
    width: '200px',
    height: '60px',
    children: 'Custom Size',
  },
};
