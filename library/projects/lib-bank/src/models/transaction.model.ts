export type TransactionType = 'income' | 'expense';

export type Category = {
  id: number;
  name: string;
  type: TransactionType;
};

export interface TransactionInput {
  description: string;
  category: number;
  value: number;
  type: TransactionType;
  date: string;
}

export interface Transaction extends TransactionInput {
  id: number;
}
