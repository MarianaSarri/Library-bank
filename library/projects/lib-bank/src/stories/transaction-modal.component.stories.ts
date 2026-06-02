import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { ComponentsModule } from '../lib/components.module';
import { TransactionModalComponent } from '../lib/transaction-modal/transaction-modal.component';
import { CategoriesService } from '../services/categories.service';
import { MockCategoriesService } from './storybook-mocks';

const meta: Meta<TransactionModalComponent> = {
  title: 'Components/TransactionModal',
  component: TransactionModalComponent,
  decorators: [
    moduleMetadata({
      imports: [ComponentsModule],
      providers: [{ provide: CategoriesService, useClass: MockCategoriesService }],
    }),
  ],
};

export default meta;

type Story = StoryObj<TransactionModalComponent>;

export const NewIncome: Story = {
  args: {
    isOpen: true,
  },
};

export const NewExpense: Story = {
  args: {
    isOpen: true,
  },
};
