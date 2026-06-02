import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { ComponentsModule } from '../lib/components.module';
import { TransactionsTableComponent } from '../lib/transactions-table/transactions-table.component';
import { CategoriesService } from '../services/categories.service';
import { TransactionsService } from '../services/transactions.service';
import { MockCategoriesService, MockTransactionsService } from './storybook-mocks';

const meta: Meta<TransactionsTableComponent> = {
  title: 'Components/TransactionsTable',
  component: TransactionsTableComponent,
  decorators: [
    moduleMetadata({
      imports: [ComponentsModule],
      providers: [
        { provide: CategoriesService, useClass: MockCategoriesService },
        { provide: TransactionsService, useClass: MockTransactionsService },
      ],
    }),
  ],
  args: {
    showActions: true,
  },
};

export default meta;

type Story = StoryObj<TransactionsTableComponent>;

export const WithTransactions: Story = {};
