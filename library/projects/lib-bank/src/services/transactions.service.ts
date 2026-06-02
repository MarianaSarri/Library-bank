import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import type { Transaction, TransactionInput } from '../models/transaction.model';

@Injectable({ providedIn: 'root' })
export class TransactionsService {
  private readonly transactionsSubject = new BehaviorSubject<Transaction[]>([]);
  transactions$ = this.transactionsSubject.asObservable();

  addTransaction(input: TransactionInput) {
    const current = this.transactionsSubject.value;
    const nextId = current.length > 0 ? Math.max(...current.map((item) => item.id)) + 1 : 1;
    this.transactionsSubject.next([...current, { ...input, id: nextId }]);
  }

  updateTransaction(id: number, input: TransactionInput) {
    const next = this.transactionsSubject.value.map((item) =>
      item.id === id ? { ...item, ...input } : item,
    );
    this.transactionsSubject.next(next);
  }

  deleteTransaction(id: number) {
    this.transactionsSubject.next(this.transactionsSubject.value.filter((item) => item.id !== id));
  }

  setTransactions(transactions: Transaction[]) {
    this.transactionsSubject.next(transactions);
  }
}
