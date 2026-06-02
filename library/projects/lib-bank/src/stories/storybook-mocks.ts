import { BehaviorSubject } from 'rxjs';
import type { Category, Transaction, TransactionInput } from '../models/transaction.model';

export const defaultCategories = {
  categoriesExpense: [
    { id: 1, name: 'Alimentação', type: 'expense' },
    { id: 2, name: 'Transporte', type: 'expense' },
    { id: 3, name: 'Lazer', type: 'expense' },
  ] as Category[],
  categoriesIncome: [
    { id: 4, name: 'Salário', type: 'income' },
    { id: 5, name: 'Freelance', type: 'income' },
    { id: 6, name: 'Investimentos', type: 'income' },
  ] as Category[],
};

export const defaultTransactions: Transaction[] = [
  {
    id: 1,
    description: 'Assinatura de streaming',
    category: 3,
    value: -49.9,
    type: 'expense',
    date: '2026-05-28',
  },
  {
    id: 2,
    description: 'Pagamento freelance',
    category: 5,
    value: 1200,
    type: 'income',
    date: '2026-05-30',
  },
];

export class MockCategoriesService {
  getCategories() {
    return {
      categoriesExpense: defaultCategories.categoriesExpense,
      categoriesIncome: defaultCategories.categoriesIncome,
    };
  }

  getCategoryName(category: number, type: 'income' | 'expense'): string {
    const list = type === 'expense' ? defaultCategories.categoriesExpense : defaultCategories.categoriesIncome;
    return list.find((item) => item.id === category)?.name ?? 'Outra';
  }
}

export class MockTransactionsService {
  private readonly subject = new BehaviorSubject<Transaction[]>(defaultTransactions);
  transactions$ = this.subject.asObservable();

  addTransaction(input: TransactionInput) {
    const current = this.subject.value;
    const nextId = current.length > 0 ? Math.max(...current.map((item) => item.id)) + 1 : 1;
    this.subject.next([...current, { ...input, id: nextId }]);
  }

  updateTransaction(id: number, input: TransactionInput) {
    this.subject.next(
      this.subject.value.map((item) => (item.id === id ? { ...item, ...input } : item)),
    );
  }

  deleteTransaction(id: number) {
    this.subject.next(this.subject.value.filter((item) => item.id !== id));
  }
}
