import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoryComboboxComponent } from '../lib/combobox/category-combobox.component';
import { defaultCategories } from './storybook-mocks';

const meta: Meta<CategoryComboboxComponent> = {
  title: 'Components/CategoryCombobox',
  component: CategoryComboboxComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule],
    }),
  ],
  argTypes: {
    valueChange: { action: 'valueChange' },
  },
};

export default meta;

type Story = StoryObj<CategoryComboboxComponent>;

export const Default: Story = {
  args: {
    categories: defaultCategories.categoriesExpense,
    value: '',
  },
};

export const PreselectedCategory: Story = {
  args: {
    categories: defaultCategories.categoriesIncome,
    value: '4',
  },
};
