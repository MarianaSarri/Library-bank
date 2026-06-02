import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from '../lib/button/button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
};

export default meta;

type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    label: 'Nova Transação',
    showIcons: true,
    iconButton: 'create',
    customClass: 'fw-semibold px-3 py-2',
  },
};

export const WithIconOnly: Story = {
  args: {
    label: 'Criar',
    showIcons: true,
    iconButton: 'create',
    customClass: 'fw-semibold px-3 py-2',
  },
};
