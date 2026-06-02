import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { ComponentsModule } from '../lib/components.module';
import { HeaderComponent } from '../lib/header/header.component';
import { CategoriesService } from '../services/categories.service';
import { TransactionsService } from '../services/transactions.service';
import { MockCategoriesService, MockTransactionsService } from './storybook-mocks';

const meta: Meta<HeaderComponent> = {
  title: 'Components/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [ComponentsModule],
      providers: [
        { provide: CategoriesService, useClass: MockCategoriesService },
        { provide: TransactionsService, useClass: MockTransactionsService },
      ],
    }),
  ],
};

export default meta;

type Story = StoryObj<HeaderComponent>;

export const Default: Story = {};
