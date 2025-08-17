import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Loader } from './Loader';
import { Stack } from '../Stack';
import { Typography } from '../Typography';

const meta: Meta<typeof Loader> = {
  title: 'Shared/Loader',
  component: Loader,
  tags: ['autodocs'],
  parameters: { docs: { source: { type: 'auto' } } },
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const DefaultSpinner: Story = { render: (args) => <Loader.Spinner {...args} />, args: { size: 48, thickness: 5 } };
export const Dots: Story = { render: (args) => <Loader.Dots {...args} />, args: { size: 48 } };
export const Bar: Story = { render: (args) => <Loader.Bar {...args} />, args: { size: 60 } };
export const WithText: Story = { args: { children: <><Loader.Spinner /><Loader.Text>Carregando dados...</Loader.Text></> } };
export const InsideOverlay: Story = {
  render: (args) => (
    <Stack style={{ height: 200, width: 300, position: 'relative', border: '1px dashed grey', borderRadius: 8 }}>
      <Typography.Body style={{ padding: '1rem' }}>Conteúdo abaixo do loader</Typography.Body>
      <Loader.Overlay {...args}>
        <Loader>
          <Loader.Spinner />
          <Loader.Text>Aguarde...</Loader.Text>
        </Loader>
      </Loader.Overlay>
    </Stack>
  ),
};
