import { Injectable } from '@angular/core';
import type { Category, TransactionType } from '../models/transaction.model';

@Injectable({ providedIn: 'root' })
export class CategoriesService {
  private readonly categoriesExpense: Category[] = [
    { id: 1, name: 'Alimentação', type: 'expense' },
    { id: 2, name: 'Transporte', type: 'expense' },
    { id: 3, name: 'Lazer', type: 'expense' },
  ];

  private readonly categoriesIncome: Category[] = [
    { id: 4, name: 'Salário', type: 'income' },
    { id: 5, name: 'Freelance', type: 'income' },
    { id: 6, name: 'Investimentos', type: 'income' },
  ];

  getCategories() {
    return {
      categoriesExpense: [...this.categoriesExpense],
      categoriesIncome: [...this.categoriesIncome],
    };
  }

  getCategoryName(category: number, type: TransactionType): string {
    const list = type === 'expense' ? this.categoriesExpense : this.categoriesIncome;
    return list.find((item) => item.id === category)?.name ?? 'Outra';
  }
}
