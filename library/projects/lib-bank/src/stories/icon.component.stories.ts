import type { Meta, StoryObj } from '@storybook/angular';
import { IconComponent } from '../lib/icon/icon.component';

const meta: Meta<IconComponent> = {
  title: 'Components/Icon',
  component: IconComponent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<IconComponent>;

export const Default: Story = {
  args: {
    icon: 'create',
    iconsFill: 'currentColor',
    ariaLabel: 'Create icon',
  },
};

export const Alert: Story = {
  args: {
    icon: 'warning',
    iconsFill: '#d63384',
    ariaLabel: 'Warning icon',
  },
};
