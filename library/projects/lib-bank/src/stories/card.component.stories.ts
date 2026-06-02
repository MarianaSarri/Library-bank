import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from '../lib/card/card.component';

const meta: Meta<CardComponent> = {
  title: 'Components/Card',
  component: CardComponent,
};

export default meta;

type Story = StoryObj<CardComponent>;

export const Default: Story = {
  args: {
    title: 'Saldo Disponível',
    currencySymbol: 'R$',
    amount: '12.450',
    valueColor: '#198754',
  },
};

export const WarningBalance: Story = {
  args: {
    title: 'Saldo Pendente',
    currencySymbol: 'R$',
    amount: '1.200',
    valueColor: '#dc3545',
  },
};
